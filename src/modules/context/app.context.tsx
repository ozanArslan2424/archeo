import { QueryModule } from "@/modules/query/query.module";
import { queryConfig } from "@/modules/query/query.config";
import { AuthModule } from "@/modules/auth/auth.module";
import { RequestModule } from "@/modules/request/request.module";
import { StoreModule } from "@/modules/store/store.module";
import type { StoreData } from "@/modules/store/store.schema";
import { apiRoutes } from "@/api.routes";
import { createContext, use, type PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { PersonModule } from "@/modules/person/person.module";

function makeContext() {
	const store = new StoreModule<StoreData>({
		accessToken: null,
	});
	const request = new RequestModule(store, {
		baseURL: `${import.meta.env.VITE_API_URL || "http://localhost:3000"}/api`,
		refreshEndpoint: apiRoutes.auth.refresh,
	});
	const query = new QueryModule(queryConfig);
	const person = new PersonModule();
	const auth = new AuthModule(query, request, store);

	return {
		store,
		query,
		request,
		person,
		auth,
	};
}

const context = makeContext();

const AppContext = createContext<typeof context>(context);

export function useAppContext() {
	const value = use(AppContext);
	if (!value) throw new Error("AppContext requires a provider.");
	return value;
}

export function AppContextProvider({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider client={context.query}>
			<AppContext value={context}>{children}</AppContext>
		</QueryClientProvider>
	);
}

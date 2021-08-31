export default {
    state: () => ({
        isLoading: false,
        projects: [] as Array<any>,
    }),

    mutations: {
        GET_PROJECT_REQUEST(state: any) {
            state.isLoading = true
        },
        GET_PROJECT_SUCCESS(state: any) {
            state.isLoading = false
        },
        GET_PROJECT_FAILURE(state: any) {
            state.isLoading = false
        },
        UPDATE_PROJECTS(state: any, newProjects: Array<any>) {
            state.projects = newProjects
        },
    },

    actions: {
        async fetchProjects(
            { commit }: { commit: any }
        ) {
            try {
                commit('GET_PROJECT_REQUEST')
                const response:any = []

                commit('UPDATE_PROJECTS', response)
            } catch {
                commit('GET_PROJECT_FAILURE')
                // do something
            } finally {
                commit('GET_PROJECT_SUCCESS')
            }
        },
    },
}

import { ProjectItem } from '@/types/project'

export default {
    state: () => ({
        isLoading: false,
        projects: [] as Array<ProjectItem>,
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
        UPDATE_PROJECTS(state: any, newProjects: Array<ProjectItem>) {
            state.projects = newProjects
        },
    },

    actions: {
        async fetchProjects(
            { commit }: { commit: any }
        ) {
            try {
                commit('GET_PROJECT_REQUEST')
                const { app }: any = this
                const response: any = await app.$services.project.all()

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

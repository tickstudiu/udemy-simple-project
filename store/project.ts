import { ProjectItem } from '@/types/project'

export default {
    state: () => ({
        isLoading: false,
        isError: false,
        project: {} as ProjectItem,
        projects: [] as Array<ProjectItem>,
    }),

    mutations: {
        GET_PROJECT_REQUEST(state: any) {
            state.isLoading = true
            state.isError = false
        },
        GET_PROJECT_SUCCESS(state: any) {
            state.isLoading = false
        },
        GET_PROJECT_FAILURE(state: any) {
            state.isLoading = false
            state.isError = true
        },
        UPDATE_PROJECTS(state: any, newProjects: Array<ProjectItem>) {
            state.projects = newProjects
        },
        UPDATE_PROJECT(state: any, newProject: ProjectItem) {
            state.project = newProject
        },
    },

    actions: {
        async updateProject({ commit }: { commit: any }, payload: any){
            const { id ,project } = payload

            try {
                commit('GET_PROJECT_REQUEST')
                const { app }: any = this
                // update project
                await app.$services.project.update({ id, project })

            } catch {
                commit('GET_PROJECT_FAILURE')
                // do something
            } finally {
                commit('GET_PROJECT_SUCCESS')
            }
        },

        async createProject({ commit }: { commit: any }, payload: any) {
            const { project } = payload

            try {
                commit('GET_PROJECT_REQUEST')
                const { app }: any = this
                // create project
                await app.$services.project.create({ project })

            } catch {
                commit('GET_PROJECT_FAILURE')
                // do something
            } finally {
                commit('GET_PROJECT_SUCCESS')
            }
        },

        async toggleComplete({ commit, state }: { commit: any, state: any }, payload: any) {
            const { id } = payload
            const project = state.projects.find((project: ProjectItem) => project.id === id)

            try {
                commit('GET_PROJECT_REQUEST')
                const { app }: any = this
                // toggle complete project
                await app.$services.project.toggle({ id, project })
                // get new project list
                const response: any = await app.$services.project.all()

                commit('UPDATE_PROJECTS', response)

            } catch {
                commit('GET_PROJECT_FAILURE')
                // do something
            } finally {
                commit('GET_PROJECT_SUCCESS')
            }
        },

        async removedProject({ commit }: { commit: any }, payload: any) {
            const { id } = payload

            try {
                commit('GET_PROJECT_REQUEST')
                const { app }: any = this
                // delete project
                await app.$services.project.deleteById({ id })
                // get new project list
                const response: any = await app.$services.project.all()

                commit('UPDATE_PROJECTS', response)

            } catch {
                commit('GET_PROJECT_FAILURE')
                // do something
            } finally {
                commit('GET_PROJECT_SUCCESS')
            }
        },

        async fetchProjects(
            { commit }: { commit: any }
        ) {
            try {
                commit('GET_PROJECT_REQUEST')
                const { app }: any = this
                // get project list
                const response: any = await app.$services.project.all()

                commit('UPDATE_PROJECTS', response)
            } catch {
                commit('GET_PROJECT_FAILURE')
                // do something
            } finally {
                commit('GET_PROJECT_SUCCESS')
            }
        },

        async fetchProject(
            { commit }: { commit: any }, payload: any
        ) {
            const { id } = payload

            try {
                commit('GET_PROJECT_REQUEST')
                const { app }: any = this
                // get project list
                const response: any = await app.$services.project.byId({ id })

                commit('UPDATE_PROJECT', response)
            } catch {
                commit('GET_PROJECT_FAILURE')                
                // do something
            } finally {
                commit('GET_PROJECT_SUCCESS')
            }
        },
    },
}

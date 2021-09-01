import { ProjectItem } from '@/types/project'

export default ($axios: any) => ({
    all() {
        return $axios.$get('/projects')
    },
    byId({id}: {id: number}) {
        return $axios.$get(`/projects/${id}`)
    },
    deleteById({ id }: { id: number }) {
        return $axios.$delete(`/projects/${id}`)
    },
    toggle({ id, project }: { id: number, project: ProjectItem }) {
        return $axios.$patch(`/projects/${id}`, {
            complete: !project.complete
        })
    },
    create({ project }: { project: ProjectItem }){
        return $axios.$post(`/projects`, project)
    }
})

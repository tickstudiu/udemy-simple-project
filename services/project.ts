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
})

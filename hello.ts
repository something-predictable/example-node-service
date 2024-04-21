import { get } from '@riddance/service/http'

get('/', () => ({
    body: { message: 'Hello from Riddance!' },
}))

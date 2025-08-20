import { request, withBearer } from '@riddance/service/test/http'
import assert from 'node:assert/strict'

describe('hello', () => {
    it('should greet', async () => {
        const response = await request(
            await withBearer(
                {},
                {
                    uri: '/',
                },
            ),
        )
        assert.deepStrictEqual(response.status, 200)
        assert.deepStrictEqual(response.body.message, 'Hello from Riddance, World!')
    })
})

import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Login from '@/components/Login.vue'

describe('Login Tests!', () => {
    it('Should render', async () => {
        const wrapper = mount(Login)
        await wrapper.find('input[name="email"]').setValue('Test01r@gtg.fr')
        await wrapper.find('input[name="password"]').setValue('Testhh5')
        await wrapper.find('input[name="button"]').trigger('click')

    })
})
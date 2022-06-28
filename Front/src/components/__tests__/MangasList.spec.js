import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import {useMangaStore} from "@/services/mangaStore";

const {getMangasList} = useMangaStore();

import { mount } from '@vue/test-utils'
import MangasList from '../MangasList.vue'

describe('MangasList', () => {

  it('is mangas list container exist', () => {
    const wrapper = mount(MangasList);
    expect(wrapper.find('#container').exists()).toBeTruthy();
  })

  it('can get mangas from API', async () => {
    //fake data from API MangaDex
    const mangasList = await getMangasList();
    
    expect(mangasList.status).toBe(200);
  })

 
})

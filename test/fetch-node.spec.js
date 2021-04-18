import {getStatusByHref} from "../src/api"
import fetch from ('node-fetch')

jest.mock("node-fetch")

describe("getStatusByHref", ()=>{
    beforeEach(()=>{
        fetch.restoreMock()
    })
    
})
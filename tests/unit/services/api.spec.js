import {getAllShows,searchForShows,getTvShowDetails} from '../../../src/services/api'
import axios from 'axios'

jest.mock('axios');

describe('In Api Calls', () => {
    it('test tvShows method' , async() => {
        axios.get=jest.fn();
        const mockResponse= [
            {"id":2,
            "name":"Batman",
             "image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"}
             },
             {"id":93,
            "name":"Batman-2",
             "image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"}
             }
        ];
        
        axios.get.mockResolvedValue(mockResponse);
        await getAllShows().then((result) => {
            expect(result).toBe(mockResponse);
        });

    });

    it('test tvShows method' , async() => {
        axios.get=jest.fn();
        const mockResponse= [
            {"id":2,
            "name":"Batman",
             "image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"}
             },
        ];
        
        axios.get.mockResolvedValue(mockResponse);
        await getTvShowDetails(2).then((result) => {
            expect(result).toBe(mockResponse);
        });
    });

    it('test tvShows method' , async() => {
        axios.get=jest.fn();
        const mockResponse= [
            {"id":2,
            "name":"Batman",
             "image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"}
             },
        ];
        
        axios.get.mockResolvedValue(mockResponse);
        await searchForShows("Batman").then((result) => {
            expect(result).toBe(mockResponse);
        });
    });
})

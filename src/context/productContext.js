import React , { createContext , useContext , useReducer , useState , useEffect} from 'react';
import products from '../data.json';

const productContext = createContext();

const useProducts = () => useContext(productContext);

const ProductsProvider = ({children}) => {
    const [data , setData] = useState(products);

    const productsReducer = (accu , action) => {
        
        switch(action.type){
            case 'HIGH_TO_LOW':
              return {...accu ,type:action.type, payload:action.payload}

            case 'LOW_TO_HIGH':
              return {...accu ,type:action.type, payload:action.payload}

            case 'MACH_CITY':
              return {...accu ,type:action.type, payload:action.payload}

            case 'HERCULES':
              return {...accu ,type:action.type, payload:action.payload}

            case 'MALE':
              return {...accu ,type:action.type, payload:action.payload}

            case 'FEMALE':
              return {...accu ,type:action.type, payload:action.payload}

              case 'TWENTY':
              return {...accu ,type:action.type, payload:action.payload}

              case 'TWENTY_TWO':
              return {...accu ,type:action.type, payload:action.payload}

              case 'TWENTY_FOUR':
              return {...accu ,type:action.type, payload:action.payload}

              case 'TWENTY_SIX':
              return {...accu ,type:action.type, payload:action.payload}

            default:
                return state
        }
    }

    const [state , dispatch] = useReducer(productsReducer , {type:'' , payload:''});
    
    const sortData = (items) => {
       if(state.type === 'HIGH_TO_LOW'){
        return [...items.sort((a,b) => b.price - a.price)]
       }else if(state.type === 'LOW_TO_HIGH'){
        return [...items.sort((a,b) => a.price - b.price)]
       }
        return items; 
    }

    const brandData = (items) => {
        if(state.type === 'MACH_CITY'){
         return [...items.filter(item => item.brand === 'mach city' )]
        }else if(state.type === 'HERCULES'){
         return [...items.filter(item => item.brand === 'hercules' )]
        }
         return items; 
     }

     const genderFilterData = (items) => {
        if(state.type === 'MALE'){
          return [...items.filter(item => item.gender === 'male')]
        }else if(state.type === 'FEMALE'){
            return [...items.filter(item => item.gender ==='female')]
        }else{
          return items;
      }
    } 

    const getDataBySize = (items) => {
        if(state.type === 'TWENTY'){
         return [...items.filter(item => item.size === '20' )]
        }else if(state.type === 'TWENTY_TWO'){
         return [...items.filter(item => item.size === '22' )]
        }else if(state.type === 'TWENTY_FOUR'){
            return [...items.filter(item => item.size === '24' )]
        }else if(state.type === 'TWENTY_SIX'){
            return [...items.filter(item => item.size === '26' )]
        }
         return items; 
     }

     function getData(items){
        const sortedData = sortData(items);
        const brandedData = brandData(sortedData);
        const genderFilteredData = genderFilterData(brandedData);
        const filteredData = getDataBySize(genderFilteredData);
        setData(filteredData)
    }
    


    useEffect(() => {
        getData(products);
    },[state , products]);
    
    return (<productContext.Provider value={{state , dispatch , data , setData}}>{children}</productContext.Provider>)
}

export { useProducts , ProductsProvider}
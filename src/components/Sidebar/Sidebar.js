import React , { useState } from 'react';
import { useProducts } from '../../context/productContext';
import './Sidebar.css';
import data from '../../data.json';

export default function Sidebar() {
  const { state , dispatch , setData} = useProducts();
  const [ inputState, setInputState] = useState({
    HighToLow:false,
    LowToHigh:false,
    MachCity:false,
    Hercules:false,
    Male:false,
    Female:false,
    Twenty:false,
    TwentyTwo:false,
    TwentyFour:false,
    TwentySix:false,
  });

  const clearHandler = () => {
    setInputState({
      HighToLow:false,
      LowToHigh:false,
      MachCity:false,
      Hercules:false,
      Male:false,
      Female:false,
      Twenty:false,
    TwentyTwo:false,
    TwentyFour:false,
    TwentySix:false,
    });
    setData(data)
  }


  console.log(inputState , state)

  return (
    <>
    <div className="sidebar-container">
        <div className="name">Filters <span onClick={clearHandler}>Clear</span></div>
        <div className="sort">
            <h3>Filter By Sort</h3>
            <div className="filter">
              <label htmlFor="LOW_TO_HIGH">Low to High</label>
              <input type="radio" name="sort" id="LOW_TO_HIGH" checked={inputState.LowToHigh} onClick={(e) => {
                setInputState({LowToHigh:e.target.checked})
                dispatch({type:'LOW_TO_HIGH' , payload:'LOW_TO_HIGH'})}}/>
            </div>

            <div className="filter">
              <label htmlFor="HIGH_TO_LOW">High To Low</label>
              <input type="radio" name="sort" id="HIGH_TO_LOW" checked={inputState.HighToLow} onClick={(e) => {
                setInputState({HighToLow:e.target.checked})
                dispatch({type:'HIGH_TO_LOW' , payload:'HIGH_TO_LOW'})}}/>
            </div>
        </div>

        <div className="filter-by-size">
            <h3>Filter By Size</h3>
            <div className="filter">
              <label htmlFor="S">20T</label>
              <input type="radio" name="size" id="S" checked={inputState.Twenty} onClick={(e) => {
                setInputState({Twenty:e.target.checked})
                dispatch({type:'TWENTY' , payload:'TWENTY'})}}/>
            </div>

            <div className="filter">
              <label htmlFor="M">22T</label>
              <input type="radio" name="size" id="M" checked={inputState.TwentyTwo} onClick={(e) => {
                setInputState({TwentyTwo:e.target.checked})
                dispatch({type:'TWENTY_TWO' , payload:'TWENTY_TWO'})}}/>
            </div>

            <div className="filter">
              <label htmlFor="L">24T</label>
              <input type="radio" name="size" id="L" checked={inputState.TwentyFour} onClick={(e) => {
                setInputState({TwentyFour:e.target.checked})
                dispatch({type:'TWENTY_FOUR' , payload:'TWENTY_FOUR'})}}/>
            </div>

            <div className="filter">
              <label htmlFor="XL">26T</label>
              <input type="radio" name="size" id="XL" checked={inputState.TwentySix} onClick={(e) => {
                setInputState({TwentySix:e.target.checked})
                dispatch({type:'TWENTY_SIX', payload:'TWENTY_SIX'})}}/>
            </div>
        </div>


        <div className="filter-by-brand">
            <h3>Filter By Brand</h3>
            <div className="filter">
              <label htmlFor="mach-city">MACH CITY</label>
              <input type="radio" name="brand" id="mach-city" checked={inputState.MachCity} onClick={(e) => {
                setInputState({MachCity:e.target.checked})
                dispatch({type:'MACH_CITY' , payload:'MACH_CITY'})}}/>
            </div>

            <div className="filter">
              <label htmlFor="hercules">HERCULES</label>
              <input type="radio" name="brand" id="hercules" checked={inputState.Hercules} onClick={(e) => {
                setInputState({Hercules:e.target.checked})
                dispatch({type:'HERCULES' , payload:'HERCULES'})}}/>
            </div>
        </div>

        <div className="filter-by-gender">
            <h3>Filter By gender</h3>
            <div className="filter">
              <label htmlFor="male">male</label>
              <input type="radio" name="gender" id="male" checked={inputState.Male} onClick={(e) => {
                setInputState({Male:e.target.checked})
                dispatch({type:'MALE' , payload:'MALE'})}}/>
            </div>

            <div className="filter">
              <label htmlFor="female">female</label>
              <input type="radio" name="gender" id="female"  checked={inputState.Female} onClick={(e) => {
                setInputState({Female:e.target.checked})
                dispatch({type:'FEMALE' , payload:'FEMALE'})}}/>
            </div>
        </div>

    </div>
    </>
  )
}

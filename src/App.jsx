import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "./asyncAction/customers";
import {addCustomerAction, removeCustomerAction} from './store/customerReducer'

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
    
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };
    
    
    
    const addCustomer = (name) => {
      const customer = {
        name,
        id: Date.now()
      };
    dispatch(addCustomerAction(customer));
    };
    
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };
    
  const addManyCustomers = () => {
    dispatch(fetchCustomers());
  };
    
  return (
    <div>
        <div style={styles.divFlex}>
            <div style={styles.cash}>Balance: {cash} </div>
            <div style={{ display: "flex" }}>
                <button style={styles.btn} onClick={() => addCash(Number(prompt()))}>Add cash</button>
                <button style={styles.btn} onClick={() => getCash(Number(prompt()))}>Take cash</button>
                    
                <button style={styles.btn} onClick={() => addCustomer(prompt())}>Add client</button>
                {/* <button style={styles.btn} onClick={() => { }}>Delete client</button> */}
                <button style={styles.btn} onClick={() => addManyCustomers()}>Add clients database</button>
            </div>

            {customers.length > 0
                ?
                <div>
                    {customers.map(customer => 
                        <div onClick={() => removeCustomer(customer)} style={styles.divRemoveClient} key={customer.id}>
                            {customer.name}
                        </div>
                    )}
                </div>
                : 
                <div style={styles.client}>No clients!</div>
            }
        </div>
    </div>
  );
}

const styles = {
    divRemoveClient: {
        fontSize: 20,
        marginTop: 20,
        padding: 10,
        borderRadius: 8,
        border: '1px solid #4CAF50'

    },
  client: {
    fontSize: 24,
    marginTop: 20,
  },
  divFlex: {
    display: "flex",
    marginTop: 150,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#4CAF50" /* Green */,
    border: "none",
    borderRadius: 8,
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: 16,
    marginRight: 10,
  },
  cash: {
    fontSize: 24,
    marginBottom: 10,
  },
};
export default App;

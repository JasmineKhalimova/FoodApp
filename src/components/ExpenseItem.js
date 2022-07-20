function ExpenseItem(){
     const eDate = new Date (2007, 6, 27);
     const eTitle = 'Car Insurance';
     const eAmount = 800;
    return(
        <div className="expense-item">
            <div>{eDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{eTitle}</h2>
                <div className="expense-item__price">€{eAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
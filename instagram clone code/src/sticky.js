import Recomand from "./recomandation-tag";

function Sticky (){

    return(
        <div className = 'sticky'>
            <Recomand src = {"https://miro.medium.com/max/512/1*7tlP1ph61ompULJdycVJlQ.png"} name = {"You"} btntxt = {"change"}/>
            <h5>Recomandations:</h5>
            <Recomand src = {"https://competitions.teamtalk.com/image-library/square/1000/2/2cbbba3c8d5f-teamtalk-com.jpg"} name = {"Kylian_Mbappe"} btntxt = {"follow"}/>
            <Recomand src = {"https://cdn10.bigcommerce.com/s-o6vy9cv/products/73387/images/73864/299124__33782.1478695469.500.500.jpg?c=2"} name = {"Statham"} btntxt = {"follow"}/>
            <Recomand src = {"https://www.respectability.org/wp-content/uploads/2019/03/Selena-Gomez-Square.jpg"} name = {"Selenagomez"} btntxt = {"follow"}/>
            <Recomand src = {"https://static01.nyt.com/images/2021/08/28/sports/27soccer-ronaldo-print/27soccer-ronaldo-1-mediumSquareAt3X.jpg"} name = {"Cristiano"} btntxt = {"follow"}/>
            <Recomand src = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVOTFqRfdbcFjKFVlFiYGPVadVwNW7MYR_urPLjycYaeXb8O6TT6rNYNgs69HtPSN_7kM&usqp=CAU"} name = {"Mikhail_itvin"} btntxt = {"follow"}/>
            <Recomand src = {"https://answel.com/wp-content/uploads/2020/12/504c63a03d8a751a5cbeda0bc064306bb4-lebron-james.rsquare.w1200.jpg"} name = {"Lebron_James"} btntxt = {"follow"}/>
        </div>
    );
}

export default Sticky;
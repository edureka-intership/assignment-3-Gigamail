class restaurantManager{
     restaurantList=[{
        restaurantName: 'KFC',
        address: 'Anand Vihar',
        city: 'Delhi'
    },
    {
        restaurantName: 'Domino',
        address: 'Savita Vihar',
        city: 'Delhi'
    },
    {
        restaurantName: 'Burger King',
        address: 'Civil Lines',
        city: 'Pune'
    },
    {
        restaurantName: 'Subway',
        address: 'Cantonment',
        city: 'Mumbai'
    }];
    printAllResturentNames = () => {
        return this.restaurantList.map(restaurent=>restaurent.restaurantName);
    }
    filtercityname =(cityname) => {
        return this.restaurantList.filter(resturent =>resturent.city==cityname);
    }
}
let restaurentobj=new restaurantManager();
console.log(restaurentobj.printAllResturentNames());
console.log(restaurentobj.filtercityname('Pune'));

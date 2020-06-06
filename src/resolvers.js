import { Medicine } from './models/Medicine';
import { Vital } from './models/Vital';

export const resolvers ={
    Query:{
        hello:()=>"hi!"
    },
    Mutation: {
        createVital :async(_,{
            bp,
            sugar,
            weight,
            diagnosis
        })=>{
            const newVital = new Vital({
                bp,
                sugar,
                weight,
                diagnosis
            });
            await newVital.save();
            return newVital;
        },
        createMedicine: async (_, { 
            name,
            company,
            cost,
            quantity,
            manufactureDate,
            expiryDate,
            medicinetype
         }) => {
          const newMedicine = new Medicine({  name,            
                                        company,
                                        cost,
                                        quantity,
                                        manufactureDate,
                                        expiryDate,
                                        medicinetype });
          await newMedicine.save();
          return newMedicine;
        }
      }
}
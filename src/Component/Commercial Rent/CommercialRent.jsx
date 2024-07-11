import useCommercialRent from "../../Hooks/useCommercialRent";
import LocationSelector from "../LocationSelector/LocationSelector";
import SingleRent from "./SingleRent";

const CommercialRent = () => {
    const [rent] = useCommercialRent({});
    const CommercialRent = rent.filter(item=> item.category === "commercial-rent");
    return (
        <div className="w-full mt-28 rounded-md px-10 py-3 mb-56" style={{
            boxShadow: "0 0 15px -10px rgba(0, 0, 0, 0.233)"
        }}>
            <div className="lg:w-12/12 mx-auto flex justify-between px-4 py-6 flex-col">
                <div>
                    <h1 className="text-5xl font-bold text-[#3BB296] text-center">Find a Location for Distributor</h1>
                </div>
                <div className="w-full sm:flex sm:flex-col lg:grid grid-cols-4 gap-5 mt-10">
                    <LocationSelector
                        division={"Select Division"}
                        option1={"Barishal"}
                        option2={"Sylhet"}
                        option3={"Dhaka"}
                        option4={"Rajshahi"}
                        option5={"Rangpur"}
                        option6={"Mymansingh"}
                        option7={"Chattogram"}
                    />
                    <LocationSelector
                        division={"Select District"}
                        option1={"Sylhet"}
                        option2={"Moulvibazar"}
                        option3={"Habiganj"}
                        option4={"Bhrammanbaria"}
                        option5={"Jhinaidaha"}
                        option6={"Mymansingh"}
                        option7={"Chattogram"}

                    />
                    <LocationSelector
                        division={"Select Upazilla"}
                        option1={"Sylhet"}
                        option2={"Moulvibazar"}
                        option3={"Habiganj"}
                        option4={"Bhrammanbaria"}
                        option5={"Jhinaidaha"}
                        option6={"Mymansingh"}
                        option7={"Chattogram"}

                    />
                    <LocationSelector
                        division={"Select Area"}
                        option1={"Sylhet"}
                        option2={"Moulvibazar"}
                        option3={"Habiganj"}
                        option4={"Bhrammanbaria"}
                        option5={"Jhinaidaha"}
                        option6={"Mymansingh"}
                        option7={"Chattogram"}

                    />
                    
                </div>
                <div className="mt-6">
                    <div className="w-full checkbox sm:grid sm:grid-cols-2 gap-10 lg:flex justify-start py-5 items-center border-none">
                        <div className="main_box">
                            <input className="check" type="checkbox" name="Cids[6]" value="6"
                                style={{
                                    accentColor: "#3ab195"
                                }}
                            />
                            <label htmlFor="" className="text-[#AAAAAA] font-[500] ml-2 mt-5">i want to rent</label>
                        </div>
                        <div className="main_box">
                            <input className="check" type="checkbox" name="Cids[5]" value="5"
                                style={{
                                    accentColor: "#3ab195"
                                }}
                            />
                            <label htmlFor="" className="text-[#AAAAAA] font-[500] ml-2 mt-5">Restaurant Rent</label>
                        </div>
                        <div className="main_box">
                            <input className="check" type="checkbox" name="Cids[4]" value="4"
                                style={{
                                    accentColor: "#3ab195"
                                }}
                            />
                            <label htmlFor="" className="text-[#AAAAAA] font-[500] ml-2 mt-5">Shop rent</label>
                        </div>
                        <div className="main_box">
                            <input className="check" type="checkbox" name="Cids[3]" value="3"
                                style={{
                                    accentColor: "#3ab195"
                                }}
                            />
                            <label htmlFor="" className="text-[#AAAAAA] font-[500] ml-2 mt-5">Office Rent</label>
                        </div>
                        <div className="main_box">
                            <input type="checkbox" className="check mr-1" id="checkAll" name=""
                                style={{
                                    accentColor: "#3ab195"
                                }}
                            />
                            <label htmlFor="" className="text-[#AAAAAA] font-[500] ml-2 mt-5">All</label>
                        </div>

                    </div>
                </div>
            </div>
            {/* Classified data from database */}

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    CommercialRent.map(item => <>
                        <SingleRent key={item.id} datas={item} ></SingleRent>
                    </>)
                }
            </div>
        </div>
    );
};

export default CommercialRent;
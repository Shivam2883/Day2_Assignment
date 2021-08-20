import Navlink from "./Navlink";
import Service from './Service';

function Header(){

    const services=[
        {
            title:"Shivam Kumar",
            desc:"Web developer and Network Security intellegence",
            image:"https://scontent.fpat1-1.fna.fbcdn.net/v/t1.6435-9/165294464_2878564062391088_8090624151785256886_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-Bz1nRbYvB0AX8j3SEk&_nc_ht=scontent.fpat1-1.fna&oh=535894bd0ba2b9953cb510c497e8e9c0&oe=6143D211"
        },
        {
            title:"Prachi",
            desc:"System Designer and Architecture",
            image:"https://bn1302files.storage.live.com/y4pn5wUf44RaCxLQgfxurPr0Dzbj5Yobetd9VDutRnoU3c1Z6xf_3Gz5Nsbos0Hx2jWXJt0XZwGuV1p_PgMIlF0qRKM4KcJ9sZuCsC5mRD1zPjw5RDJGPt95Z9mnGhSS213_95RtWYEbrXd8lSkECGAxNK9IPFF5bQOF_NueG8_37Ozb-nZ4wGntxzWvA6-Vb4uta74EeTsWoAevJLp8DKCRdbOTxVHRB2NOOKQwEOQmE8/1618922543671.jpg?psid=1&width=526&height=935"
        },
        {
            title:"Adarsh Kumar",
            desc:"App Developer and DBA",
            image:"https://scontent.fpat1-1.fna.fbcdn.net/v/t1.6435-1/c0.40.320.320a/p320x320/151327763_168898621667688_6066190168964478926_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=GQYbdJRFsToAX9w4DN9&_nc_ht=scontent.fpat1-1.fna&oh=d7da06059abff9ded724cf3570c21a72&oe=61446C3A"
        },
        {
            title:"Sonam Bharti",
            desc:"Sofware Consultant",
            image:"https://scontent.fpat1-1.fna.fbcdn.net/v/t1.6435-9/119725251_655194488752273_5008998704948742993_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=19026a&_nc_ohc=0Lz9ChJ5EcEAX9RTqPh&_nc_ht=scontent.fpat1-1.fna&oh=3d3291021936ebf646976a72b943fa43&oe=6144DDF1"
        },
        {
            title:"Gautam Kumar",
            desc:"Sales Manager",
            image:"https://scontent.fpat1-1.fna.fbcdn.net/v/t1.6435-9/150228608_2670625173228514_7282562308366504906_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=NWjcELnZOOsAX998Fjd&_nc_ht=scontent.fpat1-1.fna&oh=7d16adb12cf4ddeceb518a72e70f00ec&oe=61455C40"
        }
    ]


    return (
        <div className="Parent">
            <h1 style={{marginLeft:"15%"}}>Team Members</h1>
            <div className="container">

                
                {
                    services.map((service,index)=>(

                        <Service key={index} title={service.title} desc={service.desc} image={service.image} />

                    ) )
                    
                }
            </div>

        </div>

        
    )

}


export default Header;
**Project Description**

1.This is a frontend-only gig marketplace application built using HTML, CSS, and Vanilla JavaScript.                                                          
2.The goal of the project is to simulate basic marketplace behavior (clients posting gigs and freelancers bidding) using JavaScript logic and localStorage instead of a backend.                                                                                                                                         
3.The focus of this assignment is logic, data handling, and functionality, not UI design.
                                                                                                                                                              
**Features Implemented**                                                                                                                                     

1.Authentication (Basic)                                                                                                                                      
User login using name and role                                                                                                                                
                                                                                                                                                              
2.Roles supported:  
Client                                                                                                                                                        
Freelancer                                                                                                                                                    
                                                                                                                                                              
3.User data stored in localStorage                                                                                                                            
                                                                                                                                                              
**Client Side**                                                                                                                                               
                                                                                                                                                              
1.Create a new gig with:                                                                                                                                      
    a.Title                                                                                                                                                   
    b.Description                                                                                                                                             
    c.Budget                                                                                                                                                  
2.View all created gigs                                                                                                                                       
3.View bids for each gig                                                                                                                                      
4.Close bidding for a gig                                                                                                                                     
5.Prevent new bids after closing                                                                                                                              
6.Options to Hire or Reject bids (logic present)                                                                                                              
                                                                                                                                                              
**Freelancer Side**                                                                                                                                           
                                                                                                                                                              
1.View all available gigs                                                                                                                                     
2.Submit bids with:                                   
   a.Bid amount                                                                                                                                               
   b.Message                                                                                                                                                  
3.Cannot bid on closed gigs                                                                                                                                   
4.Bid data persists after page refresh                                                                                                                        
                                                                                                                                                              
**Data Storage**                                                                                                                                              
LocalStorage Usage                                                                                                                                            
The app uses localStorage to simulate backend behavior.                                                                                                       
                                                                                                                                                              
**Data Structures**                                                                                                                                           
                                                                                                                                                              
User Object                                                                                                                                                   
{                                                                                                                                                             
  id,                                                                                                                                                         
  name,                                                                                                                                                       
  role                                                                                                                                                        
}                                                                                                                                                             
                                                                                                                                                              
Gig Object                                                                                                                                                    
{                                                                                                                                                             
  id,                                                                                                                                                         
  title,                                                                                                                                                      
  description,                                                                                                                                                
  budget,                                                                                                                                                     
  bid: [],                                                                                                                                                    
  status: "open" | "closed"                                                                                                                                   
}                                                                                                                                                             
                                                                                                                                                             
Bid Object                                                                                                                                                   
{                                                                                                                                                             
  bidId,                                                                                                                                                      
  Username,                                                                                                                                                   
  bidAmount,                                                                                                                                                  
  bidMessage                                                                                                                                                  
}                                                                                                                                                             
                                                                                                                                                              
**Tech Stack**                                                                                                                                                
                                                                                                                                                              
1.HTML                                                                                                                                                        
2.CSS                                                                                                                                                         
3.JavaScript (ES6 Modules)                                                                                                                                    
4.Browser LocalStorage                                                                                                                                        
                                                                                                                                                              
**Folder Structure**                                                                                                                                          
                                                                                                                                                              
/Login                                                                                                                                                        
  └── login.html                                                                                                                                              
  └── login.js                                                                                                                                                
                                                                                                                                                              
/Client                                                                                                                                                      
  └── client.html                                                                                                                                             
  └── client.js                                                                                                                                               
  └── existingGigs.js                                                                                                                                         
  └── store.js                                                                                                                                                
                                                                                                                                                              
/Freelancer                                                                                                                                                   
  └── freelancer.html                                                                                                                                         
  └── freelancer.js                                                                                                                                           
                                                                                                                                                              
**How to Run the Project**                                                                                                                                    
                                                                                                                                                              
1.Clone or download the repository                                                                                                                            
2.Open login.html in a browser                                                                                                                                
3.Login as a Client or Freelancer                                                                                                                             
4.Use the dashboard based on role                                                                                                                             
5.Refresh the page to verify data persistence                                                                                                                 
                                                                                                                                                              
**UI Note**                                                                                                                                                   
                                                                                                                                                              
1.UI is intentionally minimal                                                                                                                                 
2.Focus is on logic and functionality                                                                                                                         
3.Basic styling is applied for clarity                                                                                                                        
                                                                                                                                                              
**Limitations**                                                                                                                                               
                                                                                                                                                              
1.No backend or database                                                                                                                                      
2.No real authentication                                                                                                                                      
3.No advanced UI/UX                                                                                                                                           
4.No real-time updates                                                                                                                                        
                                                                                                                                                              
**Future Improvements**                                                                                                                                       
                                                                                                                                                              
1.Backend integration                                                                                                                                         
2.Authentication system                                                                                                                                       
3.Better UI/UX                                                                                                                                                
4.Search and filtering                                                                                                                                        
5.Bid acceptance workflow                                                                                                                                     
                                                                                                                                                              
Author                                                                                                                                                        
Deepika V                                                                                                                                                    

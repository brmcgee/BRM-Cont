// bathroom-remodel-rm   miller project 


const data = [ 
    {
      purpose: "blog",
      category: 'Roofing',
      title: "New galvalume standing seam metal roof.",
      date: "May 03, 2020",
      author: "Brian McGee",
      body: 'We enjoyed this one helping a good client out with there metal roof on a vacation home on the beach. Nice weather and tan was a bonus too. This is a snap lock 1.5" 16" panel. I just love the look and the detail here at the posts. What a beautiful pool cabana. ',
      img1: "../assets/gallery/sseam1.jpg",
      img2: "../assets/gallery/sseam2.jpg",
      project: "siding-roofing"
    },
    {
      purpose: "blog",
      category: 'Drywall Repair',
      title: "Large drywall textured finish in basement",
      date: "March 02, 2022",
      author: "Brian McGee",
      body: "Well cold temperatures and frozen pipes in the basement ceiling caused 12 sheets of drywall damaged in a finished carpeted basement room. Here we have prepped the area with dropcloths and plastic. All boards are installed and ready for the mud work..stay tuned!",
      img2: "../assets/gallery/drywall-repair3.jpg",
      img1: "../assets/gallery/drywall-repair3a.jpg",
      project: "drywall"
    },
    {
      purpose: "blog",
      category: 'Drywall Repair',
      title: "Drywall textured finish and painted by the handyman",
      date: "March 04, 2022",
      author: "Brian McGee",
      body: "Well we have been working away on this. We are finishing in a textured finish on the ceiling and smooth on the walls. We have installed a primer and casecoat to match the surrounding...You cant even tell we were here! Another happy client. ",
      img2: "../assets/gallery/drywall-repair5.jpg",
      img1: "../assets/gallery/drywall-repair4.jpg",
      project: "drywall"
    },
    {
      purpose: "blog",
      category: 'Handyman',
      title: "Bathroom sink faucet install by the handyman",
      date: "March 06, 2022",
      author: "Brian McGee",
      body: "Well simply call for a bathroom faucet install for a client. We removed the old faucet and installed a new Delta Foundations in chrome finish. Clean up and on to the next. Another happy client!",
      img2: "../assets/gallery/handy-sink1a.jpg",
      img1: "../assets/gallery/handy-sink1b.jpg",
      project: "drywall"
    },
    {
      purpose: "blog",
      category: 'Kitchen Backsplash',
      title: "Beautiful kitchen backsplash tile install",
      date: "May 02, 2022",
      author: "Brian McGee",
      body: "A simply elegant tile install for these homeowners in their already beautiful kitchen. We were able to add the speacial touch that they always wanted. Another satisfied homeowner!",
      img1: "../assets/gallery/backsplash1.jpg",
      img2: "../assets/gallery/backsplash2.jpg",
      project: ""
    },    
    {
      purpose: "blog",
      category: 'Deck Repair',
      title: "Maintenance deck repair boards and posts",
      date: "June 02, 2022",
      author: "Brian McGee",
      body: "We were able to make some maintenance repairs on this 10 year old deck. We saved the old composite deck boards and replaced the beams and posts in the troubled area. Back to enjoying the pool - Another satisfied homeowner!",
      img1: "../assets/gallery/deck-repair1.jpg",
      img2: "../assets/gallery/deck-repair2.jpg",
      project: ""
    },
    {
      purpose: "blog",
      category: 'Drywall Repair',
      title: "Moisture damaged drywall and paint repair",
      date: "June 06, 2022",
      author: "Brian McGee",
      body: "Moisture damaged cieling caused by leaking plumbing has been fixed. We removed all the old board and installed new. Added some texture on one and smooth finish on the other. Next we painted the cieling to match existing. Extra care and caution at the beatiful kitchen cabinets. Problem Solved!",
      img2: "../assets/gallery/drywall-kitchen1a.jpg",
      img1: "../assets/gallery/drywall-kitchen1b.jpg",
      project: "drywall"
    },
    {
      purpose: "blog",
      category: 'Shingle Repair',
      title: "Roof edge leak solved by BRM",
      date: "June 21, 2020",
      author: "Brian McGee",
      body: 'There was issues on the edge of the roof. The shingles were still in servicable condition so we were able to handle this with a simply maintenance repair and extend the life of this roof verses replacement. Our client was happy and able to set up a budget plan for roof replacment. Problem solved!',
      img1: "../assets/gallery/shingle-repair1.jpg",
      img2: "../assets/gallery/shingle-repair2.jpg",
      project: "siding-roofing"
    },
    {
      purpose: "blog",
      category: 'Siding and Roofing',
      title: "Home renovation project exterior siding, soffit and fascia",
      date: "June 23, 2021",
      author: "Brian McGee, owner",
      body: "What an awesome transformation on this house. We installed new vinyl siding, soffit and fascia, window wraps and more. This is a 2-story company house so its tall. We handle steep and tall - so give us a call.",
      img1: "../assets/gallery/house-before.jpg",
      img2: "../assets/gallery/house-after.jpg",
      project: "ad"
    },
    {
      purpose: "blog",
      category: 'Wood Repair',
      title: "Painted wood siding repair - Moisture damage",
      date: "June 13, 2022",
      author: "Brian McGee",
      body: "We brought out the walkboard on this one to make it easy. Just a little moisture damaged siding. This elevation is westward facing so it sees alot rougher weather. Finished and painted - Client happy!",
      img1: "../assets/gallery/siding1.jpg",
      img2: "../assets/gallery/siding2.jpg",
      project: "siding-roofing"
    },
    {
      purpose: "blog",
      category: 'Painting',
      title: "OMG - 4 flights of Stairs Painting",
      date: "July 11, 2022",
      author: "Brian McGee",
      body: "Wow when I got wind of this one. 4-flights of stairs to be painted here. Had to be careful not to get trapped on the top floor with wet paint... Well anyways it turned out awesome and paint lines were crisp. Another job DONE right!",
      img1: "../assets/gallery/paint1.jpg",
      img2: "../assets/gallery/paint2.jpg",
      project: ""
    },
    {
      purpose: "blog",
      category: 'Roofing',
      title: "3-story shingle roofing repair by the handyman",
      date: "July 16, 2022",
      author: "Brian McGee",
      body: "There was a pretty bad leak hear at the dead valley and wall area, we were able to help. This repair is 3-stories up so work of the ladder was necessary. We replaced the rotted wood, new shingles and underlayment. Replaced some Hardie Siding and painted to match. Problem Solved!",
      img1: "../assets/gallery/shingle-repair3a.jpg",
      img2: "../assets/gallery/shingle-repair3b.jpg",
      project: ""
    },
    
    {
      purpose: "blog",
      category: 'Drywall Repair',
      title: "Bedroom blues... drywall repair and paint",
      date: "Oct 29, 2022",
      author: "Brian McGee",
      body: "Well for such a happy blue bedroom the wall had water damge at the window sill area. We removed the drywall and install new with extra caution at the carpet flooring. After a return trip sanded and repainted the complete room. Another happy client!",
      img2: "../assets/gallery/drywall-repair1.jpg",
      img1: "../assets/gallery/drywall-repair2.jpg",
      project: ""
    },
    {
      purpose: "blog",
      category: 'Deck Build',
      title: "Custom Deck Build",
      date: "Nov 08, 2022",
      author: "Brian McGee",
      body: "The weather is awesome and this deck is going to be beautiful! We are all framed in here and are going to be installing the deck boards next. This deck is over 350sqft and is being built with pressure treated lumber. Check back soon!",
      img1: "../assets/gallery/custom-deck4.jpg",
      img2: "../assets/gallery/custom-deck5.jpg",
      project: "custom-deck"
    },
    {
      purpose: "blog",
      category: 'Deck Build',
      title: "Wrapping up a wood deck with railing",
      date: "Nov 11, 2022",
      author: "Brian McGe",
      body: "What an awesome deck we built here! We completed it winter time just before the snow. I know these clients will be enjoying this come spring. We installed this pressure treated deck over posts and beams, it is over 350 sqft - huge. It is a beatiful oasis and awesome addition to the new pool. ",
      img1: "../assets/gallery/custom-deck2.jpg",
      img2: "../assets/gallery/custom-deck3.jpg",
      project: "custom-deck"
    },
    {
      purpose: "blog",
      category: 'Deck Build',
      title: "Pressure treated wood deck final touches",
      date: "Nov 12, 2022",
      author: "Brian McGee",
      body: "Well we are finishing up the final touches here on this deck. Final trim pieces and lattice install and routing  the edges.  We wont be staining this deck, it will dry and the homeowners will stain. This deck is sweet and is going to be a blast come spring time.",
      img1: "../assets/gallery/custom-deck6.jpg",
      img2: "../assets/gallery/custom-deck7.jpg",
      project: "custom-deck"
    },
    {
      purpose: "blog",
      category: 'Drywall Framing',
      title: "Hanging drywall board ",
      date: "July 23, 2022",
      author: "Brian McGee",
      body: "We had good time here with general framing and windows as well as the electrical re-wire. We installed the drywall which we will finish later. Also added blocking for the TV. Someone will enjoy the games.",
      img1: "../assets/gallery/drywall-hang1.jpg",
      img2: "../assets/gallery/drywall-hang2.jpg",
      project: ""
    },
    {
      purpose: "blog",
      category: 'Door Replacement',
      title: "Exterior door replacement ",
      date: "July 28, 2022",
      author: "Brian McGee",
      body: "Our clients door was rusting and not shutting correctly. We simply replaced an exterior door for one of our clients. Another happy client. ",
      img1: "../assets/gallery/door2.jpg",
      img2: "../assets/gallery/door1.jpg",
      project: ""
    },
    {
      purpose: "blog",
      category: 'Flooring',
      title: "Sub-floor replacement and flooring installation",
      date: "Aug 03, 2022",
      author: "Brian McGee",
      body: "This bathroom had a leaky toilet which rotted the subfloor and toilet flange. We removed all the old subfloor minus the tub area  and flange then installed new. Next we followed with a low maintenance LVT vinyl floor, new toilet vanity and mirror. Mini makeover for this bathroom here! Job well done!",
      img1: "../assets/gallery/flooring1a.jpg",
      img2: "../assets/gallery/flooring1b.jpg",
      project: ""
    },
    {
      purpose: "blog",
      category: 'Drywall Finish',
      title: "Smooth finish drywall work today",
      date: "Aug 20, 2022",
      author: "Brian McGee",
      body: "We have returned from installing the original 30 sheets and are finishing this board on with a smooth finish. We have taken extra caution in protecting the floors. We are all sanded down and ready to for clean up here. This is beautiful but we wont be painting it. The homeowner will finish the rest.",
      img1: "../assets/gallery/drywall-finish.jpg",
      img2: "../assets/gallery/drywall-finish2.jpg",
      project: ""
    },
    {
      purpose: "blog",
      category: 'Kitchen Remodel',
      title: "Kitchen cabinet and flooring install",
      date: "Aug 24, 2022",
      author: "Brian McGee",
      body: "We are working on a kitchen today. We removed a section of flooring and installed a low maintenance LVT floor. Then we set the cabinets back in place on this one. We will return as soon as the counters are ready for the install. Job well done!",
      img1: "../assets/gallery/kitchen-1a.jpg",
      img2: "../assets/gallery/kitchen-1b.jpg",
      project: ""
    },
    {
      purpose: "blog",
      category: 'Custom Deck',
      title: "Custom covered wood deck for the RV",
      date: "Oct 6, 2022",
      author: "Brian McGee",
      body: "What an awesome job here building this custom wood deck with metal roof cover. Our clients got a new fifth wheel which is so cool inside. They needed a new covered deck to enjoy the fun weekends at the campground. BRM was able to deliever. We removed the old covered deck and assisted with the new RV hookup. Next we were able to deliver an awesome outdoor space just in time for Halloween.",
      img1: "../assets/gallery/deck-rv-2.jpg",
      img2: "../assets/gallery/deck-rv-1.jpg",
      project: "custom-deck"
    },
    {
      purpose: "blog",
      category: 'Flooring',
      title: "LVT Floor installation",
      date: "Oct 26, 2022",
      author: "Brian McGee",
      body: "Simply LVT flooring install here. We installaed a shower set and subfloor a couple months back. Now we return and finished the floors. Homeowner will be installing the trim.",
      img1: "../assets/gallery/flooring1.jpg",
      img2: "../assets/gallery/flooring2.jpg",
      project: ""
    },
    {
      purpose: "blog",
      category: 'Siding and Roofing',
      title: "Total transformation! BRM delivers new exteriors on this one.",
      date: "Nov 12, 2022",
      author: "Brian McGee",
      body: "This outbuilding in surrounded by trees and needed a low maintenance building system. We installed all new vinyl siding, soffit and fascia, gutters and a custom colored galvalume metal roof. This is beautiful.",
      img2: "../assets/gallery/siding-roof-before.jpg",
      img1: "../assets/gallery/siding-roof-after.jpg",
      project: "siding-roofing"
    },
    {
      purpose: "blog",
      category: 'Bathroom Remodel',
      title: "Bathroom with fresh electrical switches and lights",
      date: "Dec 14, 2022",
      author: "Brian McGee",
      body: "This project was great! We're completing it winter time. We are closing up this wall area after getting the electrical leads and boxes ran. We installed new exhaust vent, recessed lighting and a vanity light.",
      img2: "../assets/gallery/bathroom3.jpg",
      img1: "../assets/gallery/bathroom4.jpg",
      project: ""
    },
    {
      purpose: "blog",
      category: 'Bathroom Remodel',
      title: "Bathroom Renovation fresh update",
      date: "Dec 14, 2022",
      author: "Brian McGee",
      body: "This project was great! We're completing it winter time. We removed everything down to the wood studs and installed all new insulation and fixtures. A 4-piece acrylic bathtub/shower combo kit. All new elctrical and lighting with bathroom exhaust. New smooth finished drywall surface freshly painted to our clients likings. I know its a bathroom but this will be a fun place.",
      img2: "../assets/gallery/bathroom2.jpg",
      img1: "../assets/gallery/bathroom1.jpg",
      project: ""
    },
    {
      purpose: "blog",
      category: 'Bathroom Remodel',
      title: "Fresh bath tub install with new plumbing",
      date: "Dec 14, 2022",
      author: "Brian McGee",
      body: "This project was great! We're completing it winter time. We are installing new plumbing fixtures, valves and framing on this bathtub.",
      img2: "../assets/gallery/bathroom5.jpg",
      img1: "../assets/gallery/bathroom6.jpg",
      project: ""
    },
    {
      purpose: "blog",
      category: 'Kitchen Remodel',
      title: "Kitchen wall repairs with new drywall finish",
      date: "Dec 09, 2022",
      author: "Brian McGee",
      body: "Today we are refinishing our clients kitchen walls. Installating some new wall board and then skim coating the walls flat. We also added some upgraded appliance wiring and new recessed light. The homeowners is going to paint and we shall return to install cabinets.",
      img1: "../assets/gallery/kitchen-drywall2.jpg",
      img2: "../assets/gallery/kitchen-drywall1.jpg",
      project: "kitchen-remodel-ah"
    },
    { 
      purpose: "blog",    
      category: 'Plumbing Repair',
      title: "Water damage and plumbing repair",
      date: "Jan 29, 2023",
      author: "Brian McGee",
      body: "There was some mositure damaged drywall and a loose shower arm so we fixed it all on this one. Added some blocking for the shower arm and removed and replaced the damaged drywall. Oh yeah we added a clean access panel for the plumbing. Another happy client!",
      img2: "../assets/gallery/plumbing-repair1.jpg",
      img1: "../assets/gallery/plumbing-repair2.jpg",
      project: ""
    },
    {
      purpose: "blog",
      category: 'Kitchen Remodel',
      title: "Kitchen Remodel",
      date: "Feb 08, 2023",
      author: "Brian McGee",
      body: "We have been working this on over a couple trips. First we refinished all the walls and rework the electrical for updated appliances and added some lights. We just recently went back, the homeowner had the walls painted and cabinets assemblied. We installed all the cabinets on the walls and trimmed out. We will be back after the counters to finish the plumbing.",
      img1: "../assets/gallery/kitchen-cabinet1.jpg",
      img2: "../assets/gallery/kitchen-cabinet2.jpg",
      project:  "kitchen-remodel-ah"
    },  
    { //22
      purpose: "blog",
      category: 'Bathroom Remodel',
      title: "Demo day - Start of bathroom remodel",
      date: "Feb 14, 2023",
      author: "Brian McGee",
      body: "Great start day on this bathroom project here in Greensburg, the weather is awesome. Demo day - We are taking everything out down to the wood studs. This bathroom will be getting a complete update with all new fixtures, paint and flooring. Make sure to stop back to check the progress!",
      img1: "../assets/gallery/bathroom-demo1.jpg",
      img2: "../assets/gallery/bathroom-demo2.jpg",
      project: "bathroom-remodel-rm"
    },
    {
      purpose: "blog",
      category: 'Bathroom Remodel',
      title: "Bathroom all cleaned and gutted ready for install",
      date: "Feb 15, 2023",
      author: "Brian McGee",
      body: "Well today was great we got this bathroom all clean out. Vaccumed all the rocks and coal dust out and picked up all the material for the installation. We are all set and ready for a fresh start in the morning.",
      img1: "../assets/gallery/bathroom-demo4.jpg",
      img2: "../assets/gallery/bathroom-demo3.jpg",
      project: "bathroom-remodel-rm"
    },
    {
      purpose: "blog",
      category: 'Bathroom Remodel',
      title: "Acrylic tub/shower combo with fresh plumbing.",
      date: "Feb 17, 2023",
      author: "Brian McGee",
      body: "We finished installing the tub and shower acrylic combo and have the accesories installed all in oil-rubbed bronze finish. We've made the shower back available for use over the weekend. This shower looks awesome, even has a recessed niche for accent tile and all of the soaps - plus its low maintenance and super easy to clean.",
      img2: "../assets/gallery/plumbing-tub.jpg",
      img1: "../assets/gallery/bathroom3-gb.jpg",
      project: "bathroom-remodel-rm"
    },
    {
      purpose: "blog",
      category: 'Bathroom Remodel',
      title: "Drywall finishing smooth - bathroom remodel.",
      date: "Feb 21, 2023",
      author: "Brian McGee",
      body: "Rainy day today! We are currently in-progress on the bathroom remodel. All the drywall boards are installed and we are in progress of finishing the boards in a smooth finish. This bathroom is coming together quite nice! I just love the oil-rubbed bronze finish and subway tile look!",
      img1: "../assets/gallery/bathroom4-gb.jpg",
      img2: "../assets/gallery/bathroom5-gb.jpg",
      project: "bathroom-remodel-rm"
    },
    {
      purpose: "blog",
      category: 'Bathroom Remodel',
      title: "Finishing the smooth finish drywall",
      date: "Feb 22, 2023",
      author: "Brian McGee",
      body: "Well another wet day but we made it back on site and finished the mud work on the walls. It's still drying so we will have to wait to sand and paint. Thought a before and in-progress pic drop was necessary. Check back for completion of this awesome bathroom project!",
      img1: "../assets/gallery/bathroom-in-prog-gb.jpg",
      img2: "../assets/gallery/bathroom-before-gb.jpg",
      project: "bathroom-remodel-rm"
    },
    {
      purpose: "blog",
      category: 'Bathroom Remodel',
      title: "Floor and toilet install with some painting",
      date: "Feb 24, 2023",
      author: "Brian McGee",
      body: "We have the walls all painted and LVT vinyl floors installed over a padding, beautiful floor. Tiolets installed and ready for use. We shall return to finish this awesome space out.",
      img1: "../assets/gallery/floor1b.jpg",
      img2: "../assets/gallery/floor1a.jpg",
      project: "bathroom-remodel-rm"
    },
    {
      purpose: "blog",
      category: 'Bathroom Remodel',
      title: "Stained door install with new rustic vanity",
      date: "Feb 28, 2023",
      author: "Brian McGee",
      body: "We stained the door ealier in the week and let it dry, now we installed the new oak door stained and all trimed out. Vanity is also installed and looks awesome. This bathroom is surely coming along. Check back as we finish this space.",
      img1: "../assets/gallery/door-hung.jpg",
      img2: "../assets/gallery/door-stain.jpg",
      project: "bathroom-remodel-rm"
    },
    {
      purpose: "blog",
      category: 'Bathroom Remodel',
      title: "Awesome Bathroom Remodel all wrapped up",
      date: "March 2, 2023",
      author: "Brian McGee",
      body: "We are all wrapped up out here on this bathroom remodel. Final touches and punch out today. We've installed all the accesories. Beautiful 2-tone paint which complements the rustic cabinets. We hope the homeowners enjoy this space just as much as we enjoyed this project! Job well done!",
      img1: "../assets/gallery/bath-complete1a.jpg",
      img2: "../assets/gallery/bath-complete1b.jpg",
      project: "bathroom-remodel-rm"
    },
    {
      purpose: "blog",
      category: 'Custom Decks',
      title: "Spring is almost here, time for home projects",
      date: "March 4, 2023",
      author: "Brian McGee",
      body: "The beautiful weather is coming and what more to enjoy it on the beautiful new deck by BRM. Need a new bathroom, we can help. Bathroom remodel and general home repair. Call or connect today for a free estimate!",
      img2: "../assets/gallery/--bg-bath.jpg",
      img1: "../assets/gallery/custom-deck2.jpg",
      project: "ad"
    }

  ];



  


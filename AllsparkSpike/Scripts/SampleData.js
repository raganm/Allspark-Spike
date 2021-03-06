﻿window.jsonData =
   [
       {
           "Name": "covertype",
           "Description": "Type of cover required using CTM values"
       },
       {
           "Name": "coverstartdate",
           "Description": "Cover strat date"
       },
       {
           "Name": "paymentfrequency",
           "Description": "Payment frequency requested"
       },
       {
           "Name": "policyholders",
           "Description": "Policyholder details",
           "Children": [
               {
                   "Name": "primarypolicyholder",
                   "Description": "Primary policy holder details",
                   "Children": [
                       {
                           "Name": "title",
                           "Description": "Title using CTM codes"
                       },
                       {
                           "Name": "firstname",
                           "Description": "First name or forename"
                       },
                       {
                           "Name": "lastname",
                           "Description": "Last name or surname"
                       },
                       {
                           "Name": "dateofbirth",
                           "Description": "Birth date"
                       },
                       {
                           "Name": "maritalstatus",
                           "Description": "Marital status using CTM codes"
                       },
                       {
                           "Name": "employment",
                           "Description": "Employment details",
                           "Children": [
                               {
                                   "Name": "status",
                                   "Description": "MISSING"
                               },
                               {
                                   "Name": "primaryoccupation",
                                   "Description": "The main occupation of a person",
                                   "Children": [
                                       {
                                           "Name": "occupation",
                                           "Description": "The occupation or job title of a person using ABI code"
                                       },
                                       {
                                           "Name": "businesstype",
                                           "Description": "The industry a person works within using ABI code"
                                       }
                                   ]
                               },
                               {
                                   "Name": "secondaryoccupation",
                                   "Description": "The second occupation of a person",
                                   "Children": [
                                       {
                                           "Name": "occupation",
                                           "Description": "The occupation or job title of a person using ABI code"
                                       },
                                       {
                                           "Name": "businesstype",
                                           "Description": "The industry a person works within using ABI code"
                                       }
                                   ]
                               }
                           ]
                       }
                   ]
               },
               {
                   "Name": "secondarypolicyholder",
                   "Description": "Secondary or joint policy holder details",
                   "Children": [
                       {
                           "Name": "relationshiptoprimarypolicyholder",
                           "Description": "MISSING"
                       },
                       {
                           "Name": "title",
                           "Description": "Title using CTM codes"
                       },
                       {
                           "Name": "firstname",
                           "Description": "First name or forename"
                       },
                       {
                           "Name": "lastname",
                           "Description": "Last name or surname"
                       },
                       {
                           "Name": "dateofbirth",
                           "Description": "Birth date"
                       },
                       {
                           "Name": "maritalstatus",
                           "Description": "Marital status using CTM codes"
                       },
                       {
                           "Name": "employment",
                           "Description": "Employment details",
                           "Children": [
                               {
                                   "Name": "status",
                                   "Description": "MISSING"
                               },
                               {
                                   "Name": "primaryoccupation",
                                   "Description": "The main occupation of a person",
                                   "Children": [
                                       {
                                           "Name": "occupation",
                                           "Description": "The occupation or job title of a person using ABI code"
                                       },
                                       {
                                           "Name": "businesstype",
                                           "Description": "The industry a person works within using ABI code"
                                       }
                                   ]
                               },
                               {
                                   "Name": "secondaryoccupation",
                                   "Description": "The second occupation of a person",
                                   "Children": [
                                       {
                                           "Name": "occupation",
                                           "Description": "The occupation or job title of a person using ABI code"
                                       },
                                       {
                                           "Name": "businesstype",
                                           "Description": "The industry a person works within using ABI code"
                                       }
                                   ]
                               }
                           ]
                       }
                   ]
               }
           ]
       },
       {
           "Name": "contactdetails",
           "Description": "Contact details",
           "Children": [
               {
                   "Name": "emailaddress",
                   "Description": "Contact email address"
               },
               {
                   "Name": "telephonenumber",
                   "Description": "Contact Telephone Number"
               },
               {
                   "Name": "correspondenceaddress",
                   "Description": "Correspondence address",
                   "Children": [
                       {
                           "Name": "addressline1",
                           "Description": "First address line"
                       },
                       {
                           "Name": "addressline2",
                           "Description": "Second address line"
                       },
                       {
                           "Name": "addressline3",
                           "Description": "Third address line"
                       },
                       {
                           "Name": "addressline4",
                           "Description": "Fourth address line"
                       },
                       {
                           "Name": "postcode",
                           "Description": "Post Code including space"
                       }
                   ]
               },
               {
                   "Name": "differentaddressreason",
                   "Description": "MISSING"
               }
           ]
       },
       {
           "Name": "property",
           "Description": "Property details",
           "Children": [
               {
                   "Name": "ownershipstatus",
                   "Description": "Ownership of the property using ABI codes"
               },
               {
                   "Name": "listed",
                   "Description": "Property listing using ABI code"
               },
               {
                   "Name": "riskaddress",
                   "Description": "Address of property to be insured",
                   "Children": [
                       {
                           "Name": "addressline1",
                           "Description": "First address line"
                       },
                       {
                           "Name": "addressline2",
                           "Description": "Second address line"
                       },
                       {
                           "Name": "addressline3",
                           "Description": "Third address line"
                       },
                       {
                           "Name": "addressline4",
                           "Description": "Fourth address line"
                       },
                       {
                           "Name": "postcode",
                           "Description": "Post Code including space"
                       }
                   ]
               },
               {
                   "Name": "construction",
                   "Description": "Details of how property constructed",
                   "Children": [
                       {
                           "Name": "type",
                           "Description": "Type of property using CTM codes, some ABI"
                       },
                       {
                           "Name": "wallconstruction",
                           "Description": "What the property external walls are made of using CTM codes, some ABI"
                       },
                       {
                           "Name": "roofconstruction",
                           "Description": "What the property roof is made of using CTM codes, some ABI"
                       },
                       {
                           "Name": "flatroof",
                           "Description": "Percentage of the roof that is flat"
                       },
                       {
                           "Name": "yearbuilt",
                           "Description": "Year property was built as yyyy"
                       }
                   ]
               },
               {
                   "Name": "rooms",
                   "Description": "Details of the rooms in the property",
                   "Children": [
                       {
                           "Name": "bedrooms",
                           "Description": "Number of bedrooms in property 1-10"
                       },
                       {
                           "Name": "bathrooms",
                           "Description": "Number of bathrooms in property 0-10"
                       },
                       {
                           "Name": "receptions",
                           "Description": "Number of reception rooms in property 0-10"
                       },
                       {
                           "Name": "other",
                           "Description": "Number of other rooms in property 0-10"
                       }
                   ]
               },
               {
                   "Name": "use",
                   "Description": "Details of how the property is used\/occupied",
                   "Children": [
                       {
                           "Name": "occupancystatus",
                           "Description": "When is the property occupied using CTM code"
                       },
                       {
                           "Name": "howlonglivedatproperty",
                           "Description": "How long policy holder has lived at the property 0-99"
                       },
                       {
                           "Name": "businessuse",
                           "Description": "Type of business use using CTM codes"
                       },
                       {
                           "Name": "unoccupieddetails",
                           "Description": "Unoccupancy details",
                           "Children": [
                               {
                                   "Name": "reason",
                                   "Description": "Reason the property is currently unoccupied using CTM codes"
                               },
                               {
                                   "Name": "period",
                                   "Description": "Period the currently unoccupied property will be unoccupied for using CTM codes"
                               }
                           ]
                       },
                       {
                           "Name": "occupieddetails",
                           "Description": "Occupancy details",
                           "Children": [
                               {
                                   "Name": "maxunoccupiedduration",
                                   "Description": "If property is to be left unoccupied for more than 30 days, maximum period unoccupied"
                               },
                               {
                                   "Name": "occupancytype",
                                   "Description": "General occupancy of the property day\/night\/both"
                               }
                           ]
                       }
                   ]
               },
               {
                   "Name": "residents",
                   "Description": "Details of the residents using the property",
                   "Children": [
                       {
                           "Name": "type",
                           "Description": "Type of property using CTM codes, some ABI"
                       },
                       {
                           "Name": "nonfamilymembers",
                           "Description": "Number of non-family members living at the property 0-20"
                       },
                       {
                           "Name": "children",
                           "Description": "Number of children living at the property 0-10"
                       },
                       {
                           "Name": "adults",
                           "Description": "Number of adults living at the property 0-10"
                       }
                   ]
               }
           ]
       },
       {
           "Name": "buildingscover",
           "Description": "Buildings cover details",
           "Children": [
               {
                   "Name": "claimfreeyears",
                   "Description": "How many claim free years buldings cover is there 0-9"
               },
               {
                   "Name": "suminsured",
                   "Description": "Rebuild cost of the property"
               },
               {
                   "Name": "voluntaryexcess",
                   "Description": "Voluntary excess requested on buildings cover using CTM values"
               }
           ]
       },
       {
           "Name": "contentscover",
           "Description": "Contents cover details",
           "Children": [
               {
                   "Name": "claimfreeyears",
                   "Description": "How many claim free years buldings cover is there 0-9"
               },
               {
                   "Name": "suminsured",
                   "Description": "Rebuild cost of the property"
               },
               {
                   "Name": "highriskitemvalue",
                   "Description": "Total value of high risk items as entered by customer"
               },
               {
                   "Name": "personalpossessioncover",
                   "Description": "Amount of personal possessions cover away from home as entered by customer"
               },
               {
                   "Name": "voluntaryexcess",
                   "Description": "Voluntary excess requested on buildings cover using CTM values"
               },
               {
                   "Name": "security",
                   "Description": "Household security details",
                   "Children": [
                       {
                           "Name": "maindoortype",
                           "Description": "MISSING"
                       },
                       {
                           "Name": "slidingdoortype",
                           "Description": "MISSING"
                       },
                       {
                           "Name": "otherextdoortype",
                           "Description": "MISSING"
                       }
                   ]
               }
           ]
       }
   ];
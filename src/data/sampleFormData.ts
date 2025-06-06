import { FormData } from "@/lib/dntel";

export const sampleFormData: FormData = {
    "sections": {
      "VerificationInformation": {
        "order": 1,
        "layout": "left",
        "title": "Verification Information",
        "tooltip": "Information collected during the verification call",
        "bgColor": "#f4fae6",
        "fields": {
          "InsuranceRepresentativeName": {
            "value": "",
            "title": "Insurance Representative Name",
            "interface": {
              "type": "text"
            },
            "key": "VerificationInformation.InsuranceRepresentativeName",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "hidden": false,
            "placeholder": "Insurance Representative Name",
            "disabled": false,
            "tooltip": "Insurance Representative Name",
            "colSpan": "1"
          },
          "CallReferenceNumber": {
            "value": "",
            "title": "Call Reference Number",
            "interface": {
              "type": "text"
            },
            "key": "VerificationInformation.CallReferenceNumber",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "hidden": false,
            "placeholder": "Call Reference Number",
            "disabled": false,
            "tooltip": "Call Reference Number",
            "colSpan": "1"
          },
          "AdditionalInformation": {
            "value": "",
            "title": "Additional Information",
            "interface": {
              "type": "text"
            },
            "key": "VerificationInformation.AdditionalInformation",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "hidden": false,
            "placeholder": "Additional Information",
            "disabled": false,
            "tooltip": "Additional Information",
            "colSpan": "1"
          }
        },
        "stats": {
          "total": 3,
          "filled": 0
        }
      },
      "PatientInformation": {
        "order": 2,
        "layout": "right",
        "title": "Patient Information",
        "tooltip": "Patient's demographic and insurance details",
        "bgColor": "#eefbf5",
        "fields": {
          "PatientName": {
            "value": "Ricardo Boada",
            "title": "Patient Name",
            "interface": {
              "type": "text"
            },
            "key": "PatientInformation.PatientName",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "source": {
              "channel": "prefill",
              "system": {
                "id": "prefill"
              },
              "timestamp": "2024-12-16T17:55:29.005Z"
            },
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "DateOfBirth": {
            "value": "4/14/89",
            "title": "Date Of Birth",
            "interface": {
              "type": "date"
            },
            "key": "PatientInformation.DateOfBirth",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "source": {
              "channel": "prefill",
              "system": {
                "id": "prefill"
              },
              "timestamp": "2024-12-16T17:55:29.005Z"
            },
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "SubscriberID": {
            "value": "796380844 01",
            "title": "Subscriber ID",
            "interface": {
              "type": "text"
            },
            "key": "PatientInformation.SubscriberID",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "source": {
              "channel": "prefill",
              "system": {
                "id": "prefill"
              },
              "timestamp": "2024-12-16T17:55:29.005Z"
            },
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "SubscriberName": {
            "value": "Ricardo Boada",
            "title": "Subscriber Name",
            "interface": {
              "type": "text"
            },
            "key": "PatientInformation.SubscriberName",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "source": {
              "channel": "prefill",
              "system": {
                "id": "prefill"
              },
              "timestamp": "2024-12-16T17:55:29.005Z"
            },
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "SubscriberDOB": {
            "value": "4/14/89",
            "title": "Subscriber DOB",
            "interface": {
              "type": "date"
            },
            "key": "PatientInformation.SubscriberDOB",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "source": {
              "channel": "prefill",
              "system": {
                "id": "prefill"
              },
              "timestamp": "2024-12-16T17:55:29.005Z"
            },
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "TodaysDate": {
            "value": "12/16/2024",
            "title": "Todays Date",
            "interface": {
              "type": "date"
            },
            "key": "PatientInformation.TodaysDate",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "source": {
              "channel": "prefill",
              "system": {
                "id": "prefill"
              },
              "timestamp": "2024-12-16T17:55:29.005Z"
            },
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "DateOfService": {
            "value": "12/19/2024",
            "title": "Date Of Service",
            "interface": {
              "type": "date"
            },
            "key": "PatientInformation.DateOfService",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "source": {
              "channel": "prefill",
              "system": {
                "id": "prefill"
              },
              "timestamp": "2024-12-16T17:55:29.005Z"
            },
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "ZipCode": {
            "value": "33186",
            "title": "Zip Code",
            "interface": {
              "type": "text"
            },
            "key": "PatientInformation.ZipCode",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "source": {
              "channel": "prefill",
              "system": {
                "id": "prefill"
              },
              "timestamp": "2024-12-16T17:55:29.005Z"
            },
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "InsuredRelation": {
            "value": "",
            "title": "Insured Relation",
            "interface": {
              "type": "select",
              "options": ["SELF", "SPOUSE", "CHILD", "DEPENDANT", "OTHER"]
            },
            "key": "PatientInformation.InsuredRelation",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "COB": {
            "value": "",
            "title": "COB",
            "interface": {
              "type": "select",
              "options": ["Standard", "Non Duplication", "Birthday"]
            },
            "key": "PatientInformation.COB",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance", "No COB"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          }
        },
        "stats": {
          "total": 10,
          "filled": 8
        }
      },
      "InsuranceInformation": {
        "order": 3,
        "layout": "full",
        "title": "Insurance Information",
        "tooltip": "Insurance policy and coverage details",
        "bgColor": "#e4f1e8",
        "fields": {
          "InsuranceProvider": {
            "value": "Cigna",
            "title": "Insurance Provider",
            "interface": {
              "type": "text"
            },
            "key": "InsuranceInformation.InsuranceProvider",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "source": {
              "channel": "prefill",
              "system": {
                "id": "prefill"
              },
              "timestamp": "2024-12-16T17:55:29.005Z"
            },
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "PlanType": {
            "value": "",
            "title": "Plan Type",
            "interface": {
              "type": "text"
            },
            "key": "InsuranceInformation.PlanType",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "GroupName": {
            "value": "",
            "title": "Group Name",
            "interface": {
              "type": "text"
            },
            "key": "InsuranceInformation.GroupName",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "GroupNumber": {
            "value": "",
            "title": "Group Number",
            "interface": {
              "type": "text"
            },
            "key": "InsuranceInformation.GroupNumber",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "EffectiveDate": {
            "value": "",
            "title": "Effective Date",
            "interface": {
              "type": "date"
            },
            "key": "InsuranceInformation.EffectiveDate",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "PlanStartDate": {
            "value": "",
            "title": "Plan Start Date",
            "interface": {
              "type": "date"
            },
            "key": "InsuranceInformation.PlanStartDate",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "PlanYear": {
            "value": "",
            "title": "Plan Year",
            "interface": {
              "type": "select",
              "options": ["CALENDAR", "FISCAL"]
            },
            "key": "InsuranceInformation.PlanYear",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "FiscalPlanMonth": {
            "value": "",
            "title": "Fiscal Plan Month",
            "interface": {
              "type": "select",
              "options": [
                "JAN",
                "FEB",
                "MAR",
                "APR",
                "MAY",
                "JUN",
                "JUL",
                "AUG",
                "SEP",
                "OCT",
                "NOV",
                "DEC"
              ]
            },
            "key": "InsuranceInformation.FiscalPlanMonth",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "InOutOfNetwork": {
            "value": "",
            "title": "In Out Of Network",
            "interface": {
              "type": "select",
              "options": ["IN", "OUT"]
            },
            "key": "InsuranceInformation.InOutOfNetwork",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "InsuranceCompanyPhoneNumber": {
            "value": "+1-800-244-6224",
            "title": "Insurance Company Phone Number",
            "interface": {
              "type": "text"
            },
            "key": "InsuranceInformation.InsuranceCompanyPhoneNumber",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "source": {
              "channel": "prefill",
              "system": {
                "id": "prefill"
              },
              "timestamp": "2024-12-16T17:55:29.005Z"
            },
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "InsuranceClaimMailingAddress": {
            "value": "PO Box 182223, Chattanooga, TN, 37422, USA",
            "title": "Insurance Claim Mailing Address",
            "interface": {
              "type": "text"
            },
            "key": "InsuranceInformation.InsuranceClaimMailingAddress",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "source": {
              "channel": "prefill",
              "system": {
                "id": "prefill"
              },
              "timestamp": "2024-12-16T17:55:29.005Z"
            },
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "PayorID": {
            "value": "jjnjjh",
            "title": "Payor ID",
            "interface": {
              "type": "text"
            },
            "key": "InsuranceInformation.PayorID",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "source": {
              "channel": "human",
              "human": {
                "id": "67372f59b6cb243204a0a1b8",
                "name": "Ayush Pathak",
                "email": "ayush@induced.ai"
              },
              "timestamp": "2024-12-21T04:46:10.316Z"
            },
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          }
        },
        "stats": {
          "total": 12,
          "filled": 4
        }
      },
      "CoveragePercentages": {
        "order": 4,
        "layout": "full",
        "title": "Coverage Percentages",
        "bgColor": "#e4f1e8",
        "fields": {
          "Diagnostic": {
            "value": "",
            "title": "Diagnostic",
            "interface": {
              "type": "text"
            },
            "key": "CoveragePercentages.Diagnostic.percentage",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "Preventive": {
            "value": "jhhjjh",
            "title": "Preventive",
            "interface": {
              "type": "text"
            },
            "key": "CoveragePercentages.Preventive.percentage",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "source": {
              "channel": "human",
              "human": {
                "id": "67372f59b6cb243204a0a1b8",
                "name": "Ayush Pathak",
                "email": "ayush@induced.ai"
              },
              "timestamp": "2024-12-21T04:46:10.317Z"
            },
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "Basic": {
            "value": "jhjh",
            "title": "Basic",
            "interface": {
              "type": "text"
            },
            "key": "CoveragePercentages.Basic.percentage",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "source": {
              "channel": "human",
              "human": {
                "id": "67372f59b6cb243204a0a1b8",
                "name": "Ayush Pathak",
                "email": "ayush@induced.ai"
              },
              "timestamp": "2024-12-21T04:46:10.317Z"
            },
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "Major": {
            "value": "jjhjh",
            "title": "Major",
            "interface": {
              "type": "text"
            },
            "key": "CoveragePercentages.Major.percentage",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "source": {
              "channel": "human",
              "human": {
                "id": "67372f59b6cb243204a0a1b8",
                "name": "Ayush Pathak",
                "email": "ayush@induced.ai"
              },
              "timestamp": "2024-12-21T04:46:10.317Z"
            },
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "Endodontics": {
            "value": "",
            "title": "Endodontics",
            "interface": {
              "type": "text"
            },
            "key": "CoveragePercentages.Endodontics.percentage",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "Periodontics": {
            "value": "",
            "title": "Periodontics",
            "interface": {
              "type": "text"
            },
            "key": "CoveragePercentages.Periodontics.percentage",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "OralSurgery": {
            "value": "",
            "title": "OralSurgery",
            "interface": {
              "type": "text"
            },
            "key": "CoveragePercentages.OralSurgery.percentage",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "Orthodontics": {
            "value": "",
            "title": "Orthodontics",
            "interface": {
              "type": "text"
            },
            "key": "CoveragePercentages.Orthodontics.percentage",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not Applicable"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          }
        },
        "stats": {
          "total": 8,
          "filled": 3
        }
      },
      "MaximumsAndDeductibles": {
        "order": 5,
        "layout": "full",
        "title": "Maximums And Deductibles",
        "bgColor": "#eefbf5",
        "fields": {
          "AnnualIndividualMaximum": {
            "value": "",
            "title": "Annual Individual Maximum",
            "interface": {
              "type": "text"
            },
            "key": "MaximumsAndDeductibles.AnnualIndividualMaximum",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance", "No Maximum"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "AnnualIndividualMaximumUsed": {
            "value": "",
            "title": "Annual Individual Maximum Used",
            "interface": {
              "type": "text"
            },
            "key": "MaximumsAndDeductibles.AnnualIndividualMaximumUsed",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance", "No Maximum"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "IndividualAnnualDeductible": {
            "value": "",
            "title": "Individual Annual Deductible",
            "interface": {
              "type": "text"
            },
            "key": "MaximumsAndDeductibles.IndividualAnnualDeductible",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance", "No Deductible"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "IndividualAnnualDeductibleUsed": {
            "value": "",
            "title": "Individual Annual Deductible Used",
            "interface": {
              "type": "text"
            },
            "key": "MaximumsAndDeductibles.IndividualAnnualDeductibleUsed",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance", "No Deductible"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "FamilyAnnualDeductible": {
            "value": "",
            "title": "Family Annual Deductible",
            "interface": {
              "type": "text"
            },
            "key": "MaximumsAndDeductibles.FamilyAnnualDeductible",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance", "No Deductible"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "FamilyAnnualDeductibleUsed": {
            "value": "",
            "title": "Family Annual Deductible Used",
            "interface": {
              "type": "text"
            },
            "key": "MaximumsAndDeductibles.FamilyAnnualDeductibleUsed",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance", "No Deductible"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "Annual individual deductible applies to preventative or diagnostic?": {
            "value": "",
            "title": "Annual individual deductible applies to preventative or diagnostic?",
            "interface": {
              "type": "text"
            },
            "key": "CustomQuestions.2.answer",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          }
        },
        "stats": {
          "total": 7,
          "filled": 0
        }
      },
      "Questions": {
        "order": 6,
        "layout": "full",
        "title": "Questions",
        "bgColor": "#f4fae6",
        "fields": {
          "Is there a missing tooth clause?": {
            "value": "",
            "title": "Is there a missing tooth clause?",
            "interface": {
              "type": "text"
            },
            "key": "CustomQuestions.0.answer",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "What waiting periods exist?": {
            "value": "",
            "title": "What waiting periods exist?",
            "interface": {
              "type": "text"
            },
            "key": "CustomQuestions.1.answer",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "Can Pano and Bitewings be done the same day?": {
            "value": "",
            "title": "Can Pano and Bitewings be done the same day?",
            "interface": {
              "type": "text"
            },
            "key": "CustomQuestions.3.answer",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "Crowns paid on prep or seat date?": {
            "value": "",
            "title": "Crowns paid on prep or seat date?",
            "interface": {
              "type": "text"
            },
            "key": "CustomQuestions.5.answer",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          }
        },
        "stats": {
          "total": 4,
          "filled": 0
        }
      },
      "OrthodonticInformation": {
        "order": 7,
        "layout": "full",
        "title": "Orthodontic Information",
        "bgColor": "#e5faee",
        "fields": {
          "AgeLimit": {
            "value": "",
            "title": "Age Limit",
            "interface": {
              "type": "text"
            },
            "key": "OrthodonticInformation.AgeLimit",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance", "Not Covered"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "OrthoLifetimeMaximum": {
            "value": "",
            "title": "Ortho Lifetime Maximum",
            "interface": {
              "type": "text"
            },
            "key": "OrthodonticInformation.OrthoLifetimeMaximum",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance", "No Maximum"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "OrthoLifetimeMaximumUsed": {
            "value": "",
            "title": "Ortho Lifetime Maximum Used",
            "interface": {
              "type": "text"
            },
            "key": "OrthodonticInformation.OrthoLifetimeMaximumUsed",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance", "No Maximum"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "OrthoIndividualDeductibleAmount": {
            "value": "",
            "title": "Ortho Individual Deductible Amount",
            "interface": {
              "type": "text"
            },
            "key": "OrthodonticInformation.OrthoIndividualDeductibleAmount",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance", "No Deductible"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          },
          "OrthoIndividualDeductibleAmountUsed": {
            "value": "",
            "title": "Ortho Individual Deductible Amount Used",
            "interface": {
              "type": "text"
            },
            "key": "OrthodonticInformation.OrthoIndividualDeductibleAmountUsed",
            "required": false,
            "defaultValue": "",
            "defaultOptions": ["Not provided by Insurance", "No Deductible"],
            "hidden": false,
            "placeholder": "",
            "disabled": false,
            "tooltip": "",
            "colSpan": "2"
          }
        },
        "stats": {
          "total": 5,
          "filled": 0
        }
      },
      "ServiceHistory": {
        "order": 8,
        "layout": "full",
        "title": "Service History",
        "module": "ServiceHistory",
        "bgColor": "#e5faee",
        "fields": [
          {
            "Category": {
              "value": "Exams History",
              "title": "Category",
              "interface": {
                "type": "text"
              },
              "key": "ServiceHistory.0.Category",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not Applicable"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "Services": [
              {
                "CDTCode": {
                  "value": "D0140",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.0.Services.0.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "Emergency Exam",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.0.Services.0.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.0.Services.0.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              },
              {
                "CDTCode": {
                  "value": "D0150",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.0.Services.1.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "New Patient Exam",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.0.Services.1.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.0.Services.1.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              },
              {
                "CDTCode": {
                  "value": "D0120",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.0.Services.2.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "Regular Checkup",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.0.Services.2.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.0.Services.2.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              }
            ]
          },
          {
            "Category": {
              "value": "FMX History",
              "title": "Category",
              "interface": {
                "type": "text"
              },
              "key": "ServiceHistory.1.Category",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not Applicable"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "Services": [
              {
                "CDTCode": {
                  "value": "D0210",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.1.Services.0.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "Full Mouth X-rays",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.1.Services.0.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.1.Services.0.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              }
            ]
          },
          {
            "Category": {
              "value": "Pano History",
              "title": "Category",
              "interface": {
                "type": "text"
              },
              "key": "ServiceHistory.2.Category",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not Applicable"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "Services": [
              {
                "CDTCode": {
                  "value": "D0330",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.2.Services.0.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "Panoramic X-ray",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.2.Services.0.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.2.Services.0.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              }
            ]
          },
          {
            "Category": {
              "value": "Prophy History",
              "title": "Category",
              "interface": {
                "type": "text"
              },
              "key": "ServiceHistory.3.Category",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not Applicable"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "Services": [
              {
                "CDTCode": {
                  "value": "D1110",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.3.Services.0.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "Adult Cleaning",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.3.Services.0.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.3.Services.0.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              },
              {
                "CDTCode": {
                  "value": "D1120",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.3.Services.1.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "Child Cleaning",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.3.Services.1.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.3.Services.1.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              }
            ]
          },
          {
            "Category": {
              "value": "Perio Maintenance History",
              "title": "Category",
              "interface": {
                "type": "text"
              },
              "key": "ServiceHistory.4.Category",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not Applicable"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "Services": [
              {
                "CDTCode": {
                  "value": "D4910",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.4.Services.0.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "Perio Maintenance",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.4.Services.0.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.4.Services.0.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              }
            ]
          },
          {
            "Category": {
              "value": "SRP History",
              "title": "Category",
              "interface": {
                "type": "text"
              },
              "key": "ServiceHistory.5.Category",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not Applicable"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "Services": [
              {
                "CDTCode": {
                  "value": "D4341",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.5.Services.0.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "Deep Cleaning Four+ Teeth",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.5.Services.0.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.5.Services.0.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              },
              {
                "CDTCode": {
                  "value": "D4342",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.5.Services.1.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "Deep Cleaning One-Three Teeth",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.5.Services.1.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.5.Services.1.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              }
            ]
          },
          {
            "Category": {
              "value": "Bitewing History",
              "title": "Category",
              "interface": {
                "type": "text"
              },
              "key": "ServiceHistory.6.Category",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not Applicable"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "Services": [
              {
                "CDTCode": {
                  "value": "D0274",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.6.Services.0.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "Four Bitewing X-rays",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.6.Services.0.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.6.Services.0.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              },
              {
                "CDTCode": {
                  "value": "D0270",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.6.Services.1.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "Single Bitewing X-ray",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.6.Services.1.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.6.Services.1.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              }
            ]
          },
          {
            "Category": {
              "value": "Crown History",
              "title": "Category",
              "interface": {
                "type": "text"
              },
              "key": "ServiceHistory.7.Category",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not Applicable"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "Services": [
              {
                "CDTCode": {
                  "value": "D2740",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.7.Services.0.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "Porcelain Crown",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.7.Services.0.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.7.Services.0.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              }
            ]
          },
          {
            "Category": {
              "value": "Filling History",
              "title": "Category",
              "interface": {
                "type": "text"
              },
              "key": "ServiceHistory.8.Category",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not Applicable"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "Services": [
              {
                "CDTCode": {
                  "value": "D2391",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.8.Services.0.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "One Surface Back Composite",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.8.Services.0.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.8.Services.0.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              },
              {
                "CDTCode": {
                  "value": "D2330",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.8.Services.1.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "One Surface Front Composite",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.8.Services.1.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.8.Services.1.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              }
            ]
          },
          {
            "Category": {
              "value": "Implant History",
              "title": "Category",
              "interface": {
                "type": "text"
              },
              "key": "ServiceHistory.9.Category",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not Applicable"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "Services": [
              {
                "CDTCode": {
                  "value": "D6010",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.9.Services.0.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "Surgical Implant",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.9.Services.0.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.9.Services.0.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              }
            ]
          },
          {
            "Category": {
              "value": "Fluoride History",
              "title": "Category",
              "interface": {
                "type": "text"
              },
              "key": "ServiceHistory.10.Category",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not Applicable"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "Services": [
              {
                "CDTCode": {
                  "value": "D1206",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.10.Services.0.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "Fluoride Varnish",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.10.Services.0.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.10.Services.0.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              }
            ]
          },
          {
            "Category": {
              "value": "Occlusal Guard History",
              "title": "Category",
              "interface": {
                "type": "text"
              },
              "key": "ServiceHistory.11.Category",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not Applicable"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "Services": [
              {
                "CDTCode": {
                  "value": "D9944",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.11.Services.0.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "Occlusal Guard - Hard",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.11.Services.0.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.11.Services.0.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              }
            ]
          },
          {
            "Category": {
              "value": "Sealant History",
              "title": "Category",
              "interface": {
                "type": "text"
              },
              "key": "ServiceHistory.12.Category",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not Applicable"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "Services": [
              {
                "CDTCode": {
                  "value": "D1351",
                  "title": "CDT Code",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.12.Services.0.CDTCode",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "FriendlyName": {
                  "value": "Sealant",
                  "title": "Friendly Name",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.12.Services.0.FriendlyName",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": ["Not Applicable"],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                },
                "AllServiceDates": {
                  "value": []
                },
                "LastServiceDate": {
                  "value": "",
                  "title": "Last Service Date",
                  "interface": {
                    "type": "text"
                  },
                  "key": "ServiceHistory.12.Services.0.LastServiceDate",
                  "required": false,
                  "defaultValue": "",
                  "defaultOptions": [
                    "Not provided by Insurance",
                    "No History",
                    "Not Eligible"
                  ],
                  "hidden": false,
                  "placeholder": "",
                  "disabled": false,
                  "tooltip": "",
                  "colSpan": "2"
                }
              }
            ]
          }
        ],
        "stats": {
          "total": 19,
          "filled": 0
        }
      },
      "Codes": {
        "order": 9,
        "layout": "full",
        "module": "codes",
        "title": "Codes",
        "fields": {
          "D0120": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.0.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.0.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Regular Checkup",
            "friendlyName": "Regular Checkup",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D0140": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.2.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.2.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Emergency Exam",
            "friendlyName": "Emergency Exam",
            "guidelines": {
              "Is D0140 a covered benefit if treatment is completed on the same day?": {
                "value": "",
                "title": "Is D0140 a covered benefit if treatment is completed on the same day?",
                "interface": {
                  "type": "text"
                },
                "key": "CustomQuestions.11.answer",
                "required": false,
                "defaultValue": "",
                "defaultOptions": ["Not provided by Insurance"],
                "hidden": false,
                "placeholder": "",
                "disabled": false,
                "tooltip": "",
                "colSpan": "2"
              },
              "Is the frequency shared with D0120?": {
                "value": false,
                "title": "Is the frequency shared with D0120?",
                "interface": {
                  "type": "boolean"
                },
                "key": "SharedFrequencies.1.share",
                "required": false,
                "defaultValue": "",
                "defaultOptions": ["Not provided by Insurance", "No Frequency"],
                "hidden": false,
                "placeholder": "",
                "disabled": false,
                "tooltip": "",
                "colSpan": "2"
              }
            },
            "stats": {
              "total": 4,
              "filled": 1
            }
          },
          "D0150": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.1.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.1.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "New Patient Exam",
            "friendlyName": "New Patient Exam",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D0210": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.5.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.5.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Full Mouth X-rays",
            "friendlyName": "Full Mouth X-rays",
            "guidelines": {
              "Is the frequency shared with D0330?": {
                "value": false,
                "title": "Is the frequency shared with D0330?",
                "interface": {
                  "type": "boolean"
                },
                "key": "SharedFrequencies.2.share",
                "required": false,
                "defaultValue": "",
                "defaultOptions": ["Not provided by Insurance", "No Frequency"],
                "hidden": false,
                "placeholder": "",
                "disabled": false,
                "tooltip": "",
                "colSpan": "2"
              }
            },
            "stats": {
              "total": 3,
              "filled": 1
            }
          },
          "D0220": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.3.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.3.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "First X-ray",
            "friendlyName": "First X-ray",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D0274": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.4.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.4.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Four Bitewing X-rays",
            "friendlyName": "Four Bitewing X-rays",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D0330": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.6.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.6.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Panoramic X-ray",
            "friendlyName": "Panoramic X-ray",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D0350": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.52.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.52.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Oral/Facial Images",
            "friendlyName": "Oral/Facial Images",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D0380": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.47.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Cone Beam Image",
            "friendlyName": "Cone Beam Image",
            "guidelines": {},
            "stats": {
              "total": 1,
              "filled": 0
            }
          },
          "D0431": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.51.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.51.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Cancer Screening",
            "friendlyName": "Cancer Screening",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D0460": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.50.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.50.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Pulp Vitality Tests",
            "friendlyName": "Pulp Vitality Tests",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D1110": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.7.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.7.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Adult Cleaning",
            "friendlyName": "Adult Cleaning",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D1120": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.8.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.8.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Child Cleaning",
            "friendlyName": "Child Cleaning",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D1206": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.9.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.9.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Fluoride Varnish",
            "friendlyName": "Fluoride Varnish",
            "guidelines": {
              "Age Limit for D1206?": {
                "value": "",
                "title": "Age Limit for D1206?",
                "interface": {
                  "type": "text"
                },
                "key": "CommonAgeLimitations.Fluorides.AgeLimit",
                "required": false,
                "defaultValue": "",
                "defaultOptions": ["Not Applicable"],
                "hidden": false,
                "placeholder": "",
                "disabled": false,
                "tooltip": "",
                "colSpan": "2"
              }
            },
            "stats": {
              "total": 3,
              "filled": 0
            }
          },
          "D1351": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.10.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.10.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Sealant",
            "friendlyName": "Sealant",
            "guidelines": {
              "What are the eligible teeth for Sealants?": {
                "value": "",
                "title": "What are the eligible teeth for Sealants?",
                "interface": {
                  "type": "text"
                },
                "key": "CustomQuestions.4.answer",
                "required": false,
                "defaultValue": "",
                "defaultOptions": ["Not provided by Insurance"],
                "hidden": false,
                "placeholder": "",
                "disabled": false,
                "tooltip": "",
                "colSpan": "2"
              },
              "Age Limit for D1351?": {
                "value": "",
                "title": "Age Limit for D1351?",
                "interface": {
                  "type": "text"
                },
                "key": "CommonAgeLimitations.Sealants.AgeLimit",
                "required": false,
                "defaultValue": "",
                "defaultOptions": ["Not Applicable"],
                "hidden": false,
                "placeholder": "",
                "disabled": false,
                "tooltip": "",
                "colSpan": "2"
              }
            },
            "stats": {
              "total": 4,
              "filled": 0
            }
          },
          "D2330": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.11.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.11.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "One Surface Front Composite",
            "friendlyName": "One Surface Front Composite",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D2391": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.12.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.12.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "One Surface Back Composite",
            "friendlyName": "One Surface Back Composite",
            "guidelines": {
              "Are there any downgrades for this code?": {
                "value": "",
                "title": "Are there any downgrades for this code?",
                "interface": {
                  "type": "text"
                },
                "key": "CommonDowngrades.PosteriorComposites.0.to.code",
                "required": false,
                "defaultValue": "",
                "defaultOptions": ["Not Applicable"],
                "hidden": false,
                "placeholder": "",
                "disabled": false,
                "tooltip": "",
                "colSpan": "2"
              }
            },
            "stats": {
              "total": 3,
              "filled": 0
            }
          },
          "D2610": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.13.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.13.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "One Surface Porcelain Inlay",
            "friendlyName": "One Surface Porcelain Inlay",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D2642": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.14.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.14.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Two Surface Porcelain Onlay",
            "friendlyName": "Two Surface Porcelain Onlay",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D2740": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.17.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.17.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Porcelain Crown",
            "friendlyName": "Porcelain Crown",
            "guidelines": {
              "Are there any downgrades for this code?": {
                "value": "",
                "title": "Are there any downgrades for this code?",
                "interface": {
                  "type": "text"
                },
                "key": "CommonDowngrades.Crowns.0.to.code",
                "required": false,
                "defaultValue": "",
                "defaultOptions": ["Not Applicable"],
                "hidden": false,
                "placeholder": "",
                "disabled": false,
                "tooltip": "",
                "colSpan": "2"
              }
            },
            "stats": {
              "total": 3,
              "filled": 0
            }
          },
          "D2920": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.15.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.15.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Recement Crown",
            "friendlyName": "Recement Crown",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D2950": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.18.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.18.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Core Buildup",
            "friendlyName": "Core Buildup",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D2954": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.19.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.19.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Prefab Post and Core",
            "friendlyName": "Prefab Post and Core",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D2991": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.36.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.36.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Resin Infiltration",
            "friendlyName": "Resin Infiltration",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D2999": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.16.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.16.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Unspecified Restoration",
            "friendlyName": "Unspecified Restoration",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D3120": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.46.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Pulp Cap - Indirect",
            "friendlyName": "Pulp Cap - Indirect",
            "guidelines": {},
            "stats": {
              "total": 1,
              "filled": 0
            }
          },
          "D3310": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.20.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.20.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Front Tooth Root Canal",
            "friendlyName": "Front Tooth Root Canal",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D3320": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.21.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.21.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Premolar Root Canal",
            "friendlyName": "Premolar Root Canal",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D3330": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.22.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.22.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Molar Root Canal",
            "friendlyName": "Molar Root Canal",
            "guidelines": {
              "What are the stipulations for D3330?": {
                "value": "",
                "title": "What are the stipulations for D3330?",
                "interface": {
                  "type": "text"
                },
                "key": "CustomQuestions.10.answer",
                "required": false,
                "defaultValue": "",
                "defaultOptions": ["Not provided by Insurance"],
                "hidden": false,
                "placeholder": "",
                "disabled": false,
                "tooltip": "",
                "colSpan": "2"
              }
            },
            "stats": {
              "total": 3,
              "filled": 0
            }
          },
          "D3432": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.49.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Guided Tissue Regeneration",
            "friendlyName": "Guided Tissue Regeneration",
            "guidelines": {},
            "stats": {
              "total": 1,
              "filled": 0
            }
          },
          "D4341": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.23.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.23.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Deep Cleaning Four+ Teeth",
            "friendlyName": "Deep Cleaning Four+ Teeth",
            "guidelines": {
              "SRP - All 4 quads allowed on the same day?": {
                "value": "",
                "title": "SRP - All 4 quads allowed on the same day?",
                "interface": {
                  "type": "text"
                },
                "key": "CustomQuestions.6.answer",
                "required": false,
                "defaultValue": "",
                "defaultOptions": ["Not provided by Insurance"],
                "hidden": false,
                "placeholder": "",
                "disabled": false,
                "tooltip": "",
                "colSpan": "2"
              }
            },
            "stats": {
              "total": 3,
              "filled": 0
            }
          },
          "D4342": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.24.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.24.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Deep Cleaning One-Three Teeth",
            "friendlyName": "Deep Cleaning One-Three Teeth",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D4346": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.26.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.26.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Scaling with Inflammation",
            "friendlyName": "Scaling with Inflammation",
            "guidelines": {
              "Does the annual individual deductible apply to D4346?": {
                "value": "",
                "title": "Does the annual individual deductible apply to D4346?",
                "interface": {
                  "type": "text"
                },
                "key": "CustomQuestions.9.answer",
                "required": false,
                "defaultValue": "",
                "defaultOptions": ["Not provided by Insurance"],
                "hidden": false,
                "placeholder": "",
                "disabled": false,
                "tooltip": "",
                "colSpan": "2"
              },
              "Is D4346 considered preventative?": {
                "value": "",
                "title": "Is D4346 considered preventative?",
                "interface": {
                  "type": "text"
                },
                "key": "CustomQuestions.12.answer",
                "required": false,
                "defaultValue": "",
                "defaultOptions": ["Not provided by Insurance"],
                "hidden": false,
                "placeholder": "",
                "disabled": false,
                "tooltip": "",
                "colSpan": "2"
              }
            },
            "stats": {
              "total": 4,
              "filled": 0
            }
          },
          "D4355": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.27.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.27.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Full Mouth Debridement",
            "friendlyName": "Full Mouth Debridement",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D4381": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.29.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.29.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Localized Antimicrobial",
            "friendlyName": "Localized Antimicrobial",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D4910": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.25.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.25.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Perio Maintenance",
            "friendlyName": "Perio Maintenance",
            "guidelines": {
              "Can D4910 be done after D4346?": {
                "value": "",
                "title": "Can D4910 be done after D4346?",
                "interface": {
                  "type": "text"
                },
                "key": "CustomQuestions.7.answer",
                "required": false,
                "defaultValue": "",
                "defaultOptions": ["Not provided by Insurance"],
                "hidden": false,
                "placeholder": "",
                "disabled": false,
                "tooltip": "",
                "colSpan": "2"
              },
              "How many days between SRP and D4910?": {
                "value": "",
                "title": "How many days between SRP and D4910?",
                "interface": {
                  "type": "text"
                },
                "key": "CustomQuestions.8.answer",
                "required": false,
                "defaultValue": "",
                "defaultOptions": ["Not provided by Insurance"],
                "hidden": false,
                "placeholder": "",
                "disabled": false,
                "tooltip": "",
                "colSpan": "2"
              },
              "Is the frequency shared with D1110?": {
                "value": false,
                "title": "Is the frequency shared with D1110?",
                "interface": {
                  "type": "boolean"
                },
                "key": "SharedFrequencies.0.share",
                "required": false,
                "defaultValue": "",
                "defaultOptions": ["Not provided by Insurance", "No Frequency"],
                "hidden": false,
                "placeholder": "",
                "disabled": false,
                "tooltip": "",
                "colSpan": "2"
              }
            },
            "stats": {
              "total": 5,
              "filled": 1
            }
          },
          "D4921": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.28.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Gingival Irrigation",
            "friendlyName": "Gingival Irrigation",
            "guidelines": {},
            "stats": {
              "total": 1,
              "filled": 0
            }
          },
          "D5110": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.31.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.31.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Complete Upper Denture",
            "friendlyName": "Complete Upper Denture",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D5211": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.32.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.32.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Upper Partial Denture - Resin",
            "friendlyName": "Upper Partial Denture - Resin",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D6010": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.38.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.38.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Surgical Implant",
            "friendlyName": "Surgical Implant",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D6056": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.39.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.39.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Prefabricated Abutment",
            "friendlyName": "Prefabricated Abutment",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D6057": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.40.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.40.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Custom Abutment",
            "friendlyName": "Custom Abutment",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D6058": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.41.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.41.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Implant Crown - Porcelain/Ceramic",
            "friendlyName": "Implant Crown - Porcelain/Ceramic",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D6065": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.42.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.42.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Implant Crown - Porcelain",
            "friendlyName": "Implant Crown - Porcelain",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D6066": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.43.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.43.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Implant Crown - Porcelain/Metal",
            "friendlyName": "Implant Crown - Porcelain/Metal",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D6190": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.45.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Implant Index",
            "friendlyName": "Implant Index",
            "guidelines": {},
            "stats": {
              "total": 1,
              "filled": 0
            }
          },
          "D6245": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.34.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.34.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Pontic - Porcelain/Ceramic",
            "friendlyName": "Pontic - Porcelain/Ceramic",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D6740": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.33.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.33.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Crown - Porcelain/Ceramic",
            "friendlyName": "Crown - Porcelain/Ceramic",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D7210": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.30.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.30.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Surgical Extraction",
            "friendlyName": "Surgical Extraction",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D7953": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.44.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.44.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Bone Replacement Graft",
            "friendlyName": "Bone Replacement Graft",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D9000": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.48.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Application of Desensitizing",
            "friendlyName": "Application of Desensitizing",
            "guidelines": {},
            "stats": {
              "total": 1,
              "filled": 0
            }
          },
          "D9911": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.37.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.37.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Desensitizing Resin",
            "friendlyName": "Desensitizing Resin",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          },
          "D9944": {
            "frequency": {
              "value": "",
              "title": "Frequency",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.35.Frequency",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "No Frequency"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "coveragePercentage": {
              "value": "",
              "title": "Coverage Percentage",
              "interface": {
                "type": "text"
              },
              "key": "CustomCodes.35.CoveragePercentage",
              "required": false,
              "defaultValue": "",
              "defaultOptions": ["Not provided by Insurance", "Not Covered"],
              "hidden": false,
              "placeholder": "",
              "disabled": false,
              "tooltip": "",
              "colSpan": "2"
            },
            "name": "Occlusal Guard - Hard",
            "friendlyName": "Occlusal Guard - Hard",
            "guidelines": {},
            "stats": {
              "total": 2,
              "filled": 0
            }
          }
        },
        "bgColor": "#e6f4f0",
        "stats": {
          "total": 53,
          "filled": 0
        }
      }
    }
  }

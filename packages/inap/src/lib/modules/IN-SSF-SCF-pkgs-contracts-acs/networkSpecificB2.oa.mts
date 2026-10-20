/* eslint-disable */
import { type SCF_SSF_BOUNDS } from "../IN-SSF-SCF-Classes/SCF-SSF-BOUNDS.oca.mjs";


/**
 * @summary networkSpecificB2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * networkSpecificB2 SCF-SSF-BOUNDS ::= {
 *   HIGH-LAYER-COMPATIBILITY-LENGTH                    5 -- example value
 *   MINIMUM-FOR-ACH-BILLING-CHARGING                   1 -- example value
 *   MAXIMUM-FOR-ACH-BILLING-CHARGING                   5 -- example value
 *   MINIMUM-FOR-BACKWARD-GVNS                          1 -- example value
 *   MAXIMUM-FOR-BACKWARD-GVNS                          5 -- example value
 *   MAXIMUM-FOR-BEARER-CAPABILITY                      5 -- example value
 *   MINIMUM-FOR-CALLED-DIRECTORY-NUMBER                1 -- example value
 *   MAXIMUM-FOR-CALLED-DIRECTORY-NUMBER                5 -- example value
 *   MINIMUM-FOR-CALLED-PARTY-NUMBER                    1 -- example value
 *   MAXIMUM-FOR-CALLED-PARTY-NUMBER                    5 -- example value
 *   MINIMUM-FOR-CALLED-PARTY-SUBADDRESS                1 -- example value
 *   MAXIMUM-FOR-CALLED-PARTY-SUBADDRESS                5 -- example value
 *   MINIMUM-FOR-CALLING-GEODETIC-LOCATION              1 -- example value
 *   MAXIMUM-FOR-CALLING-GEODETIC-LOCATION              10 -- example value
 *   MINIMUM-FOR-CALLING-PARTY-NUMBER                   1 -- example value
 *   MAXIMUM-FOR-CALLING-PARTY-NUMBER                   5 -- example value
 *   MINIMUM-FOR-CALLING-PARTY-SUBADDRESS               1 -- example value
 *   MAXIMUM-FOR-CALLING-PARTY-SUBADDRESS               5 -- example value
 *   MINIMUM-FOR-CALL-RESULT                            1 -- example value
 *   MAXIMUM-FOR-CALL-RESULT                            5 -- example value
 *   MINIMUM-FOR-CARRIER                                3 -- example value
 *   MAXIMUM-FOR-CARRIER                                10 -- example value
 *   MINIMUM-FOR-CAUSE                                  1 --examlpe value
 *   MAXIMUM-FOR-CAUSE                                  4 -- example value
 *   MINIMUM-FOR-DESTINATION                            1 --example value
 *   MAXIMUM-FOR-DESTINATION                            10 --exemple value
 *   MINIMUM-FOR-DIGITS                                 1 -- example value
 *   MAXIMUM-FOR-DIGITS                                 5 -- example value
 *   MINIMUM-FOR-DISPLAY                                1 -- example value
 *   MAXIMUM-FOR-DISPLAY                                5 -- example value
 *   MINIMUM-FOR-EVENT-SPECIFIC-CHARGING                1 -- example value
 *   MAXIMUM-FOR-EVENT-SPECIFIC-CHARGING                5 -- example value
 *   MINIMUM-FOR-EVENT-TYPE-CHARGING                    1 -- example value
 *   MAXIMUM-FOR-EVENT-TYPE-CHARGING                    5 -- example value
 *   MINIMUM-FOR-FCI-BILLING-CHARGING                   1 -- example value
 *   MAXIMUM-FOR-FCI-BILLING-CHARGING                   5 -- example value
 *   MINIMUM-FOR-FORWARD-GVNS                           1 -- example value
 *   MAXIMUM-FOR-FORWARD-GVNS                           5 -- example value
 *   MINIMUM-FOR-GENERIC-NAME                           1 -- example value
 *   MAXIMUM-FOR-GENERIC-NAME                           5 -- example value
 *   MINIMUM-FOR-GENERIC-NUMBER                         1 -- example value
 *   MAXIMUM-FOR-GENERIC-NUMBER                         5 -- example value
 *   MAXIMUM-FOR-INITIAL-TIME-INTERVAL                  5 -- example value
 *   MAXIMUM-FOR-IN-SERVICE-COMPATIBILITY               5 -- example value
 *   MINIMUM-FOR-IP-AVAILABLE                           1 -- example value
 *   MAXIMUM-FOR-IP-AVAILABLE                           5 -- example value
 *   MINIMUM-FOR-IP-SSP-CAPABILITIES                    1 -- example value
 *   MAXIMUM-FOR-IP-SSP-CAPABILITIES                    5 -- example value
 *   MINIMUM-FOR-ISDN-ACCESS-RELATED-INFO               1 -- example value
 *   MAXIMUM-FOR-ISDN-ACCESS-RELATED-INFO               10 -- example value
 *   MINIMUM-FOR-LOCATION-NUMBER                        1 -- example value
 *   MAXIMUM-FOR-LOCATION-NUMBER                        5 -- example value
 *   MAXIMUM-NB-OF-ROUTES                               3 --example value
 *   MINIMUM-FOR-MID-CALL-CONTROL-INFO                  1 -- example value
 *   MAXIMUM-FOR-MID-CALL-CONTROL-INFO                  5 -- example value
 *   MINIMUM-FOR-ORIGINAL-CALLED-PARTY-ID               1 -- example value
 *   MAXIMUM-FOR-ORIGINAL-CALLED-PARTY-ID               5 -- example value
 *   MINIMUM-FOR-REASON                                 1 -- example value
 *   MAXIMUM-FOR-REASON                                 5 -- example value
 *   MINIMUM-FOR-REDIRECTING-ID                         1 -- example value
 *   MAXIMUM-FOR-REDIRECTING-ID                         5 -- example value
 *   MINIMUM-FOR-REQUESTED-UTSI-NUM                     1 -- example value
 *   MAXIMUM-FOR-REQUESTED-UTSI-NUM                     5 -- example value
 *   MINIMUM-FOR-ROUTE-LIST                             1 -- example value
 *   MAXIMUM-FOR-ROUTE-LIST                             5 -- example value
 *   MINIMUM-FOR-ROUTING-NUMBER                         1 -- example value
 *   MAXIMUM-FOR-ROUTING-NUMBER                         5 -- example value
 *   MINIMUM-FOR-SCF-ID                                 1 -- example value
 *   MAXIMUM-FOR-SCF-ID                                 5 -- example value
 *   MINIMUM-FOR-SCI-BILLING-CHARGING                   1 -- example value
 *   MAXIMUM-FOR-SCI-BILLING-CHARGING                   5 -- example value
 *   MINIMUM-FOR-SDSS-INFORMATION                       1 -- example value
 *   MAXIMUM-FOR-SDSS-INFORMATION                       5 -- example value
 *   MINIMUM-FOR-SII                                    1 -- example value
 *   MAXIMUM-FOR-SII                                    5 -- example value
 *   MINIMUM-FOR-SF-BILLING-CHARGING                    1 -- example value
 *   MAXIMUM-FOR-SF-BILLING-CHARGING                    5 -- example value
 *   MINIMUM-FOR-USI-INFORMATION                        1 -- example value
 *   MAXIMUM-FOR-USI-INFORMATION                        5 -- example value
 *   MINIMUM-FOR-USI-SERVICE-INDICATOR                  1 -- example value
 *   MAXIMUM-FOR-USI-SERVICE-INDICATOR                  5 -- example value
 *   NUM-OF-BCSM-EVENT                                  4 -- example value
 *   NUM-OF-BCUSM-EVENT                                 4 -- example value
 *   NUM-OF-CHARGING-EVENT                              4 -- example value
 *   NUM-OF-COUNTERS                                    4 -- example value
 *   NUM-OF-CSAS                                        2 -- example value
 *   NUM-OF-CSS                                         2 -- example value
 *   NUM-OF-GENERIC-NUMBERS                             2 -- example value
 *   NUM-OF-INFO-ITEMS                                  1 -- example value
 *   NUM-OF-INPROFILE                                   1 -- example value
 *   NUM-OF-SEVERALTRIGGER                              5 -- example value
 *   NUM-OF-IN-SERVICE-COMPATIBILITY-ID                 2 -- example value
 *   NUM-OF-LEGS                                        2 -- example value
 *   NUM-OF-MESSAGE-IDS                                 2 -- example value
 *   MAXIMUM-FOR-AMOUNT                                 2 -- example value
 *   MAXIMUM-FOR-CALL-REFERENCE                         5 -- example value
 *   MAXIMUM-FOR-CNINFO                                 13 -- example value
 *   MAXIMUM-FOR-INITIAL-UNIT-INCREMENT                 2 -- example value
 *   MAXIMUM-FOR-SCALING-FACTOR                         2 -- example value
 *   MAXIMUM-FOR-SEGMENTS-PER-DATA-INTERVAL             5 -- example value
 *   MAXIMUM-FOR-UB-NB-CALL                             5 -- example value
 *   NUM-OF-ADDRESSES                                   5 -- example value
 *   MINIMUM-FOR-AAL-PARAMETERS                         1 -- example value
 *   MAXIMUM-FOR-AAL-PARAMETERS                         1 -- example value
 *   MINIMUM-FOR-ADDITIONAL-ATM-CELL-RATE               1 -- example value
 *   MAXIMUM-FOR-ADDITIONAL-ATM-CELL-RATE               1 -- example value
 *   MINIMUM-FOR-AESA-CALLED-PARTY                      1 -- example value
 *   MAXIMUM-FOR-AESA-CALLED-PARTY                      1 -- example value
 *   MINIMUM-FOR-AESA-CALLING-PARTY                     1 -- example value
 *   MAXIMUM-FOR-AESA-CALLING-PARTY                     1 -- example value
 *   MINIMUM-FOR-ATM-CELL-RATE                          1 -- example value
 *   MAXIMUM-FOR-ATM-CELL-RATE                          1 -- example value
 *   MINIMUM-FOR-CDVT-DESCRIPTOR                        1 -- example value
 *   MAXIMUM-FOR-CDVT-DESCRIPTOR                        1 -- example value
 *   MINIMUM-FOR-CONNECTION-IDENTIFIER                  1 -- example value
 *   MAXIMUM-FOR-CONNECTION-IDENTIFIER                  1 -- example value
 *   MINIMUM-FOR-CUMULATIVE-TRANSIT-DELAY               1 -- example value
 *   MAXIMUM-FOR-CUMULATIVE-TRANSIT-DELAY               1 -- example value
 *   MINIMUM-FOR-END-TO-END-TRANSIT-DELAY               1 -- example value
 *   MAXIMUM-FOR-END-TO-END-TRANSIT-DELAY               1 -- example value
 *   MINIMUM-FOR-GENERIC-IDENTIFIER                     1 -- example value
 *   MAXIMUM-FOR-GENERIC-IDENTIFIER                     1 -- example value
 *   MINIMUM-FOR-MIN-ACCEPTABLE-ATM-TRAFFIC-DESCRIPTOR  1 -- example value
 *   MAXIMUM-FOR-MIN-ACCEPTABLE-ATM-TRAFFIC-DESCRIPTOR  1 -- example value
 *   MINIMUM-FOR-ALTERNATIVE-ATM-TRAFFIC-DESCRIPTOR     1 -- example value
 *   MAXIMUN-FOR-ALTERNATIVE-ATM-TRAFFIC-DESCRIPTOR     1 -- example value
 *   MINIMUM-FOR-QOS-PARAMETER                          1 -- example value
 *   MAXIMUM-FOR-QOS-PARAMETER                          1 -- example value
 *   MINIMUM-FOR-BROADBAND-BEARER-CAPABILITY            1 -- example value
 *   MAXIMUM-FOR-BROADBAND-BEARER-CAPABILITY            1 -- example value
 *   MAXIMUM-GLOBAL-CALL-REFERENCE                      5 -- example value
 *   MAXIMUM-ALTERNATIVE-IDENTITIES                     5 -- example value
 *   MAXIMUM-NB-OF-ALTERNATIVE-IDENTITIES               1
 *  -- example value--}
 * ```
 * 
 * @constant
 * @type {SCF_SSF_BOUNDS}
 * @implements {SCF_SSF_BOUNDS}
 */
export
const networkSpecificB2: SCF_SSF_BOUNDS = {
    class: "SCF-SSF-BOUNDS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&highLayerCompatibilityLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minAChBillingChargingLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxAChBillingChargingLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minBackwardGVNSLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxBackwardGVNSLength": 5 /* OBJECT_FIELD_SETTING */,
    "&maxBearerCapabilityLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCalledDirectoryNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCalledDirectoryNumberLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCalledPartyNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCalledPartyNumberLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCalledPartySubaddressLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCalledPartySubaddressLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCallingGeodeticLocationLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCallingGeodeticLocationLength": 10 /* OBJECT_FIELD_SETTING */,
    "&minCallingPartyNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCallingPartyNumberLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCallingPartySubaddressLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCallingPartySubaddressLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCallResultLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCallResultLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCarrierLength": 3 /* OBJECT_FIELD_SETTING */,
    "&maxCarrierLength": 10 /* OBJECT_FIELD_SETTING */,
    "&minCauseLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCauseLength": 4 /* OBJECT_FIELD_SETTING */,
    "&minDestinationIndexLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxDestinationIndexLength": 10 /* OBJECT_FIELD_SETTING */,
    "&minDigitsLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxDigitsLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minDisplayInformationLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxDisplayInformationLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minEventSpecificInformationChargingLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxEventSpecificInformationChargingLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minEventTypeChargingLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxEventTypeChargingLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minFCIBillingChargingLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxFCIBillingChargingLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minForwardGVNSLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxForwardGVNSLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minGenericNameLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxGenericNameLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minGenericNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxGenericNumberLength": 5 /* OBJECT_FIELD_SETTING */,
    "&maxInitialTimeInterval": 5 /* OBJECT_FIELD_SETTING */,
    "&maxINServiceCompatibilityIndLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minIPAvailableLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxIPAvailableLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minIPSSPCapabilitiesLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxIPSSPCapabilitiesLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minISDNAccessRelatedInfoLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxISDNAccessRelatedInfoLength": 10 /* OBJECT_FIELD_SETTING */,
    "&minLocationNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxLocationNumberLength": 5 /* OBJECT_FIELD_SETTING */,
    "&maxNbOfRoutes": 3 /* OBJECT_FIELD_SETTING */,
    "&minMidCallControlInfoNum": 1 /* OBJECT_FIELD_SETTING */,
    "&maxMidCallControlInfoNum": 5 /* OBJECT_FIELD_SETTING */,
    "&minOriginalCalledPartyIDLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxOriginalCalledPartyIDLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minReasonLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxReasonLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minRedirectingPartyIDLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxRedirectingPartyIDLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minRequestedUTSINum": 1 /* OBJECT_FIELD_SETTING */,
    "&maxRequestedUTSINum": 5 /* OBJECT_FIELD_SETTING */,
    "&minRouteListLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxRouteListLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minRouteingNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxRouteingNumberLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minScfIDLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxScfIDLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minSCIBillingChargingLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxSCIBillingChargingLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minSDSSinformationLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxSDSSinformationLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minServiceInteractionIndicatorsLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxServiceInteractionIndicatorsLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minSFBillingChargingLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxSFBillingChargingLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minUSIInformationLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxUSIInformationLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minUSIServiceIndicatorLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxUSIServiceIndicatorLength": 5 /* OBJECT_FIELD_SETTING */,
    "&numOfBCSMEvents": 4 /* OBJECT_FIELD_SETTING */,
    "&numOfBCUSMEvents": 4 /* OBJECT_FIELD_SETTING */,
    "&numOfChargingEvents": 4 /* OBJECT_FIELD_SETTING */,
    "&numOfCounters": 4 /* OBJECT_FIELD_SETTING */,
    "&numOfCSAs": 2 /* OBJECT_FIELD_SETTING */,
    "&numOfCSs": 2 /* OBJECT_FIELD_SETTING */,
    "&numOfGenericNumbers": 2 /* OBJECT_FIELD_SETTING */,
    "&numOfInfoItems": 1 /* OBJECT_FIELD_SETTING */,
    "&numOfINProfile": 1 /* OBJECT_FIELD_SETTING */,
    "&numOfTriggers": 5 /* OBJECT_FIELD_SETTING */,
    "&numOfInServiceCompatibilityIndLength": 2 /* OBJECT_FIELD_SETTING */,
    "&numOfLegs": 2 /* OBJECT_FIELD_SETTING */,
    "&numOfMessageIDs": 2 /* OBJECT_FIELD_SETTING */,
    "&maxAmount": 2 /* OBJECT_FIELD_SETTING */,
    "&maxCallReferenceLength": 5 /* OBJECT_FIELD_SETTING */,
    "&maxCNInfoLength": 13 /* OBJECT_FIELD_SETTING */,
    "&maxInitialUnitIncrement": 2 /* OBJECT_FIELD_SETTING */,
    "&maxScalingFactor": 2 /* OBJECT_FIELD_SETTING */,
    "&maxSegmentsPerDataInterval": 5 /* OBJECT_FIELD_SETTING */,
    "&ub-nbCall": 5 /* OBJECT_FIELD_SETTING */,
    "&numOfAddresses": 5 /* OBJECT_FIELD_SETTING */,
    "&minAALPLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxAALPLength": 1 /* OBJECT_FIELD_SETTING */,
    "&minAdditionalATMCellRateLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxAdditionalATMCellRateLength": 1 /* OBJECT_FIELD_SETTING */,
    "&minAESACalledPartyLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxAESACalledPartyLength": 1 /* OBJECT_FIELD_SETTING */,
    "&minAESACallingPartyLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxAESACallingPartyLength": 1 /* OBJECT_FIELD_SETTING */,
    "&minATMCellRateLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxATMCellRateLength": 1 /* OBJECT_FIELD_SETTING */,
    "&minCDVTDescriptorLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCDVTDescriptorLength": 1 /* OBJECT_FIELD_SETTING */,
    "&minConnectionIdentifierLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxConnectionIdentifierLength": 1 /* OBJECT_FIELD_SETTING */,
    "&minCumulativeTransitDelayLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCumulativeTransitDelayLength": 1 /* OBJECT_FIELD_SETTING */,
    "&minEndToEndTDLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxEndToEndTDLength": 1 /* OBJECT_FIELD_SETTING */,
    "&minGenericIdentifierLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxGenericIdentifierLength": 1 /* OBJECT_FIELD_SETTING */,
    "&minMinAcceptableATMTrafficDescriptorLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxMinAcceptableATMTrafficDescriptorLength": 1 /* OBJECT_FIELD_SETTING */,
    "&minAlternativeATMTrafficDescriptorLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxAlternativeATMTrafficDescriptorLength": 1 /* OBJECT_FIELD_SETTING */,
    "&minQoSParameterLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxQoSParameterLength": 1 /* OBJECT_FIELD_SETTING */,
    "&minBroadbandBearerCapabilityLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxBroadbandBearerCapabilityLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxGlobalCallReferenceLength": 5 /* OBJECT_FIELD_SETTING */,
    "&maxAlternativeIdentities": 5 /* OBJECT_FIELD_SETTING */,
    "&maxAlternativeIds": 1 /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

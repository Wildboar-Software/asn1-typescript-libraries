/* eslint-disable */
import { type PARAMETERS_BOUND } from "../IN-CS2-classes/PARAMETERS-BOUND.oca.mjs";


/**
 * @summary networkSpecificBoundSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * networkSpecificBoundSet PARAMETERS-BOUND ::= {
 *   MINIMUM-FOR-ACH-BILLING-CHARGING        1 -- example value
 *   MAXIMUM-FOR-ACH-BILLING-CHARGING        5 -- example value
 *   MINIMUM-FOR-ATTRIBUTES                  1 -- example value
 *   MAXIMUM-FOR-ATTRIBUTES                  5 -- example value
 *   MINIMUM-FOR-BACKWARD-GVNS               1 -- example value
 *   MAXIMUM-FOR-BACKWARD-GVNS               5 -- example value
 *   MAXIMUM-FOR-BEARER-CAPABILITY           5 -- example value
 *   MINIMUM-FOR-CALLED-PARTY-NUMBER         1 -- example value
 *   MAXIMUM-FOR-CALLED-PARTY-NUMBER         5 -- example value
 *   MINIMUM-FOR-CALLING-PARTY-NUMBER        1 -- example value
 *   MAXIMUM-FOR-CALLING-PARTY-NUMBER        5 -- example value
 *   MINIMUM-FOR-CALL-RESULT                 1 -- example value
 *   MAXIMUM-FOR-CALL-RESULT                 5 -- example value
 *   MAXIMUM-FOR-CAUSE                       4 -- example value
 *   MINIMUM-FOR-DIGITS                      1 -- example value
 *   MAXIMUM-FOR-DIGITS                      5 -- example value
 *   MINIMUM-FOR-DISPLAY                     1 -- example value
 *   MAXIMUM-FOR-DISPLAY                     5 -- example value
 *   MINIMUM-FOR-EVENT-SPECIFIC-CHARGING     1 -- example value
 *   MAXIMUM-FOR-EVENT-SPECIFIC-CHARGING     5 -- example value
 *   MINIMUM-FOR-EVENT-TYPE-CHARGING         1 -- example value
 *   MAXIMUM-FOR-EVENT-TYPE-CHARGING         5 -- example value
 *   MINIMUM-FOR-FCI-BILLING-CHARGING        1 -- example value
 *   MAXIMUM-FOR-FCI-BILLING-CHARGING        5 -- example value
 *   MINIMUM-FOR-FORWARD-GVNS                1 -- example value
 *   MAXIMUM-FOR-FORWARD-GVNS                5 -- example value
 *   MINIMUM-FOR-GENERIC-NAME                1 -- example value
 *   MAXIMUM-FOR-GENERIC-NAME                5 -- example value
 *   MINIMUM-FOR-GENERIC-NUMBER              1 -- example value
 *   MAXIMUM-FOR-GENERIC-NUMBER              5 -- example value
 *   MAXIMUM-FOR-INITIAL-TIME-INTERVAL       5 -- example value
 *   MAXIMUM-FOR-IN-SERVICE-COMPATIBILITY    5 -- example value
 *   MINIMUM-FOR-IP-AVAILABLE                1 -- example value
 *   MAXIMUM-FOR-IP-AVAILABLE                5 -- example value
 *   MINIMUM-FOR-IP-SSP-CAPABILITIES         1 -- example value
 *   MAXIMUM-FOR-IP-SSP-CAPABILITIES         5 -- example value
 *   MINIMUM-FOR-LOCATION-NUMBER             1 -- example value
 *   MAXIMUM-FOR-LOCATION-NUMBER             5 -- example value
 *   MINIMUM-FOR-MAIL-BOX-ID                 1 -- example value
 *   MAXIMUM-FOR-MAIL-BOX-ID                 5 -- example value
 *   MINIMUM-FOR-MESSAGE-CONTENT             1 -- example value
 *   MAXIMUM-FOR-MESSAGE-CONTENT             5 -- example value
 *   MINIMUM-FOR-MID-CALL-CONTROL-INFO       1 -- example value
 *   MAXIMUM-FOR-MID-CALL-CONTROL-INFO       5 -- example value
 *   MINIMUM-FOR-ORIGINAL-CALLED-PARTY-ID    1 -- example value
 *   MAXIMUM-FOR-ORIGINAL-CALLED-PARTY-ID    5 -- example value
 *   MINIMUM-FOR-REASON                      1 -- example value
 *   MAXIMUM-FOR-REASON                      5 -- example value
 *   MINIMUM-FOR-RECEIVED-INFORMATION        1 -- example value
 *   MAXIMUM-FOR-RECEIVED-INFORMATION        5 -- example value
 *   MAXIMUM-FOR-RECORDED-MESSAGE-UNITS      5 -- example value
 *   MAXIMUM-FOR-RECORDING-TIME              5 -- example value
 *   MINIMUM-FOR-REDIRECTING-ID              1 -- example value
 *   MAXIMUM-FOR-REDIRECTING-ID              5 -- example value
 *   MINIMUM-FOR-REQUESTED-UTSI-NUM          1 -- example value
 *   MAXIMUM-FOR-REQUESTED-UTSI-NUM          5 -- example value
 *   MINIMUM-FOR-ROUTE-LIST                  1 -- example value
 *   MAXIMUM-FOR-ROUTE-LIST                  5 -- example value
 *   MINIMUM-FOR-SCF-ID                      1 -- example value
 *   MAXIMUM-FOR-SCF-ID                      5 -- example value
 *   MINIMUM-FOR-SCF-ADDRESS                 1 -- example value
 *   MAXIMUM-FOR-SCF-ADDRESS                 5 -- example value
 *   MINIMUM-FOR-SCI-BILLING-CHARGING        1 -- example value
 *   MAXIMUM-FOR-SCI-BILLING-CHARGING        5 -- example value
 *   MINIMUM-FOR-SII                         1 -- example value
 *   MAXIMUM-FOR-SII                         5 -- example value
 *   MINIMUM-FOR-SF-BILLING-CHARGING         1 -- example value
 *   MAXIMUM-FOR-SF-BILLING-CHARGING         5 -- example value
 *   MINIMUM-FOR-USI-INFORMATION             1 -- example value
 *   MAXIMUM-FOR-USI-INFORMATION             5 -- example value
 *   MINIMUM-FOR-USI-SERVICE-INDICATOR       1 -- example value
 *   MAXIMUM-FOR-USI-SERVICE-INDICATOR       5 -- example value
 *   NUM-OF-BCSM-EVENT                       4 -- example value
 *   NUM-OF-BCUSM-EVENT                      4 -- example value
 *   NUM-OF-CHARGING-EVENT                   4 -- example value
 *   NUM-OF-CSAS                             2 -- example value
 *   NUM-OF-CSS                              2 -- example value
 *   NUM-OF-EXTENSIONS                       1 -- example value
 *   NUM-OF-GENERIC-NUMBERS                  2 -- example value
 *   NUM-OF-IN-SERVICE-COMPATIBILITY-ID      2 -- example value
 *   NUM-OF-LEGS                             2 -- example value
 *   NUM-OF-MESSAGE-IDS                      2 -- example value
 *   -- NUM-OF-RECORDED-MESSAGE-IDS            2    example value
 *   MAXIMUM-FOR-AMOUNT                      2 -- example value
 *   MAXIMUM-FOR-INITIAL-UNIT-INCREMENT      2 -- example value
 *   MAXIMUM-FOR-SCALING-FACTOR              2 -- example value
 *   MAXIMUM-FOR-SEGMENTS-PER-DATA-INTERVAL  5 -- example value
 *   MAXIMUM-FOR-TIME-PER-INTERVAL           5 -- example value
 *   MAXIMUM-FOR-UNITS-PER-DATA-INTERVAL     5 -- example value
 *   MAXIMUM-FOR-UNITS-PER-INTERVAL          5 -- example value
 *   MAXIMUM-FOR-UB-USER-CREDIT              5 -- example value
 *   MAXIMUM-FOR-UB-NB-CALL                  5
 *  -- example value--}
 * ```
 * 
 * @constant
 * @type {PARAMETERS_BOUND}
 * @implements {PARAMETERS_BOUND}
 */
export
const networkSpecificBoundSet: PARAMETERS_BOUND = {
    class: "PARAMETERS-BOUND",
    decoderFor: {
    },
    encoderFor: {
    },
    "&minAChBillingChargingLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxAChBillingChargingLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minAttributesLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxAttributesLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minBackwardGVNSLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxBackwardGVNSLength": 5 /* OBJECT_FIELD_SETTING */,
    "&maxBearerCapabilityLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCalledPartyNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCalledPartyNumberLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCallingPartyNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCallingPartyNumberLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCallResultLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCallResultLength": 5 /* OBJECT_FIELD_SETTING */,
    "&maxCauseLength": 4 /* OBJECT_FIELD_SETTING */,
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
    "&minLocationNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxLocationNumberLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minMailBoxIDLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxMailBoxIDLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minMessageContentLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxMessageContentLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minMidCallControlInfoNum": 1 /* OBJECT_FIELD_SETTING */,
    "&maxMidCallControlInfoNum": 5 /* OBJECT_FIELD_SETTING */,
    "&minOriginalCalledPartyIDLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxOriginalCalledPartyIDLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minReasonLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxReasonLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minReceivedInformationLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxReceivedInformationLength": 5 /* OBJECT_FIELD_SETTING */,
    "&maxRecordedMessageUnits": 5 /* OBJECT_FIELD_SETTING */,
    "&maxRecordingTime": 5 /* OBJECT_FIELD_SETTING */,
    "&minRedirectingPartyIDLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxRedirectingPartyIDLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minRequestedUTSINum": 1 /* OBJECT_FIELD_SETTING */,
    "&maxRequestedUTSINum": 5 /* OBJECT_FIELD_SETTING */,
    "&minRouteListLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxRouteListLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minScfIDLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxScfIDLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minScfAddressLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxScfAddressLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minSCIBillingChargingLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxSCIBillingChargingLength": 5 /* OBJECT_FIELD_SETTING */,
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
    "&numOfCSAs": 2 /* OBJECT_FIELD_SETTING */,
    "&numOfCSs": 2 /* OBJECT_FIELD_SETTING */,
    "&numOfExtensions": 1 /* OBJECT_FIELD_SETTING */,
    "&numOfGenericNumbers": 2 /* OBJECT_FIELD_SETTING */,
    "&numOfInServiceCompatibilityIndLength": 2 /* OBJECT_FIELD_SETTING */,
    "&numOfLegs": 2 /* OBJECT_FIELD_SETTING */,
    "&numOfMessageIDs": 2 /* OBJECT_FIELD_SETTING */,
    "&maxAmount": 2 /* OBJECT_FIELD_SETTING */,
    "&maxInitialUnitIncrement": 2 /* OBJECT_FIELD_SETTING */,
    "&maxScalingFactor": 2 /* OBJECT_FIELD_SETTING */,
    "&maxSegmentsPerDataInterval": 5 /* OBJECT_FIELD_SETTING */,
    "&maxTimePerInterval": 5 /* OBJECT_FIELD_SETTING */,
    "&maxUnitsPerDataInterval": 5 /* OBJECT_FIELD_SETTING */,
    "&maxUnitsPerInterval": 5 /* OBJECT_FIELD_SETTING */,
    "&ub-maxUserCredit": 5 /* OBJECT_FIELD_SETTING */,
    "&ub-nbCall": 5 /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

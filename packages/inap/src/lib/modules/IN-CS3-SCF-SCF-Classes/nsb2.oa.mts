/* eslint-disable */
import { type SCF_SSF_BOUNDS } from "../IN-CS3-SSF-SCF-Classes/SCF-SSF-BOUNDS.oca.mjs";


/**
 * @summary nsb2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsb2 SCF-SSF-BOUNDS ::= {
 *   MAXIMUM-FOR-BEARER-CAPABILITY         5 --example value
 *   MINIMUM-FOR-CALLED-PARTY-NUMBER       1 --example value
 *   MAXIMUM-FOR-CALLED-PARTY-NUMBER       5 --example value
 *   MINIMUM-FOR-CALLING-PARTY-NUMBER      1 --example value
 *   MAXIMUM-FOR-CALLING-PARTY-NUMBER      5 --example value
 *   MINIMUM-FOR-CALLING-PARTY-SUBADDRESS  1 --example value
 *   MAXIMUM-FOR-CALLING-PARTY-SUBADDRESS  5 --example value
 *   MINIMUM-FOR-CARRIER                   3 --example value
 *   MAXIMUM-FOR-CARRIER                   10 --example value
 *   MINIMUM-FOR-CAUSE                     1 --example value
 *   MAXIMUM-FOR-CAUSE                     4 --example value
 *   MINIMUM-FOR-DIGITS                    1 --example value
 *   MAXIMUM-FOR-DIGITS                    5 --example value
 *   MINIMUM-FOR-DISPLAY                   1 --example value
 *   MAXIMUM-FOR-DISPLAY                   5 --example value
 *   MINIMUM-FOR-FORWARD-GVNS              1 --example value
 *   MAXIMUM-FOR-FORWARD-GVNS              5 --example value
 *   MINIMUM-FOR-GENERIC-NAME              1 --example value
 *   MAXIMUM-FOR-GENERIC-NAME              5 --example value
 *   MINIMUM-FOR-GENERIC-NUMBER            1 --example value
 *   MAXIMUM-FOR-GENERIC-NUMBER            5 --example value
 *   MINIMUM-FOR-IP-AVAILABLE              1 --example value
 *   MAXIMUM-FOR-IP-AVAILABLE              5 --example value
 *   MINIMUM-FOR-IP-SSP-CAPABILITIES       1 --example value
 *   MAXIMUM-FOR-IP-SSP-CAPABILITIES       5 --example value
 *   MINIMUM-FOR-ISDN-ACCESS-RELATED-INFO  1 --example value
 *   MAXIMUM-FOR-ISDN-ACCESS-RELATED-INFO  5 --example value
 *   MINIMUM-FOR-LOCATION-NUMBER           1 --example value
 *   MAXIMUM-FOR-LOCATION-NUMBER           5 --example value
 *   MINIMUM-FOR-MID-CALL-CONTROL-INFO     1 --example value
 *   MAXIMUM-FOR-MID-CALL-CONTROL-INFO     5 --example value
 *   MINIMUM-FOR-ORIGINAL-CALLED-PARTY-ID  1 --example value
 *   MAXIMUM-FOR-ORIGINAL-CALLED-PARTY-ID  5 --example value
 *   MINIMUM-FOR-REASON                    1 --example value
 *   MAXIMUM-FOR-REASON                    5 --example value
 *   MINIMUM-FOR-REDIRECTING-ID            1 --example value
 *   MAXIMUM-FOR-REDIRECTING-ID            5 --example value
 *   MINIMUM-FOR-REQUESTED-UTSI-NUM        1 --example value
 *   MAXIMUM-FOR-REQUESTED-UTSI-NUM        5 --example value
 *   MINIMUM-FOR-ROUTE-LIST                1 --example value
 *   MAXIMUM-FOR-ROUTE-LIST                5 --example value
 *   MINIMUM-FOR-ROUTING-NUMBER            1 --example value
 *   MAXIMUM-FOR-ROUTING-NUMBER            5 --example value
 *   MINIMUM-FOR-SCF-ID                    1 --example value
 *   MAXIMUM-FOR-SCF-ID                    5 --example value
 *   MINIMUM-FOR-SCI-BILLING-CHARGING      1 --example value
 *   MAXIMUM-FOR-SCI-BILLING-CHARGING      1 --example value
 *   MINIMUM-FOR-SDSS-INFORMATION          1 --example value
 *   MAXIMUM-FOR-SDSS-INFORMATION          1 --example value
 *   MINIMUM-FOR-SII                       1 --example value
 *   MAXIMUM-FOR-SII                       5 --example value
 *   MINIMUM-FOR-SF-BILLING-CHARGING       1 --example value
 *   MAXIMUM-FOR-SF-BILLING-CHARGING       5 --example value
 *   MINIMUM-FOR-USI-INFORMATION           1 --example value
 *   MAXIMUM-FOR-USI-INFORMATION           5 --example value
 *   MINIMUM-FOR-USI-SERVICE-INDICATOR     1 --example value
 *   MAXIMUM-FOR-USI-SERVICE-INDICATOR     5 --example value
 *   NUM-OF-BCSM-EVENT                     13 --example value
 *   NUM-OF-BCUSM-EVENT                    13 --example value
 *   NUM-OF-CSAS                           13 --example value
 *   NUM-OF-CSS                            13 --example value
 *   NUM-OF-GENERIC-NUMBERS                2 --example value
 *   NUM-OF-INPROFILE                      2 --example value
 *   NUM-OF-SEVERAL-TRIGGER                13 --example value
 *   NUM-OF-IN-SERVICE-COMPATIBILITY-ID    13 --example value
 *   NUM-OF-LEGS                           13 --example value
 *   MAXIMUM-FOR-CALL-REFERENCE            5 --example value
 *   NUM-OF-ADDRESSES                      13
 *  --example value--}
 * ```
 * 
 * @constant
 * @type {SCF_SSF_BOUNDS}
 * @implements {SCF_SSF_BOUNDS}
 */
export
const nsb2: SCF_SSF_BOUNDS = {
    class: "SCF-SSF-BOUNDS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&maxBearerCapabilityLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCalledPartyNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCalledPartyNumberLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCallingPartyNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCallingPartyNumberLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCallingPartySubaddressLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCallingPartySubaddressLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCarrierLength": 3 /* OBJECT_FIELD_SETTING */,
    "&maxCarrierLength": 10 /* OBJECT_FIELD_SETTING */,
    "&minCauseLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCauseLength": 4 /* OBJECT_FIELD_SETTING */,
    "&minDigitsLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxDigitsLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minDisplayInformationLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxDisplayInformationLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minForwardGVNSLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxForwardGVNSLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minGenericNameLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxGenericNameLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minGenericNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxGenericNumberLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minIPAvailableLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxIPAvailableLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minIPSSPCapabilitiesLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxIPSSPCapabilitiesLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minISDNAccessRelatedInfoLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxISDNAccessRelatedInfoLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minLocationNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxLocationNumberLength": 5 /* OBJECT_FIELD_SETTING */,
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
    "&maxSCIBillingChargingLength": 1 /* OBJECT_FIELD_SETTING */,
    "&minSDSSinformationLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxSDSSinformationLength": 1 /* OBJECT_FIELD_SETTING */,
    "&minServiceInteractionIndicatorsLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxServiceInteractionIndicatorsLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minSFBillingChargingLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxSFBillingChargingLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minUSIInformationLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxUSIInformationLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minUSIServiceIndicatorLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxUSIServiceIndicatorLength": 5 /* OBJECT_FIELD_SETTING */,
    "&numOfBCSMEvents": 13 /* OBJECT_FIELD_SETTING */,
    "&numOfBCUSMEvents": 13 /* OBJECT_FIELD_SETTING */,
    "&numOfCSAs": 13 /* OBJECT_FIELD_SETTING */,
    "&numOfCSs": 13 /* OBJECT_FIELD_SETTING */,
    "&numOfGenericNumbers": 2 /* OBJECT_FIELD_SETTING */,
    "&numOfINProfile": 2 /* OBJECT_FIELD_SETTING */,
    "&numOfTriggers": 13 /* OBJECT_FIELD_SETTING */,
    "&numOfInServiceCompatibilityIndLength": 13 /* OBJECT_FIELD_SETTING */,
    "&numOfLegs": 13 /* OBJECT_FIELD_SETTING */,
    "&maxCallReferenceLength": 5 /* OBJECT_FIELD_SETTING */,
    "&numOfAddresses": 13 /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

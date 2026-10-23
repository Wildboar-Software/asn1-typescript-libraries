/* eslint-disable */
import { type SCF_SSF_BOUNDS } from "../IN-CS3-SSF-SCF-Classes/SCF-SSF-BOUNDS.oca.mjs";


/**
 * @summary sCFSSFBoundSetforCUSF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sCFSSFBoundSetforCUSF SCF-SSF-BOUNDS ::= {
 *   MAXIMUM-FOR-BEARER-CAPABILITY         5 -- example value
 *   MINIMUM-FOR-CALLED-PARTY-NUMBER       2 -- example value
 *   MAXIMUM-FOR-CALLED-PARTY-NUMBER       10 -- example value
 *   MINIMUM-FOR-CALLING-PARTY-NUMBER      2 -- example value
 *   MAXIMUM-FOR-CALLING-PARTY-NUMBER      10 -- example value
 *   MINIMUM-FOR-CALLING-PARTY-SUBADDRESS  2 -- example value
 *   MAXIMUM-FOR-CALLING-PARTY-SUBADDRESS  5 -- example value
 *   MINIMUM-FOR-CAUSE                     2 -- example value
 *   MAXIMUM-FOR-CAUSE                     10 -- example value
 *   -- MINIMUM-FOR-FORWARD-GVNS        1 ??? example value
 *   -- MAXIMUM-FOR-FORWARD-GVNS        5 ??? example value
 *   -- MINIMUM-FOR-GENERIC-NAME        1 ??? example value
 *   -- MAXIMUM-FOR-GENERIC-NAME        5 ??? example value
 *   MINIMUM-FOR-GENERIC-NUMBER            3 -- example value
 *   MAXIMUM-FOR-GENERIC-NUMBER            10 -- example value
 *   -- MINIMUM-FOR-IP-AVAILABLE        1 ??? example value
 *   -- MAXIMUM-FOR-IP-AVAILABLE        5 ??? example value
 *   -- MINIMUM-FOR-IP-SSP-CAPABILITIES    1 ??? example value
 *   -- MAXIMUM-FOR-IP-SSP-CAPABILITIES    5 ??? example value
 *   -- MINIMUM-FOR-ISDN-ACCESS-RELATED-INFO    1 ??? example value
 *   -- MAXIMUM-FOR-ISDN-ACCESS-RELATED-INFO    5 ??? example value
 *   MINIMUM-FOR-LOCATION-NUMBER           2 -- example value
 *   MAXIMUM-FOR-LOCATION-NUMBER           10 -- example value
 *   -- MINIMUM-FOR-MID-CALL-CONTROL-INFO    1 ??? example value
 *   -- MAXIMUM-FOR-MID-CALL-CONTROL-INFO    5 ??? example value
 *   -- MINIMUM-FOR-ORIGINAL-CALLED-PARTY-ID    1 ??? example value
 *   -- MAXIMUM-FOR-ORIGINAL-CALLED-PARTY-ID    5 ??? example value
 *   -- MINIMUM-FOR-REASON            1 ??? example value
 *   -- MAXIMUM-FOR-REASON            5 ??? example value
 *   -- MINIMUM-FOR-REDIRECTING-ID        1 ??? example value
 *   -- MAXIMUM-FOR-REDIRECTING-ID        5 ??? example value
 *   MINIMUM-FOR-REQUESTED-UTSI-NUM        1 -- example value
 *   MAXIMUM-FOR-REQUESTED-UTSI-NUM        5 -- example value
 *   -- MINIMUM-FOR-ROUTE-LIST        1 ??? example value
 *   -- MAXIMUM-FOR-ROUTE-LIST        5 ??? example value
 *   -- MINIMUM-FOR-ROUTING-NUMBER        1 ??? example value
 *   -- MAXIMUM-FOR-ROUTING-NUMBER        5 ??? example value
 *   -- MINIMUM-FOR-SCF-ID            1 ??? example value
 *   -- MAXIMUM-FOR-SCF-ID            5 ??? example value
 *   -- MINIMUM-FOR-SCI-BILLING-CHARGING    1 ??? example value
 *   -- MAXIMUM-FOR-SCI-BILLING-CHARGING    1 ??? example value
 *   -- MINIMUM-FOR-SDSS-INFORMATION        1 ??? example value
 *   -- MAXIMUM-FOR-SDSS-INFORMATION        1 ??? example value
 *   -- MINIMUM-FOR-SII            1 ??? example value
 *   -- MAXIMUM-FOR-SII            5 ??? example value
 *   -- MINIMUM-FOR-SF-BILLING-CHARGING    1 ??? example value
 *   -- MAXIMUM-FOR-SF-BILLING-CHARGING    5 ??? example value
 *   MINIMUM-FOR-USI-INFORMATION           1 -- example value
 *   MAXIMUM-FOR-USI-INFORMATION           20 -- example value
 *   MINIMUM-FOR-USI-SERVICE-INDICATOR     1 -- example value
 *   MAXIMUM-FOR-USI-SERVICE-INDICATOR     10 -- example value
 *   -- NUM-OF-BCSM-EVENT            13 ??? example value
 *   -- NUM-OF-BCUSM-EVENT            13 ??? example value
 *   -- NUM-OF-CSAS                13 ??? example value
 *   -- NUM-OF-CSS                13 ??? example value
 *   NUM-OF-GENERIC-NUMBERS                5 -- example value
 * 
 * 
 * -- NUM-OF-INPROFILE            2 ??? example value
 * -- NUM-OF-SEVERAL-TRIGGER        13 ??? example value
 * -- NUM-OF-IN-SERVICE-COMPATIBILITY-ID    13 ??? example value
 * -- NUM-OF-LEGS                13 ??? example value
 * -- MAXIMUM-FOR-CALL-REFERENCE        5 ??? example value
 * -- NUM-OF-ADDRESSES            13 ??? example value
 * }
 * ```
 * 
 * @constant
 * @type {SCF_SSF_BOUNDS}
 * @implements {SCF_SSF_BOUNDS}
 */
export
const sCFSSFBoundSetforCUSF: SCF_SSF_BOUNDS = {
    class: "SCF-SSF-BOUNDS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&maxBearerCapabilityLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCalledPartyNumberLength": 2 /* OBJECT_FIELD_SETTING */,
    "&maxCalledPartyNumberLength": 10 /* OBJECT_FIELD_SETTING */,
    "&minCallingPartyNumberLength": 2 /* OBJECT_FIELD_SETTING */,
    "&maxCallingPartyNumberLength": 10 /* OBJECT_FIELD_SETTING */,
    "&minCallingPartySubaddressLength": 2 /* OBJECT_FIELD_SETTING */,
    "&maxCallingPartySubaddressLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCauseLength": 2 /* OBJECT_FIELD_SETTING */,
    "&maxCauseLength": 10 /* OBJECT_FIELD_SETTING */,
    "&minGenericNumberLength": 3 /* OBJECT_FIELD_SETTING */,
    "&maxGenericNumberLength": 10 /* OBJECT_FIELD_SETTING */,
    "&minLocationNumberLength": 2 /* OBJECT_FIELD_SETTING */,
    "&maxLocationNumberLength": 10 /* OBJECT_FIELD_SETTING */,
    "&minRequestedUTSINum": 1 /* OBJECT_FIELD_SETTING */,
    "&maxRequestedUTSINum": 5 /* OBJECT_FIELD_SETTING */,
    "&minUSIInformationLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxUSIInformationLength": 20 /* OBJECT_FIELD_SETTING */,
    "&minUSIServiceIndicatorLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxUSIServiceIndicatorLength": 10 /* OBJECT_FIELD_SETTING */,
    "&numOfGenericNumbers": 5 /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

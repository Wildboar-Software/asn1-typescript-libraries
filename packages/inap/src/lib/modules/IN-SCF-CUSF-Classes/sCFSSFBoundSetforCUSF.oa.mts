/* eslint-disable */
import { type SCF_SSF_BOUNDS } from "../IN-SSF-SCF-Classes/SCF-SSF-BOUNDS.oca.mjs";


/**
 * @summary sCFSSFBoundSetforCUSF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sCFSSFBoundSetforCUSF SCF-SSF-BOUNDS ::= {
 *   HIGH-LAYER-COMPATIBILITY-LENGTH          5 -- example value
 *   MAXIMUM-FOR-BEARER-CAPABILITY            5 -- example value
 *   MINIMUM-FOR-CALLED-PARTY-NUMBER          2 -- example value
 *   MAXIMUM-FOR-CALLED-PARTY-NUMBER          10 -- example value
 *   MINIMUM-FOR-CALLING-PARTY-NUMBER         2 -- example value
 *   MAXIMUM-FOR-CALLING-PARTY-NUMBER         10 -- example value
 *   MINIMUM-FOR-CALLING-PARTY-SUBADDRESS     2 -- example value
 *   MAXIMUM-FOR-CALLING-PARTY-SUBADDRESS     5 -- example value
 *   MINIMUM-FOR-CAUSE                        1 -- example value
 *   MAXIMUM-FOR-CAUSE                        10 -- example value
 *   MINIMUM-FOR-GENERIC-NUMBER               3 -- example value
 *   MAXIMUM-FOR-GENERIC-NUMBER               10 -- example value
 *   MINIMUM-FOR-LOCATION-NUMBER              2 -- example value
 *   MAXIMUM-FOR-LOCATION-NUMBER              10 -- example value
 *   MINIMUM-FOR-REQUESTED-UTSI-NUM           1 -- example value
 *   MAXIMUM-FOR-REQUESTED-UTSI-NUM           5 -- example value
 *   MINIMUM-FOR-USI-INFORMATION              1 -- example value
 *   MAXIMUM-FOR-USI-INFORMATION              20 -- example value
 *   MINIMUM-FOR-USI-SERVICE-INDICATOR        1 -- example value
 *   MAXIMUM-FOR-USI-SERVICE-INDICATOR        10 -- example value
 *   NUM-OF-GENERIC-NUMBERS                   5 -- example value
 *   MINIMUM-FOR-BROADBAND-BEARER-CAPABILITY  1 -- example value
 *   MAXIMUM-FOR-BROADBAND-BEARER-CAPABILITY  5
 *  -- example value--}
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
    "&highLayerCompatibilityLength": 5 /* OBJECT_FIELD_SETTING */,
    "&maxBearerCapabilityLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCalledPartyNumberLength": 2 /* OBJECT_FIELD_SETTING */,
    "&maxCalledPartyNumberLength": 10 /* OBJECT_FIELD_SETTING */,
    "&minCallingPartyNumberLength": 2 /* OBJECT_FIELD_SETTING */,
    "&maxCallingPartyNumberLength": 10 /* OBJECT_FIELD_SETTING */,
    "&minCallingPartySubaddressLength": 2 /* OBJECT_FIELD_SETTING */,
    "&maxCallingPartySubaddressLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCauseLength": 1 /* OBJECT_FIELD_SETTING */,
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
    "&minBroadbandBearerCapabilityLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxBroadbandBearerCapabilityLength": 5 /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

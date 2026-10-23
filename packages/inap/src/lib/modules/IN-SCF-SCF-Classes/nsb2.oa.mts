/* eslint-disable */
import { type SCF_SSF_BOUNDS } from "../IN-SSF-SCF-Classes/SCF-SSF-BOUNDS.oca.mjs";


/**
 * @summary nsb2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsb2 SCF-SSF-BOUNDS ::= {
 *   HIGH-LAYER-COMPATIBILITY-LENGTH          1 -- example value
 *   MAXIMUM-FOR-BEARER-CAPABILITY            5 -- example value
 *   MINIMUM-FOR-CALLED-PARTY-NUMBER          1 -- example value
 *   MAXIMUM-FOR-CALLED-PARTY-NUMBER          5 -- example value
 *   MINIMUM-FOR-CALLING-PARTY-NUMBER         1 -- example value
 *   MAXIMUM-FOR-CALLING-PARTY-NUMBER         5 -- example value
 *   MINIMUM-FOR-CALLING-PARTY-SUBADDRESS     1 -- example value
 *   MINIMUM-FOR-CARRIER                      3 -- example value
 *   MAXIMUM-FOR-CARRIER                      10 -- example value
 *   MINIMUM-FOR-CAUSE                        1 -- example value
 *   MAXIMUM-FOR-CAUSE                        4 -- example value
 *   MINIMUM-FOR-DIGITS                       1 -- example value
 *   MAXIMUM-FOR-DIGITS                       5 -- example value
 *   MINIMUM-FOR-DISPLAY                      1 -- example value
 *   MAXIMUM-FOR-DISPLAY                      5 -- example value
 *   MINIMUM-FOR-GENERIC-NUMBER               1 -- example value
 *   MAXIMUM-FOR-GENERIC-NUMBER               5 -- example value
 *   MINIMUM-FOR-LOCATION-NUMBER              1 -- example value
 *   MAXIMUM-FOR-LOCATION-NUMBER              5 -- example value
 *   MINIMUM-FOR-ORIGINAL-CALLED-PARTY-ID     1 -- example value
 *   MAXIMUM-FOR-ORIGINAL-CALLED-PARTY-ID     5 -- example value
 *   MINIMUM-FOR-REDIRECTING-ID               1 -- example value
 *   MAXIMUM-FOR-REDIRECTING-ID               5 -- example value
 *   MINIMUM-FOR-SCF-ID                       1 -- example value
 *   MAXIMUM-FOR-SCF-ID                       5 -- example value
 *   NUM-OF-ADDRESSES                         1 -- example value
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
const nsb2: SCF_SSF_BOUNDS = {
    class: "SCF-SSF-BOUNDS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&highLayerCompatibilityLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxBearerCapabilityLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCalledPartyNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCalledPartyNumberLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCallingPartyNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCallingPartyNumberLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minCallingPartySubaddressLength": 1 /* OBJECT_FIELD_SETTING */,
    "&minCarrierLength": 3 /* OBJECT_FIELD_SETTING */,
    "&maxCarrierLength": 10 /* OBJECT_FIELD_SETTING */,
    "&minCauseLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCauseLength": 4 /* OBJECT_FIELD_SETTING */,
    "&minDigitsLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxDigitsLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minDisplayInformationLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxDisplayInformationLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minGenericNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxGenericNumberLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minLocationNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxLocationNumberLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minOriginalCalledPartyIDLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxOriginalCalledPartyIDLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minRedirectingPartyIDLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxRedirectingPartyIDLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minScfIDLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxScfIDLength": 5 /* OBJECT_FIELD_SETTING */,
    "&numOfAddresses": 1 /* OBJECT_FIELD_SETTING */,
    "&minBroadbandBearerCapabilityLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxBroadbandBearerCapabilityLength": 5 /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

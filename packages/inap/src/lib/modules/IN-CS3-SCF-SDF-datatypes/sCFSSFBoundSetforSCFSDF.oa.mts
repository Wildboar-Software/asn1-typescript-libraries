/* eslint-disable */
import { type SCF_SSF_BOUNDS } from "../IN-CS3-SSF-SCF-Classes/SCF-SSF-BOUNDS.oca.mjs";


/**
 * @summary sCFSSFBoundSetforSCFSDF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sCFSSFBoundSetforSCFSDF SCF-SSF-BOUNDS ::= { -- MAXIMUM-FOR-BEARER-CAPABILITY        5 ??? example value
 *   -- MINIMUM-FOR-CALLED-PARTY-NUMBER        1 ??? example value
 *   -- MAXIMUM-FOR-CALLED-PARTY-NUMBER        5 ??? example value
 *   -- MINIMUM-FOR-CALLING-PARTY-NUMBER        1 ??? example value
 *   -- MAXIMUM-FOR-CALLING-PARTY-NUMBER        5 ??? example value
 *   -- MINIMUM-FOR-CALLING-PARTY-SUBADDRESS        1 ??? example value
 *   -- MAXIMUM-FOR-CALLING-PARTY-SUBADDRESS        5 ??? example value
 *   -- MAXIMUM-FOR-CAUSE                4 ??? example value
 *   MINIMUM-FOR-DIGITS  1
 *   MAXIMUM-FOR-DIGITS  10
 * 
 * 
 * -- MINIMUM-FOR-FORWARD-GVNS            1 ??? example value
 * -- MAXIMUM-FOR-FORWARD-GVNS            5 ??? example value
 * -- MINIMUM-FOR-GENERIC-NAME            1 ??? example value
 * -- MAXIMUM-FOR-GENERIC-NAME            5 ??? example value
 * -- MINIMUM-FOR-GENERIC-NUMBER            1 ??? example value
 * -- MAXIMUM-FOR-GENERIC-NUMBER            5 ??? example value
 * -- MINIMUM-FOR-IP-AVAILABLE            1 ??? example value
 * -- MAXIMUM-FOR-IP-AVAILABLE            5 ??? example value
 * -- MINIMUM-FOR-IP-SSP-CAPABILITIES        1 ??? example value
 * -- MAXIMUM-FOR-IP-SSP-CAPABILITIES        5 ??? example value
 * -- MINIMUM-FOR-ISDN-ACCESS-RELATED-INFO        1 ??? example value
 * -- MAXIMUM-FOR-ISDN-ACCESS-RELATED-INFO        5 ??? example value
 * -- MINIMUM-FOR-LOCATION-NUMBER            1 ??? example value
 * -- MAXIMUM-FOR-LOCATION-NUMBER            5 ??? example value
 * -- MINIMUM-FOR-MID-CALL-CONTROL-INFO        1 ??? example value
 * -- MAXIMUM-FOR-MID-CALL-CONTROL-INFO        5 ??? example value
 * -- MINIMUM-FOR-ORIGINAL-CALLED-PARTY-ID        1 ??? example value
 * -- MAXIMUM-FOR-ORIGINAL-CALLED-PARTY-ID        5 ??? example value
 * -- MINIMUM-FOR-REASON                1 ??? example value
 * -- MAXIMUM-FOR-REASON                5 ??? example value
 * -- MINIMUM-FOR-REDIRECTING-ID            1 ??? example value
 * -- MAXIMUM-FOR-REDIRECTING-ID            5 ??? example value
 * -- MINIMUM-FOR-REQUESTED-UTSI-NUM        1 ??? example value
 * -- MAXIMUM-FOR-REQUESTED-UTSI-NUM        5 ??? example value
 * -- MINIMUM-FOR-ROUTE-LIST            1 ??? example value
 * -- MAXIMUM-FOR-ROUTE-LIST            5 ??? example value
 * -- MINIMUM-FOR-ROUTING-NUMBER            1 ??? example value
 * -- MAXIMUM-FOR-ROUTING-NUMBER            5 ??? example value
 * -- MINIMUM-FOR-SCF-ID                1 ??? example value
 * -- MAXIMUM-FOR-SCF-ID                5 ??? example value
 * -- MINIMUM-FOR-SCI-BILLING-CHARGING        1 ??? example value
 * -- MAXIMUM-FOR-SCI-BILLING-CHARGING        1 ??? example value
 * -- MINIMUM-FOR-SDSS-INFORMATION            1 ??? example value
 * -- MAXIMUM-FOR-SDSS-INFORMATION            1 ??? example value
 * -- MINIMUM-FOR-SII                1 ??? example value
 * -- MAXIMUM-FOR-SII                5 ??? example value
 * -- MINIMUM-FOR-SF-BILLING-CHARGING        1 ??? example value
 * -- MAXIMUM-FOR-SF-BILLING-CHARGING        5 ??? example value
 * -- MINIMUM-FOR-USI-INFORMATION            1 ??? example value
 * -- MAXIMUM-FOR-USI-INFORMATION            5 ??? example value
 * -- MINIMUM-FOR-USI-SERVICE-INDICATOR        1 ??? example value
 * -- MAXIMUM-FOR-USI-SERVICE-INDICATOR        5 ??? example value
 * -- NUM-OF-BCSM-EVENT                13 ??? example value
 * -- NUM-OF-BCUSM-EVENT                13 ??? example value
 * -- NUM-OF-CSAS                    13 ??? example value
 * -- NUM-OF-CSS                    13 ??? example value
 * -- NUM-OF-GENERIC-NUMBERS            2 ??? example value
 * -- NUM-OF-INPROFILE                2 ??? example value
 * -- NUM-OF-SEVERAL-TRIGGER            13 ??? example value
 * -- NUM-OF-IN-SERVICE-COMPATIBILITY-ID        13 ??? example value
 * -- NUM-OF-LEGS                    13 ??? example value
 * -- MAXIMUM-FOR-CALL-REFERENCE            5 ??? example value
 * -- NUM-OF-ADDRESSES                13 ??? example value
 * }
 * ```
 * 
 * @constant
 * @type {SCF_SSF_BOUNDS}
 * @implements {SCF_SSF_BOUNDS}
 */
export
const sCFSSFBoundSetforSCFSDF: SCF_SSF_BOUNDS = {
    class: "SCF-SSF-BOUNDS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&minDigitsLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxDigitsLength": 10 /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

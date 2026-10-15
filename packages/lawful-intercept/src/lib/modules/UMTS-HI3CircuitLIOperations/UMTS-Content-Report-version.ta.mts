/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_UMTS_Content_Report_version {
    version1 = 1,
    version8 = 8,
}

/**
 * @summary UMTS_Content_Report_version
 * @description
 * 
 * Report version. Values 2 through 7 are omitted to align with
 * UmtsHI2Operations. The enclosing report comment says the parameter is
 * redundant from v6.8.0 and recommends always sending value 8, which that
 * comment calls lastVersion and this module names version8.
 * 
 * 3GPP TS 33.108, annex B.6.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UMTS-Content-Report-version ::= ENUMERATED {
 *     version1(1),
 *     ... ,
 *     -- versions 2-7 were omitted to align with UmtsHI2Operations.
 *     version8(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UMTS_Content_Report_version = _enum_for_UMTS_Content_Report_version | ENUMERATED;

/**
 * @summary UMTS_Content_Report_version_version1
 * @description
 * 
 * Version value 1. The report comment recommends always sending value 8
 * instead. 3GPP TS 33.108, annex B.6.
 * @constant
 * @type {number}
 */
export
const UMTS_Content_Report_version_version1: UMTS_Content_Report_version = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version1
 * @description
 * 
 * Version value 1; recommended value to send is 8. Annex B.6.
 * @constant
 * @type {number}
 */
export
const version1: UMTS_Content_Report_version = UMTS_Content_Report_version_version1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UMTS_Content_Report_version_version8
 * @description
 * 
 * Version value 8. The report comment calls this lastVersion(8) and recommends
 * always sending it, including after the HI3 CS domain OID version arc
 * increases. 3GPP TS 33.108, annex B.6.
 * @constant
 * @type {number}
 */
export
const UMTS_Content_Report_version_version8: UMTS_Content_Report_version = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version8
 * @description
 * 
 * Version value 8, the recommended value to send. Annex B.6.
 * @constant
 * @type {number}
 */
export
const version8: UMTS_Content_Report_version = UMTS_Content_Report_version_version8; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_UMTS_Content_Report_version: $.ASN1Decoder<UMTS_Content_Report_version> = $._decodeEnumerated;
export const _encode_UMTS_Content_Report_version: $.ASN1Encoder<UMTS_Content_Report_version> = $._encodeEnumerated;


/* eslint-enable */

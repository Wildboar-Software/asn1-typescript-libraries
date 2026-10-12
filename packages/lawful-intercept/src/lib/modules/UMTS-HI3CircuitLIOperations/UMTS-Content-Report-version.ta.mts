/* eslint-disable */
import {
    ASN1Element as _Element,
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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UMTS-Content-Report-version ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type UMTS_Content_Report_version = _enum_for_UMTS_Content_Report_version | ENUMERATED;

/**
 * @summary UMTS_Content_Report_version_version1
 * @constant
 * @type {number}
 */
export
const UMTS_Content_Report_version_version1: UMTS_Content_Report_version = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version1
 * @constant
 * @type {number}
 */
export
const version1: UMTS_Content_Report_version = UMTS_Content_Report_version_version1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UMTS_Content_Report_version_version8
 * @constant
 * @type {number}
 */
export
const UMTS_Content_Report_version_version8: UMTS_Content_Report_version = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version8
 * @constant
 * @type {number}
 */
export
const version8: UMTS_Content_Report_version = UMTS_Content_Report_version_version8; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_UMTS_Content_Report_version: $.ASN1Decoder<UMTS_Content_Report_version> = $._decodeEnumerated;
export const _encode_UMTS_Content_Report_version: $.ASN1Encoder<UMTS_Content_Report_version> = $._encodeEnumerated;


/* eslint-enable */

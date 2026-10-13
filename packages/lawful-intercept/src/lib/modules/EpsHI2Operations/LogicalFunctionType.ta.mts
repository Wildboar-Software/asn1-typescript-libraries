/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_LogicalFunctionType {
    pDNGW = 0,
    mME = 1,
    sGW = 2,
    ePDG = 3,
    hSS = 4,
}

/**
 * @summary LogicalFunctionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogicalFunctionType  ::=  ENUMERATED
 * {
 *     pDNGW        (0),
 *     mME            (1),
 *     sGW            (2),
 *     ePDG        (3),
 *     hSS            (4),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type LogicalFunctionType = _enum_for_LogicalFunctionType | ENUMERATED;

/**
 * @summary LogicalFunctionType_pDNGW
 * @constant
 * @type {number}
 */
export
const LogicalFunctionType_pDNGW: LogicalFunctionType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDNGW
 * @constant
 * @type {number}
 */
export
const pDNGW: LogicalFunctionType = LogicalFunctionType_pDNGW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LogicalFunctionType_mME
 * @constant
 * @type {number}
 */
export
const LogicalFunctionType_mME: LogicalFunctionType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mME
 * @constant
 * @type {number}
 */
export
const mME: LogicalFunctionType = LogicalFunctionType_mME; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LogicalFunctionType_sGW
 * @constant
 * @type {number}
 */
export
const LogicalFunctionType_sGW: LogicalFunctionType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sGW
 * @constant
 * @type {number}
 */
export
const sGW: LogicalFunctionType = LogicalFunctionType_sGW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LogicalFunctionType_ePDG
 * @constant
 * @type {number}
 */
export
const LogicalFunctionType_ePDG: LogicalFunctionType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePDG
 * @constant
 * @type {number}
 */
export
const ePDG: LogicalFunctionType = LogicalFunctionType_ePDG; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LogicalFunctionType_hSS
 * @constant
 * @type {number}
 */
export
const LogicalFunctionType_hSS: LogicalFunctionType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSS
 * @constant
 * @type {number}
 */
export
const hSS: LogicalFunctionType = LogicalFunctionType_hSS; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_LogicalFunctionType: $.ASN1Decoder<LogicalFunctionType> = $._decodeEnumerated;
export const _encode_LogicalFunctionType: $.ASN1Encoder<LogicalFunctionType> = $._encodeEnumerated;


/* eslint-enable */

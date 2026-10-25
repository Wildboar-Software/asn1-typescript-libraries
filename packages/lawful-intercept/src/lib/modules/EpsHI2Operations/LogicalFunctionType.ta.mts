/* eslint-disable */
import {
    type ENUMERATED
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
 * Which logical function inside a physical element produced the IRI, so the
 * LEMF can tell those functions apart (table 10.5.2). 3GPP TS 33.108
 * (https://www.3gpp.org/DynaReport/33108.htm).
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
 * @description
 * 
 * The event came from the PDN-GW (table 10.5.2).
 * 
 * @constant
 * @type {number}
 */
export
const LogicalFunctionType_pDNGW = _enum_for_LogicalFunctionType.pDNGW satisfies LogicalFunctionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDNGW
 * @description
 * 
 * PDN-GW (clause 10.5).
 * 
 * @constant
 * @type {number}
 */
export
const pDNGW = LogicalFunctionType_pDNGW satisfies LogicalFunctionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LogicalFunctionType_mME
 * @description
 * 
 * The event came from the MME (table 10.5.2).
 * 
 * @constant
 * @type {number}
 */
export
const LogicalFunctionType_mME = _enum_for_LogicalFunctionType.mME satisfies LogicalFunctionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mME
 * @description
 * 
 * MME (clause 10.5).
 * 
 * @constant
 * @type {number}
 */
export
const mME = LogicalFunctionType_mME satisfies LogicalFunctionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LogicalFunctionType_sGW
 * @description
 * 
 * The event came from the S-GW (table 10.5.2).
 * 
 * @constant
 * @type {number}
 */
export
const LogicalFunctionType_sGW = _enum_for_LogicalFunctionType.sGW satisfies LogicalFunctionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sGW
 * @description
 * 
 * S-GW (clause 10.5).
 * 
 * @constant
 * @type {number}
 */
export
const sGW = LogicalFunctionType_sGW satisfies LogicalFunctionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LogicalFunctionType_ePDG
 * @description
 * 
 * The event came from the ePDG (table 10.5.2). Clause 10.0 subjects an ePDG
 * that is not using GTP on S2b, together with the AAA server, to the PDG and
 * AAA requirements.
 * 
 * @constant
 * @type {number}
 */
export
const LogicalFunctionType_ePDG = _enum_for_LogicalFunctionType.ePDG satisfies LogicalFunctionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePDG
 * @description
 * 
 * ePDG (clause 10.0).
 * 
 * @constant
 * @type {number}
 */
export
const ePDG = LogicalFunctionType_ePDG satisfies LogicalFunctionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LogicalFunctionType_hSS
 * @description
 * 
 * The event came from the HSS (table 10.5.2).
 * 
 * @constant
 * @type {number}
 */
export
const LogicalFunctionType_hSS = _enum_for_LogicalFunctionType.hSS satisfies LogicalFunctionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSS
 * @description
 * 
 * HSS (clause 10.5).
 * 
 * @constant
 * @type {number}
 */
export
const hSS = LogicalFunctionType_hSS satisfies LogicalFunctionType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_LogicalFunctionType: $.ASN1Decoder<LogicalFunctionType> = $._decodeEnumerated;
export const _encode_LogicalFunctionType: $.ASN1Encoder<LogicalFunctionType> = $._encodeEnumerated;


/* eslint-enable */

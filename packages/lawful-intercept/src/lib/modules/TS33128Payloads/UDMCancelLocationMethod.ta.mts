/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UDMCancelLocationMethod
 * @description
 * 
 * Identifies method used to access the serving system, see NOTE 3.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMCancelLocationMethod  ::=  ENUMERATED
 * {
 *     aMF3GPPAccessDeregistration(1),
 *     aMFNon3GPPAccessDeregistration(2),
 *     uDMDeregistration(3),
 *     unknown(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UDMCancelLocationMethod {
    aMF3GPPAccessDeregistration = 1,
    aMFNon3GPPAccessDeregistration = 2,
    uDMDeregistration = 3,
    unknown = 4,
}

/**
 * @summary UDMCancelLocationMethod
 * @description
 * 
 * Identifies method used to access the serving system, see NOTE 3.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMCancelLocationMethod  ::=  ENUMERATED
 * {
 *     aMF3GPPAccessDeregistration(1),
 *     aMFNon3GPPAccessDeregistration(2),
 *     uDMDeregistration(3),
 *     unknown(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UDMCancelLocationMethod = _enum_for_UDMCancelLocationMethod;

/**
 * @summary UDMCancelLocationMethod
 * @description
 * 
 * Identifies method used to access the serving system, see NOTE 3.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMCancelLocationMethod  ::=  ENUMERATED
 * {
 *     aMF3GPPAccessDeregistration(1),
 *     aMFNon3GPPAccessDeregistration(2),
 *     uDMDeregistration(3),
 *     unknown(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UDMCancelLocationMethod = _enum_for_UDMCancelLocationMethod;

/**
 * @summary UDMCancelLocationMethod_aMF3GPPAccessDeregistration
 * @constant
 * @type {number}
 */
export
const UDMCancelLocationMethod_aMF3GPPAccessDeregistration = UDMCancelLocationMethod.aMF3GPPAccessDeregistration satisfies UDMCancelLocationMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aMF3GPPAccessDeregistration
 * @constant
 * @type {number}
 */
export
const aMF3GPPAccessDeregistration = UDMCancelLocationMethod.aMF3GPPAccessDeregistration satisfies UDMCancelLocationMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMCancelLocationMethod_aMFNon3GPPAccessDeregistration
 * @constant
 * @type {number}
 */
export
const UDMCancelLocationMethod_aMFNon3GPPAccessDeregistration = UDMCancelLocationMethod.aMFNon3GPPAccessDeregistration satisfies UDMCancelLocationMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aMFNon3GPPAccessDeregistration
 * @constant
 * @type {number}
 */
export
const aMFNon3GPPAccessDeregistration = UDMCancelLocationMethod.aMFNon3GPPAccessDeregistration satisfies UDMCancelLocationMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMCancelLocationMethod_uDMDeregistration
 * @constant
 * @type {number}
 */
export
const UDMCancelLocationMethod_uDMDeregistration = UDMCancelLocationMethod.uDMDeregistration satisfies UDMCancelLocationMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uDMDeregistration
 * @constant
 * @type {number}
 */
export
const uDMDeregistration = UDMCancelLocationMethod.uDMDeregistration satisfies UDMCancelLocationMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMCancelLocationMethod_unknown
 * @constant
 * @type {number}
 */
export
const UDMCancelLocationMethod_unknown = UDMCancelLocationMethod.unknown satisfies UDMCancelLocationMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown = UDMCancelLocationMethod.unknown satisfies UDMCancelLocationMethod; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_UDMCancelLocationMethod: $.ASN1Decoder<UDMCancelLocationMethod> = $._decodeEnumerated;
export const _encode_UDMCancelLocationMethod: $.ASN1Encoder<UDMCancelLocationMethod> = $._encodeEnumerated;


/* eslint-enable */

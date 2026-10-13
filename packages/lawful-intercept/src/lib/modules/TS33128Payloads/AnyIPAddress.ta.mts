/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AnyIPAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyIPAddress  ::=  ENUMERATED
 * {
 *     any(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AnyIPAddress {
    any_ = 1,
}

/**
 * @summary AnyIPAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyIPAddress  ::=  ENUMERATED
 * {
 *     any(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AnyIPAddress = _enum_for_AnyIPAddress;

/**
 * @summary AnyIPAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyIPAddress  ::=  ENUMERATED
 * {
 *     any(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AnyIPAddress = _enum_for_AnyIPAddress;

/**
 * @summary AnyIPAddress_any_
 * @constant
 * @type {number}
 */
export
const AnyIPAddress_any_: AnyIPAddress = AnyIPAddress.any_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary any_
 * @constant
 * @type {number}
 */
export
const any_: AnyIPAddress = AnyIPAddress.any_; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AnyIPAddress: $.ASN1Decoder<AnyIPAddress> = $._decodeEnumerated;
export const _encode_AnyIPAddress: $.ASN1Encoder<AnyIPAddress> = $._encodeEnumerated;


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UDMServingSystemMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMServingSystemMethod  ::=  ENUMERATED
 * {
 *     amf3GPPAccessRegistration(0),
 *     amfNon3GPPAccessRegistration(1),
 *     unknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UDMServingSystemMethod {
    amf3GPPAccessRegistration = 0,
    amfNon3GPPAccessRegistration = 1,
    unknown = 2,
}

/**
 * @summary UDMServingSystemMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMServingSystemMethod  ::=  ENUMERATED
 * {
 *     amf3GPPAccessRegistration(0),
 *     amfNon3GPPAccessRegistration(1),
 *     unknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UDMServingSystemMethod = _enum_for_UDMServingSystemMethod;

/**
 * @summary UDMServingSystemMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMServingSystemMethod  ::=  ENUMERATED
 * {
 *     amf3GPPAccessRegistration(0),
 *     amfNon3GPPAccessRegistration(1),
 *     unknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UDMServingSystemMethod = _enum_for_UDMServingSystemMethod;

/**
 * @summary UDMServingSystemMethod_amf3GPPAccessRegistration
 * @constant
 * @type {number}
 */
export
const UDMServingSystemMethod_amf3GPPAccessRegistration: UDMServingSystemMethod = UDMServingSystemMethod.amf3GPPAccessRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary amf3GPPAccessRegistration
 * @constant
 * @type {number}
 */
export
const amf3GPPAccessRegistration: UDMServingSystemMethod = UDMServingSystemMethod.amf3GPPAccessRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMServingSystemMethod_amfNon3GPPAccessRegistration
 * @constant
 * @type {number}
 */
export
const UDMServingSystemMethod_amfNon3GPPAccessRegistration: UDMServingSystemMethod = UDMServingSystemMethod.amfNon3GPPAccessRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary amfNon3GPPAccessRegistration
 * @constant
 * @type {number}
 */
export
const amfNon3GPPAccessRegistration: UDMServingSystemMethod = UDMServingSystemMethod.amfNon3GPPAccessRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMServingSystemMethod_unknown
 * @constant
 * @type {number}
 */
export
const UDMServingSystemMethod_unknown: UDMServingSystemMethod = UDMServingSystemMethod.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: UDMServingSystemMethod = UDMServingSystemMethod.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_UDMServingSystemMethod: $.ASN1Decoder<UDMServingSystemMethod> = $._decodeEnumerated;

export const _encode_UDMServingSystemMethod: $.ASN1Encoder<UDMServingSystemMethod> = $._encodeEnumerated;


/* eslint-enable */

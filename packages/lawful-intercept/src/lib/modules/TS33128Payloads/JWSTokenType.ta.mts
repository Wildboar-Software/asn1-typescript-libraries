/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary JWSTokenType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JWSTokenType  ::=  ENUMERATED
 * {
 *     passport(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_JWSTokenType {
    passport = 1,
}

/**
 * @summary JWSTokenType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JWSTokenType  ::=  ENUMERATED
 * {
 *     passport(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type JWSTokenType = _enum_for_JWSTokenType;

/**
 * @summary JWSTokenType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JWSTokenType  ::=  ENUMERATED
 * {
 *     passport(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const JWSTokenType = _enum_for_JWSTokenType;

/**
 * @summary JWSTokenType_passport
 * @constant
 * @type {number}
 */
export
const JWSTokenType_passport: JWSTokenType = JWSTokenType.passport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary passport
 * @constant
 * @type {number}
 */
export
const passport: JWSTokenType = JWSTokenType.passport; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_JWSTokenType: $.ASN1Decoder<JWSTokenType> = $._decodeEnumerated;

export const _encode_JWSTokenType: $.ASN1Encoder<JWSTokenType> = $._encodeEnumerated;


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KeyGetType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyGetType  ::=  ENUMERATED
 * {
 *     internal(1),
 *     external(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_KeyGetType {
    internal = 1,
    external = 2,
}

/**
 * @summary KeyGetType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyGetType  ::=  ENUMERATED
 * {
 *     internal(1),
 *     external(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type KeyGetType = _enum_for_KeyGetType;

/**
 * @summary KeyGetType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyGetType  ::=  ENUMERATED
 * {
 *     internal(1),
 *     external(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const KeyGetType = _enum_for_KeyGetType;

/**
 * @summary KeyGetType_internal
 * @constant
 * @type {number}
 */
export
const KeyGetType_internal: KeyGetType = KeyGetType.internal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internal
 * @constant
 * @type {number}
 */
export
const internal: KeyGetType = KeyGetType.internal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary KeyGetType_external
 * @constant
 * @type {number}
 */
export
const KeyGetType_external: KeyGetType = KeyGetType.external; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary external
 * @constant
 * @type {number}
 */
export
const external: KeyGetType = KeyGetType.external; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_KeyGetType: $.ASN1Decoder<KeyGetType> = $._decodeEnumerated;

export const _encode_KeyGetType: $.ASN1Encoder<KeyGetType> = $._encodeEnumerated;


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_TypeOfBearer {
    defaultBearer = 1,
    dedicatedBearer = 2,
}

/**
 * @summary TypeOfBearer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeOfBearer  ::=  ENUMERATED
 * {
 *     defaultBearer          (1),
 *     dedicatedBearer        (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TypeOfBearer = _enum_for_TypeOfBearer | ENUMERATED;

/**
 * @summary TypeOfBearer_defaultBearer
 * @constant
 * @type {number}
 */
export
const TypeOfBearer_defaultBearer: TypeOfBearer = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary defaultBearer
 * @constant
 * @type {number}
 */
export
const defaultBearer: TypeOfBearer = TypeOfBearer_defaultBearer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeOfBearer_dedicatedBearer
 * @constant
 * @type {number}
 */
export
const TypeOfBearer_dedicatedBearer: TypeOfBearer = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dedicatedBearer
 * @constant
 * @type {number}
 */
export
const dedicatedBearer: TypeOfBearer = TypeOfBearer_dedicatedBearer; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_TypeOfBearer: $.ASN1Decoder<TypeOfBearer> = $._decodeEnumerated;

export const _encode_TypeOfBearer: $.ASN1Encoder<TypeOfBearer> = $._encodeEnumerated;


/* eslint-enable */

/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TypeOfSubscribers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeOfSubscribers  ::=  ENUMERATED {
 *    home        ( 0 ),
 *    visiting    ( 1 ),
 *    all         ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TypeOfSubscribers {
    home = 0,
    visiting = 1,
    all = 2,
}

/**
 * @summary TypeOfSubscribers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeOfSubscribers  ::=  ENUMERATED {
 *    home        ( 0 ),
 *    visiting    ( 1 ),
 *    all         ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type TypeOfSubscribers = _enum_for_TypeOfSubscribers;

/**
 * @summary TypeOfSubscribers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeOfSubscribers  ::=  ENUMERATED {
 *    home        ( 0 ),
 *    visiting    ( 1 ),
 *    all         ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const TypeOfSubscribers = _enum_for_TypeOfSubscribers;

/**
 * @summary TypeOfSubscribers_home
 * @constant
 * @type {number}
 */
export
const TypeOfSubscribers_home: TypeOfSubscribers = TypeOfSubscribers.home; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary home
 * @constant
 * @type {number}
 */
export
const home: TypeOfSubscribers = TypeOfSubscribers.home; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeOfSubscribers_visiting
 * @constant
 * @type {number}
 */
export
const TypeOfSubscribers_visiting: TypeOfSubscribers = TypeOfSubscribers.visiting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary visiting
 * @constant
 * @type {number}
 */
export
const visiting: TypeOfSubscribers = TypeOfSubscribers.visiting; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeOfSubscribers_all
 * @constant
 * @type {number}
 */
export
const TypeOfSubscribers_all: TypeOfSubscribers = TypeOfSubscribers.all; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary all
 * @constant
 * @type {number}
 */
export
const all: TypeOfSubscribers = TypeOfSubscribers.all; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_TypeOfSubscribers: $.ASN1Decoder<TypeOfSubscribers> = $._decodeEnumerated;

export
const _encode_TypeOfSubscribers: $.ASN1Encoder<TypeOfSubscribers> = $._encodeEnumerated;

/* eslint-enable */

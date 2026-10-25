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
const TypeOfSubscribers: typeof _enum_for_TypeOfSubscribers = _enum_for_TypeOfSubscribers;

/**
 * @summary TypeOfSubscribers_home
 * @constant
 * @type {number}
 */
export
const TypeOfSubscribers_home: _enum_for_TypeOfSubscribers.home = TypeOfSubscribers.home; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary home
 * @constant
 * @type {number}
 */
export
const home: _enum_for_TypeOfSubscribers.home = TypeOfSubscribers.home; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeOfSubscribers_visiting
 * @constant
 * @type {number}
 */
export
const TypeOfSubscribers_visiting: _enum_for_TypeOfSubscribers.visiting = TypeOfSubscribers.visiting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary visiting
 * @constant
 * @type {number}
 */
export
const visiting: _enum_for_TypeOfSubscribers.visiting = TypeOfSubscribers.visiting; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeOfSubscribers_all
 * @constant
 * @type {number}
 */
export
const TypeOfSubscribers_all: _enum_for_TypeOfSubscribers.all = TypeOfSubscribers.all; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary all
 * @constant
 * @type {number}
 */
export
const all: _enum_for_TypeOfSubscribers.all = TypeOfSubscribers.all; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_TypeOfSubscribers: $.ASN1Decoder<TypeOfSubscribers> = $._decodeEnumerated;

export
const _encode_TypeOfSubscribers: $.ASN1Encoder<TypeOfSubscribers> = $._encodeEnumerated;

/* eslint-enable */

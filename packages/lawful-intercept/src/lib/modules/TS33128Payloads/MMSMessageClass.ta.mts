/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSMessageClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSMessageClass  ::=  ENUMERATED
 * {
 *     personal(1),
 *     advertisement(2),
 *     informational(3),
 *     auto(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSMessageClass {
    personal = 1,
    advertisement = 2,
    informational = 3,
    auto = 4,
}

/**
 * @summary MMSMessageClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSMessageClass  ::=  ENUMERATED
 * {
 *     personal(1),
 *     advertisement(2),
 *     informational(3),
 *     auto(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSMessageClass = _enum_for_MMSMessageClass;

/**
 * @summary MMSMessageClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSMessageClass  ::=  ENUMERATED
 * {
 *     personal(1),
 *     advertisement(2),
 *     informational(3),
 *     auto(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSMessageClass = _enum_for_MMSMessageClass;

/**
 * @summary MMSMessageClass_personal
 * @constant
 * @type {number}
 */
export
const MMSMessageClass_personal: MMSMessageClass = MMSMessageClass.personal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal
 * @constant
 * @type {number}
 */
export
const personal: MMSMessageClass = MMSMessageClass.personal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSMessageClass_advertisement
 * @constant
 * @type {number}
 */
export
const MMSMessageClass_advertisement: MMSMessageClass = MMSMessageClass.advertisement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary advertisement
 * @constant
 * @type {number}
 */
export
const advertisement: MMSMessageClass = MMSMessageClass.advertisement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSMessageClass_informational
 * @constant
 * @type {number}
 */
export
const MMSMessageClass_informational: MMSMessageClass = MMSMessageClass.informational; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary informational
 * @constant
 * @type {number}
 */
export
const informational: MMSMessageClass = MMSMessageClass.informational; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSMessageClass_auto
 * @constant
 * @type {number}
 */
export
const MMSMessageClass_auto: MMSMessageClass = MMSMessageClass.auto; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auto
 * @constant
 * @type {number}
 */
export
const auto: MMSMessageClass = MMSMessageClass.auto; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSMessageClass: $.ASN1Decoder<MMSMessageClass> = $._decodeEnumerated;
export const _encode_MMSMessageClass: $.ASN1Encoder<MMSMessageClass> = $._encodeEnumerated;


/* eslint-enable */

/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ClassIdentifier {
    personal = 0,
    advertisement = 1,
    informational = 2,
    auto = 3,
}

/**
 * @summary ClassIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClassIdentifier  ::=  ENUMERATED
 * {
 *     personal             (0),
 *     advertisement         (1),
 *     informational        (2),
 *     auto                (3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ClassIdentifier = _enum_for_ClassIdentifier | ENUMERATED;

/**
 * @summary ClassIdentifier_personal
 * @constant
 * @type {number}
 */
export
const ClassIdentifier_personal: ClassIdentifier = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal
 * @constant
 * @type {number}
 */
export
const personal: ClassIdentifier = ClassIdentifier_personal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ClassIdentifier_advertisement
 * @constant
 * @type {number}
 */
export
const ClassIdentifier_advertisement: ClassIdentifier = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary advertisement
 * @constant
 * @type {number}
 */
export
const advertisement: ClassIdentifier = ClassIdentifier_advertisement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ClassIdentifier_informational
 * @constant
 * @type {number}
 */
export
const ClassIdentifier_informational: ClassIdentifier = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary informational
 * @constant
 * @type {number}
 */
export
const informational: ClassIdentifier = ClassIdentifier_informational; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ClassIdentifier_auto
 * @constant
 * @type {number}
 */
export
const ClassIdentifier_auto: ClassIdentifier = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auto
 * @constant
 * @type {number}
 */
export
const auto: ClassIdentifier = ClassIdentifier_auto; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ClassIdentifier: $.ASN1Decoder<ClassIdentifier> = $._decodeEnumerated;
export const _encode_ClassIdentifier: $.ASN1Encoder<ClassIdentifier> = $._encodeEnumerated;


/* eslint-enable */

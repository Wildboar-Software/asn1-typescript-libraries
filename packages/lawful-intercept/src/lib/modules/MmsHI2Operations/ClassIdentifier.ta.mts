/* eslint-disable */
import {
    type ENUMERATED
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
 * Named class of an MM. If the class is absent, interpret it as personal (table
 * 15.3.6.1.2).
 * 
 * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
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
 * @description
 * 
 * Personal MM. If the class is absent, interpret the class as personal (table
 * 15.3.6.1.2).
 * @constant
 * @type {number}
 */
export
const ClassIdentifier_personal = _enum_for_ClassIdentifier.personal satisfies ClassIdentifier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal
 * @description
 * 
 * Personal class. Also the meaning when class is absent.
 * @constant
 * @type {number}
 */
export
const personal = ClassIdentifier_personal satisfies ClassIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ClassIdentifier_advertisement
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const ClassIdentifier_advertisement = _enum_for_ClassIdentifier.advertisement satisfies ClassIdentifier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary advertisement
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const advertisement = ClassIdentifier_advertisement satisfies ClassIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ClassIdentifier_informational
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const ClassIdentifier_informational = _enum_for_ClassIdentifier.informational satisfies ClassIdentifier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary informational
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const informational = ClassIdentifier_informational satisfies ClassIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ClassIdentifier_auto
 * @description
 * 
 * The UE generated the MM automatically (table 15.3.6.1.2).
 * @constant
 * @type {number}
 */
export
const ClassIdentifier_auto = _enum_for_ClassIdentifier.auto satisfies ClassIdentifier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auto
 * @description
 * 
 * UE-generated MM (table 15.3.6.1.2).
 * @constant
 * @type {number}
 */
export
const auto = ClassIdentifier_auto satisfies ClassIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ClassIdentifier: $.ASN1Decoder<ClassIdentifier> = $._decodeEnumerated;
export const _encode_ClassIdentifier: $.ASN1Encoder<ClassIdentifier> = $._encodeEnumerated;


/* eslint-enable */

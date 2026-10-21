/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PartyCategory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyCategory  ::=  ENUMERATED {
 *     unknown(0),
 *     extension(1),
 *     pisnAttendant(2),
 *     emergExt(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PartyCategory {
    unknown = 0,
    extension = 1,
    pisnAttendant = 2,
    emergExt = 3,
}

/**
 * @summary PartyCategory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyCategory  ::=  ENUMERATED {
 *     unknown(0),
 *     extension(1),
 *     pisnAttendant(2),
 *     emergExt(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PartyCategory = _enum_for_PartyCategory;

/**
 * @summary PartyCategory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyCategory  ::=  ENUMERATED {
 *     unknown(0),
 *     extension(1),
 *     pisnAttendant(2),
 *     emergExt(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PartyCategory = _enum_for_PartyCategory;

/**
 * @summary PartyCategory_unknown
 * @constant
 * @type {number}
 */
export
const PartyCategory_unknown: PartyCategory = PartyCategory.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: PartyCategory = PartyCategory.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyCategory_extension
 * @constant
 * @type {number}
 */
export
const PartyCategory_extension: PartyCategory = PartyCategory.extension; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary extension
 * @constant
 * @type {number}
 */
export
const extension: PartyCategory = PartyCategory.extension; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyCategory_pisnAttendant
 * @constant
 * @type {number}
 */
export
const PartyCategory_pisnAttendant: PartyCategory = PartyCategory.pisnAttendant; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pisnAttendant
 * @constant
 * @type {number}
 */
export
const pisnAttendant: PartyCategory = PartyCategory.pisnAttendant; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyCategory_emergExt
 * @constant
 * @type {number}
 */
export
const PartyCategory_emergExt: PartyCategory = PartyCategory.emergExt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergExt
 * @constant
 * @type {number}
 */
export
const emergExt: PartyCategory = PartyCategory.emergExt; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PartyCategory: $.ASN1Decoder<PartyCategory> = $._decodeEnumerated;

export
const _encode_PartyCategory: $.ASN1Encoder<PartyCategory> = $._encodeEnumerated;

/* eslint-enable */

/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PartyCategory
 * @description
 *
 * Category of a user involved in the call, for another user or PINX
 * (ECMA-251 §6.3.1). An Originating PINX may send the calling user's
 * category in SETUP. A Terminating PINX may send the called user's category
 * in ALERTING or CONNECT. A receiver may display it or select
 * supplementary-service options. The NOTE distinguishes an extension from a
 * PISN attendant and does not define unknown or emergExt.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
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
 * Category of a user involved in the call, for another user or PINX
 * (ECMA-251 §6.3.1). An Originating PINX may send the calling user's
 * category in SETUP. A Terminating PINX may send the called user's category
 * in ALERTING or CONNECT. A receiver may display it or select
 * supplementary-service options. The NOTE distinguishes an extension from a
 * PISN attendant and does not define unknown or emergExt.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
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
 * Category of a user involved in the call, for another user or PINX
 * (ECMA-251 §6.3.1). An Originating PINX may send the calling user's
 * category in SETUP. A Terminating PINX may send the called user's category
 * in ALERTING or CONNECT. A receiver may display it or select
 * supplementary-service options. The NOTE distinguishes an extension from a
 * PISN attendant and does not define unknown or emergExt.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
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
 * @description
 *
 * Value 0. ECMA-251 §6.3.1 names it and does not say when it is used.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const PartyCategory_unknown = PartyCategory.unknown satisfies PartyCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description Alias of {@link PartyCategory_unknown}.
 * @constant
 * @type {number}
 */
export
const unknown = PartyCategory.unknown satisfies PartyCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyCategory_extension
 * @description
 *
 * The party is an extension. ECMA-251 §6.3.1 says PINX call handling may
 * differ for an extension and for a PISN attendant.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const PartyCategory_extension = PartyCategory.extension satisfies PartyCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary extension
 * @description Alias of {@link PartyCategory_extension}.
 * @constant
 * @type {number}
 */
export
const extension = PartyCategory.extension satisfies PartyCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyCategory_pisnAttendant
 * @description
 *
 * The party is a PISN attendant. ECMA-251 §6.3.1 says PINX call handling may
 * differ for an extension and for a PISN attendant.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const PartyCategory_pisnAttendant = PartyCategory.pisnAttendant satisfies PartyCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pisnAttendant
 * @description Alias of {@link PartyCategory_pisnAttendant}.
 * @constant
 * @type {number}
 */
export
const pisnAttendant = PartyCategory.pisnAttendant satisfies PartyCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyCategory_emergExt
 * @description
 *
 * ECMA-251 §6.3.1 names emergExt and does not define it. The party-category
 * NOTE mentions only an extension and a PISN attendant.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 */
export
const PartyCategory_emergExt = PartyCategory.emergExt satisfies PartyCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergExt
 * @description Alias of {@link PartyCategory_emergExt}.
 * @constant
 * @type {number}
 */
export
const emergExt = PartyCategory.emergExt satisfies PartyCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PartyCategory: $.ASN1Decoder<PartyCategory> = $._decodeEnumerated;

export
const _encode_PartyCategory: $.ASN1Encoder<PartyCategory> = $._encodeEnumerated;

/* eslint-enable */

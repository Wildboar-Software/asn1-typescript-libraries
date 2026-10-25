/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CliRestrictionOption
 * @description
 *
 * CLIR restriction mode: permanent, temporary default restricted, or temporary
 * default allowed (3GPP TS 29.002 V19.1.0 clauses 7.6.4.5 and 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CliRestrictionOption  ::=  ENUMERATED {
 *     permanent  (0),
 *     temporaryDefaultRestricted  (1),
 *     temporaryDefaultAllowed  (2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CliRestrictionOption {
    permanent = 0,
    temporaryDefaultRestricted = 1,
    temporaryDefaultAllowed = 2,
}

/**
 * @summary CliRestrictionOption
 * @description
 *
 * CLIR restriction mode: permanent, temporary default restricted, or temporary
 * default allowed (3GPP TS 29.002 V19.1.0 clauses 7.6.4.5 and 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CliRestrictionOption  ::=  ENUMERATED {
 *     permanent  (0),
 *     temporaryDefaultRestricted  (1),
 *     temporaryDefaultAllowed  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type CliRestrictionOption = _enum_for_CliRestrictionOption;

/**
 * @summary CliRestrictionOption
 * @description
 *
 * CLIR restriction mode: permanent, temporary default restricted, or temporary
 * default allowed (3GPP TS 29.002 V19.1.0 clauses 7.6.4.5 and 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CliRestrictionOption  ::=  ENUMERATED {
 *     permanent  (0),
 *     temporaryDefaultRestricted  (1),
 *     temporaryDefaultAllowed  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const CliRestrictionOption: typeof _enum_for_CliRestrictionOption = _enum_for_CliRestrictionOption;

/**
 * @summary CliRestrictionOption_permanent
 * @description
 *
 * `permanent (0)` (3GPP TS 29.002 V19.1.0 clause 7.6.4.5).
 *
 * @constant
 * @type {number}
 */
export
const CliRestrictionOption_permanent: _enum_for_CliRestrictionOption.permanent = CliRestrictionOption.permanent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary permanent
 * @description
 *
 * `permanent (0)` (3GPP TS 29.002 V19.1.0 clause 7.6.4.5).
 *
 * @constant
 * @type {number}
 */
export
const permanent: _enum_for_CliRestrictionOption.permanent = CliRestrictionOption.permanent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CliRestrictionOption_temporaryDefaultRestricted
 * @description
 *
 * `temporaryDefaultRestricted (1)` (3GPP TS 29.002 V19.1.0 clause 7.6.4.5).
 *
 * @constant
 * @type {number}
 */
export
const CliRestrictionOption_temporaryDefaultRestricted: _enum_for_CliRestrictionOption.temporaryDefaultRestricted = CliRestrictionOption.temporaryDefaultRestricted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary temporaryDefaultRestricted
 * @description
 *
 * `temporaryDefaultRestricted (1)` (3GPP TS 29.002 V19.1.0 clause 7.6.4.5).
 *
 * @constant
 * @type {number}
 */
export
const temporaryDefaultRestricted: _enum_for_CliRestrictionOption.temporaryDefaultRestricted = CliRestrictionOption.temporaryDefaultRestricted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CliRestrictionOption_temporaryDefaultAllowed
 * @description
 *
 * `temporaryDefaultAllowed (2)` (3GPP TS 29.002 V19.1.0 clause 7.6.4.5).
 *
 * @constant
 * @type {number}
 */
export
const CliRestrictionOption_temporaryDefaultAllowed: _enum_for_CliRestrictionOption.temporaryDefaultAllowed = CliRestrictionOption.temporaryDefaultAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary temporaryDefaultAllowed
 * @description
 *
 * `temporaryDefaultAllowed (2)` (3GPP TS 29.002 V19.1.0 clause 7.6.4.5).
 *
 * @constant
 * @type {number}
 */
export
const temporaryDefaultAllowed: _enum_for_CliRestrictionOption.temporaryDefaultAllowed = CliRestrictionOption.temporaryDefaultAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) CliRestrictionOption
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CliRestrictionOption: $.ASN1Decoder<number> = $._decodeEnumerated;

/**
 * @summary Encodes a(n) CliRestrictionOption into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CliRestrictionOption, encoded as an ASN.1 Element.
 */
export const _encode_CliRestrictionOption: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */

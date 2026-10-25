/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NEFReleaseCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFReleaseCause  ::=  ENUMERATED
 * {
 *     sMFRelease(1),
 *     dNRelease(2),
 *     uDMRelease(3),
 *     cHFRelease(4),
 *     localConfigurationPolicy(5),
 *     unknownCause(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NEFReleaseCause {
    sMFRelease = 1,
    dNRelease = 2,
    uDMRelease = 3,
    cHFRelease = 4,
    localConfigurationPolicy = 5,
    unknownCause = 6,
}

/**
 * @summary NEFReleaseCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFReleaseCause  ::=  ENUMERATED
 * {
 *     sMFRelease(1),
 *     dNRelease(2),
 *     uDMRelease(3),
 *     cHFRelease(4),
 *     localConfigurationPolicy(5),
 *     unknownCause(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NEFReleaseCause = _enum_for_NEFReleaseCause;

/**
 * @summary NEFReleaseCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFReleaseCause  ::=  ENUMERATED
 * {
 *     sMFRelease(1),
 *     dNRelease(2),
 *     uDMRelease(3),
 *     cHFRelease(4),
 *     localConfigurationPolicy(5),
 *     unknownCause(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NEFReleaseCause: typeof _enum_for_NEFReleaseCause = _enum_for_NEFReleaseCause;

/**
 * @summary NEFReleaseCause_sMFRelease
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_sMFRelease: _enum_for_NEFReleaseCause.sMFRelease = NEFReleaseCause.sMFRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMFRelease
 * @constant
 * @type {number}
 */
export
const sMFRelease: _enum_for_NEFReleaseCause.sMFRelease = NEFReleaseCause.sMFRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFReleaseCause_dNRelease
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_dNRelease: _enum_for_NEFReleaseCause.dNRelease = NEFReleaseCause.dNRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dNRelease
 * @constant
 * @type {number}
 */
export
const dNRelease: _enum_for_NEFReleaseCause.dNRelease = NEFReleaseCause.dNRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFReleaseCause_uDMRelease
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_uDMRelease: _enum_for_NEFReleaseCause.uDMRelease = NEFReleaseCause.uDMRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uDMRelease
 * @constant
 * @type {number}
 */
export
const uDMRelease: _enum_for_NEFReleaseCause.uDMRelease = NEFReleaseCause.uDMRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFReleaseCause_cHFRelease
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_cHFRelease: _enum_for_NEFReleaseCause.cHFRelease = NEFReleaseCause.cHFRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cHFRelease
 * @constant
 * @type {number}
 */
export
const cHFRelease: _enum_for_NEFReleaseCause.cHFRelease = NEFReleaseCause.cHFRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFReleaseCause_localConfigurationPolicy
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_localConfigurationPolicy: _enum_for_NEFReleaseCause.localConfigurationPolicy = NEFReleaseCause.localConfigurationPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localConfigurationPolicy
 * @constant
 * @type {number}
 */
export
const localConfigurationPolicy: _enum_for_NEFReleaseCause.localConfigurationPolicy = NEFReleaseCause.localConfigurationPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFReleaseCause_unknownCause
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_unknownCause: _enum_for_NEFReleaseCause.unknownCause = NEFReleaseCause.unknownCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCause
 * @constant
 * @type {number}
 */
export
const unknownCause: _enum_for_NEFReleaseCause.unknownCause = NEFReleaseCause.unknownCause; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NEFReleaseCause: $.ASN1Decoder<NEFReleaseCause> = $._decodeEnumerated;
export const _encode_NEFReleaseCause: $.ASN1Encoder<NEFReleaseCause> = $._encodeEnumerated;


/* eslint-enable */

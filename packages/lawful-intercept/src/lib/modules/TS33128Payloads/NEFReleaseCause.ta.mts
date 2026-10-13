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
const NEFReleaseCause = _enum_for_NEFReleaseCause;

/**
 * @summary NEFReleaseCause_sMFRelease
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_sMFRelease: NEFReleaseCause = NEFReleaseCause.sMFRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMFRelease
 * @constant
 * @type {number}
 */
export
const sMFRelease: NEFReleaseCause = NEFReleaseCause.sMFRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFReleaseCause_dNRelease
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_dNRelease: NEFReleaseCause = NEFReleaseCause.dNRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dNRelease
 * @constant
 * @type {number}
 */
export
const dNRelease: NEFReleaseCause = NEFReleaseCause.dNRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFReleaseCause_uDMRelease
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_uDMRelease: NEFReleaseCause = NEFReleaseCause.uDMRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uDMRelease
 * @constant
 * @type {number}
 */
export
const uDMRelease: NEFReleaseCause = NEFReleaseCause.uDMRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFReleaseCause_cHFRelease
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_cHFRelease: NEFReleaseCause = NEFReleaseCause.cHFRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cHFRelease
 * @constant
 * @type {number}
 */
export
const cHFRelease: NEFReleaseCause = NEFReleaseCause.cHFRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFReleaseCause_localConfigurationPolicy
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_localConfigurationPolicy: NEFReleaseCause = NEFReleaseCause.localConfigurationPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localConfigurationPolicy
 * @constant
 * @type {number}
 */
export
const localConfigurationPolicy: NEFReleaseCause = NEFReleaseCause.localConfigurationPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFReleaseCause_unknownCause
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_unknownCause: NEFReleaseCause = NEFReleaseCause.unknownCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCause
 * @constant
 * @type {number}
 */
export
const unknownCause: NEFReleaseCause = NEFReleaseCause.unknownCause; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NEFReleaseCause: $.ASN1Decoder<NEFReleaseCause> = $._decodeEnumerated;
export const _encode_NEFReleaseCause: $.ASN1Encoder<NEFReleaseCause> = $._encodeEnumerated;


/* eslint-enable */

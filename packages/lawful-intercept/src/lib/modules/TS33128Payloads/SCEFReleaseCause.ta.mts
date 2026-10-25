/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCEFReleaseCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFReleaseCause  ::=  ENUMERATED
 * {
 *     mMERelease(1),
 *     dNRelease(2),
 *     hSSRelease(3),
 *     localConfigurationPolicy(4),
 *     unknownCause(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SCEFReleaseCause {
    mMERelease = 1,
    dNRelease = 2,
    hSSRelease = 3,
    localConfigurationPolicy = 4,
    unknownCause = 5,
}

/**
 * @summary SCEFReleaseCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFReleaseCause  ::=  ENUMERATED
 * {
 *     mMERelease(1),
 *     dNRelease(2),
 *     hSSRelease(3),
 *     localConfigurationPolicy(4),
 *     unknownCause(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SCEFReleaseCause = _enum_for_SCEFReleaseCause;

/**
 * @summary SCEFReleaseCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFReleaseCause  ::=  ENUMERATED
 * {
 *     mMERelease(1),
 *     dNRelease(2),
 *     hSSRelease(3),
 *     localConfigurationPolicy(4),
 *     unknownCause(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SCEFReleaseCause: typeof _enum_for_SCEFReleaseCause = _enum_for_SCEFReleaseCause;

/**
 * @summary SCEFReleaseCause_mMERelease
 * @constant
 * @type {number}
 */
export
const SCEFReleaseCause_mMERelease: _enum_for_SCEFReleaseCause.mMERelease = SCEFReleaseCause.mMERelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMERelease
 * @constant
 * @type {number}
 */
export
const mMERelease: _enum_for_SCEFReleaseCause.mMERelease = SCEFReleaseCause.mMERelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCEFReleaseCause_dNRelease
 * @constant
 * @type {number}
 */
export
const SCEFReleaseCause_dNRelease: _enum_for_SCEFReleaseCause.dNRelease = SCEFReleaseCause.dNRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dNRelease
 * @constant
 * @type {number}
 */
export
const dNRelease: _enum_for_SCEFReleaseCause.dNRelease = SCEFReleaseCause.dNRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCEFReleaseCause_hSSRelease
 * @constant
 * @type {number}
 */
export
const SCEFReleaseCause_hSSRelease: _enum_for_SCEFReleaseCause.hSSRelease = SCEFReleaseCause.hSSRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSSRelease
 * @constant
 * @type {number}
 */
export
const hSSRelease: _enum_for_SCEFReleaseCause.hSSRelease = SCEFReleaseCause.hSSRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCEFReleaseCause_localConfigurationPolicy
 * @constant
 * @type {number}
 */
export
const SCEFReleaseCause_localConfigurationPolicy: _enum_for_SCEFReleaseCause.localConfigurationPolicy = SCEFReleaseCause.localConfigurationPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localConfigurationPolicy
 * @constant
 * @type {number}
 */
export
const localConfigurationPolicy: _enum_for_SCEFReleaseCause.localConfigurationPolicy = SCEFReleaseCause.localConfigurationPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCEFReleaseCause_unknownCause
 * @constant
 * @type {number}
 */
export
const SCEFReleaseCause_unknownCause: _enum_for_SCEFReleaseCause.unknownCause = SCEFReleaseCause.unknownCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCause
 * @constant
 * @type {number}
 */
export
const unknownCause: _enum_for_SCEFReleaseCause.unknownCause = SCEFReleaseCause.unknownCause; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SCEFReleaseCause: $.ASN1Decoder<SCEFReleaseCause> = $._decodeEnumerated;
export const _encode_SCEFReleaseCause: $.ASN1Encoder<SCEFReleaseCause> = $._encodeEnumerated;


/* eslint-enable */

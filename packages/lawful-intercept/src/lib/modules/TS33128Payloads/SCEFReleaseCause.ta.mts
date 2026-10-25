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
const SCEFReleaseCause = _enum_for_SCEFReleaseCause;

/**
 * @summary SCEFReleaseCause_mMERelease
 * @constant
 * @type {number}
 */
export
const SCEFReleaseCause_mMERelease = SCEFReleaseCause.mMERelease satisfies SCEFReleaseCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMERelease
 * @constant
 * @type {number}
 */
export
const mMERelease = SCEFReleaseCause.mMERelease satisfies SCEFReleaseCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCEFReleaseCause_dNRelease
 * @constant
 * @type {number}
 */
export
const SCEFReleaseCause_dNRelease = SCEFReleaseCause.dNRelease satisfies SCEFReleaseCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dNRelease
 * @constant
 * @type {number}
 */
export
const dNRelease = SCEFReleaseCause.dNRelease satisfies SCEFReleaseCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCEFReleaseCause_hSSRelease
 * @constant
 * @type {number}
 */
export
const SCEFReleaseCause_hSSRelease = SCEFReleaseCause.hSSRelease satisfies SCEFReleaseCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSSRelease
 * @constant
 * @type {number}
 */
export
const hSSRelease = SCEFReleaseCause.hSSRelease satisfies SCEFReleaseCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCEFReleaseCause_localConfigurationPolicy
 * @constant
 * @type {number}
 */
export
const SCEFReleaseCause_localConfigurationPolicy = SCEFReleaseCause.localConfigurationPolicy satisfies SCEFReleaseCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localConfigurationPolicy
 * @constant
 * @type {number}
 */
export
const localConfigurationPolicy = SCEFReleaseCause.localConfigurationPolicy satisfies SCEFReleaseCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCEFReleaseCause_unknownCause
 * @constant
 * @type {number}
 */
export
const SCEFReleaseCause_unknownCause = SCEFReleaseCause.unknownCause satisfies SCEFReleaseCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCause
 * @constant
 * @type {number}
 */
export
const unknownCause = SCEFReleaseCause.unknownCause satisfies SCEFReleaseCause; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SCEFReleaseCause: $.ASN1Decoder<SCEFReleaseCause> = $._decodeEnumerated;
export const _encode_SCEFReleaseCause: $.ASN1Encoder<SCEFReleaseCause> = $._encodeEnumerated;


/* eslint-enable */

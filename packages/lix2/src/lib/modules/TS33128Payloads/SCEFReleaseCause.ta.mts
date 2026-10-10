/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
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
const SCEFReleaseCause_mMERelease: SCEFReleaseCause = SCEFReleaseCause.mMERelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMERelease
 * @constant
 * @type {number}
 */
export
const mMERelease: SCEFReleaseCause = SCEFReleaseCause.mMERelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCEFReleaseCause_dNRelease
 * @constant
 * @type {number}
 */
export
const SCEFReleaseCause_dNRelease: SCEFReleaseCause = SCEFReleaseCause.dNRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dNRelease
 * @constant
 * @type {number}
 */
export
const dNRelease: SCEFReleaseCause = SCEFReleaseCause.dNRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCEFReleaseCause_hSSRelease
 * @constant
 * @type {number}
 */
export
const SCEFReleaseCause_hSSRelease: SCEFReleaseCause = SCEFReleaseCause.hSSRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSSRelease
 * @constant
 * @type {number}
 */
export
const hSSRelease: SCEFReleaseCause = SCEFReleaseCause.hSSRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCEFReleaseCause_localConfigurationPolicy
 * @constant
 * @type {number}
 */
export
const SCEFReleaseCause_localConfigurationPolicy: SCEFReleaseCause = SCEFReleaseCause.localConfigurationPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localConfigurationPolicy
 * @constant
 * @type {number}
 */
export
const localConfigurationPolicy: SCEFReleaseCause = SCEFReleaseCause.localConfigurationPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCEFReleaseCause_unknownCause
 * @constant
 * @type {number}
 */
export
const SCEFReleaseCause_unknownCause: SCEFReleaseCause = SCEFReleaseCause.unknownCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCause
 * @constant
 * @type {number}
 */
export
const unknownCause: SCEFReleaseCause = SCEFReleaseCause.unknownCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) SCEFReleaseCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SCEFReleaseCause = $._decodeEnumerated;

/**
 * @summary Encodes a(n) SCEFReleaseCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCEFReleaseCause, encoded as an ASN.1 Element.
 */
export const _encode_SCEFReleaseCause = $._encodeEnumerated;


/* eslint-enable */

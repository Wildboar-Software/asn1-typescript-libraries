/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessType  ::=  ENUMERATED
 * {
 *     threeGPPAccess(1),
 *     nonThreeGPPAccess(2),
 *     threeGPPandNonThreeGPPAccess(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AccessType {
    threeGPPAccess = 1,
    nonThreeGPPAccess = 2,
    threeGPPandNonThreeGPPAccess = 3,
}

/**
 * @summary AccessType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessType  ::=  ENUMERATED
 * {
 *     threeGPPAccess(1),
 *     nonThreeGPPAccess(2),
 *     threeGPPandNonThreeGPPAccess(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AccessType = _enum_for_AccessType;

/**
 * @summary AccessType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessType  ::=  ENUMERATED
 * {
 *     threeGPPAccess(1),
 *     nonThreeGPPAccess(2),
 *     threeGPPandNonThreeGPPAccess(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AccessType = _enum_for_AccessType;

/**
 * @summary AccessType_threeGPPAccess
 * @constant
 * @type {number}
 */
export
const AccessType_threeGPPAccess: AccessType = AccessType.threeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeGPPAccess
 * @constant
 * @type {number}
 */
export
const threeGPPAccess: AccessType = AccessType.threeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_nonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const AccessType_nonThreeGPPAccess: AccessType = AccessType.nonThreeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const nonThreeGPPAccess: AccessType = AccessType.nonThreeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_threeGPPandNonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const AccessType_threeGPPandNonThreeGPPAccess: AccessType = AccessType.threeGPPandNonThreeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeGPPandNonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const threeGPPandNonThreeGPPAccess: AccessType = AccessType.threeGPPandNonThreeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AccessType: $.ASN1Decoder<AccessType> = $._decodeEnumerated;
export const _encode_AccessType: $.ASN1Encoder<AccessType> = $._encodeEnumerated;


/* eslint-enable */

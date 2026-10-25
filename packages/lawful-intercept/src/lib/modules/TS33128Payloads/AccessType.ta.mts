/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessType
 * @description
 * 
 * The AccessType indicates the access types of which the signalling or user
 * data is transmitted.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.65.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @description
     *
     * Indicates that the access type is 3GPP.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.65.
     */
    threeGPPAccess = 1,
    /**
     * @description
     *
     * Indicates that the access type is Non-3GPP.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.65.
     */
    nonThreeGPPAccess = 2,
    /**
     * @description
     *
     * Indicates that the access type is 3GPP and Non-3GPP.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.65.
     */
    threeGPPandNonThreeGPPAccess = 3,
}

/**
 * @summary AccessType
 * @description
 * 
 * The AccessType indicates the access types of which the signalling or user
 * data is transmitted.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.65.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * The AccessType indicates the access types of which the signalling or user
 * data is transmitted.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.65.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const AccessType: typeof _enum_for_AccessType = _enum_for_AccessType;

/**
 * @summary AccessType_threeGPPAccess
 * @description
 *
 * Indicates that the access type is 3GPP.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.65.
 *
 * @constant
 * @type {number}
 */
export
const AccessType_threeGPPAccess: _enum_for_AccessType.threeGPPAccess = AccessType.threeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeGPPAccess
 * @description
 *
 * Indicates that the access type is 3GPP.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.65.
 *
 * @constant
 * @type {number}
 */
export
const threeGPPAccess: _enum_for_AccessType.threeGPPAccess = AccessType.threeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_nonThreeGPPAccess
 * @description
 *
 * Indicates that the access type is Non-3GPP.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.65.
 *
 * @constant
 * @type {number}
 */
export
const AccessType_nonThreeGPPAccess: _enum_for_AccessType.nonThreeGPPAccess = AccessType.nonThreeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonThreeGPPAccess
 * @description
 *
 * Indicates that the access type is Non-3GPP.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.65.
 *
 * @constant
 * @type {number}
 */
export
const nonThreeGPPAccess: _enum_for_AccessType.nonThreeGPPAccess = AccessType.nonThreeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_threeGPPandNonThreeGPPAccess
 * @description
 *
 * Indicates that the access type is 3GPP and Non-3GPP.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.65.
 *
 * @constant
 * @type {number}
 */
export
const AccessType_threeGPPandNonThreeGPPAccess: _enum_for_AccessType.threeGPPandNonThreeGPPAccess = AccessType.threeGPPandNonThreeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeGPPandNonThreeGPPAccess
 * @description
 *
 * Indicates that the access type is 3GPP and Non-3GPP.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.65.
 *
 * @constant
 * @type {number}
 */
export
const threeGPPandNonThreeGPPAccess: _enum_for_AccessType.threeGPPandNonThreeGPPAccess = AccessType.threeGPPandNonThreeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AccessType: $.ASN1Decoder<AccessType> = $._decodeEnumerated;
export const _encode_AccessType: $.ASN1Encoder<AccessType> = $._encodeEnumerated;


/* eslint-enable */

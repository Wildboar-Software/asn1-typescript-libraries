/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFRegistrationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRegistrationResult  ::=  ENUMERATED
 * {
 *     threeGPPAccess(1),
 *     nonThreeGPPAccess(2),
 *     threeGPPAndNonThreeGPPAccess(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AMFRegistrationResult {
    threeGPPAccess = 1,
    nonThreeGPPAccess = 2,
    threeGPPAndNonThreeGPPAccess = 3,
}

/**
 * @summary AMFRegistrationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRegistrationResult  ::=  ENUMERATED
 * {
 *     threeGPPAccess(1),
 *     nonThreeGPPAccess(2),
 *     threeGPPAndNonThreeGPPAccess(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AMFRegistrationResult = _enum_for_AMFRegistrationResult;

/**
 * @summary AMFRegistrationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRegistrationResult  ::=  ENUMERATED
 * {
 *     threeGPPAccess(1),
 *     nonThreeGPPAccess(2),
 *     threeGPPAndNonThreeGPPAccess(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AMFRegistrationResult = _enum_for_AMFRegistrationResult;

/**
 * @summary AMFRegistrationResult_threeGPPAccess
 * @constant
 * @type {number}
 */
export
const AMFRegistrationResult_threeGPPAccess: AMFRegistrationResult = AMFRegistrationResult.threeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeGPPAccess
 * @constant
 * @type {number}
 */
export
const threeGPPAccess: AMFRegistrationResult = AMFRegistrationResult.threeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationResult_nonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const AMFRegistrationResult_nonThreeGPPAccess: AMFRegistrationResult = AMFRegistrationResult.nonThreeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const nonThreeGPPAccess: AMFRegistrationResult = AMFRegistrationResult.nonThreeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationResult_threeGPPAndNonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const AMFRegistrationResult_threeGPPAndNonThreeGPPAccess: AMFRegistrationResult = AMFRegistrationResult.threeGPPAndNonThreeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeGPPAndNonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const threeGPPAndNonThreeGPPAccess: AMFRegistrationResult = AMFRegistrationResult.threeGPPAndNonThreeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_AMFRegistrationResult: $.ASN1Decoder<AMFRegistrationResult> = $._decodeEnumerated;

export const _encode_AMFRegistrationResult: $.ASN1Encoder<AMFRegistrationResult> = $._encodeEnumerated;


/* eslint-enable */

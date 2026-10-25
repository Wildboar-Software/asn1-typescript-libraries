/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFRegistrationResult
 * @description
 * 
 * Specifies the result of registration, see TS 24.501 [13] clause 9.11.3.6.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Specifies the result of registration, see TS 24.501 [13] clause 9.11.3.6.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Specifies the result of registration, see TS 24.501 [13] clause 9.11.3.6.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const AMFRegistrationResult: typeof _enum_for_AMFRegistrationResult = _enum_for_AMFRegistrationResult;

/**
 * @summary AMFRegistrationResult_threeGPPAccess
 * @constant
 * @type {number}
 */
export
const AMFRegistrationResult_threeGPPAccess: _enum_for_AMFRegistrationResult.threeGPPAccess = AMFRegistrationResult.threeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeGPPAccess
 * @constant
 * @type {number}
 */
export
const threeGPPAccess: _enum_for_AMFRegistrationResult.threeGPPAccess = AMFRegistrationResult.threeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationResult_nonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const AMFRegistrationResult_nonThreeGPPAccess: _enum_for_AMFRegistrationResult.nonThreeGPPAccess = AMFRegistrationResult.nonThreeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const nonThreeGPPAccess: _enum_for_AMFRegistrationResult.nonThreeGPPAccess = AMFRegistrationResult.nonThreeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationResult_threeGPPAndNonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const AMFRegistrationResult_threeGPPAndNonThreeGPPAccess: _enum_for_AMFRegistrationResult.threeGPPAndNonThreeGPPAccess = AMFRegistrationResult.threeGPPAndNonThreeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeGPPAndNonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const threeGPPAndNonThreeGPPAccess: _enum_for_AMFRegistrationResult.threeGPPAndNonThreeGPPAccess = AMFRegistrationResult.threeGPPAndNonThreeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AMFRegistrationResult: $.ASN1Decoder<AMFRegistrationResult> = $._decodeEnumerated;
export const _encode_AMFRegistrationResult: $.ASN1Encoder<AMFRegistrationResult> = $._encodeEnumerated;


/* eslint-enable */

/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NNIType
 * @description
 *
 * This field indicates whether the type of used NNI is non-roaming, roaming
 * with loopback routing, or roaming without loopback routing. The loopback
 * indication is either sent by the S-CSCF in forward direction within the
 * initial SIP request or sent by TRF in backward direction and received by
 * the ATCF, AS and P-CSCF in the final SIP response.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.31B.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.10.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NNIType     ::=  ENUMERATED {
 *    non-roaming                 ( 0 ),
 *    roaming-without-loopback    ( 1 ),
 *    roaming-with-loopback       ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NNIType {
    non_roaming = 0,
    roaming_without_loopback = 1,
    roaming_with_loopback = 2,
}

/**
 * @summary NNIType
 * @description
 *
 * This field indicates whether the type of used NNI is non-roaming, roaming
 * with loopback routing, or roaming without loopback routing. The loopback
 * indication is either sent by the S-CSCF in forward direction within the
 * initial SIP request or sent by TRF in backward direction and received by
 * the ATCF, AS and P-CSCF in the final SIP response.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.31B.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.10.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NNIType     ::=  ENUMERATED {
 *    non-roaming                 ( 0 ),
 *    roaming-without-loopback    ( 1 ),
 *    roaming-with-loopback       ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type NNIType = _enum_for_NNIType;

/**
 * @summary NNIType
 * @description
 *
 * This field indicates whether the type of used NNI is non-roaming, roaming
 * with loopback routing, or roaming without loopback routing. The loopback
 * indication is either sent by the S-CSCF in forward direction within the
 * initial SIP request or sent by TRF in backward direction and received by
 * the ATCF, AS and P-CSCF in the final SIP response.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.31B.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.10.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NNIType     ::=  ENUMERATED {
 *    non-roaming                 ( 0 ),
 *    roaming-without-loopback    ( 1 ),
 *    roaming-with-loopback       ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const NNIType: typeof _enum_for_NNIType = _enum_for_NNIType;

/**
 * @summary NNIType_non_roaming
 * @description
 *
 * The NNI is not a roaming interface (clause 6.1.3.10).
 *
 * @constant
 * @type {number}
 */
export
const NNIType_non_roaming: _enum_for_NNIType.non_roaming = NNIType.non_roaming; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary non_roaming
 * @description
 *
 * The NNI is not a roaming interface (clause 6.1.3.10).
 *
 * @constant
 * @type {number}
 */
export
const non_roaming: _enum_for_NNIType.non_roaming = NNIType.non_roaming; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NNIType_roaming_without_loopback
 * @description
 *
 * Roaming NNI without loopback routing (clause 6.1.3.10).
 *
 * @constant
 * @type {number}
 */
export
const NNIType_roaming_without_loopback: _enum_for_NNIType.roaming_without_loopback = NNIType.roaming_without_loopback; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roaming_without_loopback
 * @description
 *
 * Roaming NNI without loopback routing (clause 6.1.3.10).
 *
 * @constant
 * @type {number}
 */
export
const roaming_without_loopback: _enum_for_NNIType.roaming_without_loopback = NNIType.roaming_without_loopback; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NNIType_roaming_with_loopback
 * @description
 *
 * Roaming NNI with loopback. The TRF inserts the loopback indication on
 * the response (clause 5.1.2.7).
 *
 * @constant
 * @type {number}
 */
export
const NNIType_roaming_with_loopback: _enum_for_NNIType.roaming_with_loopback = NNIType.roaming_with_loopback; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roaming_with_loopback
 * @description
 *
 * Roaming NNI with loopback. The TRF inserts the loopback indication on
 * the response (clause 5.1.2.7).
 *
 * @constant
 * @type {number}
 */
export
const roaming_with_loopback: _enum_for_NNIType.roaming_with_loopback = NNIType.roaming_with_loopback; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_NNIType: $.ASN1Decoder<NNIType> = $._decodeEnumerated;

export
const _encode_NNIType: $.ASN1Encoder<NNIType> = $._encodeEnumerated;

/* eslint-enable */

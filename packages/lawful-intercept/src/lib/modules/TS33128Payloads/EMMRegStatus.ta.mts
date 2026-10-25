/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EMMRegStatus
 * @description
 * 
 * The EMMRegStatus type is derived from the EMM registration status portion of
 * the UE status IE defined in TS 24.501 [13] clause 9.11.3.56.
 *
 * 3GPP TS 33.128, clause 8.5.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EMMRegStatus  ::=  ENUMERATED
 * {
 *     uEEMMRegistered(1),
 *     uENotEMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EMMRegStatus {
    /**
     * @description
     *
     * UE is in EMM-REGISTERED state.
     *
     * 3GPP TS 33.128, clause 8.5.1.
     */
    uEEMMRegistered = 1,
    /**
     * @description
     *
     * UE is not in EMM-REGISTERED state.
     *
     * 3GPP TS 33.128, clause 8.5.1.
     */
    uENotEMMRegistered = 2,
}

/**
 * @summary EMMRegStatus
 * @description
 * 
 * The EMMRegStatus type is derived from the EMM registration status portion of
 * the UE status IE defined in TS 24.501 [13] clause 9.11.3.56.
 *
 * 3GPP TS 33.128, clause 8.5.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EMMRegStatus  ::=  ENUMERATED
 * {
 *     uEEMMRegistered(1),
 *     uENotEMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EMMRegStatus = _enum_for_EMMRegStatus;

/**
 * @summary EMMRegStatus
 * @description
 * 
 * The EMMRegStatus type is derived from the EMM registration status portion of
 * the UE status IE defined in TS 24.501 [13] clause 9.11.3.56.
 *
 * 3GPP TS 33.128, clause 8.5.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EMMRegStatus  ::=  ENUMERATED
 * {
 *     uEEMMRegistered(1),
 *     uENotEMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EMMRegStatus = _enum_for_EMMRegStatus;

/**
 * @summary EMMRegStatus_uEEMMRegistered
 * @description
 *
 * UE is in EMM-REGISTERED state.
 *
 * 3GPP TS 33.128, clause 8.5.1.
 *
 * @constant
 * @type {number}
 */
export
const EMMRegStatus_uEEMMRegistered = EMMRegStatus.uEEMMRegistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEEMMRegistered
 * @description
 *
 * UE is in EMM-REGISTERED state.
 *
 * 3GPP TS 33.128, clause 8.5.1.
 *
 * @constant
 * @type {number}
 */
export
const uEEMMRegistered = EMMRegStatus.uEEMMRegistered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EMMRegStatus_uENotEMMRegistered
 * @description
 *
 * UE is not in EMM-REGISTERED state.
 *
 * 3GPP TS 33.128, clause 8.5.1.
 *
 * @constant
 * @type {number}
 */
export
const EMMRegStatus_uENotEMMRegistered = EMMRegStatus.uENotEMMRegistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uENotEMMRegistered
 * @description
 *
 * UE is not in EMM-REGISTERED state.
 *
 * 3GPP TS 33.128, clause 8.5.1.
 *
 * @constant
 * @type {number}
 */
export
const uENotEMMRegistered = EMMRegStatus.uENotEMMRegistered; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EMMRegStatus: $.ASN1Decoder<EMMRegStatus> = $._decodeEnumerated;
export const _encode_EMMRegStatus: $.ASN1Encoder<EMMRegStatus> = $._encodeEnumerated;


/* eslint-enable */

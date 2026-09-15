import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary CalledPartyBCDNumber
 * @description
 *
 * Called Party Number including service selection. 3GPP TS 24.008 encoding of
 * type of number, numbering plan identification, and digits only — omit IEI and
 * length. Size is `PARAMETERS-BOUND` min/max CalledPartyBCDNumberLength.
 *
 * In ConnectSMSArg / InitialDPSMSArg `DestinationSubscriberNumber`, may be
 * alphanumeric: type-of-number `'101'`B (3GPP TS 23.040), GSM 7-bit default
 * alphabet packed as 3GPP TS 23.038. (3GPP TS 29.078 V19.0.0 clause 5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CalledPartyBCDNumber {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 *  bound.&minCalledPartyBCDNumberLength .. bound.&maxCalledPartyBCDNumberLength))
 * ```
 *
 */
export type CalledPartyBCDNumber = OCTET_STRING;
export const _decode_CalledPartyBCDNumber = $._decodeOctetString;
export const _encode_CalledPartyBCDNumber = $._encodeOctetString;

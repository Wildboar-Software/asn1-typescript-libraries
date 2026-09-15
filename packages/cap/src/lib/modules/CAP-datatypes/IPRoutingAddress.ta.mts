import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "./CalledPartyNumber.ta.mjs";

/**
 * @summary IPRoutingAddress
 * @description
 *
 * Routeing address for the IP (`CalledPartyNumber`). (3GPP TS 29.078 V19.0.0
 * clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPRoutingAddress {PARAMETERS-BOUND : bound} ::= CalledPartyNumber {bound}
 * ```
 *
 */
export type IPRoutingAddress = CalledPartyNumber;
export const _decode_IPRoutingAddress = _decode_CalledPartyNumber;
export const _encode_IPRoutingAddress = _encode_CalledPartyNumber;

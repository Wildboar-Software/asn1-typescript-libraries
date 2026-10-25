import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
} from "@wildboar/asn1";
import { type Digits, _decode_Digits, _encode_Digits } from "./Digits.ta.mjs";
import type { ASN1Decoder, ASN1Encoder } from "@wildboar/asn1/functional";

/**
 * @summary AssistingSSPIPRoutingAddress
 * @description
 *
 * Destination address of the gsmSRF for the assist procedure. Encoded as ISUP
 * Generic Number; see `Digits`. In EstablishTemporaryConnection may embed
 * correlationID and scfID, and may contain a Hex B address signal (Annex A.6).
 * (3GPP TS 29.078 V19.0.0 clauses 5.1 and 11.17).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssistingSSPIPRoutingAddress {PARAMETERS-BOUND : bound} ::= Digits {bound}
 * ```
 *
 */
export type AssistingSSPIPRoutingAddress = Digits;
export const _decode_AssistingSSPIPRoutingAddress: ASN1Decoder<OCTET_STRING> = _decode_Digits;
export const _encode_AssistingSSPIPRoutingAddress: ASN1Encoder<OCTET_STRING> = _encode_Digits;

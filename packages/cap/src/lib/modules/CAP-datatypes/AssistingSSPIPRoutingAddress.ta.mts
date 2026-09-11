import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import { type Digits, _decode_Digits, _encode_Digits } from "./Digits.ta.mjs";

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
export const _decode_AssistingSSPIPRoutingAddress = _decode_Digits;
export const _encode_AssistingSSPIPRoutingAddress = _encode_Digits;

import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
} from "@wildboar/asn1";
import { type Digits, _decode_Digits, _encode_Digits } from "./Digits.ta.mjs";
import type { ASN1Decoder, ASN1Encoder } from "@wildboar/asn1/functional";

/**
 * @summary AdditionalCallingPartyNumber
 * @description
 *
 * Additional Calling Party Number. Encoded as ISUP Generic Number (ETSI EN 300
 * 356-1); see `Digits`. Used that way in InitialDP.
 * (3GPP TS 29.078 V19.0.0 clause 5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdditionalCallingPartyNumber {PARAMETERS-BOUND : bound} ::= Digits {bound}
 * ```
 *
 */
export type AdditionalCallingPartyNumber = Digits;
export const _decode_AdditionalCallingPartyNumber: ASN1Decoder<OCTET_STRING> = _decode_Digits;
export const _encode_AdditionalCallingPartyNumber: ASN1Encoder<OCTET_STRING> = _encode_Digits;

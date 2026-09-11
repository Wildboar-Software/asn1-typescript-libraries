import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Carrier
 * @description
 *
 * North America only. First octet is carrier selection, then 3-octet Carrier ID
 * (ANSI T1.113-1995). Carrier selection: `00000000` no indication; `00000001`
 * CIC pre-subscribed, not input by calling party; `00000010` CIC pre-subscribed
 * and input by calling party; `00000011` CIC pre-subscribed, undetermined
 * whether input; `00000100` CIC not pre-subscribed, input by calling party;
 * `00000101`..`11111110` spare; `11111111` reserved.
 * (3GPP TS 29.078 V19.0.0 clause 5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Carrier {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 *  bound.&minCarrierLength .. bound.&maxCarrierLength))
 * ```
 *
 */
export type Carrier = OCTET_STRING;
export const _decode_Carrier = $._decodeOctetString;
export const _encode_Carrier = $._encodeOctetString;

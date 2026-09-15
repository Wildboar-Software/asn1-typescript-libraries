import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary CalledPartyNumber
 * @description
 *
 * Called Party Number. ETSI EN 300 356-1 encoding. May use national-specific
 * Nature of Address (fill per national ISUP of the gsmSSF country, e.g. ANSI
 * T1.113-1995). Destination Address Field is absent if destination address
 * length is 0 (e.g. ANSI NOA operator requested `1110100` or cut-through to
 * carrier `1110101`). See also 3GPP TS 23.078.
 * (3GPP TS 29.078 V19.0.0 clause 5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CalledPartyNumber {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 *  bound.&minCalledPartyNumberLength .. bound.&maxCalledPartyNumberLength))
 * ```
 *
 */
export type CalledPartyNumber = OCTET_STRING;
export const _decode_CalledPartyNumber = $._decodeOctetString;
export const _encode_CalledPartyNumber = $._encodeOctetString;

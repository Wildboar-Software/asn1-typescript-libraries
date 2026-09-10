import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary RedirectingPartyID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RedirectingPartyID {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE (
 *  bound.&minRedirectingPartyIDLength .. bound.&maxRedirectingPartyIDLength))
 * ```
 *
 */
export type RedirectingPartyID = OCTET_STRING;
export const _decode_RedirectingPartyID = $._decodeOctetString;
export const _encode_RedirectingPartyID = $._encodeOctetString;

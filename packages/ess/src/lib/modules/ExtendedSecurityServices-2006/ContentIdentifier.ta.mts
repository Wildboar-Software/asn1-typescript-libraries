/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ContentIdentifier
 * @description
 *
 * `OCTET STRING` content identifier. Used as
 * `ReceiptRequest.signedContentIdentifier`, echoed in `Receipt`, and
 * referenced by `ContentReference`. Attribute form uses OID
 * `id-aa-contentIdentifier` ([RFC 2634 §2.7](https://datatracker.ietf.org/doc/html/rfc2634#section-2.7); [RFC 2634 §2.11](https://datatracker.ietf.org/doc/html/rfc2634#section-2.11)).
 *
 * When created for a receipt request, the originator MUST supply a value;
 * for global uniqueness the minimal construction SHOULD concatenate
 * user-specific identification, a `GeneralizedTime` string, and a random
 * number ([RFC 2634 §2.7](https://datatracker.ietf.org/doc/html/rfc2634#section-2.7)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentIdentifier  ::=  OCTET STRING
 * ```
 */
export type ContentIdentifier = OCTET_STRING; // OctetStringType




export const _decode_ContentIdentifier = $._decodeOctetString;




export const _encode_ContentIdentifier = $._encodeOctetString;


/* eslint-enable */

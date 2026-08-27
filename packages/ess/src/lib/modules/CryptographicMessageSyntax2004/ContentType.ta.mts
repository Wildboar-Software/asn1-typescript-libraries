/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ContentType
 * @description
 *
 * CMS content-type identifier: an `OBJECT IDENTIFIER` naming the content
 * carried in structures such as `ContentInfo` or
 * `EncapsulatedContentInfo` ([RFC 5652 §3](https://datatracker.ietf.org/doc/html/rfc5652#section-3); [RFC 5652 §5.2](https://datatracker.ietf.org/doc/html/rfc5652#section-5.2)).
 *
 * ESS attributes and the `Receipt` content type use this type
 * ([RFC 2634 §2.8](https://datatracker.ietf.org/doc/html/rfc2634#section-2.8); [RFC 2634 §2.9](https://datatracker.ietf.org/doc/html/rfc2634#section-2.9); [RFC 2634 §2.11](https://datatracker.ietf.org/doc/html/rfc2634#section-2.11)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ContentType = OBJECT_IDENTIFIER; // ObjectIdentifierType




export const _decode_ContentType = $._decodeObjectIdentifier;




export const _encode_ContentType = $._encodeObjectIdentifier;


/* eslint-enable */

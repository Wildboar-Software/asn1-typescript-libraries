/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ContentType
 * @description
 *
 * Object identifier naming a CMS content type
 * ([RFC 5652 §3](https://datatracker.ietf.org/doc/html/rfc5652#section-3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentType  ::=  CONTENT-TYPE.&id
 * ```
 */
export type ContentType = OBJECT_IDENTIFIER; // ObjectClassFieldType




export const _decode_ContentType = $._decodeObjectIdentifier;




export const _encode_ContentType = $._encodeObjectIdentifier;


/* eslint-enable */

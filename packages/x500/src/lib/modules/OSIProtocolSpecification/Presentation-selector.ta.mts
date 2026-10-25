/* eslint-disable */
import { ASN1Element as _Element, type OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Presentation_selector
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-selector  ::=  OCTET STRING(SIZE (1..4, ..., 5..MAX))
 * ```
 */
export type Presentation_selector = OCTET_STRING; // OctetStringType


export const _decode_Presentation_selector: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;


export const _encode_Presentation_selector: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */

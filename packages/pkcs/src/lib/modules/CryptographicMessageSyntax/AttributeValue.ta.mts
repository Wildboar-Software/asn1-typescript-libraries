/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AttributeValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeValue  ::=  OPEN.&Type
 * ```
 */
export type AttributeValue = _Element; // ObjectClassFieldType




export const _decode_AttributeValue: $.ASN1Decoder<_Element> = $._decodeAny;




export const _encode_AttributeValue: $.ASN1Encoder<_Element> = $._encodeAny;


/* eslint-enable */

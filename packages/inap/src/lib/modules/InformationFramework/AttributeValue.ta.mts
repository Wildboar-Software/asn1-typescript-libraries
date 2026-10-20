/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";


/**
 * @summary AttributeValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeValue  ::=  ATTRIBUTE.&Type
 * ```
 */
export
type AttributeValue = _Element; // ObjectClassFieldType

export
const _decode_AttributeValue: $.ASN1Decoder<AttributeValue> = $._decodeAny;

export
const _encode_AttributeValue: $.ASN1Encoder<AttributeValue> = $._encodeAny;

/* eslint-enable */

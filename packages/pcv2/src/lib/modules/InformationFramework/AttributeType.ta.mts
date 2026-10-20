/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";


/**
 * @summary AttributeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeType  ::=  ATTRIBUTE.&id
 * ```
 */
export
type AttributeType = OBJECT_IDENTIFIER; // ObjectClassFieldType

export
const _decode_AttributeType: $.ASN1Decoder<AttributeType> = $._decodeObjectIdentifier;

export
const _encode_AttributeType: $.ASN1Encoder<AttributeType> = $._encodeObjectIdentifier;

/* eslint-enable */

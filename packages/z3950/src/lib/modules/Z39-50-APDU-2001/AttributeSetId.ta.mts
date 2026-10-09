/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AttributeSetId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeSetId   ::=  OBJECT IDENTIFIER
 * ```
 */
export
type AttributeSetId = OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_AttributeSetId = $._decodeObjectIdentifier;
export const _encode_AttributeSetId = $._encodeObjectIdentifier;


/* eslint-enable */

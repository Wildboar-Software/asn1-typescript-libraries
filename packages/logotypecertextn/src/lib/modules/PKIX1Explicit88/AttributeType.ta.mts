/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AttributeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeType            ::=   OBJECT IDENTIFIER
 * ```
 */
export
type AttributeType = OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_AttributeType = $._decodeObjectIdentifier;
export const _encode_AttributeType = $._encodeObjectIdentifier;


/* eslint-enable */

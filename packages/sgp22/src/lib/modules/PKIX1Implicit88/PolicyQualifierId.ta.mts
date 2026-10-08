/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PolicyQualifierId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PolicyQualifierId  ::= 
 *     OBJECT IDENTIFIER ( id-qt-cps | id-qt-unotice )
 * ```
 */
export
type PolicyQualifierId = OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_PolicyQualifierId = $._decodeObjectIdentifier;
export const _encode_PolicyQualifierId = $._encodeObjectIdentifier;


/* eslint-enable */

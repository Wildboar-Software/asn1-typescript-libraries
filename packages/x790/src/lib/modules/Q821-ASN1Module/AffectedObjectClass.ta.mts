/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AffectedObjectClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AffectedObjectClass  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type AffectedObjectClass = OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_AffectedObjectClass = $._decodeObjectIdentifier;
export const _encode_AffectedObjectClass = $._encodeObjectIdentifier;


/* eslint-enable */

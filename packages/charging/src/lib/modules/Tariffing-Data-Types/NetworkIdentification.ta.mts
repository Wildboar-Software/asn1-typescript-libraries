/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NetworkIdentification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkIdentification  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type NetworkIdentification = OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_NetworkIdentification = $._decodeObjectIdentifier;
export const _encode_NetworkIdentification = $._encodeObjectIdentifier;


/* eslint-enable */

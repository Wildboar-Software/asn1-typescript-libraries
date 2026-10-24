/* eslint-disable */
import {
    ASN1Element as _Element,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ID
 * @description
 * 
 * Object-identifier alias for MMHS identifiers under `{iso(1)
 * identified-organization(3) nato(26) stanags(0) mmhs(4406)
 * object-identifiers(0)}`. STANAG 4406 (Ed. 2), Annex A, Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ID  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type ID = OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_ID: $.ASN1Decoder<ID> = $._decodeObjectIdentifier;
export const _encode_ID: $.ASN1Encoder<ID> = $._encodeObjectIdentifier;


/* eslint-enable */

/* eslint-disable */
import {
    ObjectIdentifier,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MechType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MechType ::=  OBJECT IDENTIFIER
 * ```
 */
export
type MechType = OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_MechType: $.ASN1Decoder<ObjectIdentifier> = $._decodeObjectIdentifier;
export const _encode_MechType: $.ASN1Encoder<ObjectIdentifier> = $._encodeObjectIdentifier;


/* eslint-enable */

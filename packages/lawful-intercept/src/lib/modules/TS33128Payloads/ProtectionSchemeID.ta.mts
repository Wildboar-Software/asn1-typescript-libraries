/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProtectionSchemeID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtectionSchemeID  ::=  INTEGER (0..15)
 * ```
 */
export
type ProtectionSchemeID = INTEGER;
export const _decode_ProtectionSchemeID: $.ASN1Decoder<ProtectionSchemeID> = $._decodeInteger;
export const _encode_ProtectionSchemeID: $.ASN1Encoder<ProtectionSchemeID> = $._encodeInteger;


/* eslint-enable */

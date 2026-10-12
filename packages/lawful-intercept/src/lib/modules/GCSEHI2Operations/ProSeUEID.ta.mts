/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProSeUEID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeUEID  ::=  OCTET STRING
 * ```
 */
export
type ProSeUEID = OCTET_STRING; // OctetStringType
export const _decode_ProSeUEID: $.ASN1Decoder<ProSeUEID> = $._decodeOctetString;
export const _encode_ProSeUEID: $.ASN1Encoder<ProSeUEID> = $._encodeOctetString;


/* eslint-enable */

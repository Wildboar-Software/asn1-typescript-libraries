/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ApplicationID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicationID  ::=  OCTET STRING
 * ```
 */
export
type ApplicationID = OCTET_STRING; // OctetStringType
export const _decode_ApplicationID: $.ASN1Decoder<ApplicationID> = $._decodeOctetString;
export const _encode_ApplicationID: $.ASN1Encoder<ApplicationID> = $._encodeOctetString;


/* eslint-enable */

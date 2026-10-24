/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AESACallingParty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AESACallingParty  ::= 
 *   OCTET STRING
 * ```
 */
export
type AESACallingParty = OCTET_STRING; // OctetStringType

export
const _decode_AESACallingParty: $.ASN1Decoder<AESACallingParty> = $._decodeOctetString;

export
const _encode_AESACallingParty: $.ASN1Encoder<AESACallingParty> = $._encodeOctetString;

/* eslint-enable */

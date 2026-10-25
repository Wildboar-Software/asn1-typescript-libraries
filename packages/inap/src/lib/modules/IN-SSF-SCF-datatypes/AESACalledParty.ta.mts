/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AESACalledParty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AESACalledParty  ::= 
 *   OCTET STRING
 * ```
 */
export
type AESACalledParty = OCTET_STRING; // OctetStringType

export
const _decode_AESACalledParty: $.ASN1Decoder<AESACalledParty> = $._decodeOctetString;

export
const _encode_AESACalledParty: $.ASN1Encoder<AESACalledParty> = $._encodeOctetString;

/* eslint-enable */

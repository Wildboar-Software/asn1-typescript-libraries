/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallingPartySubaddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingPartySubaddress  ::= 
 *   OCTET STRING
 * ```
 */
export
type CallingPartySubaddress = OCTET_STRING; // OctetStringType

export
const _decode_CallingPartySubaddress: $.ASN1Decoder<CallingPartySubaddress> = $._decodeOctetString;

export
const _encode_CallingPartySubaddress: $.ASN1Encoder<CallingPartySubaddress> = $._encodeOctetString;

/* eslint-enable */

/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CalledPartySubaddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalledPartySubaddress  ::= 
 *   OCTET STRING
 * ```
 */
export
type CalledPartySubaddress = OCTET_STRING; // OctetStringType

export
const _decode_CalledPartySubaddress: $.ASN1Decoder<CalledPartySubaddress> = $._decodeOctetString;

export
const _encode_CalledPartySubaddress: $.ASN1Encoder<CalledPartySubaddress> = $._encodeOctetString;

/* eslint-enable */

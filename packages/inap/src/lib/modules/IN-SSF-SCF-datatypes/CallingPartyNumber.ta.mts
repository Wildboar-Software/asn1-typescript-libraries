/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallingPartyNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingPartyNumber  ::= 
 *   OCTET STRING
 * ```
 */
export
type CallingPartyNumber = OCTET_STRING; // OctetStringType

export
const _decode_CallingPartyNumber: $.ASN1Decoder<CallingPartyNumber> = $._decodeOctetString;

export
const _encode_CallingPartyNumber: $.ASN1Encoder<CallingPartyNumber> = $._encodeOctetString;

/* eslint-enable */

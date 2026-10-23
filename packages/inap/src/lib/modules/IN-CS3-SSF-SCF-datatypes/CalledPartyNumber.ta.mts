/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CalledPartyNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalledPartyNumber  ::= 
 *   OCTET STRING
 * ```
 */
export
type CalledPartyNumber = OCTET_STRING; // OctetStringType

export
const _decode_CalledPartyNumber: $.ASN1Decoder<CalledPartyNumber> = $._decodeOctetString;

export
const _encode_CalledPartyNumber: $.ASN1Encoder<CalledPartyNumber> = $._encodeOctetString;

/* eslint-enable */

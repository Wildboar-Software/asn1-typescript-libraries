/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Payload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Payload  ::=  OCTET STRING
 * ```
 */
export
type Payload = OCTET_STRING; // OctetStringType

export
const _decode_Payload: $.ASN1Decoder<Payload> = $._decodeOctetString;

export
const _encode_Payload: $.ASN1Encoder<Payload> = $._encodeOctetString;

/* eslint-enable */

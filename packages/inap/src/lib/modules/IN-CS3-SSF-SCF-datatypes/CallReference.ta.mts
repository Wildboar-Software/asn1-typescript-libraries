/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallReference  ::=  OCTET STRING
 * ```
 */
export
type CallReference = OCTET_STRING; // OctetStringType

export
const _decode_CallReference: $.ASN1Decoder<CallReference> = $._decodeOctetString;

export
const _encode_CallReference: $.ASN1Encoder<CallReference> = $._encodeOctetString;

/* eslint-enable */

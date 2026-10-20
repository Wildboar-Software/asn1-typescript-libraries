/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConnectedNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectedNumber  ::=  OCTET STRING
 * ```
 */
export
type ConnectedNumber = OCTET_STRING; // OctetStringType

export
const _decode_ConnectedNumber: $.ASN1Decoder<ConnectedNumber> = $._decodeOctetString;

export
const _encode_ConnectedNumber: $.ASN1Encoder<ConnectedNumber> = $._encodeOctetString;

/* eslint-enable */

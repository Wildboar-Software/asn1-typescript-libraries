/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MessageReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageReference  ::=  OCTET STRING
 * ```
 */
export
type MessageReference = OCTET_STRING; // OctetStringType

export
const _decode_MessageReference: $.ASN1Decoder<MessageReference> = $._decodeOctetString;

export
const _encode_MessageReference: $.ASN1Encoder<MessageReference> = $._encodeOctetString;

/* eslint-enable */

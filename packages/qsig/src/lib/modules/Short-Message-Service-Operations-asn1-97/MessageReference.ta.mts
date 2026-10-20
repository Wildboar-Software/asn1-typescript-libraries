/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MessageReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageReference  ::=  INTEGER (0..255)
 * ```
 */
export
type MessageReference = INTEGER;

export
const _decode_MessageReference: $.ASN1Decoder<MessageReference> = $._decodeInteger;

export
const _encode_MessageReference: $.ASN1Encoder<MessageReference> = $._encodeInteger;

/* eslint-enable */

/* eslint-disable */
import {
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UniqueIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UniqueIdentifier  ::=  BIT STRING
 * ```
 */
export
type UniqueIdentifier = BIT_STRING;

export
const _decode_UniqueIdentifier: $.ASN1Decoder<UniqueIdentifier> = $._decodeBitString;

export
const _encode_UniqueIdentifier: $.ASN1Encoder<UniqueIdentifier> = $._encodeBitString;

/* eslint-enable */

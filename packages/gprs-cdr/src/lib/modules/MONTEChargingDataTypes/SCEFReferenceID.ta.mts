/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCEFReferenceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFReferenceID  ::=  INTEGER ( 0 .. 4294967295 )
 * ```
 */
export
type SCEFReferenceID = INTEGER;

export
const _decode_SCEFReferenceID: $.ASN1Decoder<SCEFReferenceID> = $._decodeInteger;

export
const _encode_SCEFReferenceID: $.ASN1Encoder<SCEFReferenceID> = $._encodeInteger;

/* eslint-enable */

/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Status
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Status  ::=  INTEGER (0..255)
 * ```
 */
export
type Status = INTEGER;

export
const _decode_Status: $.ASN1Decoder<Status> = $._decodeInteger;

export
const _encode_Status: $.ASN1Encoder<Status> = $._encodeInteger;

/* eslint-enable */

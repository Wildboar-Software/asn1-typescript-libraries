/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Apid
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Apid                     ::=    INTEGER (0 .. 2047)
 * ```
 */
export
type Apid = INTEGER;
export const _decode_Apid: $.ASN1Decoder<Apid> = $._decodeInteger;
export const _encode_Apid: $.ASN1Encoder<Apid> = $._encodeInteger;


/* eslint-enable */

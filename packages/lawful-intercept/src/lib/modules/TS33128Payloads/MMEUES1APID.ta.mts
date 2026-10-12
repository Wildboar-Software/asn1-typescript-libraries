/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMEUES1APID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEUES1APID  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type MMEUES1APID = INTEGER;
export const _decode_MMEUES1APID: $.ASN1Decoder<MMEUES1APID> = $._decodeInteger;
export const _encode_MMEUES1APID: $.ASN1Encoder<MMEUES1APID> = $._encodeInteger;


/* eslint-enable */

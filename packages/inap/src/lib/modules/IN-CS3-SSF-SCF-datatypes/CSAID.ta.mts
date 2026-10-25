/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSAID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSAID  ::=  INTEGER
 * ```
 */
export
type CSAID = INTEGER;

export
const _decode_CSAID: $.ASN1Decoder<CSAID> = $._decodeInteger;

export
const _encode_CSAID: $.ASN1Encoder<CSAID> = $._encodeInteger;

/* eslint-enable */

/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EParameter  ::=  INTEGER
 * ```
 */
export
type EParameter = INTEGER;

export
const _decode_EParameter: $.ASN1Decoder<EParameter> = $._decodeInteger;

export
const _encode_EParameter: $.ASN1Encoder<EParameter> = $._encodeInteger;

/* eslint-enable */

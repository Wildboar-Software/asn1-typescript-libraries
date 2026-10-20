/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SimpleIntegerName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SimpleIntegerName  ::=  INTEGER
 * ```
 */
export
type SimpleIntegerName = INTEGER;

export
const _decode_SimpleIntegerName: $.ASN1Decoder<SimpleIntegerName> = $._decodeInteger;

export
const _encode_SimpleIntegerName: $.ASN1Encoder<SimpleIntegerName> = $._encodeInteger;

/* eslint-enable */

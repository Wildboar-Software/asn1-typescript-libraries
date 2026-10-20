/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtensionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionType  ::=  INTEGER(0..MAX)
 * ```
 */
export
type ExtensionType = INTEGER;

export
const _decode_ExtensionType: $.ASN1Decoder<ExtensionType> = $._decodeInteger;

export
const _encode_ExtensionType: $.ASN1Encoder<ExtensionType> = $._encodeInteger;

/* eslint-enable */

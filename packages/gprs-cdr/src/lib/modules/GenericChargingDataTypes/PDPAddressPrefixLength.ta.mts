/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDPAddressPrefixLength
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDPAddressPrefixLength  ::=  INTEGER ( 1 .. 64 )
 * ```
 */
export
type PDPAddressPrefixLength = INTEGER;

export
const _decode_PDPAddressPrefixLength: $.ASN1Decoder<PDPAddressPrefixLength> = $._decodeInteger;

export
const _encode_PDPAddressPrefixLength: $.ASN1Encoder<PDPAddressPrefixLength> = $._encodeInteger;

/* eslint-enable */

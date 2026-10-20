/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDPPDNTypeExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDPPDNTypeExtension  ::=  INTEGER
 * ```
 */
export
type PDPPDNTypeExtension = INTEGER;

export
const _decode_PDPPDNTypeExtension: $.ASN1Decoder<PDPPDNTypeExtension> = $._decodeInteger;

export
const _encode_PDPPDNTypeExtension: $.ASN1Encoder<PDPPDNTypeExtension> = $._encodeInteger;

/* eslint-enable */

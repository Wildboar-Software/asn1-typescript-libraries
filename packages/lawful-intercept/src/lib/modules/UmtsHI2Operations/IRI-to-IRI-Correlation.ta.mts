/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IRI_to_IRI_Correlation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-to-IRI-Correlation  ::=  OCTET STRING
 * ```
 */
export
type IRI_to_IRI_Correlation = OCTET_STRING; // OctetStringType
export const _decode_IRI_to_IRI_Correlation: $.ASN1Decoder<IRI_to_IRI_Correlation> = $._decodeOctetString;
export const _encode_IRI_to_IRI_Correlation: $.ASN1Encoder<IRI_to_IRI_Correlation> = $._encodeOctetString;


/* eslint-enable */

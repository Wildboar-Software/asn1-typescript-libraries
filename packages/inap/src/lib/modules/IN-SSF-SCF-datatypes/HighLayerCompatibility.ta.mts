/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HighLayerCompatibility
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HighLayerCompatibility  ::= 
 *   OCTET STRING
 * ```
 */
export
type HighLayerCompatibility = OCTET_STRING; // OctetStringType

export
const _decode_HighLayerCompatibility: $.ASN1Decoder<HighLayerCompatibility> = $._decodeOctetString;

export
const _encode_HighLayerCompatibility: $.ASN1Encoder<HighLayerCompatibility> = $._encodeOctetString;

/* eslint-enable */

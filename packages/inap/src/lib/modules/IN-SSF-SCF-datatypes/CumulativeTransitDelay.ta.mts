/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CumulativeTransitDelay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CumulativeTransitDelay  ::= 
 *   OCTET STRING
 * ```
 */
export
type CumulativeTransitDelay = OCTET_STRING; // OctetStringType

export
const _decode_CumulativeTransitDelay: $.ASN1Decoder<CumulativeTransitDelay> = $._decodeOctetString;

export
const _encode_CumulativeTransitDelay: $.ASN1Encoder<CumulativeTransitDelay> = $._encodeOctetString;

/* eslint-enable */

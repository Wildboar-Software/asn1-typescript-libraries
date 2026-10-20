/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RateIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RateIndication  ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type RateIndication = OCTET_STRING; // OctetStringType

export
const _decode_RateIndication: $.ASN1Decoder<RateIndication> = $._decodeOctetString;

export
const _encode_RateIndication: $.ASN1Encoder<RateIndication> = $._encodeOctetString;

/* eslint-enable */

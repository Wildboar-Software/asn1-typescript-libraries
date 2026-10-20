/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCC_MNC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCC-MNC     ::=  OCTET STRING ( SIZE( 3 ) )
 * ```
 */
export
type MCC_MNC = OCTET_STRING; // OctetStringType

export
const _decode_MCC_MNC: $.ASN1Decoder<MCC_MNC> = $._decodeOctetString;

export
const _encode_MCC_MNC: $.ASN1Encoder<MCC_MNC> = $._encodeOctetString;

/* eslint-enable */

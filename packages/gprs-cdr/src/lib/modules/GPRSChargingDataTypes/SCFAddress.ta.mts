/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCFAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCFAddress  ::=  OCTET STRING ( SIZE( 1 .. 20 ) )
 * ```
 */
export
type SCFAddress = OCTET_STRING; // OctetStringType

export
const _decode_SCFAddress: $.ASN1Decoder<SCFAddress> = $._decodeOctetString;

export
const _encode_SCFAddress: $.ASN1Encoder<SCFAddress> = $._encodeOctetString;

/* eslint-enable */

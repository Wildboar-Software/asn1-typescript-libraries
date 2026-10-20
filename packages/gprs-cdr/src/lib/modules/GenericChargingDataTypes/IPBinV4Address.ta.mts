/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPBinV4Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPBinV4Address  ::=  OCTET STRING ( SIZE( 4 ) )
 * ```
 */
export
type IPBinV4Address = OCTET_STRING; // OctetStringType

export
const _decode_IPBinV4Address: $.ASN1Decoder<IPBinV4Address> = $._decodeOctetString;

export
const _encode_IPBinV4Address: $.ASN1Encoder<IPBinV4Address> = $._encodeOctetString;

/* eslint-enable */

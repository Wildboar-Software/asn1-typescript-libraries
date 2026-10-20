/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPBinV6Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPBinV6Address  ::=  OCTET STRING ( SIZE( 16 ) )
 * ```
 */
export
type IPBinV6Address = OCTET_STRING; // OctetStringType

export
const _decode_IPBinV6Address: $.ASN1Decoder<IPBinV6Address> = $._decodeOctetString;

export
const _encode_IPBinV6Address: $.ASN1Encoder<IPBinV6Address> = $._encodeOctetString;

/* eslint-enable */

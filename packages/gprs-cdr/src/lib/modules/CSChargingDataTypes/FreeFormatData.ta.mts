/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FreeFormatData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FreeFormatData  ::=  OCTET STRING ( SIZE( 1 .. 160 ) )
 * ```
 */
export
type FreeFormatData = OCTET_STRING; // OctetStringType

export
const _decode_FreeFormatData: $.ASN1Decoder<FreeFormatData> = $._decodeOctetString;

export
const _encode_FreeFormatData: $.ASN1Encoder<FreeFormatData> = $._encodeOctetString;

/* eslint-enable */

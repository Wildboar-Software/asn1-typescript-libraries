/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NameData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameData  ::=  OCTET STRING (SIZE(1..50))
 * ```
 */
export
type NameData = OCTET_STRING; // OctetStringType

export
const _decode_NameData: $.ASN1Decoder<NameData> = $._decodeOctetString;

export
const _encode_NameData: $.ASN1Encoder<NameData> = $._encodeOctetString;

/* eslint-enable */

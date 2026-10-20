/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ShortMessageTextData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ShortMessageTextData  ::=  OCTET STRING (SIZE(0..140))
 * ```
 */
export
type ShortMessageTextData = OCTET_STRING; // OctetStringType

export
const _decode_ShortMessageTextData: $.ASN1Decoder<ShortMessageTextData> = $._decodeOctetString;

export
const _encode_ShortMessageTextData: $.ASN1Encoder<ShortMessageTextData> = $._encodeOctetString;

/* eslint-enable */

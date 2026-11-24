/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BCDDate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BCDDate  ::=  OCTET STRING (SIZE(4))
 * ```
 */
export
type BCDDate = OCTET_STRING; // OctetStringType

export
const _decode_BCDDate: $.ASN1Decoder<BCDDate> = $._decodeOctetString;

export
const _encode_BCDDate: $.ASN1Encoder<BCDDate> = $._encodeOctetString;

/* eslint-enable */

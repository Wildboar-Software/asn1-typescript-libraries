/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BCDTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BCDTime  ::=  OCTET STRING (SIZE(7))
 * ```
 */
export
type BCDTime = OCTET_STRING; // OctetStringType

export
const _decode_BCDTime: $.ASN1Decoder<BCDTime> = $._decodeOctetString;

export
const _encode_BCDTime: $.ASN1Encoder<BCDTime> = $._encodeOctetString;

/* eslint-enable */

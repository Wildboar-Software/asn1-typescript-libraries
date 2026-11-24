/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BCDDatePeriod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BCDDatePeriod          ::=  OCTET STRING (SIZE(8))
 * ```
 */
export
type BCDDatePeriod = OCTET_STRING; // OctetStringType

export
const _decode_BCDDatePeriod: $.ASN1Decoder<BCDDatePeriod> = $._decodeOctetString;

export
const _encode_BCDDatePeriod: $.ASN1Encoder<BCDDatePeriod> = $._encodeOctetString;

/* eslint-enable */

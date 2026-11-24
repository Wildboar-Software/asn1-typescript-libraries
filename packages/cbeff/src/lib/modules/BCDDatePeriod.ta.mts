/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import { type ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertOctetSize } from "../constraints.mjs";



/**
 * @summary BCDDatePeriod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BCDDatePeriod  ::=  OCTET STRING (SIZE(8))
 * ```
 */
export
type BCDDatePeriod = OCTET_STRING; // OctetStringType

export const _decode_BCDDatePeriod: $.ASN1Decoder<BCDDatePeriod> = (el: _Element) => {
    const value = $._decodeOctetString(el);
    assertOctetSize(value, 8, 8, "BCDDatePeriod");
    return value;
};

export
const _encode_BCDDatePeriod: $.ASN1Encoder<BCDDatePeriod> = $._encodeOctetString;

/* eslint-enable */

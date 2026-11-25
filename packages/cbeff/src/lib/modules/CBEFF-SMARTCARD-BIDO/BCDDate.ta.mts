/* eslint-disable */
import {
    type OCTET_STRING,
} from "@wildboar/asn1";
import { type ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertOctetSize } from "../../constraints.mjs";

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

export const _decode_BCDDate: $.ASN1Decoder<BCDDate> = (el: _Element) => {
    const value = $._decodeOctetString(el);
    assertOctetSize(value, 4, 4, "BCDDate");
    return value;
};

export
const _encode_BCDDate: $.ASN1Encoder<BCDDate> = $._encodeOctetString;

/* eslint-enable */

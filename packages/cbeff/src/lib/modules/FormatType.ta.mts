/* eslint-disable */
import {
    type OCTET_STRING,
} from "@wildboar/asn1";
import { type ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertOctetSize } from "../constraints.mjs";

/**
 * @summary FormatType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FormatType  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type FormatType = OCTET_STRING; // OctetStringType

export const _decode_FormatType: $.ASN1Decoder<FormatType> = (el: _Element) => {
    const value = $._decodeOctetString(el);
    assertOctetSize(value, 2, 2, "FormatType");
    return value;
};

export
const _encode_FormatType: $.ASN1Encoder<FormatType> = $._encodeOctetString;

/* eslint-enable */

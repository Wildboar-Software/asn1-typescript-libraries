/* eslint-disable */
import {
    type OCTET_STRING,
} from "@wildboar/asn1";
import { type ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertOctetSize } from "../constraints.mjs";

/**
 * @summary ProductID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProductID  ::=  OCTET STRING (SIZE(4))
 * ```
 */
export
type ProductID = OCTET_STRING; // OctetStringType

export const _decode_ProductID: $.ASN1Decoder<ProductID> = (el: _Element) => {
    const value = $._decodeOctetString(el);
    assertOctetSize(value, 4, 4, "ProductID");
    return value;
};

export
const _encode_ProductID: $.ASN1Encoder<ProductID> = $._encodeOctetString;

/* eslint-enable */

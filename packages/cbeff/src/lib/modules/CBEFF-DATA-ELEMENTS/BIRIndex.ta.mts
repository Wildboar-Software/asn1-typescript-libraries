/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import { type ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertOctetSize } from "../../constraints.mjs";



/**
 * @summary BIRIndex
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BIRIndex  ::=  OCTET STRING (SIZE(0..65535))
 * ```
 */
export
type BIRIndex = OCTET_STRING; // OctetStringType

export const _decode_BIRIndex: $.ASN1Decoder<BIRIndex> = (el: _Element) => {
    const value = $._decodeOctetString(el);
    assertOctetSize(value, 0, 65535, "BIRIndex");
    return value;
};

export
const _encode_BIRIndex: $.ASN1Encoder<BIRIndex> = $._encodeOctetString;

/* eslint-enable */

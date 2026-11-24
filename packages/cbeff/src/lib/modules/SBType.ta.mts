/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import { type ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertOctetSize } from "../constraints.mjs";



/**
 * @summary SBType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SBType  ::=  OCTET STRING (SIZE(0..4294967295))
 * ```
 */
export
type SBType = OCTET_STRING; // OctetStringType

export const _decode_SBType: $.ASN1Decoder<SBType> = (el: _Element) => {
    const value = $._decodeOctetString(el);
    assertOctetSize(value, 0, 4294967295, "SBType");
    return value;
};

export
const _encode_SBType: $.ASN1Encoder<SBType> = $._encodeOctetString;

/* eslint-enable */

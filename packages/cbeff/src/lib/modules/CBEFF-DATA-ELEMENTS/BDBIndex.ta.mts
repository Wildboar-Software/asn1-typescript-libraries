/* eslint-disable */
import {
    type OCTET_STRING,
} from "@wildboar/asn1";
import { type ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertOctetSize } from "../../constraints.mjs";

/**
 * @summary BDBIndex
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDBIndex  ::=  OCTET STRING (SIZE (0..65535))
 * ```
 */
export
type BDBIndex = OCTET_STRING; // OctetStringType

export const _decode_BDBIndex: $.ASN1Decoder<BDBIndex> = (el: _Element) => {
    const value = $._decodeOctetString(el);
    assertOctetSize(value, 0, 65535, "BDBIndex");
    return value;
};

export
const _encode_BDBIndex: $.ASN1Encoder<BDBIndex> = $._encodeOctetString;

/* eslint-enable */

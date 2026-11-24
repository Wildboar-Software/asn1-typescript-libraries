/* eslint-disable */
import {
  type OCTET_STRING,
  ASN1Element as _Element,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { assertOctetSize } from "../../constraints.mjs";

/**
 * @summary BIRIndex
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BIRIndex  ::=  OCTET STRING(SIZE (16))
 * ```
 */
export type BIRIndex = OCTET_STRING; // OctetStringType

export const _decode_BIRIndex: $.ASN1Decoder<OCTET_STRING> = (el: _Element) => {
    const value = $._decodeOctetString(el);
    assertOctetSize(value, 16, 16, "BIRIndex");
    return value;
};

export const _encode_BIRIndex: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;

/* eslint-enable */

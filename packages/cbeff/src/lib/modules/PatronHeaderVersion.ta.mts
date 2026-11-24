/* eslint-disable */
import {
    type OCTET_STRING,
} from "@wildboar/asn1";
import { type ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertOctetSize } from "../constraints.mjs";

/**
 * @summary PatronHeaderVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PatronHeaderVersion  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type PatronHeaderVersion = OCTET_STRING; // OctetStringType

export const _decode_PatronHeaderVersion: $.ASN1Decoder<PatronHeaderVersion> = (el: _Element) => {
    const value = $._decodeOctetString(el);
    assertOctetSize(value, 2, 2, "PatronHeaderVersion");
    return value;
};

export
const _encode_PatronHeaderVersion: $.ASN1Encoder<PatronHeaderVersion> = $._encodeOctetString;

/* eslint-enable */

/* eslint-disable */
import {
    type INTEGER,
} from "@wildboar/asn1";
import { type ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertIntegerRange } from "../../constraints.mjs";

/**
 * @summary NoValueAvailable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NoValueAvailable  ::=  INTEGER (255)
 * ```
 */
export
type NoValueAvailable = INTEGER;

export const _decode_NoValueAvailable: $.ASN1Decoder<NoValueAvailable> = (el: _Element) => {
    const value = $._decodeInteger(el);
    assertIntegerRange(value, 255, 255, "NoValueAvailable");
    return value;
};

export
const _encode_NoValueAvailable: $.ASN1Encoder<NoValueAvailable> = $._encodeInteger;

/* eslint-enable */

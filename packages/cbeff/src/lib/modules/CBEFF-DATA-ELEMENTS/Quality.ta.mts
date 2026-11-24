/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import { type ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertQuality } from "../../constraints.mjs";



/**
 * @summary Quality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Quality  ::=  INTEGER (0..100 | QualityNotSupported | NoValueAvailable)
 * ```
 */
export
type Quality = INTEGER;

export const _decode_Quality: $.ASN1Decoder<Quality> = (el: _Element) => {
    const value = $._decodeInteger(el);
    assertQuality(value, "Quality");
    return value;
};

export
const _encode_Quality: $.ASN1Encoder<Quality> = $._encodeInteger;

/* eslint-enable */

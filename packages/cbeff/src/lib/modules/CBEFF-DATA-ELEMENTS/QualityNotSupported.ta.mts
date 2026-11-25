/* eslint-disable */
import {
    type INTEGER,
} from "@wildboar/asn1";
import { type ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertIntegerRange } from "../../constraints.mjs";

/**
 * @summary QualityNotSupported
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QualityNotSupported  ::=  INTEGER (254)
 * ```
 */
export
type QualityNotSupported = INTEGER;

export const _decode_QualityNotSupported: $.ASN1Decoder<QualityNotSupported> = (el: _Element) => {
    const value = $._decodeInteger(el);
    assertIntegerRange(value, 254, 254, "QualityNotSupported");
    return value;
};

export
const _encode_QualityNotSupported: $.ASN1Encoder<QualityNotSupported> = $._encodeInteger;

/* eslint-enable */

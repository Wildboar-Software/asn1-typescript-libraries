/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import { type ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertIntegerRange } from "../../constraints.mjs";



/**
 * @summary SubheaderCount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubheaderCount  ::=  INTEGER (0..255)
 * ```
 */
export
type SubheaderCount = INTEGER;

export const _decode_SubheaderCount: $.ASN1Decoder<SubheaderCount> = (el: _Element) => {
    const value = $._decodeInteger(el);
    assertIntegerRange(value, 0, 255, "SubheaderCount");
    return value;
};

export
const _encode_SubheaderCount: $.ASN1Encoder<SubheaderCount> = $._encodeInteger;

/* eslint-enable */

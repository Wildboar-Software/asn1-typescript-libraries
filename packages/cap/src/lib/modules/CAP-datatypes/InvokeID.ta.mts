import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary InvokeID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeID ::= INTEGER (-128..127)
 * ```
 *
 */
export type InvokeID = INTEGER;
export const _decode_InvokeID = (el: _Element): InvokeID => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < -128n || value > 127n) : (value < -128 || value > 127))) {
        throw new ASN1OverflowError("InvokeID violates INTEGER constraint");
    }
    return value;
};
export const _encode_InvokeID = $._encodeInteger;

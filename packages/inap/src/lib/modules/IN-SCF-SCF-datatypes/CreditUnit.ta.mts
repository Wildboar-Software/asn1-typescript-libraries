/* eslint-disable */
import {
    type INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import { maxCreditUnit } from "./maxCreditUnit.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CreditUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreditUnit  ::=  INTEGER(0..maxCreditUnit)
 * ```
 */
export
type CreditUnit = INTEGER;

export
function _decode_CreditUnit (el: _Element): CreditUnit {
    const value = $._decodeInteger(el);
    if (value < 0 || value > maxCreditUnit) {
        throw new ASN1OverflowError("CreditUnit violates INTEGER constraint");
    }
    return value;
}

export
const _encode_CreditUnit: $.ASN1Encoder<CreditUnit> = $._encodeInteger;

/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFSetID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFSetID  ::=  INTEGER (0..1023)
 * ```
 */
export
type AMFSetID = INTEGER;

export function _decode_AMFSetID (el: _Element): AMFSetID {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 1023n) {
        throw new ASN1OverflowError("AMFSetID violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_AMFSetID: $.ASN1Encoder<AMFSetID> = $._encodeInteger;


/* eslint-enable */

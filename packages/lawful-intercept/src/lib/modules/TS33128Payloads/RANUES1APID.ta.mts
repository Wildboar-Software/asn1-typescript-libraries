/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANUES1APID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANUES1APID  ::=  INTEGER (0..16777215)
 * ```
 */
export
type RANUES1APID = INTEGER;

export function _decode_RANUES1APID (el: _Element): RANUES1APID {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 16777215n) {
        throw new ASN1OverflowError("RANUES1APID violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_RANUES1APID: $.ASN1Encoder<RANUES1APID> = $._encodeInteger;


/* eslint-enable */

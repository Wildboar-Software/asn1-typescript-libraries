/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANUENGAPID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANUENGAPID  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type RANUENGAPID = INTEGER;

export function _decode_RANUENGAPID (el: _Element): RANUENGAPID {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 4294967295n) {
        throw new ASN1OverflowError("RANUENGAPID violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_RANUENGAPID: $.ASN1Encoder<RANUENGAPID> = $._encodeInteger;


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIPCNICellInfoAge
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPCNICellInfoAge  ::=  INTEGER(0..999999999)
 * ```
 */
export
type SIPCNICellInfoAge = INTEGER;

export function _decode_SIPCNICellInfoAge (el: _Element): SIPCNICellInfoAge {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 999999999n) {
        throw new ASN1OverflowError("SIPCNICellInfoAge violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_SIPCNICellInfoAge: $.ASN1Encoder<SIPCNICellInfoAge> = $._encodeInteger;


/* eslint-enable */

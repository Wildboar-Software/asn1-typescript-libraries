/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSRPMessageReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSRPMessageReference  ::=  INTEGER (0..255)
 * ```
 */
export
type SMSRPMessageReference = INTEGER;

export function _decode_SMSRPMessageReference (el: _Element): SMSRPMessageReference {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 255n) {
        throw new ASN1OverflowError("SMSRPMessageReference violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_SMSRPMessageReference: $.ASN1Encoder<SMSRPMessageReference> = $._encodeInteger;


/* eslint-enable */

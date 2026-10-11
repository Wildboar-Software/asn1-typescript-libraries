/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Uncertainty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Uncertainty  ::=  INTEGER (0..127)
 * ```
 */
export
type Uncertainty = INTEGER;

export function _decode_Uncertainty (el: _Element): Uncertainty {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 127n) {
        throw new ASN1OverflowError("Uncertainty violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_Uncertainty: $.ASN1Encoder<Uncertainty> = $._encodeInteger;


/* eslint-enable */

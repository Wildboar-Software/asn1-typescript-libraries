/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReferenceID
 * @description
 *
 * Reference half of a charging reference identifier. The maximum is
 * `2^32 - 1`. Each exchange assigns its own values. A released value
 * should not be reused immediately. Together with
 * {@link NetworkIdentification} it stays constant for the life of
 * the call. Two tariff determination instances of the same call use
 * different identifiers.
 *
 * [ES 201 296 V1.3.1, clauses 6.4 and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferenceID  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type ReferenceID = INTEGER;
export const _decode_ReferenceID = (el: _Element): ReferenceID => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 4294967295) {
        throw new ASN1OverflowError("ReferenceID violates INTEGER range");
    }
    return value;
};
export const _encode_ReferenceID = $._encodeInteger;


/* eslint-enable */

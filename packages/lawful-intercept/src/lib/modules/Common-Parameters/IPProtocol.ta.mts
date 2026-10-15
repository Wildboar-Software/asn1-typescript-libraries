/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPProtocol
 * @description
 *
 * ETSI TS 103 280 V2.7.1 does not define this parameter. Clause 6 and
 * annex B of that edition end at `NAI`. This assignment is present in
 * the module identified by `version261`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6 and annex B.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPProtocol  ::=  INTEGER (0..255)
 * ```
 */
export
type IPProtocol = INTEGER;
export const _decode_IPProtocol: $.ASN1Decoder<IPProtocol> = (el: _Element): IPProtocol => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("IPProtocol violates INTEGER range");
    }
    return value;
};
export const _encode_IPProtocol: $.ASN1Encoder<IPProtocol> = $._encodeInteger;


/* eslint-enable */

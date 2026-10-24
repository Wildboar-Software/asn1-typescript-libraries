/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VLANID
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
 * VLANID  ::=  INTEGER (0..4095)
 * ```
 */
export
type VLANID = INTEGER;
export const _decode_VLANID: $.ASN1Decoder<VLANID> = (el: _Element): VLANID => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 4095n) {
        throw new ASN1OverflowError("VLANID violates INTEGER range");
    }
    return value;
};
export const _encode_VLANID: $.ASN1Encoder<VLANID> = $._encodeInteger;


/* eslint-enable */

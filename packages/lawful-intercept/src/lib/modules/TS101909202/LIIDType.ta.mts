/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LIIDType
 * @description
 *
 * 16-bit tag for one result of interception, in the range 0 to 65535. It
 * identifies the LEA, the target, the network operator or service provider,
 * and the warrant reference. First returned by the management activation flow
 * (annex B), then used in the header of `TARGETACTIVITYMONITOR`, `TTRAFFIC`,
 * and `CTTRAFFIC`. The content record uses the same value as the corresponding
 * IRI (clause 7.1.2.3.2). Clause 6.4.2.1.2 writes the type name as
 * `LIIdType`; annex A defines `LIIDType`.
 *
 * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.4.2.1.2, clause 7.1.2.3.2,
 * annex A.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIIDType  ::=  INTEGER (0..65535)
 * ```
 */
export
type LIIDType = INTEGER;
export const _decode_LIIDType: $.ASN1Decoder<LIIDType> = (el: _Element): LIIDType => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 65535n) {
        throw new ASN1OverflowError("LIIDType violates INTEGER range");
    }
    return value;
};
export const _encode_LIIDType: $.ASN1Encoder<LIIDType> = $._encodeInteger;


/* eslint-enable */

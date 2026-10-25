/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LIIDType
 * @description
 *
 * 16-bit interception tag, range 0 to 65535. It identifies the LEA, the
 * target, the network operator or service provider, and the warrant
 * reference. It heads `TARGETACTIVITYMONITOR-1`, `TTRAFFIC`, and
 * `CTTRAFFIC`, and is used by the management flows.
 *
 * Clause 8.4.2.1.2 says the management activation flow first returns
 * this tag and cites annex B. Annex B describes CMS-to-LIMF call flows
 * and does not define the activation encoding. Together with an IRI
 * transaction number it correlates content with an IRI transaction, in
 * the role TS 101 671 clause 6.2 gives to the Communication Identifier
 * (clause 9.1.2.3.4).
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.4.2.1.2, annex A.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
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

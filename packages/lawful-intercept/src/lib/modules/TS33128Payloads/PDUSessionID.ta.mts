/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDUSessionID
 * @description
 * 
 * Identifies a PDU Session for a UE. The definition and use of the PDU Session
 * ID is specified in TS 23.501 [2] clause 5.6.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionID  ::=  INTEGER (0..255)
 * ```
 */
export
type PDUSessionID = INTEGER;
export const _decode_PDUSessionID: $.ASN1Decoder<PDUSessionID> = (el: _Element): PDUSessionID => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("PDUSessionID violates INTEGER range");
    }
    return value;
};
export const _encode_PDUSessionID: $.ASN1Encoder<PDUSessionID> = $._encodeInteger;


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RATFrequencySelectionPriority
 * @description
 * 
 * Indicates the RAT/Frequency priority to define camp priorities in Idle mode
 * and inter-RAT/inter-frequency priorities for handover in Active mode. See TS
 * 38.413 [23] clause 9.3.1.61 and TS 36.413 [38] clause 9.2.1.39.
 *
 * 3GPP TS 33.128, clause 8.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATFrequencySelectionPriority  ::=  INTEGER (1..256)
 * ```
 */
export
type RATFrequencySelectionPriority = INTEGER;
export const _decode_RATFrequencySelectionPriority: $.ASN1Decoder<RATFrequencySelectionPriority> = (el: _Element): RATFrequencySelectionPriority => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 1n || _n > 256n) {
        throw new ASN1OverflowError("RATFrequencySelectionPriority violates INTEGER range");
    }
    return value;
};
export const _encode_RATFrequencySelectionPriority: $.ASN1Encoder<RATFrequencySelectionPriority> = $._encodeInteger;


/* eslint-enable */

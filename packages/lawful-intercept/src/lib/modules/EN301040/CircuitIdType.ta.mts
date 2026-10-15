/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CircuitIdType
 * @description
 * 
 * Identity of the logical circuit that carries `TTRAFFICind` or `CTTRAFFICind`.
 * A numeric string of 20 digits. `TARGETCOMMSMONITORind` uses it as
 * `targetcommsid` and, for co-targets, `cotargetcommsid`. EN 301 040 does not
 * define the numbering plan.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.2.2, annex E.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CircuitIdType  ::=  NumericString (SIZE (20))
 * ```
 */
export
type CircuitIdType = NumericString; // NumericString
export const _decode_CircuitIdType: $.ASN1Decoder<CircuitIdType> = (el: _Element): CircuitIdType => {
    const value = $._decodeNumericString(el);
    if (value.length < 20 || value.length > 20) {
        throw new ASN1SizeError("CircuitIdType violates SIZE constraint");
    }
    return value;
};
export const _encode_CircuitIdType: $.ASN1Encoder<CircuitIdType> = $._encodeNumericString;


/* eslint-enable */

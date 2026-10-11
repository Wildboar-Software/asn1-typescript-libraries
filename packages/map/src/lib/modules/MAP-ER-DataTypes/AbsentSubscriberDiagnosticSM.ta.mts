/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AbsentSubscriberDiagnosticSM
 * @description
 * 
 * Reason why the subscriber is absent. Values are defined in 3GPP TS 23.040
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.8.9 and 17.7.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbsentSubscriberDiagnosticSM  ::=  INTEGER (0..255)
 * ```
 */
export
type AbsentSubscriberDiagnosticSM = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) AbsentSubscriberDiagnosticSM
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AbsentSubscriberDiagnosticSM = (el: _Element): AbsentSubscriberDiagnosticSM => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 255) {
        throw new ASN1OverflowError("AbsentSubscriberDiagnosticSM violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) AbsentSubscriberDiagnosticSM into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbsentSubscriberDiagnosticSM, encoded as an ASN.1 Element.
 */
export const _encode_AbsentSubscriberDiagnosticSM = $._encodeInteger;


/* eslint-enable */

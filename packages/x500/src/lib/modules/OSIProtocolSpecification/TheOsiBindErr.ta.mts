/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// Manually modified!

/**
 * @summary TheOsiBindErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TheOsiBindErr{APPLICATION-CONTEXT:Protocols}  ::=
 *   [18]  APPLICATION-CONTEXT.&bind-operation.&Errors.&ParameterType ({Protocols})
 * ```
 */
export type TheOsiBindErr = _Element; // ObjectClassFieldType

/**
 * @summary Decodes an ASN.1 element into a(n) TheOsiBindErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TheOsiBindErr} The decoded data structure.
 */
export function _decode_TheOsiBindErr(el: _Element): TheOsiBindErr {
    return $._decode_explicit<TheOsiBindErr>(() => $._decodeAny)(el);
}

/**
 * @summary Encodes a(n) TheOsiBindErr into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TheOsiBindErr, encoded as an ASN.1 Element.
 */
export function _encode_TheOsiBindErr(
    value: TheOsiBindErr,
    elGetter: $.ASN1Encoder<TheOsiBindErr>
): _Element {
    return $._encode_explicit(
        _TagClass.context,
        18,
        () => $._encodeAny,
        $.DER
    )(value, elGetter);
}


/* eslint-enable */

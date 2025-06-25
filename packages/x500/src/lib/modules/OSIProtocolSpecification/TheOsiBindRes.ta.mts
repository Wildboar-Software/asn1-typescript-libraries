/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// Manually modified!

/**
 * @summary TheOsiBindRes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TheOsiBindRes{APPLICATION-CONTEXT:Protocols}  ::=
 *   [17]  APPLICATION-CONTEXT.&bind-operation.&ResultType({Protocols})
 * ```
 */
export type TheOsiBindRes = _Element; // ObjectClassFieldType

/**
 * @summary Decodes an ASN.1 element into a(n) TheOsiBindRes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TheOsiBindRes} The decoded data structure.
 */
export function _decode_TheOsiBindRes(el: _Element): TheOsiBindRes {
    return $._decode_explicit<TheOsiBindRes>(() => $._decodeAny)(el);
}

/**
 * @summary Encodes a(n) TheOsiBindRes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TheOsiBindRes, encoded as an ASN.1 Element.
 */
export function _encode_TheOsiBindRes(
    value: TheOsiBindRes,
    elGetter: $.ASN1Encoder<TheOsiBindRes>
): _Element {
    return $._encode_explicit(
        _TagClass.context,
        17,
        () => $._encodeAny,
        $.DER
    )(value, elGetter);
}


/* eslint-enable */

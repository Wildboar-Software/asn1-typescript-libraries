/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// Manually modified!

/**
 * @summary TheOsiBind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TheOsiBind{APPLICATION-CONTEXT:Protocols}  ::=
 *   [16]  APPLICATION-CONTEXT.&bind-operation.&ArgumentType({Protocols})
 * ```
 */
export type TheOsiBind = _Element; // ObjectClassFieldType


/**
 * @summary Decodes an ASN.1 element into a(n) TheOsiBind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TheOsiBind} The decoded data structure.
 */
export function _decode_TheOsiBind(el: _Element) {
    return $._decode_explicit<TheOsiBind>(() => $._decodeAny)(el);
}

/**
 * @summary Encodes a(n) TheOsiBind into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TheOsiBind, encoded as an ASN.1 Element.
 */
export function _encode_TheOsiBind(value: TheOsiBind, elGetter: $.ASN1Encoder<TheOsiBind>) {
    return $._encode_explicit(
        _TagClass.context,
        16,
        () => $._encodeAny,
        $.DER
    )(value, elGetter);
}


/* eslint-enable */

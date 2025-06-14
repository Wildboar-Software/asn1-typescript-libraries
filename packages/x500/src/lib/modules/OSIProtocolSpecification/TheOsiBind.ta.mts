/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
// Manually modified!

/* START_OF_SYMBOL_DEFINITION TheOsiBind */
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
/* END_OF_SYMBOL_DEFINITION TheOsiBind */


/* START_OF_SYMBOL_DEFINITION _decode_TheOsiBind */
/**
 * @summary Decodes an ASN.1 element into a(n) TheOsiBind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TheOsiBind} The decoded data structure.
 */
export function _decode_TheOsiBind(el: _Element) {
    return $._decode_explicit<TheOsiBind>(() => $._decodeAny)(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TheOsiBind */

/* START_OF_SYMBOL_DEFINITION _encode_TheOsiBind */
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

/* END_OF_SYMBOL_DEFINITION _encode_TheOsiBind */

/* eslint-enable */

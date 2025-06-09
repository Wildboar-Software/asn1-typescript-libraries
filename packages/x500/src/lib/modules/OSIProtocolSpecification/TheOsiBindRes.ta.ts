/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
export { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca.js";

// Manually modified!

/* START_OF_SYMBOL_DEFINITION TheOsiBindRes */
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
/* END_OF_SYMBOL_DEFINITION TheOsiBindRes */

/* START_OF_SYMBOL_DEFINITION _decode_TheOsiBindRes */
/**
 * @summary Decodes an ASN.1 element into a(n) TheOsiBindRes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TheOsiBindRes} The decoded data structure.
 */
export function _decode_TheOsiBindRes(el: _Element) {
    return $._decode_explicit<TheOsiBindRes>(() => $._decodeAny)(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TheOsiBindRes */

/* START_OF_SYMBOL_DEFINITION _encode_TheOsiBindRes */
/**
 * @summary Encodes a(n) TheOsiBindRes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TheOsiBindRes, encoded as an ASN.1 Element.
 */
export function _encode_TheOsiBindRes(
    value: TheOsiBindRes,
    elGetter: $.ASN1Encoder<TheOsiBindRes>
) {
    return $._encode_explicit(
        _TagClass.context,
        17,
        () => $._encodeAny,
        $.DER
    )(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TheOsiBindRes */

/* eslint-enable */

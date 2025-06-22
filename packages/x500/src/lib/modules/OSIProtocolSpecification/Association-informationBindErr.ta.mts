/* eslint-disable */
import { ASN1Element as _Element, EXTERNAL } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Association_informationBindErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Association-informationBindErr{APPLICATION-CONTEXT:Protocols}  ::=
 *   SEQUENCE SIZE (1) OF
 *     EXTERNAL (
 *       WITH COMPONENTS {
 *         identification         (WITH COMPONENTS {..., syntax ABSENT}),
 *         data-value-descriptor  ABSENT,
 *         data-value             (CONTAINING TheOsiBindErr{{Protocols}})})
 * ```
 */
export type Association_informationBindErr = EXTERNAL[]; // SequenceOfType

let _cached_decoder_for_Association_informationBindErr: $.ASN1Decoder<Association_informationBindErr> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Association_informationBindErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Association_informationBindErr} The decoded data structure.
 */
export function _decode_Association_informationBindErr(el: _Element) {
    if (!_cached_decoder_for_Association_informationBindErr) {
        _cached_decoder_for_Association_informationBindErr = $._decodeSequenceOf<EXTERNAL>(
            () => $._decodeExternal
        );
    }
    return _cached_decoder_for_Association_informationBindErr(el);
}

let _cached_encoder_for_Association_informationBindErr: $.ASN1Encoder<Association_informationBindErr> | null = null;

/**
 * @summary Encodes a(n) Association_informationBindErr into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Association_informationBindErr, encoded as an ASN.1 Element.
 */
export function _encode_Association_informationBindErr(
    value: Association_informationBindErr,
    elGetter: $.ASN1Encoder<Association_informationBindErr>
) {
    if (!_cached_encoder_for_Association_informationBindErr) {
        _cached_encoder_for_Association_informationBindErr = $._encodeSequenceOf<EXTERNAL>(
            () => $._encodeExternal,
            $.DER
        );
    }
    return _cached_encoder_for_Association_informationBindErr(value, elGetter);
}


/* eslint-enable */

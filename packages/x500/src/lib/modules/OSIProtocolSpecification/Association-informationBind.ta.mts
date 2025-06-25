/* eslint-disable */
import { ASN1Element as _Element, EXTERNAL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Association_informationBind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Association-informationBind{APPLICATION-CONTEXT:Protocols}  ::=
 *   SEQUENCE SIZE (1..MAX) OF
 *     EXTERNAL
 *       (WITH COMPONENTS {
 *          identification         (WITH COMPONENTS {..., syntax ABSENT}),
 *          data-value-descriptor  ABSENT,
 *          data-value             (CONTAINING TheOsiBind{{Protocols}})})
 * ```
 */
export type Association_informationBind = EXTERNAL[]; // SequenceOfType

let _cached_decoder_for_Association_informationBind: $.ASN1Decoder<Association_informationBind> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Association_informationBind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Association_informationBind} The decoded data structure.
 */
export function _decode_Association_informationBind(el: _Element): Association_informationBind {
    if (!_cached_decoder_for_Association_informationBind) {
        _cached_decoder_for_Association_informationBind = $._decodeSequenceOf<EXTERNAL>(
            () => $._decodeExternal
        );
    }
    return _cached_decoder_for_Association_informationBind(el);
}

let _cached_encoder_for_Association_informationBind: $.ASN1Encoder<Association_informationBind> | null = null;

/**
 * @summary Encodes a(n) Association_informationBind into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Association_informationBind, encoded as an ASN.1 Element.
 */
export function _encode_Association_informationBind(
    value: Association_informationBind,
    elGetter: $.ASN1Encoder<Association_informationBind>
): _Element {
    if (!_cached_encoder_for_Association_informationBind) {
        _cached_encoder_for_Association_informationBind = $._encodeSequenceOf<EXTERNAL>(
            () => $._encodeExternal,
            $.DER
        );
    }
    return _cached_encoder_for_Association_informationBind(value, elGetter);
}


/* eslint-enable */

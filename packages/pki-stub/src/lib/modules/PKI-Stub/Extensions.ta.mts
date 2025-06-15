/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    Extension,
    _decode_Extension,
    _encode_Extension,
} from "../PKI-Stub/Extension.ta.mjs";

/**
 * @summary Extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Extensions  ::=  SEQUENCE SIZE (1..MAX) OF Extension
 * ```
 */
export type Extensions = Extension[]; // SequenceOfType

let _cached_decoder_for_Extensions: $.ASN1Decoder<Extensions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Extensions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Extensions} The decoded data structure.
 */
export function _decode_Extensions(el: _Element) {
    if (!_cached_decoder_for_Extensions) {
        _cached_decoder_for_Extensions = $._decodeSequenceOf<Extension>(
            () => _decode_Extension
        );
    }
    return _cached_decoder_for_Extensions(el);
}

let _cached_encoder_for_Extensions: $.ASN1Encoder<Extensions> | null = null;

/**
 * @summary Encodes a(n) Extensions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Extensions, encoded as an ASN.1 Element.
 */
export function _encode_Extensions(
    value: Extensions,
    elGetter: $.ASN1Encoder<Extensions>
) {
    if (!_cached_encoder_for_Extensions) {
        _cached_encoder_for_Extensions = $._encodeSequenceOf<Extension>(
            () => _encode_Extension,
            $.BER
        );
    }
    return _cached_encoder_for_Extensions(value, elGetter);
}


/* eslint-enable */

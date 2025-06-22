/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Application_context_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Application-context-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Application_context_name = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_Application_context_name: $.ASN1Decoder<Application_context_name> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Application_context_name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Application_context_name} The decoded data structure.
 */
export function _decode_Application_context_name(el: _Element) {
    if (!_cached_decoder_for_Application_context_name) {
        _cached_decoder_for_Application_context_name =
            $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_Application_context_name(el);
}

let _cached_encoder_for_Application_context_name: $.ASN1Encoder<Application_context_name> | null = null;

/**
 * @summary Encodes a(n) Application_context_name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Application_context_name, encoded as an ASN.1 Element.
 */
export function _encode_Application_context_name(
    value: Application_context_name,
    elGetter: $.ASN1Encoder<Application_context_name>
) {
    if (!_cached_encoder_for_Application_context_name) {
        _cached_encoder_for_Application_context_name =
            $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_Application_context_name(value, elGetter);
}


/* eslint-enable */

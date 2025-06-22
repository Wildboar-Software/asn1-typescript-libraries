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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    EDIMIdentifier,
    _decode_EDIMIdentifier,
    _encode_EDIMIdentifier,
} from '../EDIMSInformationObjects/EDIMIdentifier.ta.mjs';
/**
 * @summary ObsoletedEDIMsSubfield
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObsoletedEDIMsSubfield  ::=  EDIMIdentifier
 * ```
 */
export type ObsoletedEDIMsSubfield = EDIMIdentifier; // DefinedType

let _cached_decoder_for_ObsoletedEDIMsSubfield: $.ASN1Decoder<ObsoletedEDIMsSubfield> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObsoletedEDIMsSubfield
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObsoletedEDIMsSubfield} The decoded data structure.
 */
export function _decode_ObsoletedEDIMsSubfield(el: _Element) {
    if (!_cached_decoder_for_ObsoletedEDIMsSubfield) {
        _cached_decoder_for_ObsoletedEDIMsSubfield = _decode_EDIMIdentifier;
    }
    return _cached_decoder_for_ObsoletedEDIMsSubfield(el);
}

let _cached_encoder_for_ObsoletedEDIMsSubfield: $.ASN1Encoder<ObsoletedEDIMsSubfield> | null = null;

/**
 * @summary Encodes a(n) ObsoletedEDIMsSubfield into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObsoletedEDIMsSubfield, encoded as an ASN.1 Element.
 */
export function _encode_ObsoletedEDIMsSubfield(
    value: ObsoletedEDIMsSubfield,
    elGetter: $.ASN1Encoder<ObsoletedEDIMsSubfield>
) {
    if (!_cached_encoder_for_ObsoletedEDIMsSubfield) {
        _cached_encoder_for_ObsoletedEDIMsSubfield = _encode_EDIMIdentifier;
    }
    return _cached_encoder_for_ObsoletedEDIMsSubfield(value, elGetter);
}


/* eslint-enable */

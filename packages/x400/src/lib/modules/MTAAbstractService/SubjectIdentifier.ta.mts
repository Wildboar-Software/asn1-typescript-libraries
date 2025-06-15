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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    MessageOrProbeIdentifier,
    _decode_MessageOrProbeIdentifier,
    _encode_MessageOrProbeIdentifier,
} from '../MTAAbstractService/MessageOrProbeIdentifier.ta.mjs';
/**
 * @summary SubjectIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectIdentifier  ::=  MessageOrProbeIdentifier
 * ```
 */
export type SubjectIdentifier = MessageOrProbeIdentifier; // DefinedType

let _cached_decoder_for_SubjectIdentifier: $.ASN1Decoder<SubjectIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectIdentifier} The decoded data structure.
 */
export function _decode_SubjectIdentifier(el: _Element) {
    if (!_cached_decoder_for_SubjectIdentifier) {
        _cached_decoder_for_SubjectIdentifier = _decode_MessageOrProbeIdentifier;
    }
    return _cached_decoder_for_SubjectIdentifier(el);
}

let _cached_encoder_for_SubjectIdentifier: $.ASN1Encoder<SubjectIdentifier> | null = null;

/**
 * @summary Encodes a(n) SubjectIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_SubjectIdentifier(
    value: SubjectIdentifier,
    elGetter: $.ASN1Encoder<SubjectIdentifier>
) {
    if (!_cached_encoder_for_SubjectIdentifier) {
        _cached_encoder_for_SubjectIdentifier = _encode_MessageOrProbeIdentifier;
    }
    return _cached_encoder_for_SubjectIdentifier(value, elGetter);
}


/* eslint-enable */

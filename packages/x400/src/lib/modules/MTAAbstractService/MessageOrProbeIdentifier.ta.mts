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
import * as $ from '@wildboar/asn1/functional';
import {
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.mjs';
/**
 * @summary MessageOrProbeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageOrProbeIdentifier  ::=  MTSIdentifier
 * ```
 */
export type MessageOrProbeIdentifier = MTSIdentifier; // DefinedType

let _cached_decoder_for_MessageOrProbeIdentifier: $.ASN1Decoder<MessageOrProbeIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageOrProbeIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageOrProbeIdentifier} The decoded data structure.
 */
export function _decode_MessageOrProbeIdentifier(el: _Element) {
    if (!_cached_decoder_for_MessageOrProbeIdentifier) {
        _cached_decoder_for_MessageOrProbeIdentifier = _decode_MTSIdentifier;
    }
    return _cached_decoder_for_MessageOrProbeIdentifier(el);
}

let _cached_encoder_for_MessageOrProbeIdentifier: $.ASN1Encoder<MessageOrProbeIdentifier> | null = null;

/**
 * @summary Encodes a(n) MessageOrProbeIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageOrProbeIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_MessageOrProbeIdentifier(
    value: MessageOrProbeIdentifier,
    elGetter: $.ASN1Encoder<MessageOrProbeIdentifier>
) {
    if (!_cached_encoder_for_MessageOrProbeIdentifier) {
        _cached_encoder_for_MessageOrProbeIdentifier = _encode_MTSIdentifier;
    }
    return _cached_encoder_for_MessageOrProbeIdentifier(value, elGetter);
}


/* eslint-enable */

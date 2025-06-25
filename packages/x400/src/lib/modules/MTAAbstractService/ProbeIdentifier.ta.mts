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
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.mjs';
/**
 * @summary ProbeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProbeIdentifier  ::=  MTSIdentifier
 * ```
 */
export type ProbeIdentifier = MTSIdentifier; // DefinedType

let _cached_decoder_for_ProbeIdentifier: $.ASN1Decoder<ProbeIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProbeIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProbeIdentifier} The decoded data structure.
 */
export function _decode_ProbeIdentifier(el: _Element): ProbeIdentifier {
    if (!_cached_decoder_for_ProbeIdentifier) {
        _cached_decoder_for_ProbeIdentifier = _decode_MTSIdentifier;
    }
    return _cached_decoder_for_ProbeIdentifier(el);
}

let _cached_encoder_for_ProbeIdentifier: $.ASN1Encoder<ProbeIdentifier> | null = null;

/**
 * @summary Encodes a(n) ProbeIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProbeIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_ProbeIdentifier(
    value: ProbeIdentifier,
    elGetter: $.ASN1Encoder<ProbeIdentifier>
): _Element {
    if (!_cached_encoder_for_ProbeIdentifier) {
        _cached_encoder_for_ProbeIdentifier = _encode_MTSIdentifier;
    }
    return _cached_encoder_for_ProbeIdentifier(value, elGetter);
}


/* eslint-enable */

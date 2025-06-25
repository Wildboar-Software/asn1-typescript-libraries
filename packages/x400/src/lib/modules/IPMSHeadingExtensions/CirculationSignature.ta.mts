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
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNED.ta.mjs';
import {
    TBSCirculationSignature,
    _decode_TBSCirculationSignature,
    _encode_TBSCirculationSignature,
} from '../IPMSHeadingExtensions/TBSCirculationSignature.ta.mjs';

/**
 * @summary CirculationSignature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CirculationSignature  ::=  SIGNED{TBSCirculationSignature}
 * ```
 */
export type CirculationSignature = SIGNED<TBSCirculationSignature>; // DefinedType

let _cached_decoder_for_CirculationSignature: $.ASN1Decoder<CirculationSignature> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CirculationSignature
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CirculationSignature} The decoded data structure.
 */
export function _decode_CirculationSignature(el: _Element): CirculationSignature {
    if (!_cached_decoder_for_CirculationSignature) {
        _cached_decoder_for_CirculationSignature = _get_decoder_for_SIGNED<TBSCirculationSignature>(
            _decode_TBSCirculationSignature
        );
    }
    return _cached_decoder_for_CirculationSignature(el);
}

let _cached_encoder_for_CirculationSignature: $.ASN1Encoder<CirculationSignature> | null = null;

/**
 * @summary Encodes a(n) CirculationSignature into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CirculationSignature, encoded as an ASN.1 Element.
 */
export function _encode_CirculationSignature(
    value: CirculationSignature,
    elGetter: $.ASN1Encoder<CirculationSignature>
): _Element {
    if (!_cached_encoder_for_CirculationSignature) {
        _cached_encoder_for_CirculationSignature = _get_encoder_for_SIGNED<TBSCirculationSignature>(
            _encode_TBSCirculationSignature
        );
    }
    return _cached_encoder_for_CirculationSignature(value, elGetter);
}


/* eslint-enable */

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
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNED.ta.mjs';
import {
    TBSCirculationSignature,
    _decode_TBSCirculationSignature,
    _encode_TBSCirculationSignature,
} from '../IPMSHeadingExtensions/TBSCirculationSignature.ta.mjs';

/* START_OF_SYMBOL_DEFINITION CirculationSignature */
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
/* END_OF_SYMBOL_DEFINITION CirculationSignature */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CirculationSignature */
let _cached_decoder_for_CirculationSignature: $.ASN1Decoder<CirculationSignature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CirculationSignature */

/* START_OF_SYMBOL_DEFINITION _decode_CirculationSignature */
/**
 * @summary Decodes an ASN.1 element into a(n) CirculationSignature
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CirculationSignature} The decoded data structure.
 */
export function _decode_CirculationSignature(el: _Element) {
    if (!_cached_decoder_for_CirculationSignature) {
        _cached_decoder_for_CirculationSignature = _get_decoder_for_SIGNED<TBSCirculationSignature>(
            _decode_TBSCirculationSignature
        );
    }
    return _cached_decoder_for_CirculationSignature(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CirculationSignature */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CirculationSignature */
let _cached_encoder_for_CirculationSignature: $.ASN1Encoder<CirculationSignature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CirculationSignature */

/* START_OF_SYMBOL_DEFINITION _encode_CirculationSignature */
/**
 * @summary Encodes a(n) CirculationSignature into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CirculationSignature, encoded as an ASN.1 Element.
 */
export function _encode_CirculationSignature(
    value: CirculationSignature,
    elGetter: $.ASN1Encoder<CirculationSignature>
) {
    if (!_cached_encoder_for_CirculationSignature) {
        _cached_encoder_for_CirculationSignature = _get_encoder_for_SIGNED<TBSCirculationSignature>(
            _encode_TBSCirculationSignature
        );
    }
    return _cached_encoder_for_CirculationSignature(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CirculationSignature */

/* eslint-enable */

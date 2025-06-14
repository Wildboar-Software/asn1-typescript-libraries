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
    Controls,
    _decode_Controls,
    _encode_Controls,
} from '../MTSAbstractService/Controls.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DeliveryControls */
/**
 * @summary DeliveryControls
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryControls  ::=  Controls
 * ```
 */
export type DeliveryControls = Controls; // DefinedType
/* END_OF_SYMBOL_DEFINITION DeliveryControls */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryControls */
let _cached_decoder_for_DeliveryControls: $.ASN1Decoder<DeliveryControls> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryControls */

/* START_OF_SYMBOL_DEFINITION _decode_DeliveryControls */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryControls
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryControls} The decoded data structure.
 */
export function _decode_DeliveryControls(el: _Element) {
    if (!_cached_decoder_for_DeliveryControls) {
        _cached_decoder_for_DeliveryControls = _decode_Controls;
    }
    return _cached_decoder_for_DeliveryControls(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliveryControls */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryControls */
let _cached_encoder_for_DeliveryControls: $.ASN1Encoder<DeliveryControls> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryControls */

/* START_OF_SYMBOL_DEFINITION _encode_DeliveryControls */
/**
 * @summary Encodes a(n) DeliveryControls into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryControls, encoded as an ASN.1 Element.
 */
export function _encode_DeliveryControls(
    value: DeliveryControls,
    elGetter: $.ASN1Encoder<DeliveryControls>
) {
    if (!_cached_encoder_for_DeliveryControls) {
        _cached_encoder_for_DeliveryControls = _encode_Controls;
    }
    return _cached_encoder_for_DeliveryControls(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliveryControls */

/* eslint-enable */

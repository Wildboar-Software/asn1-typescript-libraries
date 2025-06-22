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
    Controls,
    _decode_Controls,
    _encode_Controls,
} from '../MTSAbstractService/Controls.ta.mjs';
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

let _cached_decoder_for_DeliveryControls: $.ASN1Decoder<DeliveryControls> | null = null;

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

let _cached_encoder_for_DeliveryControls: $.ASN1Encoder<DeliveryControls> | null = null;

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


/* eslint-enable */

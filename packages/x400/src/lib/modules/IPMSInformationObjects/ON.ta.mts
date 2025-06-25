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
    IPN,
    _decode_IPN,
    _encode_IPN,
} from '../IPMSInformationObjects/IPN.ta.mjs';
/**
 * @summary ON
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ON  ::=
 *   IPN
 *     (WITH COMPONENTS {
 *        ...,
 *        choice  (WITH COMPONENTS {
 *                   other-notification-type-fields  PRESENT
 *                 })
 *      })
 * ```
 */
export type ON = IPN; // DefinedType

let _cached_decoder_for_ON: $.ASN1Decoder<ON> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ON
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ON} The decoded data structure.
 */
export function _decode_ON(el: _Element): ON {
    if (!_cached_decoder_for_ON) {
        _cached_decoder_for_ON = _decode_IPN;
    }
    return _cached_decoder_for_ON(el);
}

let _cached_encoder_for_ON: $.ASN1Encoder<ON> | null = null;

/**
 * @summary Encodes a(n) ON into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ON, encoded as an ASN.1 Element.
 */
export function _encode_ON(value: ON, elGetter: $.ASN1Encoder<ON>): _Element {
    if (!_cached_encoder_for_ON) {
        _cached_encoder_for_ON = _encode_IPN;
    }
    return _cached_encoder_for_ON(value, elGetter);
}


/* eslint-enable */

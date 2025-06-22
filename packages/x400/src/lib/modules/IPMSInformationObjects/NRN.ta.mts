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
 * @summary NRN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NRN  ::=
 *   IPN
 *     (WITH COMPONENTS {
 *        ...,
 *        choice  (WITH COMPONENTS {
 *                   non-receipt-fields  PRESENT
 *                 })
 *      })
 * ```
 */
export type NRN = IPN; // DefinedType

let _cached_decoder_for_NRN: $.ASN1Decoder<NRN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NRN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NRN} The decoded data structure.
 */
export function _decode_NRN(el: _Element) {
    if (!_cached_decoder_for_NRN) {
        _cached_decoder_for_NRN = _decode_IPN;
    }
    return _cached_decoder_for_NRN(el);
}

let _cached_encoder_for_NRN: $.ASN1Encoder<NRN> | null = null;

/**
 * @summary Encodes a(n) NRN into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NRN, encoded as an ASN.1 Element.
 */
export function _encode_NRN(value: NRN, elGetter: $.ASN1Encoder<NRN>) {
    if (!_cached_encoder_for_NRN) {
        _cached_encoder_for_NRN = _encode_IPN;
    }
    return _cached_encoder_for_NRN(value, elGetter);
}


/* eslint-enable */

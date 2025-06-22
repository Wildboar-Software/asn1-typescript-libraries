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
    IPN,
    _decode_IPN,
    _encode_IPN,
} from '../IPMSInformationObjects/IPN.ta.mjs';
/**
 * @summary RN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RN  ::=
 *   IPN
 *     (WITH COMPONENTS {
 *        ...,
 *        choice  (WITH COMPONENTS {
 *                   receipt-fields  PRESENT
 *                 })
 *      })
 * ```
 */
export type RN = IPN; // DefinedType

let _cached_decoder_for_RN: $.ASN1Decoder<RN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RN} The decoded data structure.
 */
export function _decode_RN(el: _Element) {
    if (!_cached_decoder_for_RN) {
        _cached_decoder_for_RN = _decode_IPN;
    }
    return _cached_decoder_for_RN(el);
}

let _cached_encoder_for_RN: $.ASN1Encoder<RN> | null = null;

/**
 * @summary Encodes a(n) RN into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RN, encoded as an ASN.1 Element.
 */
export function _encode_RN(value: RN, elGetter: $.ASN1Encoder<RN>) {
    if (!_cached_encoder_for_RN) {
        _cached_encoder_for_RN = _encode_IPN;
    }
    return _cached_encoder_for_RN(value, elGetter);
}


/* eslint-enable */

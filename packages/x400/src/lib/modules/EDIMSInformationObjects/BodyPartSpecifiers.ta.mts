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
    BodyPartSpecifier,
    _decode_BodyPartSpecifier,
    _encode_BodyPartSpecifier,
} from '../EDIMSInformationObjects/BodyPartSpecifier.ta.mjs';
/**
 * @summary BodyPartSpecifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartSpecifiers  ::=  SEQUENCE OF BodyPartSpecifier
 * ```
 */
export type BodyPartSpecifiers = BodyPartSpecifier[]; // SequenceOfType

let _cached_decoder_for_BodyPartSpecifiers: $.ASN1Decoder<BodyPartSpecifiers> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartSpecifiers
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartSpecifiers} The decoded data structure.
 */
export function _decode_BodyPartSpecifiers(el: _Element) {
    if (!_cached_decoder_for_BodyPartSpecifiers) {
        _cached_decoder_for_BodyPartSpecifiers = $._decodeSequenceOf<BodyPartSpecifier>(
            () => _decode_BodyPartSpecifier
        );
    }
    return _cached_decoder_for_BodyPartSpecifiers(el);
}

let _cached_encoder_for_BodyPartSpecifiers: $.ASN1Encoder<BodyPartSpecifiers> | null = null;

/**
 * @summary Encodes a(n) BodyPartSpecifiers into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartSpecifiers, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartSpecifiers(
    value: BodyPartSpecifiers,
    elGetter: $.ASN1Encoder<BodyPartSpecifiers>
) {
    if (!_cached_encoder_for_BodyPartSpecifiers) {
        _cached_encoder_for_BodyPartSpecifiers = $._encodeSequenceOf<BodyPartSpecifier>(
            () => _encode_BodyPartSpecifier,
            $.BER
        );
    }
    return _cached_encoder_for_BodyPartSpecifiers(value, elGetter);
}


/* eslint-enable */

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
    AdditionalBodyParts_Item,
    _decode_AdditionalBodyParts_Item,
    _encode_AdditionalBodyParts_Item,
} from '../EDIMSInformationObjects/AdditionalBodyParts-Item.ta.mjs';
/**
 * @summary AdditionalBodyParts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdditionalBodyParts  ::=
 *   SEQUENCE OF
 *     CHOICE {external-body-part  [0]  EDIM-ExtendedBodyPart,
 *             place-holder        [1]  BodyPartPlaceHolder
 *     }
 * ```
 */
export type AdditionalBodyParts = AdditionalBodyParts_Item[]; // SequenceOfType

let _cached_decoder_for_AdditionalBodyParts: $.ASN1Decoder<AdditionalBodyParts> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalBodyParts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdditionalBodyParts} The decoded data structure.
 */
export function _decode_AdditionalBodyParts(el: _Element) {
    if (!_cached_decoder_for_AdditionalBodyParts) {
        _cached_decoder_for_AdditionalBodyParts = $._decodeSequenceOf<AdditionalBodyParts_Item>(
            () => _decode_AdditionalBodyParts_Item
        );
    }
    return _cached_decoder_for_AdditionalBodyParts(el);
}

let _cached_encoder_for_AdditionalBodyParts: $.ASN1Encoder<AdditionalBodyParts> | null = null;

/**
 * @summary Encodes a(n) AdditionalBodyParts into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalBodyParts, encoded as an ASN.1 Element.
 */
export function _encode_AdditionalBodyParts(
    value: AdditionalBodyParts,
    elGetter: $.ASN1Encoder<AdditionalBodyParts>
) {
    if (!_cached_encoder_for_AdditionalBodyParts) {
        _cached_encoder_for_AdditionalBodyParts = $._encodeSequenceOf<AdditionalBodyParts_Item>(
            () => _encode_AdditionalBodyParts_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AdditionalBodyParts(value, elGetter);
}


/* eslint-enable */

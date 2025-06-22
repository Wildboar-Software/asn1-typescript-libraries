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
    AttributeSelection,
    _decode_AttributeSelection,
    _encode_AttributeSelection,
} from '../MSAbstractService/AttributeSelection.ta.mjs';
/**
 * @summary EntryInformationSelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryInformationSelection  ::=  SET SIZE (0..ub-per-entry) OF AttributeSelection
 * ```
 */
export type EntryInformationSelection = AttributeSelection[]; // SetOfType

let _cached_decoder_for_EntryInformationSelection: $.ASN1Decoder<EntryInformationSelection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryInformationSelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryInformationSelection} The decoded data structure.
 */
export function _decode_EntryInformationSelection(el: _Element) {
    if (!_cached_decoder_for_EntryInformationSelection) {
        _cached_decoder_for_EntryInformationSelection = $._decodeSetOf<AttributeSelection>(
            () => _decode_AttributeSelection
        );
    }
    return _cached_decoder_for_EntryInformationSelection(el);
}

let _cached_encoder_for_EntryInformationSelection: $.ASN1Encoder<EntryInformationSelection> | null = null;

/**
 * @summary Encodes a(n) EntryInformationSelection into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryInformationSelection, encoded as an ASN.1 Element.
 */
export function _encode_EntryInformationSelection(
    value: EntryInformationSelection,
    elGetter: $.ASN1Encoder<EntryInformationSelection>
) {
    if (!_cached_encoder_for_EntryInformationSelection) {
        _cached_encoder_for_EntryInformationSelection = $._encodeSetOf<AttributeSelection>(
            () => _encode_AttributeSelection,
            $.BER
        );
    }
    return _cached_encoder_for_EntryInformationSelection(value, elGetter);
}


/* eslint-enable */

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
    IndividualSwitchOver,
    _decode_IndividualSwitchOver,
    _encode_IndividualSwitchOver,
} from '../ASN1DefinedTypesModule/IndividualSwitchOver.ta.mjs';

/**
 * @summary SwitchOverInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SwitchOverInformation  ::=  SEQUENCE OF IndividualSwitchOver
 * ```
 */
export type SwitchOverInformation = IndividualSwitchOver[]; // SequenceOfType


let _cached_decoder_for_SwitchOverInformation: $.ASN1Decoder<SwitchOverInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SwitchOverInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SwitchOverInformation} The decoded data structure.
 */
export function _decode_SwitchOverInformation(el: _Element) {
    if (!_cached_decoder_for_SwitchOverInformation) {
        _cached_decoder_for_SwitchOverInformation = $._decodeSequenceOf<IndividualSwitchOver>(
            () => _decode_IndividualSwitchOver
        );
    }
    return _cached_decoder_for_SwitchOverInformation(el);
}


let _cached_encoder_for_SwitchOverInformation: $.ASN1Encoder<SwitchOverInformation> | null = null;


/**
 * @summary Encodes a(n) SwitchOverInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwitchOverInformation, encoded as an ASN.1 Element.
 */
export function _encode_SwitchOverInformation(
    value: SwitchOverInformation,
    elGetter: $.ASN1Encoder<SwitchOverInformation>
) {
    if (!_cached_encoder_for_SwitchOverInformation) {
        _cached_encoder_for_SwitchOverInformation = $._encodeSequenceOf<IndividualSwitchOver>(
            () => _encode_IndividualSwitchOver,
            $.BER
        );
    }
    return _cached_encoder_for_SwitchOverInformation(value, elGetter);
}


/* eslint-enable */

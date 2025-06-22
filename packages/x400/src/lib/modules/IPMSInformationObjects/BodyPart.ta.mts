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
    BodyPart_basic,
    _decode_BodyPart_basic,
    _encode_BodyPart_basic,
} from '../IPMSInformationObjects/BodyPart-basic.ta.mjs';
import {
    ExtendedBodyPart,
    _decode_ExtendedBodyPart,
    _encode_ExtendedBodyPart,
} from '../IPMSInformationObjects/ExtendedBodyPart.ta.mjs';
/**
 * @summary BodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPart  ::=  CHOICE {
 *   basic
 *     CHOICE {ia5-text             [0]  IA5TextBodyPart,
 *             g3-facsimile         [3]  G3FacsimileBodyPart,
 *             g4-class1            [4]  G4Class1BodyPart,
 *             teletex              [5]  TeletexBodyPart,
 *             videotex             [6]  VideotexBodyPart,
 *             encrypted            [8]  EncryptedBodyPart,
 *             message              [9]  MessageBodyPart,
 *             mixed-mode           [11]  MixedModeBodyPart,
 *             bilaterally-defined  [14]  BilaterallyDefinedBodyPart,
 *             nationally-defined   [7]  NationallyDefinedBodyPart},
 *   extended  [15]  ExtendedBodyPart{{IPMBodyPartTable}}
 * }
 * ```
 */
export type BodyPart =
    | { basic: BodyPart_basic } /* CHOICE_ALT_ROOT */
    | { extended: ExtendedBodyPart } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BodyPart: $.ASN1Decoder<BodyPart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPart} The decoded data structure.
 */
export function _decode_BodyPart(el: _Element) {
    if (!_cached_decoder_for_BodyPart) {
        _cached_decoder_for_BodyPart = $._decode_inextensible_choice<BodyPart>({
            'CONTEXT 0': ['basic', _decode_BodyPart_basic],
            'CONTEXT 3': ['basic', _decode_BodyPart_basic],
            'CONTEXT 4': ['basic', _decode_BodyPart_basic],
            'CONTEXT 5': ['basic', _decode_BodyPart_basic],
            'CONTEXT 6': ['basic', _decode_BodyPart_basic],
            'CONTEXT 8': ['basic', _decode_BodyPart_basic],
            'CONTEXT 9': ['basic', _decode_BodyPart_basic],
            'CONTEXT 11': ['basic', _decode_BodyPart_basic],
            'CONTEXT 14': ['basic', _decode_BodyPart_basic],
            'CONTEXT 7': ['basic', _decode_BodyPart_basic],
            'CONTEXT 15': [
                'extended',
                $._decode_implicit<ExtendedBodyPart>(
                    () => _decode_ExtendedBodyPart
                ),
            ],
        });
    }
    return _cached_decoder_for_BodyPart(el);
}

let _cached_encoder_for_BodyPart: $.ASN1Encoder<BodyPart> | null = null;

/**
 * @summary Encodes a(n) BodyPart into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPart, encoded as an ASN.1 Element.
 */
export function _encode_BodyPart(
    value: BodyPart,
    elGetter: $.ASN1Encoder<BodyPart>
) {
    if (!_cached_encoder_for_BodyPart) {
        _cached_encoder_for_BodyPart = $._encode_choice<BodyPart>(
            {
                basic: _encode_BodyPart_basic,
                extended: $._encode_implicit(
                    _TagClass.context,
                    15,
                    () => _encode_ExtendedBodyPart,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_BodyPart(value, elGetter);
}


/* eslint-enable */

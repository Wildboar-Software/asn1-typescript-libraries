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
    IA5TextBodyPart,
    _decode_IA5TextBodyPart,
    _encode_IA5TextBodyPart,
} from '../IPMSInformationObjects/IA5TextBodyPart.ta.mjs';
import {
    G3FacsimileBodyPart,
    _decode_G3FacsimileBodyPart,
    _encode_G3FacsimileBodyPart,
} from '../IPMSInformationObjects/G3FacsimileBodyPart.ta.mjs';
import {
    G4Class1BodyPart,
    _decode_G4Class1BodyPart,
    _encode_G4Class1BodyPart,
} from '../IPMSInformationObjects/G4Class1BodyPart.ta.mjs';
import {
    TeletexBodyPart,
    _decode_TeletexBodyPart,
    _encode_TeletexBodyPart,
} from '../IPMSInformationObjects/TeletexBodyPart.ta.mjs';
import {
    VideotexBodyPart,
    _decode_VideotexBodyPart,
    _encode_VideotexBodyPart,
} from '../IPMSInformationObjects/VideotexBodyPart.ta.mjs';
import {
    EncryptedBodyPart,
    _decode_EncryptedBodyPart,
    _encode_EncryptedBodyPart,
} from '../IPMSInformationObjects/EncryptedBodyPart.ta.mjs';
import {
    MessageBodyPart,
    _decode_MessageBodyPart,
    _encode_MessageBodyPart,
} from '../IPMSInformationObjects/MessageBodyPart.ta.mjs';
import {
    MixedModeBodyPart,
    _decode_MixedModeBodyPart,
    _encode_MixedModeBodyPart,
} from '../IPMSInformationObjects/MixedModeBodyPart.ta.mjs';
import {
    BilaterallyDefinedBodyPart,
    _decode_BilaterallyDefinedBodyPart,
    _encode_BilaterallyDefinedBodyPart,
} from '../IPMSInformationObjects/BilaterallyDefinedBodyPart.ta.mjs';
import {
    NationallyDefinedBodyPart,
    _decode_NationallyDefinedBodyPart,
    _encode_NationallyDefinedBodyPart,
} from '../IPMSInformationObjects/NationallyDefinedBodyPart.ta.mjs';
/**
 * @summary BodyPart_basic
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPart-basic ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BodyPart_basic =
    | { ia5_text: IA5TextBodyPart } /* CHOICE_ALT_ROOT */
    | { g3_facsimile: G3FacsimileBodyPart } /* CHOICE_ALT_ROOT */
    | { g4_class1: G4Class1BodyPart } /* CHOICE_ALT_ROOT */
    | { teletex: TeletexBodyPart } /* CHOICE_ALT_ROOT */
    | { videotex: VideotexBodyPart } /* CHOICE_ALT_ROOT */
    | { encrypted: EncryptedBodyPart } /* CHOICE_ALT_ROOT */
    | { message: MessageBodyPart } /* CHOICE_ALT_ROOT */
    | { mixed_mode: MixedModeBodyPart } /* CHOICE_ALT_ROOT */
    | { bilaterally_defined: BilaterallyDefinedBodyPart } /* CHOICE_ALT_ROOT */
    | { nationally_defined: NationallyDefinedBodyPart } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BodyPart_basic: $.ASN1Decoder<BodyPart_basic> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BodyPart_basic
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPart_basic} The decoded data structure.
 */
export function _decode_BodyPart_basic(el: _Element) {
    if (!_cached_decoder_for_BodyPart_basic) {
        _cached_decoder_for_BodyPart_basic = $._decode_inextensible_choice<BodyPart_basic>(
            {
                'CONTEXT 0': [
                    'ia5_text',
                    $._decode_implicit<IA5TextBodyPart>(
                        () => _decode_IA5TextBodyPart
                    ),
                ],
                'CONTEXT 3': [
                    'g3_facsimile',
                    $._decode_implicit<G3FacsimileBodyPart>(
                        () => _decode_G3FacsimileBodyPart
                    ),
                ],
                'CONTEXT 4': [
                    'g4_class1',
                    $._decode_implicit<G4Class1BodyPart>(
                        () => _decode_G4Class1BodyPart
                    ),
                ],
                'CONTEXT 5': [
                    'teletex',
                    $._decode_implicit<TeletexBodyPart>(
                        () => _decode_TeletexBodyPart
                    ),
                ],
                'CONTEXT 6': [
                    'videotex',
                    $._decode_implicit<VideotexBodyPart>(
                        () => _decode_VideotexBodyPart
                    ),
                ],
                'CONTEXT 8': [
                    'encrypted',
                    $._decode_implicit<EncryptedBodyPart>(
                        () => _decode_EncryptedBodyPart
                    ),
                ],
                'CONTEXT 9': [
                    'message',
                    $._decode_implicit<MessageBodyPart>(
                        () => _decode_MessageBodyPart
                    ),
                ],
                'CONTEXT 11': [
                    'mixed_mode',
                    $._decode_implicit<MixedModeBodyPart>(
                        () => _decode_MixedModeBodyPart
                    ),
                ],
                'CONTEXT 14': [
                    'bilaterally_defined',
                    $._decode_implicit<BilaterallyDefinedBodyPart>(
                        () => _decode_BilaterallyDefinedBodyPart
                    ),
                ],
                'CONTEXT 7': [
                    'nationally_defined',
                    $._decode_implicit<NationallyDefinedBodyPart>(
                        () => _decode_NationallyDefinedBodyPart
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_BodyPart_basic(el);
}

let _cached_encoder_for_BodyPart_basic: $.ASN1Encoder<BodyPart_basic> | null = null;

/**
 * @summary Encodes a(n) BodyPart_basic into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPart_basic, encoded as an ASN.1 Element.
 */
export function _encode_BodyPart_basic(
    value: BodyPart_basic,
    elGetter: $.ASN1Encoder<BodyPart_basic>
) {
    if (!_cached_encoder_for_BodyPart_basic) {
        _cached_encoder_for_BodyPart_basic = $._encode_choice<BodyPart_basic>(
            {
                ia5_text: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_IA5TextBodyPart,
                    $.BER
                ),
                g3_facsimile: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_G3FacsimileBodyPart,
                    $.BER
                ),
                g4_class1: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_G4Class1BodyPart,
                    $.BER
                ),
                teletex: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_TeletexBodyPart,
                    $.BER
                ),
                videotex: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_VideotexBodyPart,
                    $.BER
                ),
                encrypted: $._encode_implicit(
                    _TagClass.context,
                    8,
                    () => _encode_EncryptedBodyPart,
                    $.BER
                ),
                message: $._encode_implicit(
                    _TagClass.context,
                    9,
                    () => _encode_MessageBodyPart,
                    $.BER
                ),
                mixed_mode: $._encode_implicit(
                    _TagClass.context,
                    11,
                    () => _encode_MixedModeBodyPart,
                    $.BER
                ),
                bilaterally_defined: $._encode_implicit(
                    _TagClass.context,
                    14,
                    () => _encode_BilaterallyDefinedBodyPart,
                    $.BER
                ),
                nationally_defined: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () => _encode_NationallyDefinedBodyPart,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_BodyPart_basic(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    BodyPart_basic,
    _decode_BodyPart_basic,
    _encode_BodyPart_basic,
} from '../IPMSInformationObjects/BodyPart-basic.ta';
export {
    BodyPart_basic,
    _decode_BodyPart_basic,
    _encode_BodyPart_basic,
} from '../IPMSInformationObjects/BodyPart-basic.ta';
import {
    ExtendedBodyPart,
    _decode_ExtendedBodyPart,
    _encode_ExtendedBodyPart,
} from '../IPMSInformationObjects/ExtendedBodyPart.ta';
export {
    ExtendedBodyPart,
    _decode_ExtendedBodyPart,
    _encode_ExtendedBodyPart,
} from '../IPMSInformationObjects/ExtendedBodyPart.ta';

/* START_OF_SYMBOL_DEFINITION BodyPart */
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
/* END_OF_SYMBOL_DEFINITION BodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPart */
let _cached_decoder_for_BodyPart: $.ASN1Decoder<BodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPart */

/* START_OF_SYMBOL_DEFINITION _decode_BodyPart */
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
/* END_OF_SYMBOL_DEFINITION _decode_BodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPart */
let _cached_encoder_for_BodyPart: $.ASN1Encoder<BodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPart */

/* START_OF_SYMBOL_DEFINITION _encode_BodyPart */
/**
 * @summary Encodes a(n) BodyPart into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_BodyPart */

/* eslint-enable */

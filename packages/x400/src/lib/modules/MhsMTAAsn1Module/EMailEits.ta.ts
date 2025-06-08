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
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta';
export {
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta';

/* START_OF_SYMBOL_DEFINITION EMailEits */
/**
 * @summary EMailEits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailEits  ::=  CHOICE {
 *   x400EIT      [0]  EncodedInformationTypes,
 *   genericEITs  [1]  SEQUENCE OF OBJECT IDENTIFIER
 * }
 * ```
 */
export type EMailEits =
    | { x400EIT: EncodedInformationTypes } /* CHOICE_ALT_ROOT */
    | { genericEITs: OBJECT_IDENTIFIER[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EMailEits */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailEits */
let _cached_decoder_for_EMailEits: $.ASN1Decoder<EMailEits> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailEits */

/* START_OF_SYMBOL_DEFINITION _decode_EMailEits */
/**
 * @summary Decodes an ASN.1 element into a(n) EMailEits
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailEits} The decoded data structure.
 */
export function _decode_EMailEits(el: _Element) {
    if (!_cached_decoder_for_EMailEits) {
        _cached_decoder_for_EMailEits = $._decode_inextensible_choice<EMailEits>(
            {
                'CONTEXT 0': [
                    'x400EIT',
                    $._decode_implicit<EncodedInformationTypes>(
                        () => _decode_EncodedInformationTypes
                    ),
                ],
                'CONTEXT 1': [
                    'genericEITs',
                    $._decode_implicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSequenceOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_EMailEits(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EMailEits */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailEits */
let _cached_encoder_for_EMailEits: $.ASN1Encoder<EMailEits> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailEits */

/* START_OF_SYMBOL_DEFINITION _encode_EMailEits */
/**
 * @summary Encodes a(n) EMailEits into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailEits, encoded as an ASN.1 Element.
 */
export function _encode_EMailEits(
    value: EMailEits,
    elGetter: $.ASN1Encoder<EMailEits>
) {
    if (!_cached_encoder_for_EMailEits) {
        _cached_encoder_for_EMailEits = $._encode_choice<EMailEits>(
            {
                x400EIT: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_EncodedInformationTypes,
                    $.BER
                ),
                genericEITs: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<OBJECT_IDENTIFIER>(
                            () => $._encodeObjectIdentifier,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailEits(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EMailEits */

/* eslint-enable */

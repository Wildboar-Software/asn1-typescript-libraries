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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ExplicitConversion,
    ExplicitConversion_ia5_text_to_teletex /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_text_to_teletex /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_ia5_text_to_g3_facsimile /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_text_to_g3_facsimile /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_ia5_text_to_g4_class_1 /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_text_to_g4_class_1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_ia5_text_to_videotex /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_text_to_videotex /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_teletex_to_ia5_text /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_to_ia5_text /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_teletex_to_g3_facsimile /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_to_g3_facsimile /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_teletex_to_g4_class_1 /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_to_g4_class_1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_teletex_to_videotex /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_to_videotex /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_videotex_to_ia5_text /* IMPORTED_LONG_NAMED_INTEGER */,
    videotex_to_ia5_text /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_videotex_to_teletex /* IMPORTED_LONG_NAMED_INTEGER */,
    videotex_to_teletex /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ExplicitConversion,
    _encode_ExplicitConversion,
} from '../MTSAbstractService/ExplicitConversion.ta.mjs';
export {
    ExplicitConversion,
    ExplicitConversion_ia5_text_to_teletex /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_text_to_teletex /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_ia5_text_to_g3_facsimile /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_text_to_g3_facsimile /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_ia5_text_to_g4_class_1 /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_text_to_g4_class_1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_ia5_text_to_videotex /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_text_to_videotex /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_teletex_to_ia5_text /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_to_ia5_text /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_teletex_to_g3_facsimile /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_to_g3_facsimile /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_teletex_to_g4_class_1 /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_to_g4_class_1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_teletex_to_videotex /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex_to_videotex /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_videotex_to_ia5_text /* IMPORTED_LONG_NAMED_INTEGER */,
    videotex_to_ia5_text /* IMPORTED_SHORT_NAMED_INTEGER */,
    ExplicitConversion_videotex_to_teletex /* IMPORTED_LONG_NAMED_INTEGER */,
    videotex_to_teletex /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ExplicitConversion,
    _encode_ExplicitConversion,
} from '../MTSAbstractService/ExplicitConversion.ta.mjs';
import {
    GenericConversion,
    _decode_GenericConversion,
    _encode_GenericConversion,
} from '../MhsAcctAsn1Module/GenericConversion.ta.mjs';
export {
    GenericConversion,
    _decode_GenericConversion,
    _encode_GenericConversion,
} from '../MhsAcctAsn1Module/GenericConversion.ta.mjs';

/* START_OF_SYMBOL_DEFINITION EMailFromToEIT */
/**
 * @summary EMailFromToEIT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailFromToEIT  ::=  CHOICE {
 *   explicitConversion  [0]  ExplicitConversion,
 *   genericConversion   [1]  GenericConversion
 * }
 * ```
 */
export type EMailFromToEIT =
    | { explicitConversion: ExplicitConversion } /* CHOICE_ALT_ROOT */
    | { genericConversion: GenericConversion } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EMailFromToEIT */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailFromToEIT */
let _cached_decoder_for_EMailFromToEIT: $.ASN1Decoder<EMailFromToEIT> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailFromToEIT */

/* START_OF_SYMBOL_DEFINITION _decode_EMailFromToEIT */
/**
 * @summary Decodes an ASN.1 element into a(n) EMailFromToEIT
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailFromToEIT} The decoded data structure.
 */
export function _decode_EMailFromToEIT(el: _Element) {
    if (!_cached_decoder_for_EMailFromToEIT) {
        _cached_decoder_for_EMailFromToEIT = $._decode_inextensible_choice<EMailFromToEIT>(
            {
                'CONTEXT 0': [
                    'explicitConversion',
                    $._decode_implicit<ExplicitConversion>(
                        () => _decode_ExplicitConversion
                    ),
                ],
                'CONTEXT 1': [
                    'genericConversion',
                    $._decode_implicit<GenericConversion>(
                        () => _decode_GenericConversion
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_EMailFromToEIT(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EMailFromToEIT */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailFromToEIT */
let _cached_encoder_for_EMailFromToEIT: $.ASN1Encoder<EMailFromToEIT> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailFromToEIT */

/* START_OF_SYMBOL_DEFINITION _encode_EMailFromToEIT */
/**
 * @summary Encodes a(n) EMailFromToEIT into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailFromToEIT, encoded as an ASN.1 Element.
 */
export function _encode_EMailFromToEIT(
    value: EMailFromToEIT,
    elGetter: $.ASN1Encoder<EMailFromToEIT>
) {
    if (!_cached_encoder_for_EMailFromToEIT) {
        _cached_encoder_for_EMailFromToEIT = $._encode_choice<EMailFromToEIT>(
            {
                explicitConversion: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ExplicitConversion,
                    $.BER
                ),
                genericConversion: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GenericConversion,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailFromToEIT(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EMailFromToEIT */

/* eslint-enable */

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

/* START_OF_SYMBOL_DEFINITION ExtensionType */
/**
 * @summary ExtensionType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionType  ::=  CHOICE {
 *   standard-extension  [0]  INTEGER(0..ub-extension-types),
 *   private-extension   [3]  OBJECT IDENTIFIER
 * }
 * ```
 */
export type ExtensionType =
    | { standard_extension: INTEGER } /* CHOICE_ALT_ROOT */
    | { private_extension: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ExtensionType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionType */
let _cached_decoder_for_ExtensionType: $.ASN1Decoder<ExtensionType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionType */

/* START_OF_SYMBOL_DEFINITION _decode_ExtensionType */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionType} The decoded data structure.
 */
export function _decode_ExtensionType(el: _Element) {
    if (!_cached_decoder_for_ExtensionType) {
        _cached_decoder_for_ExtensionType = $._decode_inextensible_choice<ExtensionType>(
            {
                'CONTEXT 0': [
                    'standard_extension',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 3': [
                    'private_extension',
                    $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ExtensionType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtensionType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionType */
let _cached_encoder_for_ExtensionType: $.ASN1Encoder<ExtensionType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionType */

/* START_OF_SYMBOL_DEFINITION _encode_ExtensionType */
/**
 * @summary Encodes a(n) ExtensionType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionType, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionType(
    value: ExtensionType,
    elGetter: $.ASN1Encoder<ExtensionType>
) {
    if (!_cached_encoder_for_ExtensionType) {
        _cached_encoder_for_ExtensionType = $._encode_choice<ExtensionType>(
            {
                standard_extension: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInteger,
                    $.BER
                ),
                private_extension: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ExtensionType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtensionType */

/* eslint-enable */

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

/* START_OF_SYMBOL_DEFINITION InformationSize */
/**
 * @summary InformationSize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationSize  ::=  CHOICE {
 *   numberOfBits   [0]  INTEGER,
 *   numberOfBytes  [1]  INTEGER
 * }
 * ```
 */
export type InformationSize =
    | { numberOfBits: INTEGER } /* CHOICE_ALT_ROOT */
    | { numberOfBytes: INTEGER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION InformationSize */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationSize */
let _cached_decoder_for_InformationSize: $.ASN1Decoder<InformationSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationSize */

/* START_OF_SYMBOL_DEFINITION _decode_InformationSize */
/**
 * @summary Decodes an ASN.1 element into a(n) InformationSize
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InformationSize} The decoded data structure.
 */
export function _decode_InformationSize(el: _Element) {
    if (!_cached_decoder_for_InformationSize) {
        _cached_decoder_for_InformationSize = $._decode_inextensible_choice<InformationSize>(
            {
                'CONTEXT 0': [
                    'numberOfBits',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 1': [
                    'numberOfBytes',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
            }
        );
    }
    return _cached_decoder_for_InformationSize(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InformationSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationSize */
let _cached_encoder_for_InformationSize: $.ASN1Encoder<InformationSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationSize */

/* START_OF_SYMBOL_DEFINITION _encode_InformationSize */
/**
 * @summary Encodes a(n) InformationSize into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationSize, encoded as an ASN.1 Element.
 */
export function _encode_InformationSize(
    value: InformationSize,
    elGetter: $.ASN1Encoder<InformationSize>
) {
    if (!_cached_encoder_for_InformationSize) {
        _cached_encoder_for_InformationSize = $._encode_choice<InformationSize>(
            {
                numberOfBits: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInteger,
                    $.BER
                ),
                numberOfBytes: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeInteger,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_InformationSize(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InformationSize */

/* eslint-enable */

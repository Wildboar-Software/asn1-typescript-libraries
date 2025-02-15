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

/* START_OF_SYMBOL_DEFINITION ErrorId */
/**
 * @summary ErrorId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorId  ::=  CHOICE {localValue   INTEGER,
 *                     globalValue  OBJECT IDENTIFIER
 * }
 * ```
 */
export type ErrorId =
    | { localValue: INTEGER } /* CHOICE_ALT_ROOT */
    | { globalValue: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ErrorId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorId */
let _cached_decoder_for_ErrorId: $.ASN1Decoder<ErrorId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorId */

/* START_OF_SYMBOL_DEFINITION _decode_ErrorId */
/**
 * @summary Decodes an ASN.1 element into a(n) ErrorId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ErrorId} The decoded data structure.
 */
export function _decode_ErrorId(el: _Element) {
    if (!_cached_decoder_for_ErrorId) {
        _cached_decoder_for_ErrorId = $._decode_inextensible_choice<ErrorId>({
            'UNIVERSAL 2': ['localValue', $._decodeInteger],
            'UNIVERSAL 6': ['globalValue', $._decodeObjectIdentifier],
        });
    }
    return _cached_decoder_for_ErrorId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ErrorId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorId */
let _cached_encoder_for_ErrorId: $.ASN1Encoder<ErrorId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorId */

/* START_OF_SYMBOL_DEFINITION _encode_ErrorId */
/**
 * @summary Encodes a(n) ErrorId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorId, encoded as an ASN.1 Element.
 */
export function _encode_ErrorId(
    value: ErrorId,
    elGetter: $.ASN1Encoder<ErrorId>
) {
    if (!_cached_encoder_for_ErrorId) {
        _cached_encoder_for_ErrorId = $._encode_choice<ErrorId>(
            {
                localValue: $._encodeInteger,
                globalValue: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ErrorId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ErrorId */

/* eslint-enable */

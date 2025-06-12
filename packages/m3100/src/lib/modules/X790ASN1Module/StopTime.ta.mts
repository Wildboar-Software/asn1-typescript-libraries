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

/* START_OF_SYMBOL_DEFINITION StopTime */
/**
 * @summary StopTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StopTime  ::=  CHOICE {specific   GeneralizedTime,
 *                      continual  NULL,
 *                      ...
 * }
 * ```
 */
export type StopTime =
    | { specific: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { continual: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION StopTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StopTime */
let _cached_decoder_for_StopTime: $.ASN1Decoder<StopTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StopTime */

/* START_OF_SYMBOL_DEFINITION _decode_StopTime */
/**
 * @summary Decodes an ASN.1 element into a(n) StopTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StopTime} The decoded data structure.
 */
export function _decode_StopTime(el: _Element) {
    if (!_cached_decoder_for_StopTime) {
        _cached_decoder_for_StopTime = $._decode_extensible_choice<StopTime>({
            'UNIVERSAL 24': ['specific', $._decodeGeneralizedTime],
            'UNIVERSAL 5': ['continual', $._decodeNull],
        });
    }
    return _cached_decoder_for_StopTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_StopTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StopTime */
let _cached_encoder_for_StopTime: $.ASN1Encoder<StopTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StopTime */

/* START_OF_SYMBOL_DEFINITION _encode_StopTime */
/**
 * @summary Encodes a(n) StopTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopTime, encoded as an ASN.1 Element.
 */
export function _encode_StopTime(
    value: StopTime,
    elGetter: $.ASN1Encoder<StopTime>
) {
    if (!_cached_encoder_for_StopTime) {
        _cached_encoder_for_StopTime = $._encode_choice<StopTime>(
            {
                specific: $._encodeGeneralizedTime,
                continual: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_StopTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_StopTime */

/* eslint-enable */

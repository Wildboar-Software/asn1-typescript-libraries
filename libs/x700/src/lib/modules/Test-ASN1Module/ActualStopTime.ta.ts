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

/* START_OF_SYMBOL_DEFINITION ActualStopTime */
/**
 * @summary ActualStopTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActualStopTime  ::=  CHOICE {unknown     NULL,
 *                            actualStop  GeneralizedTime
 * }
 * ```
 */
export type ActualStopTime =
    | { unknown: NULL } /* CHOICE_ALT_ROOT */
    | { actualStop: GeneralizedTime } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ActualStopTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActualStopTime */
let _cached_decoder_for_ActualStopTime: $.ASN1Decoder<ActualStopTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActualStopTime */

/* START_OF_SYMBOL_DEFINITION _decode_ActualStopTime */
/**
 * @summary Decodes an ASN.1 element into a(n) ActualStopTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActualStopTime} The decoded data structure.
 */
export function _decode_ActualStopTime(el: _Element) {
    if (!_cached_decoder_for_ActualStopTime) {
        _cached_decoder_for_ActualStopTime = $._decode_inextensible_choice<ActualStopTime>(
            {
                'UNIVERSAL 5': ['unknown', $._decodeNull],
                'UNIVERSAL 24': ['actualStop', $._decodeGeneralizedTime],
            }
        );
    }
    return _cached_decoder_for_ActualStopTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActualStopTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActualStopTime */
let _cached_encoder_for_ActualStopTime: $.ASN1Encoder<ActualStopTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActualStopTime */

/* START_OF_SYMBOL_DEFINITION _encode_ActualStopTime */
/**
 * @summary Encodes a(n) ActualStopTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActualStopTime, encoded as an ASN.1 Element.
 */
export function _encode_ActualStopTime(
    value: ActualStopTime,
    elGetter: $.ASN1Encoder<ActualStopTime>
) {
    if (!_cached_encoder_for_ActualStopTime) {
        _cached_encoder_for_ActualStopTime = $._encode_choice<ActualStopTime>(
            {
                unknown: $._encodeNull,
                actualStop: $._encodeGeneralizedTime,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ActualStopTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActualStopTime */

/* eslint-enable */

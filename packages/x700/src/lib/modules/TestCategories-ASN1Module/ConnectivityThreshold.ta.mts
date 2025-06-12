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
    ConnectivityThreshold_time,
    _decode_ConnectivityThreshold_time,
    _encode_ConnectivityThreshold_time,
} from '../TestCategories-ASN1Module/ConnectivityThreshold-time.ta.mjs';
export {
    ConnectivityThreshold_time,
    _decode_ConnectivityThreshold_time,
    _encode_ConnectivityThreshold_time,
} from '../TestCategories-ASN1Module/ConnectivityThreshold-time.ta.mjs';
import {
    RawData,
    _decode_RawData,
    _encode_RawData,
} from '../TestCategories-ASN1Module/RawData.ta.mjs';
export {
    RawData,
    _decode_RawData,
    _encode_RawData,
} from '../TestCategories-ASN1Module/RawData.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ConnectivityThreshold */
/**
 * @summary ConnectivityThreshold
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectivityThreshold  ::=  CHOICE {
 *   time     [0]  SEQUENCE {unitsType   UnitsType,
 *                           unitsTotal  UnitsTotal},
 *   rawData  [1]  RawData
 * }
 * ```
 */
export type ConnectivityThreshold =
    | { time: ConnectivityThreshold_time } /* CHOICE_ALT_ROOT */
    | { rawData: RawData } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ConnectivityThreshold */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectivityThreshold */
let _cached_decoder_for_ConnectivityThreshold: $.ASN1Decoder<ConnectivityThreshold> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectivityThreshold */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectivityThreshold */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectivityThreshold
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectivityThreshold} The decoded data structure.
 */
export function _decode_ConnectivityThreshold(el: _Element) {
    if (!_cached_decoder_for_ConnectivityThreshold) {
        _cached_decoder_for_ConnectivityThreshold = $._decode_inextensible_choice<ConnectivityThreshold>(
            {
                'CONTEXT 0': [
                    'time',
                    $._decode_implicit<ConnectivityThreshold_time>(
                        () => _decode_ConnectivityThreshold_time
                    ),
                ],
                'CONTEXT 1': [
                    'rawData',
                    $._decode_implicit<RawData>(() => _decode_RawData),
                ],
            }
        );
    }
    return _cached_decoder_for_ConnectivityThreshold(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectivityThreshold */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectivityThreshold */
let _cached_encoder_for_ConnectivityThreshold: $.ASN1Encoder<ConnectivityThreshold> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectivityThreshold */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectivityThreshold */
/**
 * @summary Encodes a(n) ConnectivityThreshold into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectivityThreshold, encoded as an ASN.1 Element.
 */
export function _encode_ConnectivityThreshold(
    value: ConnectivityThreshold,
    elGetter: $.ASN1Encoder<ConnectivityThreshold>
) {
    if (!_cached_encoder_for_ConnectivityThreshold) {
        _cached_encoder_for_ConnectivityThreshold = $._encode_choice<ConnectivityThreshold>(
            {
                time: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ConnectivityThreshold_time,
                    $.BER
                ),
                rawData: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_RawData,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ConnectivityThreshold(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectivityThreshold */

/* eslint-enable */

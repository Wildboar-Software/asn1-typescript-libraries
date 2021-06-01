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
    CirculationTime,
    _decode_CirculationTime,
    _encode_CirculationTime,
} from '../IPMSHeadingExtensions/CirculationTime.ta';
export {
    CirculationTime,
    _decode_CirculationTime,
    _encode_CirculationTime,
} from '../IPMSHeadingExtensions/CirculationTime.ta';
import {
    CirculationSignature,
    _decode_CirculationSignature,
    _encode_CirculationSignature,
} from '../IPMSHeadingExtensions/CirculationSignature.ta';
export {
    CirculationSignature,
    _decode_CirculationSignature,
    _encode_CirculationSignature,
} from '../IPMSHeadingExtensions/CirculationSignature.ta';

/* START_OF_SYMBOL_DEFINITION Checkmark */
/**
 * @summary Checkmark
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Checkmark  ::=  CHOICE {
 *   simple       NULL,
 *   timestamped  CirculationTime,
 *   signed       CirculationSignature
 * }
 * ```
 */
export type Checkmark =
    | { simple: NULL } /* CHOICE_ALT_ROOT */
    | { timestamped: CirculationTime } /* CHOICE_ALT_ROOT */
    | { signed: CirculationSignature } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Checkmark */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Checkmark */
let _cached_decoder_for_Checkmark: $.ASN1Decoder<Checkmark> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Checkmark */

/* START_OF_SYMBOL_DEFINITION _decode_Checkmark */
/**
 * @summary Decodes an ASN.1 element into a(n) Checkmark
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Checkmark} The decoded data structure.
 */
export function _decode_Checkmark(el: _Element) {
    if (!_cached_decoder_for_Checkmark) {
        _cached_decoder_for_Checkmark = $._decode_inextensible_choice<Checkmark>(
            {
                'UNIVERSAL 5': ['simple', $._decodeNull],
                'UNIVERSAL 24': ['timestamped', _decode_CirculationTime],
                'UNIVERSAL 16': ['signed', _decode_CirculationSignature],
            }
        );
    }
    return _cached_decoder_for_Checkmark(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Checkmark */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Checkmark */
let _cached_encoder_for_Checkmark: $.ASN1Encoder<Checkmark> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Checkmark */

/* START_OF_SYMBOL_DEFINITION _encode_Checkmark */
/**
 * @summary Encodes a(n) Checkmark into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Checkmark, encoded as an ASN.1 Element.
 */
export function _encode_Checkmark(
    value: Checkmark,
    elGetter: $.ASN1Encoder<Checkmark>
) {
    if (!_cached_encoder_for_Checkmark) {
        _cached_encoder_for_Checkmark = $._encode_choice<Checkmark>(
            {
                simple: $._encodeNull,
                timestamped: _encode_CirculationTime,
                signed: _encode_CirculationSignature,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Checkmark(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Checkmark */

/* eslint-enable */

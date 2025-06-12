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
    Bandwidth,
    _decode_Bandwidth,
    _encode_Bandwidth,
} from '../M3100ASN1TypeModule2/Bandwidth.ta.js';
export {
    Bandwidth,
    _decode_Bandwidth,
    _encode_Bandwidth,
} from '../M3100ASN1TypeModule2/Bandwidth.ta.js';

/* START_OF_SYMBOL_DEFINITION Capacity */
/**
 * @summary Capacity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Capacity  ::=  CHOICE {
 *   numberOfLinkConnections  [0]  INTEGER,
 *   bandwidth                [1]  Bandwidth
 * }
 * ```
 */
export type Capacity =
    | { numberOfLinkConnections: INTEGER } /* CHOICE_ALT_ROOT */
    | { bandwidth: Bandwidth } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Capacity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Capacity */
let _cached_decoder_for_Capacity: $.ASN1Decoder<Capacity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Capacity */

/* START_OF_SYMBOL_DEFINITION _decode_Capacity */
/**
 * @summary Decodes an ASN.1 element into a(n) Capacity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Capacity} The decoded data structure.
 */
export function _decode_Capacity(el: _Element) {
    if (!_cached_decoder_for_Capacity) {
        _cached_decoder_for_Capacity = $._decode_inextensible_choice<Capacity>({
            'CONTEXT 0': [
                'numberOfLinkConnections',
                $._decode_implicit<INTEGER>(() => $._decodeInteger),
            ],
            'CONTEXT 1': [
                'bandwidth',
                $._decode_implicit<Bandwidth>(() => _decode_Bandwidth),
            ],
        });
    }
    return _cached_decoder_for_Capacity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Capacity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Capacity */
let _cached_encoder_for_Capacity: $.ASN1Encoder<Capacity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Capacity */

/* START_OF_SYMBOL_DEFINITION _encode_Capacity */
/**
 * @summary Encodes a(n) Capacity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Capacity, encoded as an ASN.1 Element.
 */
export function _encode_Capacity(
    value: Capacity,
    elGetter: $.ASN1Encoder<Capacity>
) {
    if (!_cached_encoder_for_Capacity) {
        _cached_encoder_for_Capacity = $._encode_choice<Capacity>(
            {
                numberOfLinkConnections: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInteger,
                    $.BER
                ),
                bandwidth: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_Bandwidth,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Capacity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Capacity */

/* eslint-enable */

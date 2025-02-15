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
    NWTPList,
    _decode_NWTPList,
    _encode_NWTPList,
} from '../M3100ASN1TypeModule2/NWTPList.ta';
export {
    NWTPList,
    _decode_NWTPList,
    _encode_NWTPList,
} from '../M3100ASN1TypeModule2/NWTPList.ta';
import {
    PointCapacity,
    _decode_PointCapacity,
    _encode_PointCapacity,
} from '../M3100ASN1TypeModule2/PointCapacity.ta';
export {
    PointCapacity,
    _decode_PointCapacity,
    _encode_PointCapacity,
} from '../M3100ASN1TypeModule2/PointCapacity.ta';

/* START_OF_SYMBOL_DEFINITION RequestedPointCapacity */
/**
 * @summary RequestedPointCapacity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestedPointCapacity  ::=  CHOICE {
 *   specificTPs  [1]  NWTPList,
 *   capacity     [2]  PointCapacity
 * }
 * ```
 */
export type RequestedPointCapacity =
    | { specificTPs: NWTPList } /* CHOICE_ALT_ROOT */
    | { capacity: PointCapacity } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION RequestedPointCapacity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestedPointCapacity */
let _cached_decoder_for_RequestedPointCapacity: $.ASN1Decoder<RequestedPointCapacity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestedPointCapacity */

/* START_OF_SYMBOL_DEFINITION _decode_RequestedPointCapacity */
/**
 * @summary Decodes an ASN.1 element into a(n) RequestedPointCapacity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestedPointCapacity} The decoded data structure.
 */
export function _decode_RequestedPointCapacity(el: _Element) {
    if (!_cached_decoder_for_RequestedPointCapacity) {
        _cached_decoder_for_RequestedPointCapacity = $._decode_inextensible_choice<RequestedPointCapacity>(
            {
                'CONTEXT 1': [
                    'specificTPs',
                    $._decode_implicit<NWTPList>(() => _decode_NWTPList),
                ],
                'CONTEXT 2': [
                    'capacity',
                    $._decode_explicit<PointCapacity>(
                        () => _decode_PointCapacity
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_RequestedPointCapacity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RequestedPointCapacity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestedPointCapacity */
let _cached_encoder_for_RequestedPointCapacity: $.ASN1Encoder<RequestedPointCapacity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestedPointCapacity */

/* START_OF_SYMBOL_DEFINITION _encode_RequestedPointCapacity */
/**
 * @summary Encodes a(n) RequestedPointCapacity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedPointCapacity, encoded as an ASN.1 Element.
 */
export function _encode_RequestedPointCapacity(
    value: RequestedPointCapacity,
    elGetter: $.ASN1Encoder<RequestedPointCapacity>
) {
    if (!_cached_encoder_for_RequestedPointCapacity) {
        _cached_encoder_for_RequestedPointCapacity = $._encode_choice<RequestedPointCapacity>(
            {
                specificTPs: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_NWTPList,
                    $.BER
                ),
                capacity: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_PointCapacity,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RequestedPointCapacity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RequestedPointCapacity */

/* eslint-enable */

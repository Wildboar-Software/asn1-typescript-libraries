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
    PointToPoint,
    _decode_PointToPoint,
    _encode_PointToPoint,
} from '../ASN1DefinedTypesModule/PointToPoint.ta';
export {
    PointToPoint,
    _decode_PointToPoint,
    _encode_PointToPoint,
} from '../ASN1DefinedTypesModule/PointToPoint.ta';
import {
    PointToMultipoint,
    _decode_PointToMultipoint,
    _encode_PointToMultipoint,
} from '../ASN1DefinedTypesModule/PointToMultipoint.ta';
export {
    PointToMultipoint,
    _decode_PointToMultipoint,
    _encode_PointToMultipoint,
} from '../ASN1DefinedTypesModule/PointToMultipoint.ta';

/* START_OF_SYMBOL_DEFINITION Connected */
/**
 * @summary Connected
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Connected  ::=  CHOICE {
 *   pointToPoint       [0]  PointToPoint,
 *   pointToMultipoint  [1]  PointToMultipoint
 * }
 * ```
 */
export type Connected =
    | { pointToPoint: PointToPoint } /* CHOICE_ALT_ROOT */
    | { pointToMultipoint: PointToMultipoint } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Connected */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Connected */
let _cached_decoder_for_Connected: $.ASN1Decoder<Connected> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Connected */

/* START_OF_SYMBOL_DEFINITION _decode_Connected */
/**
 * @summary Decodes an ASN.1 element into a(n) Connected
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Connected} The decoded data structure.
 */
export function _decode_Connected(el: _Element) {
    if (!_cached_decoder_for_Connected) {
        _cached_decoder_for_Connected = $._decode_inextensible_choice<Connected>(
            {
                'CONTEXT 0': [
                    'pointToPoint',
                    $._decode_implicit<PointToPoint>(
                        () => _decode_PointToPoint
                    ),
                ],
                'CONTEXT 1': [
                    'pointToMultipoint',
                    $._decode_implicit<PointToMultipoint>(
                        () => _decode_PointToMultipoint
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_Connected(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Connected */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Connected */
let _cached_encoder_for_Connected: $.ASN1Encoder<Connected> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Connected */

/* START_OF_SYMBOL_DEFINITION _encode_Connected */
/**
 * @summary Encodes a(n) Connected into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Connected, encoded as an ASN.1 Element.
 */
export function _encode_Connected(
    value: Connected,
    elGetter: $.ASN1Encoder<Connected>
) {
    if (!_cached_encoder_for_Connected) {
        _cached_encoder_for_Connected = $._encode_choice<Connected>(
            {
                pointToPoint: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_PointToPoint,
                    $.BER
                ),
                pointToMultipoint: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_PointToMultipoint,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Connected(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Connected */

/* eslint-enable */

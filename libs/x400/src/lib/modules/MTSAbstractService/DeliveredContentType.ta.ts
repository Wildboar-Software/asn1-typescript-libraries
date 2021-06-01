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
    BuiltInContentType,
    _decode_BuiltInContentType,
    _encode_BuiltInContentType,
} from '../MTSAbstractService/BuiltInContentType.ta';
export {
    BuiltInContentType,
    _decode_BuiltInContentType,
    _encode_BuiltInContentType,
} from '../MTSAbstractService/BuiltInContentType.ta';
import {
    ExtendedContentType,
    _decode_ExtendedContentType,
    _encode_ExtendedContentType,
} from '../MTSAbstractService/ExtendedContentType.ta';
export {
    ExtendedContentType,
    _decode_ExtendedContentType,
    _encode_ExtendedContentType,
} from '../MTSAbstractService/ExtendedContentType.ta';

/* START_OF_SYMBOL_DEFINITION DeliveredContentType */
/**
 * @summary DeliveredContentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveredContentType  ::=  CHOICE {
 *   built-in  [0]  BuiltInContentType,
 *   extended  ExtendedContentType
 * }
 * ```
 */
export type DeliveredContentType =
    | { built_in: BuiltInContentType } /* CHOICE_ALT_ROOT */
    | { extended: ExtendedContentType } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DeliveredContentType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveredContentType */
let _cached_decoder_for_DeliveredContentType: $.ASN1Decoder<DeliveredContentType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveredContentType */

/* START_OF_SYMBOL_DEFINITION _decode_DeliveredContentType */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliveredContentType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveredContentType} The decoded data structure.
 */
export function _decode_DeliveredContentType(el: _Element) {
    if (!_cached_decoder_for_DeliveredContentType) {
        _cached_decoder_for_DeliveredContentType = $._decode_inextensible_choice<DeliveredContentType>(
            {
                'CONTEXT 0': [
                    'built_in',
                    $._decode_implicit<BuiltInContentType>(
                        () => _decode_BuiltInContentType
                    ),
                ],
                'UNIVERSAL 13': ['extended', _decode_ExtendedContentType],
            }
        );
    }
    return _cached_decoder_for_DeliveredContentType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliveredContentType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveredContentType */
let _cached_encoder_for_DeliveredContentType: $.ASN1Encoder<DeliveredContentType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveredContentType */

/* START_OF_SYMBOL_DEFINITION _encode_DeliveredContentType */
/**
 * @summary Encodes a(n) DeliveredContentType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveredContentType, encoded as an ASN.1 Element.
 */
export function _encode_DeliveredContentType(
    value: DeliveredContentType,
    elGetter: $.ASN1Encoder<DeliveredContentType>
) {
    if (!_cached_encoder_for_DeliveredContentType) {
        _cached_encoder_for_DeliveredContentType = $._encode_choice<DeliveredContentType>(
            {
                built_in: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_BuiltInContentType,
                    $.BER
                ),
                extended: _encode_ExtendedContentType,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DeliveredContentType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliveredContentType */

/* eslint-enable */

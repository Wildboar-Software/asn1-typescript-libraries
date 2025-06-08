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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta';
export {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta';

/* START_OF_SYMBOL_DEFINITION EDIMLocation */
/**
 * @summary EDIMLocation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMLocation  ::=  CHOICE {stored  SET OF SequenceNumber,
 *                          absent  NULL,
 *                          ...
 * }
 * ```
 */
export type EDIMLocation =
    | { stored: SequenceNumber[] } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION EDIMLocation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIMLocation */
let _cached_decoder_for_EDIMLocation: $.ASN1Decoder<EDIMLocation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIMLocation */

/* START_OF_SYMBOL_DEFINITION _decode_EDIMLocation */
/**
 * @summary Decodes an ASN.1 element into a(n) EDIMLocation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIMLocation} The decoded data structure.
 */
export function _decode_EDIMLocation(el: _Element) {
    if (!_cached_decoder_for_EDIMLocation) {
        _cached_decoder_for_EDIMLocation = $._decode_extensible_choice<EDIMLocation>(
            {
                'UNIVERSAL 17': [
                    'stored',
                    $._decodeSetOf<SequenceNumber>(
                        () => _decode_SequenceNumber
                    ),
                ],
                'UNIVERSAL 5': ['absent', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_EDIMLocation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDIMLocation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIMLocation */
let _cached_encoder_for_EDIMLocation: $.ASN1Encoder<EDIMLocation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIMLocation */

/* START_OF_SYMBOL_DEFINITION _encode_EDIMLocation */
/**
 * @summary Encodes a(n) EDIMLocation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIMLocation, encoded as an ASN.1 Element.
 */
export function _encode_EDIMLocation(
    value: EDIMLocation,
    elGetter: $.ASN1Encoder<EDIMLocation>
) {
    if (!_cached_encoder_for_EDIMLocation) {
        _cached_encoder_for_EDIMLocation = $._encode_choice<EDIMLocation>(
            {
                stored: $._encodeSetOf<SequenceNumber>(
                    () => _encode_SequenceNumber,
                    $.BER
                ),
                absent: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_EDIMLocation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDIMLocation */

/* eslint-enable */

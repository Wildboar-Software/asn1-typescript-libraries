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

/* START_OF_SYMBOL_DEFINITION DeliverId */
/**
 * @summary DeliverId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliverId  ::=  CHOICE {globalValue  OBJECT IDENTIFIER,
 *                       localValue   INTEGER
 * }
 * ```
 */
export type DeliverId =
    | { globalValue: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { localValue: INTEGER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DeliverId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliverId */
let _cached_decoder_for_DeliverId: $.ASN1Decoder<DeliverId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliverId */

/* START_OF_SYMBOL_DEFINITION _decode_DeliverId */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliverId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliverId} The decoded data structure.
 */
export function _decode_DeliverId(el: _Element) {
    if (!_cached_decoder_for_DeliverId) {
        _cached_decoder_for_DeliverId = $._decode_inextensible_choice<DeliverId>(
            {
                'UNIVERSAL 6': ['globalValue', $._decodeObjectIdentifier],
                'UNIVERSAL 2': ['localValue', $._decodeInteger],
            }
        );
    }
    return _cached_decoder_for_DeliverId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliverId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliverId */
let _cached_encoder_for_DeliverId: $.ASN1Encoder<DeliverId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliverId */

/* START_OF_SYMBOL_DEFINITION _encode_DeliverId */
/**
 * @summary Encodes a(n) DeliverId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliverId, encoded as an ASN.1 Element.
 */
export function _encode_DeliverId(
    value: DeliverId,
    elGetter: $.ASN1Encoder<DeliverId>
) {
    if (!_cached_encoder_for_DeliverId) {
        _cached_encoder_for_DeliverId = $._encode_choice<DeliverId>(
            {
                globalValue: $._encodeObjectIdentifier,
                localValue: $._encodeInteger,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DeliverId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliverId */

/* eslint-enable */

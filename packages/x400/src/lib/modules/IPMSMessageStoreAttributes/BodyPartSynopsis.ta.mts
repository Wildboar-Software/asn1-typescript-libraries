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
    MessageBodyPartSynopsis,
    _decode_MessageBodyPartSynopsis,
    _encode_MessageBodyPartSynopsis,
} from '../IPMSMessageStoreAttributes/MessageBodyPartSynopsis.ta.mjs';
export {
    MessageBodyPartSynopsis,
    _decode_MessageBodyPartSynopsis,
    _encode_MessageBodyPartSynopsis,
} from '../IPMSMessageStoreAttributes/MessageBodyPartSynopsis.ta.mjs';
import {
    NonMessageBodyPartSynopsis,
    _decode_NonMessageBodyPartSynopsis,
    _encode_NonMessageBodyPartSynopsis,
} from '../IPMSMessageStoreAttributes/NonMessageBodyPartSynopsis.ta.mjs';
export {
    NonMessageBodyPartSynopsis,
    _decode_NonMessageBodyPartSynopsis,
    _encode_NonMessageBodyPartSynopsis,
} from '../IPMSMessageStoreAttributes/NonMessageBodyPartSynopsis.ta.mjs';

/* START_OF_SYMBOL_DEFINITION BodyPartSynopsis */
/**
 * @summary BodyPartSynopsis
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartSynopsis  ::=  CHOICE {
 *   message      [0]  MessageBodyPartSynopsis,
 *   non-message  [1]  NonMessageBodyPartSynopsis
 * }
 * ```
 */
export type BodyPartSynopsis =
    | { message: MessageBodyPartSynopsis } /* CHOICE_ALT_ROOT */
    | { non_message: NonMessageBodyPartSynopsis } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartSynopsis */
let _cached_decoder_for_BodyPartSynopsis: $.ASN1Decoder<BodyPartSynopsis> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _decode_BodyPartSynopsis */
/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartSynopsis
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartSynopsis} The decoded data structure.
 */
export function _decode_BodyPartSynopsis(el: _Element) {
    if (!_cached_decoder_for_BodyPartSynopsis) {
        _cached_decoder_for_BodyPartSynopsis = $._decode_inextensible_choice<BodyPartSynopsis>(
            {
                'CONTEXT 0': [
                    'message',
                    $._decode_implicit<MessageBodyPartSynopsis>(
                        () => _decode_MessageBodyPartSynopsis
                    ),
                ],
                'CONTEXT 1': [
                    'non_message',
                    $._decode_implicit<NonMessageBodyPartSynopsis>(
                        () => _decode_NonMessageBodyPartSynopsis
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_BodyPartSynopsis(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartSynopsis */
let _cached_encoder_for_BodyPartSynopsis: $.ASN1Encoder<BodyPartSynopsis> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _encode_BodyPartSynopsis */
/**
 * @summary Encodes a(n) BodyPartSynopsis into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartSynopsis, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartSynopsis(
    value: BodyPartSynopsis,
    elGetter: $.ASN1Encoder<BodyPartSynopsis>
) {
    if (!_cached_encoder_for_BodyPartSynopsis) {
        _cached_encoder_for_BodyPartSynopsis = $._encode_choice<BodyPartSynopsis>(
            {
                message: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_MessageBodyPartSynopsis,
                    $.BER
                ),
                non_message: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_NonMessageBodyPartSynopsis,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_BodyPartSynopsis(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BodyPartSynopsis */

/* eslint-enable */

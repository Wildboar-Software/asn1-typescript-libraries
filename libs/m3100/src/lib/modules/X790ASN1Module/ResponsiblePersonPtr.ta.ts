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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';

/* START_OF_SYMBOL_DEFINITION ResponsiblePersonPtr */
/**
 * @summary ResponsiblePersonPtr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponsiblePersonPtr  ::=  CHOICE {
 *   null            NULL,
 *   objectInstance  ObjectInstance,
 *   ...
 * }
 * ```
 */
export type ResponsiblePersonPtr =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { objectInstance: ObjectInstance } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ResponsiblePersonPtr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponsiblePersonPtr */
let _cached_decoder_for_ResponsiblePersonPtr: $.ASN1Decoder<ResponsiblePersonPtr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponsiblePersonPtr */

/* START_OF_SYMBOL_DEFINITION _decode_ResponsiblePersonPtr */
/**
 * @summary Decodes an ASN.1 element into a(n) ResponsiblePersonPtr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponsiblePersonPtr} The decoded data structure.
 */
export function _decode_ResponsiblePersonPtr(el: _Element) {
    if (!_cached_decoder_for_ResponsiblePersonPtr) {
        _cached_decoder_for_ResponsiblePersonPtr = $._decode_extensible_choice<ResponsiblePersonPtr>(
            {
                'UNIVERSAL 5': ['null_', $._decodeNull],
                'CONTEXT 2': ['objectInstance', _decode_ObjectInstance],
                'CONTEXT 3': ['objectInstance', _decode_ObjectInstance],
                'CONTEXT 4': ['objectInstance', _decode_ObjectInstance],
            }
        );
    }
    return _cached_decoder_for_ResponsiblePersonPtr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResponsiblePersonPtr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponsiblePersonPtr */
let _cached_encoder_for_ResponsiblePersonPtr: $.ASN1Encoder<ResponsiblePersonPtr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponsiblePersonPtr */

/* START_OF_SYMBOL_DEFINITION _encode_ResponsiblePersonPtr */
/**
 * @summary Encodes a(n) ResponsiblePersonPtr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponsiblePersonPtr, encoded as an ASN.1 Element.
 */
export function _encode_ResponsiblePersonPtr(
    value: ResponsiblePersonPtr,
    elGetter: $.ASN1Encoder<ResponsiblePersonPtr>
) {
    if (!_cached_encoder_for_ResponsiblePersonPtr) {
        _cached_encoder_for_ResponsiblePersonPtr = $._encode_choice<ResponsiblePersonPtr>(
            {
                null_: $._encodeNull,
                objectInstance: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ResponsiblePersonPtr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResponsiblePersonPtr */

/* eslint-enable */

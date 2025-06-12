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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.js';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.js';

/* START_OF_SYMBOL_DEFINITION HandOffPersonPtr */
/**
 * @summary HandOffPersonPtr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HandOffPersonPtr  ::=  CHOICE {null    NULL,
 *                              person  ObjectInstance,
 *                              ...
 * }
 * ```
 */
export type HandOffPersonPtr =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { person: ObjectInstance } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION HandOffPersonPtr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HandOffPersonPtr */
let _cached_decoder_for_HandOffPersonPtr: $.ASN1Decoder<HandOffPersonPtr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HandOffPersonPtr */

/* START_OF_SYMBOL_DEFINITION _decode_HandOffPersonPtr */
/**
 * @summary Decodes an ASN.1 element into a(n) HandOffPersonPtr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandOffPersonPtr} The decoded data structure.
 */
export function _decode_HandOffPersonPtr(el: _Element) {
    if (!_cached_decoder_for_HandOffPersonPtr) {
        _cached_decoder_for_HandOffPersonPtr = $._decode_extensible_choice<HandOffPersonPtr>(
            {
                'UNIVERSAL 5': ['null_', $._decodeNull],
                'CONTEXT 2': ['person', _decode_ObjectInstance],
                'CONTEXT 3': ['person', _decode_ObjectInstance],
                'CONTEXT 4': ['person', _decode_ObjectInstance],
            }
        );
    }
    return _cached_decoder_for_HandOffPersonPtr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HandOffPersonPtr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HandOffPersonPtr */
let _cached_encoder_for_HandOffPersonPtr: $.ASN1Encoder<HandOffPersonPtr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HandOffPersonPtr */

/* START_OF_SYMBOL_DEFINITION _encode_HandOffPersonPtr */
/**
 * @summary Encodes a(n) HandOffPersonPtr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandOffPersonPtr, encoded as an ASN.1 Element.
 */
export function _encode_HandOffPersonPtr(
    value: HandOffPersonPtr,
    elGetter: $.ASN1Encoder<HandOffPersonPtr>
) {
    if (!_cached_encoder_for_HandOffPersonPtr) {
        _cached_encoder_for_HandOffPersonPtr = $._encode_choice<HandOffPersonPtr>(
            {
                null_: $._encodeNull,
                person: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_HandOffPersonPtr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HandOffPersonPtr */

/* eslint-enable */

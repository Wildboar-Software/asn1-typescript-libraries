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

/* START_OF_SYMBOL_DEFINITION OptionalObject */
/**
 * @summary OptionalObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OptionalObject  ::=  CHOICE {noObject  NULL,
 *                            object    ObjectInstance
 * }
 * ```
 */
export type OptionalObject =
    | { noObject: NULL } /* CHOICE_ALT_ROOT */
    | { object: ObjectInstance } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION OptionalObject */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OptionalObject */
let _cached_decoder_for_OptionalObject: $.ASN1Decoder<OptionalObject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OptionalObject */

/* START_OF_SYMBOL_DEFINITION _decode_OptionalObject */
/**
 * @summary Decodes an ASN.1 element into a(n) OptionalObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OptionalObject} The decoded data structure.
 */
export function _decode_OptionalObject(el: _Element) {
    if (!_cached_decoder_for_OptionalObject) {
        _cached_decoder_for_OptionalObject = $._decode_inextensible_choice<OptionalObject>(
            {
                'UNIVERSAL 5': ['noObject', $._decodeNull],
                'CONTEXT 2': ['object', _decode_ObjectInstance],
                'CONTEXT 3': ['object', _decode_ObjectInstance],
                'CONTEXT 4': ['object', _decode_ObjectInstance],
            }
        );
    }
    return _cached_decoder_for_OptionalObject(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OptionalObject */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OptionalObject */
let _cached_encoder_for_OptionalObject: $.ASN1Encoder<OptionalObject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OptionalObject */

/* START_OF_SYMBOL_DEFINITION _encode_OptionalObject */
/**
 * @summary Encodes a(n) OptionalObject into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OptionalObject, encoded as an ASN.1 Element.
 */
export function _encode_OptionalObject(
    value: OptionalObject,
    elGetter: $.ASN1Encoder<OptionalObject>
) {
    if (!_cached_encoder_for_OptionalObject) {
        _cached_encoder_for_OptionalObject = $._encode_choice<OptionalObject>(
            {
                noObject: $._encodeNull,
                object: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_OptionalObject(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OptionalObject */

/* eslint-enable */

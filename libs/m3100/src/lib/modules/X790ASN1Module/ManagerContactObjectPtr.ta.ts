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

/* START_OF_SYMBOL_DEFINITION ManagerContactObjectPtr */
/**
 * @summary ManagerContactObjectPtr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManagerContactObjectPtr  ::=  CHOICE {null     NULL,
 *                                     contact  ObjectInstance,
 *                                     ...
 * }
 * ```
 */
export type ManagerContactObjectPtr =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { contact: ObjectInstance } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ManagerContactObjectPtr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagerContactObjectPtr */
let _cached_decoder_for_ManagerContactObjectPtr: $.ASN1Decoder<ManagerContactObjectPtr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagerContactObjectPtr */

/* START_OF_SYMBOL_DEFINITION _decode_ManagerContactObjectPtr */
/**
 * @summary Decodes an ASN.1 element into a(n) ManagerContactObjectPtr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManagerContactObjectPtr} The decoded data structure.
 */
export function _decode_ManagerContactObjectPtr(el: _Element) {
    if (!_cached_decoder_for_ManagerContactObjectPtr) {
        _cached_decoder_for_ManagerContactObjectPtr = $._decode_extensible_choice<ManagerContactObjectPtr>(
            {
                'UNIVERSAL 5': ['null_', $._decodeNull],
                'CONTEXT 2': ['contact', _decode_ObjectInstance],
                'CONTEXT 3': ['contact', _decode_ObjectInstance],
                'CONTEXT 4': ['contact', _decode_ObjectInstance],
            }
        );
    }
    return _cached_decoder_for_ManagerContactObjectPtr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ManagerContactObjectPtr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagerContactObjectPtr */
let _cached_encoder_for_ManagerContactObjectPtr: $.ASN1Encoder<ManagerContactObjectPtr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagerContactObjectPtr */

/* START_OF_SYMBOL_DEFINITION _encode_ManagerContactObjectPtr */
/**
 * @summary Encodes a(n) ManagerContactObjectPtr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagerContactObjectPtr, encoded as an ASN.1 Element.
 */
export function _encode_ManagerContactObjectPtr(
    value: ManagerContactObjectPtr,
    elGetter: $.ASN1Encoder<ManagerContactObjectPtr>
) {
    if (!_cached_encoder_for_ManagerContactObjectPtr) {
        _cached_encoder_for_ManagerContactObjectPtr = $._encode_choice<ManagerContactObjectPtr>(
            {
                null_: $._encodeNull,
                contact: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ManagerContactObjectPtr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ManagerContactObjectPtr */

/* eslint-enable */

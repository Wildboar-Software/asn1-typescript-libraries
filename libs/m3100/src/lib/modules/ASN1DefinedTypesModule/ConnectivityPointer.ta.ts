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

/* START_OF_SYMBOL_DEFINITION ConnectivityPointer */
/**
 * @summary ConnectivityPointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectivityPointer  ::=  CHOICE {
 *   none          NULL,
 *   single        ObjectInstance,
 *   concatenated  SEQUENCE OF ObjectInstance
 * }
 * ```
 */
export type ConnectivityPointer =
    | { none: NULL } /* CHOICE_ALT_ROOT */
    | { single: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { concatenated: ObjectInstance[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ConnectivityPointer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectivityPointer */
let _cached_decoder_for_ConnectivityPointer: $.ASN1Decoder<ConnectivityPointer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectivityPointer */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectivityPointer */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectivityPointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectivityPointer} The decoded data structure.
 */
export function _decode_ConnectivityPointer(el: _Element) {
    if (!_cached_decoder_for_ConnectivityPointer) {
        _cached_decoder_for_ConnectivityPointer = $._decode_inextensible_choice<ConnectivityPointer>(
            {
                'UNIVERSAL 5': ['none', $._decodeNull],
                'CONTEXT 2': ['single', _decode_ObjectInstance],
                'CONTEXT 3': ['single', _decode_ObjectInstance],
                'CONTEXT 4': ['single', _decode_ObjectInstance],
                'UNIVERSAL 16': [
                    'concatenated',
                    $._decodeSequenceOf<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ConnectivityPointer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectivityPointer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectivityPointer */
let _cached_encoder_for_ConnectivityPointer: $.ASN1Encoder<ConnectivityPointer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectivityPointer */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectivityPointer */
/**
 * @summary Encodes a(n) ConnectivityPointer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectivityPointer, encoded as an ASN.1 Element.
 */
export function _encode_ConnectivityPointer(
    value: ConnectivityPointer,
    elGetter: $.ASN1Encoder<ConnectivityPointer>
) {
    if (!_cached_encoder_for_ConnectivityPointer) {
        _cached_encoder_for_ConnectivityPointer = $._encode_choice<ConnectivityPointer>(
            {
                none: $._encodeNull,
                single: _encode_ObjectInstance,
                concatenated: $._encodeSequenceOf<ObjectInstance>(
                    () => _encode_ObjectInstance,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ConnectivityPointer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectivityPointer */

/* eslint-enable */

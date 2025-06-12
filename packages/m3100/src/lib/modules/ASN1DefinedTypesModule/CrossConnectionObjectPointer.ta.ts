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
import {
    MultipleConnections,
    _decode_MultipleConnections,
    _encode_MultipleConnections,
} from '../ASN1DefinedTypesModule/MultipleConnections.ta.js';
export {
    MultipleConnections,
    _decode_MultipleConnections,
    _encode_MultipleConnections,
} from '../ASN1DefinedTypesModule/MultipleConnections.ta.js';

/* START_OF_SYMBOL_DEFINITION CrossConnectionObjectPointer */
/**
 * @summary CrossConnectionObjectPointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CrossConnectionObjectPointer  ::=  CHOICE {
 *   notConnected         [0]  ObjectInstance, -- Fabric object
 *   connected            [1]  ObjectInstance, -- Cross-connection object
 *   multipleConnections  MultipleConnections
 * }
 * ```
 */
export type CrossConnectionObjectPointer =
    | { notConnected: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { connected: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { multipleConnections: MultipleConnections } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION CrossConnectionObjectPointer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CrossConnectionObjectPointer */
let _cached_decoder_for_CrossConnectionObjectPointer: $.ASN1Decoder<CrossConnectionObjectPointer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CrossConnectionObjectPointer */

/* START_OF_SYMBOL_DEFINITION _decode_CrossConnectionObjectPointer */
/**
 * @summary Decodes an ASN.1 element into a(n) CrossConnectionObjectPointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CrossConnectionObjectPointer} The decoded data structure.
 */
export function _decode_CrossConnectionObjectPointer(el: _Element) {
    if (!_cached_decoder_for_CrossConnectionObjectPointer) {
        _cached_decoder_for_CrossConnectionObjectPointer = $._decode_inextensible_choice<CrossConnectionObjectPointer>(
            {
                'CONTEXT 0': [
                    'notConnected',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'CONTEXT 1': [
                    'connected',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'UNIVERSAL 17': [
                    'multipleConnections',
                    _decode_MultipleConnections,
                ],
            }
        );
    }
    return _cached_decoder_for_CrossConnectionObjectPointer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CrossConnectionObjectPointer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CrossConnectionObjectPointer */
let _cached_encoder_for_CrossConnectionObjectPointer: $.ASN1Encoder<CrossConnectionObjectPointer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CrossConnectionObjectPointer */

/* START_OF_SYMBOL_DEFINITION _encode_CrossConnectionObjectPointer */
/**
 * @summary Encodes a(n) CrossConnectionObjectPointer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CrossConnectionObjectPointer, encoded as an ASN.1 Element.
 */
export function _encode_CrossConnectionObjectPointer(
    value: CrossConnectionObjectPointer,
    elGetter: $.ASN1Encoder<CrossConnectionObjectPointer>
) {
    if (!_cached_encoder_for_CrossConnectionObjectPointer) {
        _cached_encoder_for_CrossConnectionObjectPointer = $._encode_choice<CrossConnectionObjectPointer>(
            {
                notConnected: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                connected: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                multipleConnections: _encode_MultipleConnections,
            },
            $.BER
        );
    }
    return _cached_encoder_for_CrossConnectionObjectPointer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CrossConnectionObjectPointer */

/* eslint-enable */

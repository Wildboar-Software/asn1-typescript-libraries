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

/* START_OF_SYMBOL_DEFINITION ResourcePointer */
/**
 * @summary ResourcePointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResourcePointer  ::=  CHOICE {
 *   null             NULL,
 *   objectInstances  SEQUENCE OF ObjectInstance
 * }
 * ```
 */
export type ResourcePointer =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { objectInstances: ObjectInstance[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ResourcePointer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResourcePointer */
let _cached_decoder_for_ResourcePointer: $.ASN1Decoder<ResourcePointer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResourcePointer */

/* START_OF_SYMBOL_DEFINITION _decode_ResourcePointer */
/**
 * @summary Decodes an ASN.1 element into a(n) ResourcePointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResourcePointer} The decoded data structure.
 */
export function _decode_ResourcePointer(el: _Element) {
    if (!_cached_decoder_for_ResourcePointer) {
        _cached_decoder_for_ResourcePointer = $._decode_inextensible_choice<ResourcePointer>(
            {
                'UNIVERSAL 5': ['null_', $._decodeNull],
                'UNIVERSAL 16': [
                    'objectInstances',
                    $._decodeSequenceOf<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ResourcePointer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResourcePointer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResourcePointer */
let _cached_encoder_for_ResourcePointer: $.ASN1Encoder<ResourcePointer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResourcePointer */

/* START_OF_SYMBOL_DEFINITION _encode_ResourcePointer */
/**
 * @summary Encodes a(n) ResourcePointer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourcePointer, encoded as an ASN.1 Element.
 */
export function _encode_ResourcePointer(
    value: ResourcePointer,
    elGetter: $.ASN1Encoder<ResourcePointer>
) {
    if (!_cached_encoder_for_ResourcePointer) {
        _cached_encoder_for_ResourcePointer = $._encode_choice<ResourcePointer>(
            {
                null_: $._encodeNull,
                objectInstances: $._encodeSequenceOf<ObjectInstance>(
                    () => _encode_ObjectInstance,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ResourcePointer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResourcePointer */

/* eslint-enable */

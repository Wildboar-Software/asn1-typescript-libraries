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
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/* START_OF_SYMBOL_DEFINITION MultipleConnections_Item */
/**
 * @summary MultipleConnections_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MultipleConnections-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type MultipleConnections_Item =
    | { downstreamNotConnected: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { downstreamConnected: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { upstreamNotConnected: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { upstreamConnected: ObjectInstance } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION MultipleConnections_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MultipleConnections_Item */
let _cached_decoder_for_MultipleConnections_Item: $.ASN1Decoder<MultipleConnections_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MultipleConnections_Item */

/* START_OF_SYMBOL_DEFINITION _decode_MultipleConnections_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) MultipleConnections_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleConnections_Item} The decoded data structure.
 */
export function _decode_MultipleConnections_Item(el: _Element) {
    if (!_cached_decoder_for_MultipleConnections_Item) {
        _cached_decoder_for_MultipleConnections_Item = $._decode_inextensible_choice<MultipleConnections_Item>(
            {
                'CONTEXT 0': [
                    'downstreamNotConnected',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'CONTEXT 1': [
                    'downstreamConnected',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'CONTEXT 2': [
                    'upstreamNotConnected',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'CONTEXT 3': [
                    'upstreamConnected',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_MultipleConnections_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MultipleConnections_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MultipleConnections_Item */
let _cached_encoder_for_MultipleConnections_Item: $.ASN1Encoder<MultipleConnections_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MultipleConnections_Item */

/* START_OF_SYMBOL_DEFINITION _encode_MultipleConnections_Item */
/**
 * @summary Encodes a(n) MultipleConnections_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleConnections_Item, encoded as an ASN.1 Element.
 */
export function _encode_MultipleConnections_Item(
    value: MultipleConnections_Item,
    elGetter: $.ASN1Encoder<MultipleConnections_Item>
) {
    if (!_cached_encoder_for_MultipleConnections_Item) {
        _cached_encoder_for_MultipleConnections_Item = $._encode_choice<MultipleConnections_Item>(
            {
                downstreamNotConnected: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                downstreamConnected: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                upstreamNotConnected: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                upstreamConnected: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_MultipleConnections_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MultipleConnections_Item */

/* eslint-enable */

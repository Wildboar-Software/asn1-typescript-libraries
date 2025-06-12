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
    Access_Control_Element,
    _decode_Access_Control_Element,
    _encode_Access_Control_Element,
} from '../IPMSFileTransferBodyPartType/Access-Control-Element.ta.mjs';
export {
    Access_Control_Element,
    _decode_Access_Control_Element,
    _encode_Access_Control_Element,
} from '../IPMSFileTransferBodyPartType/Access-Control-Element.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Access_Control_Attribute */
/**
 * @summary Access_Control_Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Access-Control-Attribute  ::=  CHOICE {
 *   no-value-available  [0]  NULL,
 *   -- Indicates partial support of this attribute.
 *   actual-values       [1]  SET OF Access-Control-Element
 * }
 * ```
 */
export type Access_Control_Attribute =
    | { no_value_available: NULL } /* CHOICE_ALT_ROOT */
    | { actual_values: Access_Control_Element[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Access_Control_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Access_Control_Attribute */
let _cached_decoder_for_Access_Control_Attribute: $.ASN1Decoder<Access_Control_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Access_Control_Attribute */

/* START_OF_SYMBOL_DEFINITION _decode_Access_Control_Attribute */
/**
 * @summary Decodes an ASN.1 element into a(n) Access_Control_Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Access_Control_Attribute} The decoded data structure.
 */
export function _decode_Access_Control_Attribute(el: _Element) {
    if (!_cached_decoder_for_Access_Control_Attribute) {
        _cached_decoder_for_Access_Control_Attribute = $._decode_inextensible_choice<Access_Control_Attribute>(
            {
                'CONTEXT 0': [
                    'no_value_available',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'actual_values',
                    $._decode_implicit<Access_Control_Element[]>(() =>
                        $._decodeSetOf<Access_Control_Element>(
                            () => _decode_Access_Control_Element
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_Access_Control_Attribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Access_Control_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Access_Control_Attribute */
let _cached_encoder_for_Access_Control_Attribute: $.ASN1Encoder<Access_Control_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Access_Control_Attribute */

/* START_OF_SYMBOL_DEFINITION _encode_Access_Control_Attribute */
/**
 * @summary Encodes a(n) Access_Control_Attribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Access_Control_Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Access_Control_Attribute(
    value: Access_Control_Attribute,
    elGetter: $.ASN1Encoder<Access_Control_Attribute>
) {
    if (!_cached_encoder_for_Access_Control_Attribute) {
        _cached_encoder_for_Access_Control_Attribute = $._encode_choice<Access_Control_Attribute>(
            {
                no_value_available: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                actual_values: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSetOf<Access_Control_Element>(
                            () => _encode_Access_Control_Element,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Access_Control_Attribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Access_Control_Attribute */

/* eslint-enable */

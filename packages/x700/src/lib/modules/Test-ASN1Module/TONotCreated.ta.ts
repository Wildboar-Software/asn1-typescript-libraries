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
    TONotCreated_reason,
    _enum_for_TONotCreated_reason,
    TONotCreated_reason_invalidTOclass /* IMPORTED_LONG_ENUMERATION_ITEM */,
    invalidTOclass /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TONotCreated_reason_duplicateTOInstance /* IMPORTED_LONG_ENUMERATION_ITEM */,
    duplicateTOInstance /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TONotCreated_reason_invalidMORTClass /* IMPORTED_LONG_ENUMERATION_ITEM */,
    invalidMORTClass /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TONotCreated_reason_invalidAssociatedObjectClass /* IMPORTED_LONG_ENUMERATION_ITEM */,
    invalidAssociatedObjectClass /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TONotCreated_reason_mORTNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    mORTNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TONotCreated_reason_associatedObjectNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    associatedObjectNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_TONotCreated_reason,
    _encode_TONotCreated_reason,
} from '../Test-ASN1Module/TONotCreated-reason.ta.js';
export {
    TONotCreated_reason,
    _enum_for_TONotCreated_reason,
    TONotCreated_reason_invalidTOclass /* IMPORTED_LONG_ENUMERATION_ITEM */,
    invalidTOclass /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TONotCreated_reason_duplicateTOInstance /* IMPORTED_LONG_ENUMERATION_ITEM */,
    duplicateTOInstance /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TONotCreated_reason_invalidMORTClass /* IMPORTED_LONG_ENUMERATION_ITEM */,
    invalidMORTClass /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TONotCreated_reason_invalidAssociatedObjectClass /* IMPORTED_LONG_ENUMERATION_ITEM */,
    invalidAssociatedObjectClass /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TONotCreated_reason_mORTNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    mORTNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TONotCreated_reason_associatedObjectNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    associatedObjectNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_TONotCreated_reason,
    _encode_TONotCreated_reason,
} from '../Test-ASN1Module/TONotCreated-reason.ta.js';
import {
    AttributeList,
    _decode_AttributeList,
    _encode_AttributeList,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AttributeList.ta.js';
export {
    AttributeList,
    _decode_AttributeList,
    _encode_AttributeList,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AttributeList.ta.js';

/* START_OF_SYMBOL_DEFINITION TONotCreated */
/**
 * @summary TONotCreated
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TONotCreated  ::=  CHOICE {
 *   reason
 *     ENUMERATED {invalidTOclass(0), duplicateTOInstance(1), invalidMORTClass(2),
 *                 invalidAssociatedObjectClass(3), mORTNotAvailable(4),
 *                 associatedObjectNotAvailable(5)},
 *   inappropriateAttributeValue  AttributeList
 * }
 * ```
 */
export type TONotCreated =
    | { reason: TONotCreated_reason } /* CHOICE_ALT_ROOT */
    | { inappropriateAttributeValue: AttributeList } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TONotCreated */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TONotCreated */
let _cached_decoder_for_TONotCreated: $.ASN1Decoder<TONotCreated> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TONotCreated */

/* START_OF_SYMBOL_DEFINITION _decode_TONotCreated */
/**
 * @summary Decodes an ASN.1 element into a(n) TONotCreated
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TONotCreated} The decoded data structure.
 */
export function _decode_TONotCreated(el: _Element) {
    if (!_cached_decoder_for_TONotCreated) {
        _cached_decoder_for_TONotCreated = $._decode_inextensible_choice<TONotCreated>(
            {
                'UNIVERSAL 10': ['reason', _decode_TONotCreated_reason],
                'UNIVERSAL 17': [
                    'inappropriateAttributeValue',
                    _decode_AttributeList,
                ],
            }
        );
    }
    return _cached_decoder_for_TONotCreated(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TONotCreated */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TONotCreated */
let _cached_encoder_for_TONotCreated: $.ASN1Encoder<TONotCreated> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TONotCreated */

/* START_OF_SYMBOL_DEFINITION _encode_TONotCreated */
/**
 * @summary Encodes a(n) TONotCreated into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TONotCreated, encoded as an ASN.1 Element.
 */
export function _encode_TONotCreated(
    value: TONotCreated,
    elGetter: $.ASN1Encoder<TONotCreated>
) {
    if (!_cached_encoder_for_TONotCreated) {
        _cached_encoder_for_TONotCreated = $._encode_choice<TONotCreated>(
            {
                reason: _encode_TONotCreated_reason,
                inappropriateAttributeValue: _encode_AttributeList,
            },
            $.BER
        );
    }
    return _cached_encoder_for_TONotCreated(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TONotCreated */

/* eslint-enable */

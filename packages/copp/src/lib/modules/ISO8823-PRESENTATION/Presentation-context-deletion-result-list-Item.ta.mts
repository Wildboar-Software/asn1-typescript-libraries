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

/* START_OF_SYMBOL_DEFINITION Presentation_context_deletion_result_list_Item */
/**
 * @summary Presentation_context_deletion_result_list_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-context-deletion-result-list-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Presentation_context_deletion_result_list_Item = INTEGER;
/* END_OF_SYMBOL_DEFINITION Presentation_context_deletion_result_list_Item */

/* START_OF_SYMBOL_DEFINITION Presentation_context_deletion_result_list_Item_acceptance */
/**
 * @summary Presentation_context_deletion_result_list_Item_acceptance
 * @constant
 * @type {number}
 */
export const Presentation_context_deletion_result_list_Item_acceptance: Presentation_context_deletion_result_list_Item = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Presentation_context_deletion_result_list_Item_acceptance */

/* START_OF_SYMBOL_DEFINITION acceptance */
/**
 * @summary Presentation_context_deletion_result_list_Item_acceptance
 * @constant
 * @type {number}
 */
export const acceptance: Presentation_context_deletion_result_list_Item = Presentation_context_deletion_result_list_Item_acceptance; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION acceptance */

/* START_OF_SYMBOL_DEFINITION Presentation_context_deletion_result_list_Item_user_rejection */
/**
 * @summary Presentation_context_deletion_result_list_Item_user_rejection
 * @constant
 * @type {number}
 */
export const Presentation_context_deletion_result_list_Item_user_rejection: Presentation_context_deletion_result_list_Item = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Presentation_context_deletion_result_list_Item_user_rejection */

/* START_OF_SYMBOL_DEFINITION user_rejection */
/**
 * @summary Presentation_context_deletion_result_list_Item_user_rejection
 * @constant
 * @type {number}
 */
export const user_rejection: Presentation_context_deletion_result_list_Item = Presentation_context_deletion_result_list_Item_user_rejection; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION user_rejection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_context_deletion_result_list_Item */
let _cached_decoder_for_Presentation_context_deletion_result_list_Item: $.ASN1Decoder<Presentation_context_deletion_result_list_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_context_deletion_result_list_Item */

/* START_OF_SYMBOL_DEFINITION _decode_Presentation_context_deletion_result_list_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) Presentation_context_deletion_result_list_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Presentation_context_deletion_result_list_Item} The decoded data structure.
 */
export function _decode_Presentation_context_deletion_result_list_Item(
    el: _Element
) {
    if (!_cached_decoder_for_Presentation_context_deletion_result_list_Item) {
        _cached_decoder_for_Presentation_context_deletion_result_list_Item =
            $._decodeInteger;
    }
    return _cached_decoder_for_Presentation_context_deletion_result_list_Item(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_Presentation_context_deletion_result_list_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_context_deletion_result_list_Item */
let _cached_encoder_for_Presentation_context_deletion_result_list_Item: $.ASN1Encoder<Presentation_context_deletion_result_list_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_context_deletion_result_list_Item */

/* START_OF_SYMBOL_DEFINITION _encode_Presentation_context_deletion_result_list_Item */
/**
 * @summary Encodes a(n) Presentation_context_deletion_result_list_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Presentation_context_deletion_result_list_Item, encoded as an ASN.1 Element.
 */
export function _encode_Presentation_context_deletion_result_list_Item(
    value: Presentation_context_deletion_result_list_Item,
    elGetter: $.ASN1Encoder<Presentation_context_deletion_result_list_Item>
) {
    if (!_cached_encoder_for_Presentation_context_deletion_result_list_Item) {
        _cached_encoder_for_Presentation_context_deletion_result_list_Item =
            $._encodeInteger;
    }
    return _cached_encoder_for_Presentation_context_deletion_result_list_Item(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_Presentation_context_deletion_result_list_Item */

/* eslint-enable */

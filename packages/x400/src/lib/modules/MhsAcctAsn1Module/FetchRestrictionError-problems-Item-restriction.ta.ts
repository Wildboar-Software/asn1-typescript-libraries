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
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from '../MTSAbstractService/ContentType.ta.js';
export {
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from '../MTSAbstractService/ContentType.ta.js';
import {
    MS_EITs,
    _decode_MS_EITs,
    _encode_MS_EITs,
} from '../MSAbstractService/MS-EITs.ta.js';
export {
    MS_EITs,
    _decode_MS_EITs,
    _encode_MS_EITs,
} from '../MSAbstractService/MS-EITs.ta.js';
import {
    ContentLength,
    _decode_ContentLength,
    _encode_ContentLength,
} from '../MTSAbstractService/ContentLength.ta.js';
export {
    ContentLength,
    _decode_ContentLength,
    _encode_ContentLength,
} from '../MTSAbstractService/ContentLength.ta.js';

/* START_OF_SYMBOL_DEFINITION FetchRestrictionError_problems_Item_restriction */
/**
 * @summary FetchRestrictionError_problems_Item_restriction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FetchRestrictionError-problems-Item-restriction ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type FetchRestrictionError_problems_Item_restriction =
    | { content_type: ContentType } /* CHOICE_ALT_ROOT */
    | { eit: MS_EITs } /* CHOICE_ALT_ROOT */
    | { content_length: ContentLength } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION FetchRestrictionError_problems_Item_restriction */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FetchRestrictionError_problems_Item_restriction */
let _cached_decoder_for_FetchRestrictionError_problems_Item_restriction: $.ASN1Decoder<FetchRestrictionError_problems_Item_restriction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FetchRestrictionError_problems_Item_restriction */

/* START_OF_SYMBOL_DEFINITION _decode_FetchRestrictionError_problems_Item_restriction */
/**
 * @summary Decodes an ASN.1 element into a(n) FetchRestrictionError_problems_Item_restriction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FetchRestrictionError_problems_Item_restriction} The decoded data structure.
 */
export function _decode_FetchRestrictionError_problems_Item_restriction(
    el: _Element
) {
    if (!_cached_decoder_for_FetchRestrictionError_problems_Item_restriction) {
        _cached_decoder_for_FetchRestrictionError_problems_Item_restriction = $._decode_inextensible_choice<FetchRestrictionError_problems_Item_restriction>(
            {
                'CONTEXT 0': [
                    'content_type',
                    $._decode_explicit<ContentType>(() => _decode_ContentType),
                ],
                'CONTEXT 1': [
                    'eit',
                    $._decode_implicit<MS_EITs>(() => _decode_MS_EITs),
                ],
                'CONTEXT 2': [
                    'content_length',
                    $._decode_implicit<ContentLength>(
                        () => _decode_ContentLength
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_FetchRestrictionError_problems_Item_restriction(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_FetchRestrictionError_problems_Item_restriction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FetchRestrictionError_problems_Item_restriction */
let _cached_encoder_for_FetchRestrictionError_problems_Item_restriction: $.ASN1Encoder<FetchRestrictionError_problems_Item_restriction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FetchRestrictionError_problems_Item_restriction */

/* START_OF_SYMBOL_DEFINITION _encode_FetchRestrictionError_problems_Item_restriction */
/**
 * @summary Encodes a(n) FetchRestrictionError_problems_Item_restriction into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FetchRestrictionError_problems_Item_restriction, encoded as an ASN.1 Element.
 */
export function _encode_FetchRestrictionError_problems_Item_restriction(
    value: FetchRestrictionError_problems_Item_restriction,
    elGetter: $.ASN1Encoder<FetchRestrictionError_problems_Item_restriction>
) {
    if (!_cached_encoder_for_FetchRestrictionError_problems_Item_restriction) {
        _cached_encoder_for_FetchRestrictionError_problems_Item_restriction = $._encode_choice<FetchRestrictionError_problems_Item_restriction>(
            {
                content_type: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ContentType,
                    $.BER
                ),
                eit: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_MS_EITs,
                    $.BER
                ),
                content_length: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_ContentLength,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_FetchRestrictionError_problems_Item_restriction(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_FetchRestrictionError_problems_Item_restriction */

/* eslint-enable */

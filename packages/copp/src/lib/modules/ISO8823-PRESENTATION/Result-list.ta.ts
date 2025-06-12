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
    Result_list_Item,
    _decode_Result_list_Item,
    _encode_Result_list_Item,
} from '../ISO8823-PRESENTATION/Result-list-Item.ta.js';
export {
    Result_list_Item,
    _decode_Result_list_Item,
    _encode_Result_list_Item,
} from '../ISO8823-PRESENTATION/Result-list-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION Result_list */
/**
 * @summary Result_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Result-list  ::=
 *   SEQUENCE SIZE (0..7, ..., 8..MAX) OF
 *     SEQUENCE {result                [0] IMPLICIT Result,
 *               transfer-syntax-name  [1] IMPLICIT Transfer-syntax-name OPTIONAL,
 *               provider-reason
 *                 [2] IMPLICIT INTEGER {reason-not-specified(0),
 *                                       abstract-syntax-not-supported(1),
 *                                       proposed-transfer-syntaxes-not-supported(2),
 *                                       local-limit-on-DCS-exceeded(3)} OPTIONAL
 *     }
 * ```
 */
export type Result_list = Result_list_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Result_list */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Result_list */
let _cached_decoder_for_Result_list: $.ASN1Decoder<Result_list> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Result_list */

/* START_OF_SYMBOL_DEFINITION _decode_Result_list */
/**
 * @summary Decodes an ASN.1 element into a(n) Result_list
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Result_list} The decoded data structure.
 */
export function _decode_Result_list(el: _Element) {
    if (!_cached_decoder_for_Result_list) {
        _cached_decoder_for_Result_list = $._decodeSequenceOf<Result_list_Item>(
            () => _decode_Result_list_Item
        );
    }
    return _cached_decoder_for_Result_list(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Result_list */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Result_list */
let _cached_encoder_for_Result_list: $.ASN1Encoder<Result_list> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Result_list */

/* START_OF_SYMBOL_DEFINITION _encode_Result_list */
/**
 * @summary Encodes a(n) Result_list into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Result_list, encoded as an ASN.1 Element.
 */
export function _encode_Result_list(
    value: Result_list,
    elGetter: $.ASN1Encoder<Result_list>
) {
    if (!_cached_encoder_for_Result_list) {
        _cached_encoder_for_Result_list = $._encodeSequenceOf<Result_list_Item>(
            () => _encode_Result_list_Item,
            $.BER
        );
    }
    return _cached_encoder_for_Result_list(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Result_list */

/* eslint-enable */

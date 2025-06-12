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
    OperationResult_Item,
    _decode_OperationResult_Item,
    _encode_OperationResult_Item,
} from '../Schedulerev1-ASN1Module/OperationResult-Item.ta.mjs';
export {
    OperationResult_Item,
    _decode_OperationResult_Item,
    _encode_OperationResult_Item,
} from '../Schedulerev1-ASN1Module/OperationResult-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION OperationResult */
/**
 * @summary OperationResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationResult  ::=
 *   SET OF
 *     CHOICE {getResult     [0] IMPLICIT GetResult,
 *             getListError  [1] IMPLICIT GetListError,
 *             setResult     [2] IMPLICIT SetResult,
 *             setListError  [3] IMPLICIT SetListError,
 *             actionResult  [4] IMPLICIT ActionResult,
 *             commonError   [5] IMPLICIT CommonError}
 * ```
 */
export type OperationResult = OperationResult_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION OperationResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationResult */
let _cached_decoder_for_OperationResult: $.ASN1Decoder<OperationResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationResult */

/* START_OF_SYMBOL_DEFINITION _decode_OperationResult */
/**
 * @summary Decodes an ASN.1 element into a(n) OperationResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationResult} The decoded data structure.
 */
export function _decode_OperationResult(el: _Element) {
    if (!_cached_decoder_for_OperationResult) {
        _cached_decoder_for_OperationResult = $._decodeSetOf<OperationResult_Item>(
            () => _decode_OperationResult_Item
        );
    }
    return _cached_decoder_for_OperationResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OperationResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationResult */
let _cached_encoder_for_OperationResult: $.ASN1Encoder<OperationResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationResult */

/* START_OF_SYMBOL_DEFINITION _encode_OperationResult */
/**
 * @summary Encodes a(n) OperationResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationResult, encoded as an ASN.1 Element.
 */
export function _encode_OperationResult(
    value: OperationResult,
    elGetter: $.ASN1Encoder<OperationResult>
) {
    if (!_cached_encoder_for_OperationResult) {
        _cached_encoder_for_OperationResult = $._encodeSetOf<OperationResult_Item>(
            () => _encode_OperationResult_Item,
            $.BER
        );
    }
    return _cached_encoder_for_OperationResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OperationResult */

/* eslint-enable */

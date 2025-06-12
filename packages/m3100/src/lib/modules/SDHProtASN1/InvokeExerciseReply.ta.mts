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
    InvokeExerciseReply_Item,
    _decode_InvokeExerciseReply_Item,
    _encode_InvokeExerciseReply_Item,
} from '../SDHProtASN1/InvokeExerciseReply-Item.ta.mjs';
export {
    InvokeExerciseReply_Item,
    _decode_InvokeExerciseReply_Item,
    _encode_InvokeExerciseReply_Item,
} from '../SDHProtASN1/InvokeExerciseReply-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION InvokeExerciseReply */
/**
 * @summary InvokeExerciseReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeExerciseReply  ::=
 *   SET OF
 *     SEQUENCE {protectionUnit  RelativeDistinguishedName,
 *               result          LastAttemptResult}
 * ```
 */
export type InvokeExerciseReply = InvokeExerciseReply_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION InvokeExerciseReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeExerciseReply */
let _cached_decoder_for_InvokeExerciseReply: $.ASN1Decoder<InvokeExerciseReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeExerciseReply */

/* START_OF_SYMBOL_DEFINITION _decode_InvokeExerciseReply */
/**
 * @summary Decodes an ASN.1 element into a(n) InvokeExerciseReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeExerciseReply} The decoded data structure.
 */
export function _decode_InvokeExerciseReply(el: _Element) {
    if (!_cached_decoder_for_InvokeExerciseReply) {
        _cached_decoder_for_InvokeExerciseReply = $._decodeSetOf<InvokeExerciseReply_Item>(
            () => _decode_InvokeExerciseReply_Item
        );
    }
    return _cached_decoder_for_InvokeExerciseReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InvokeExerciseReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeExerciseReply */
let _cached_encoder_for_InvokeExerciseReply: $.ASN1Encoder<InvokeExerciseReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeExerciseReply */

/* START_OF_SYMBOL_DEFINITION _encode_InvokeExerciseReply */
/**
 * @summary Encodes a(n) InvokeExerciseReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeExerciseReply, encoded as an ASN.1 Element.
 */
export function _encode_InvokeExerciseReply(
    value: InvokeExerciseReply,
    elGetter: $.ASN1Encoder<InvokeExerciseReply>
) {
    if (!_cached_encoder_for_InvokeExerciseReply) {
        _cached_encoder_for_InvokeExerciseReply = $._encodeSetOf<InvokeExerciseReply_Item>(
            () => _encode_InvokeExerciseReply_Item,
            $.BER
        );
    }
    return _cached_encoder_for_InvokeExerciseReply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InvokeExerciseReply */

/* eslint-enable */

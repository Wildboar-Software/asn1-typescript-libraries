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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    AddTpsToGtpResult_Item,
    _decode_AddTpsToGtpResult_Item,
    _encode_AddTpsToGtpResult_Item,
} from '../ASN1DefinedTypesModule/AddTpsToGtpResult-Item.ta';
export {
    AddTpsToGtpResult_Item,
    _decode_AddTpsToGtpResult_Item,
    _encode_AddTpsToGtpResult_Item,
} from '../ASN1DefinedTypesModule/AddTpsToGtpResult-Item.ta';

/* START_OF_SYMBOL_DEFINITION AddTpsToGtpResult */
/**
 * @summary AddTpsToGtpResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddTpsToGtpResult  ::=
 *   SEQUENCE OF CHOICE {failed    [0]  Failed,
 *                       addedTps  [1]  AddedTps}
 * ```
 */
export type AddTpsToGtpResult = AddTpsToGtpResult_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AddTpsToGtpResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddTpsToGtpResult */
let _cached_decoder_for_AddTpsToGtpResult: $.ASN1Decoder<AddTpsToGtpResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddTpsToGtpResult */

/* START_OF_SYMBOL_DEFINITION _decode_AddTpsToGtpResult */
/**
 * @summary Decodes an ASN.1 element into a(n) AddTpsToGtpResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddTpsToGtpResult} The decoded data structure.
 */
export function _decode_AddTpsToGtpResult(el: _Element) {
    if (!_cached_decoder_for_AddTpsToGtpResult) {
        _cached_decoder_for_AddTpsToGtpResult = $._decodeSequenceOf<AddTpsToGtpResult_Item>(
            () => _decode_AddTpsToGtpResult_Item
        );
    }
    return _cached_decoder_for_AddTpsToGtpResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddTpsToGtpResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddTpsToGtpResult */
let _cached_encoder_for_AddTpsToGtpResult: $.ASN1Encoder<AddTpsToGtpResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddTpsToGtpResult */

/* START_OF_SYMBOL_DEFINITION _encode_AddTpsToGtpResult */
/**
 * @summary Encodes a(n) AddTpsToGtpResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddTpsToGtpResult, encoded as an ASN.1 Element.
 */
export function _encode_AddTpsToGtpResult(
    value: AddTpsToGtpResult,
    elGetter: $.ASN1Encoder<AddTpsToGtpResult>
) {
    if (!_cached_encoder_for_AddTpsToGtpResult) {
        _cached_encoder_for_AddTpsToGtpResult = $._encodeSequenceOf<AddTpsToGtpResult_Item>(
            () => _encode_AddTpsToGtpResult_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AddTpsToGtpResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddTpsToGtpResult */

/* eslint-enable */

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
    ScriptList,
    _decode_ScriptList,
    _encode_ScriptList,
} from '../CSModule/ScriptList.ta';
export {
    ScriptList,
    _decode_ScriptList,
    _encode_ScriptList,
} from '../CSModule/ScriptList.ta';

/* START_OF_SYMBOL_DEFINITION AvailableScriptList */
/**
 * @summary AvailableScriptList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AvailableScriptList  ::=  SET OF ScriptList
 * ```
 */
export type AvailableScriptList = ScriptList[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AvailableScriptList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AvailableScriptList */
let _cached_decoder_for_AvailableScriptList: $.ASN1Decoder<AvailableScriptList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AvailableScriptList */

/* START_OF_SYMBOL_DEFINITION _decode_AvailableScriptList */
/**
 * @summary Decodes an ASN.1 element into a(n) AvailableScriptList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AvailableScriptList} The decoded data structure.
 */
export function _decode_AvailableScriptList(el: _Element) {
    if (!_cached_decoder_for_AvailableScriptList) {
        _cached_decoder_for_AvailableScriptList = $._decodeSetOf<ScriptList>(
            () => _decode_ScriptList
        );
    }
    return _cached_decoder_for_AvailableScriptList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AvailableScriptList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AvailableScriptList */
let _cached_encoder_for_AvailableScriptList: $.ASN1Encoder<AvailableScriptList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AvailableScriptList */

/* START_OF_SYMBOL_DEFINITION _encode_AvailableScriptList */
/**
 * @summary Encodes a(n) AvailableScriptList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AvailableScriptList, encoded as an ASN.1 Element.
 */
export function _encode_AvailableScriptList(
    value: AvailableScriptList,
    elGetter: $.ASN1Encoder<AvailableScriptList>
) {
    if (!_cached_encoder_for_AvailableScriptList) {
        _cached_encoder_for_AvailableScriptList = $._encodeSetOf<ScriptList>(
            () => _encode_ScriptList,
            $.BER
        );
    }
    return _cached_encoder_for_AvailableScriptList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AvailableScriptList */

/* eslint-enable */

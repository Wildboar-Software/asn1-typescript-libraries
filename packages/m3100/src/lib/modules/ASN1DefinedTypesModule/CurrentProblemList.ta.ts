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
    CurrentProblem,
    _decode_CurrentProblem,
    _encode_CurrentProblem,
} from '../ASN1DefinedTypesModule/CurrentProblem.ta.js';
export {
    CurrentProblem,
    _decode_CurrentProblem,
    _encode_CurrentProblem,
} from '../ASN1DefinedTypesModule/CurrentProblem.ta.js';

/* START_OF_SYMBOL_DEFINITION CurrentProblemList */
/**
 * @summary CurrentProblemList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CurrentProblemList  ::=  SET OF CurrentProblem
 * ```
 */
export type CurrentProblemList = CurrentProblem[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION CurrentProblemList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CurrentProblemList */
let _cached_decoder_for_CurrentProblemList: $.ASN1Decoder<CurrentProblemList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CurrentProblemList */

/* START_OF_SYMBOL_DEFINITION _decode_CurrentProblemList */
/**
 * @summary Decodes an ASN.1 element into a(n) CurrentProblemList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CurrentProblemList} The decoded data structure.
 */
export function _decode_CurrentProblemList(el: _Element) {
    if (!_cached_decoder_for_CurrentProblemList) {
        _cached_decoder_for_CurrentProblemList = $._decodeSetOf<CurrentProblem>(
            () => _decode_CurrentProblem
        );
    }
    return _cached_decoder_for_CurrentProblemList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CurrentProblemList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CurrentProblemList */
let _cached_encoder_for_CurrentProblemList: $.ASN1Encoder<CurrentProblemList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CurrentProblemList */

/* START_OF_SYMBOL_DEFINITION _encode_CurrentProblemList */
/**
 * @summary Encodes a(n) CurrentProblemList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CurrentProblemList, encoded as an ASN.1 Element.
 */
export function _encode_CurrentProblemList(
    value: CurrentProblemList,
    elGetter: $.ASN1Encoder<CurrentProblemList>
) {
    if (!_cached_encoder_for_CurrentProblemList) {
        _cached_encoder_for_CurrentProblemList = $._encodeSetOf<CurrentProblem>(
            () => _encode_CurrentProblem,
            $.BER
        );
    }
    return _cached_encoder_for_CurrentProblemList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CurrentProblemList */

/* eslint-enable */

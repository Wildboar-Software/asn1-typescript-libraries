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
    ContentIntegrityCheck,
    _decode_ContentIntegrityCheck,
    _encode_ContentIntegrityCheck,
} from '../MTSAbstractService/ContentIntegrityCheck.ta';
export {
    ContentIntegrityCheck,
    _decode_ContentIntegrityCheck,
    _encode_ContentIntegrityCheck,
} from '../MTSAbstractService/ContentIntegrityCheck.ta';

/* START_OF_SYMBOL_DEFINITION OriginalContentIntegrityCheck */
/**
 * @summary OriginalContentIntegrityCheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginalContentIntegrityCheck  ::=  ContentIntegrityCheck
 * ```
 */
export type OriginalContentIntegrityCheck = ContentIntegrityCheck; // DefinedType
/* END_OF_SYMBOL_DEFINITION OriginalContentIntegrityCheck */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginalContentIntegrityCheck */
let _cached_decoder_for_OriginalContentIntegrityCheck: $.ASN1Decoder<OriginalContentIntegrityCheck> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginalContentIntegrityCheck */

/* START_OF_SYMBOL_DEFINITION _decode_OriginalContentIntegrityCheck */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginalContentIntegrityCheck
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginalContentIntegrityCheck} The decoded data structure.
 */
export function _decode_OriginalContentIntegrityCheck(el: _Element) {
    if (!_cached_decoder_for_OriginalContentIntegrityCheck) {
        _cached_decoder_for_OriginalContentIntegrityCheck = _decode_ContentIntegrityCheck;
    }
    return _cached_decoder_for_OriginalContentIntegrityCheck(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginalContentIntegrityCheck */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginalContentIntegrityCheck */
let _cached_encoder_for_OriginalContentIntegrityCheck: $.ASN1Encoder<OriginalContentIntegrityCheck> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginalContentIntegrityCheck */

/* START_OF_SYMBOL_DEFINITION _encode_OriginalContentIntegrityCheck */
/**
 * @summary Encodes a(n) OriginalContentIntegrityCheck into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginalContentIntegrityCheck, encoded as an ASN.1 Element.
 */
export function _encode_OriginalContentIntegrityCheck(
    value: OriginalContentIntegrityCheck,
    elGetter: $.ASN1Encoder<OriginalContentIntegrityCheck>
) {
    if (!_cached_encoder_for_OriginalContentIntegrityCheck) {
        _cached_encoder_for_OriginalContentIntegrityCheck = _encode_ContentIntegrityCheck;
    }
    return _cached_encoder_for_OriginalContentIntegrityCheck(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginalContentIntegrityCheck */

/* eslint-enable */

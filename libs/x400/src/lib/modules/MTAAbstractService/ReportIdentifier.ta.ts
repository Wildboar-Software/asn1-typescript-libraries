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
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta';
export {
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta';

/* START_OF_SYMBOL_DEFINITION ReportIdentifier */
/**
 * @summary ReportIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportIdentifier  ::=  MTSIdentifier
 * ```
 */
export type ReportIdentifier = MTSIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION ReportIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportIdentifier */
let _cached_decoder_for_ReportIdentifier: $.ASN1Decoder<ReportIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_ReportIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) ReportIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportIdentifier} The decoded data structure.
 */
export function _decode_ReportIdentifier(el: _Element) {
    if (!_cached_decoder_for_ReportIdentifier) {
        _cached_decoder_for_ReportIdentifier = _decode_MTSIdentifier;
    }
    return _cached_decoder_for_ReportIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReportIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportIdentifier */
let _cached_encoder_for_ReportIdentifier: $.ASN1Encoder<ReportIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_ReportIdentifier */
/**
 * @summary Encodes a(n) ReportIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_ReportIdentifier(
    value: ReportIdentifier,
    elGetter: $.ASN1Encoder<ReportIdentifier>
) {
    if (!_cached_encoder_for_ReportIdentifier) {
        _cached_encoder_for_ReportIdentifier = _encode_MTSIdentifier;
    }
    return _cached_encoder_for_ReportIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReportIdentifier */

/* eslint-enable */

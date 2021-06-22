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
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from '../PKI-Stub/Certificate.ta';
export {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from '../PKI-Stub/Certificate.ta';

/* START_OF_SYMBOL_DEFINITION PkiPath */
/**
 * @summary PkiPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PkiPath  ::=  SEQUENCE SIZE (1..MAX) OF Certificate
 * ```
 */
export type PkiPath = Certificate[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION PkiPath */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PkiPath */
let _cached_decoder_for_PkiPath: $.ASN1Decoder<PkiPath> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PkiPath */

/* START_OF_SYMBOL_DEFINITION _decode_PkiPath */
/**
 * @summary Decodes an ASN.1 element into a(n) PkiPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PkiPath} The decoded data structure.
 */
export function _decode_PkiPath(el: _Element) {
    if (!_cached_decoder_for_PkiPath) {
        _cached_decoder_for_PkiPath = $._decodeSequenceOf<Certificate>(
            () => _decode_Certificate
        );
    }
    return _cached_decoder_for_PkiPath(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PkiPath */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PkiPath */
let _cached_encoder_for_PkiPath: $.ASN1Encoder<PkiPath> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PkiPath */

/* START_OF_SYMBOL_DEFINITION _encode_PkiPath */
/**
 * @summary Encodes a(n) PkiPath into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PkiPath, encoded as an ASN.1 Element.
 */
export function _encode_PkiPath(
    value: PkiPath,
    elGetter: $.ASN1Encoder<PkiPath>
) {
    if (!_cached_encoder_for_PkiPath) {
        _cached_encoder_for_PkiPath = $._encodeSequenceOf<Certificate>(
            () => _encode_Certificate,
            $.BER
        );
    }
    return _cached_encoder_for_PkiPath(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PkiPath */

/* eslint-enable */

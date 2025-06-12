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
    Certificates,
    _decode_Certificates,
    _encode_Certificates,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificates.ta.mjs';
export {
    Certificates,
    _decode_Certificates,
    _encode_Certificates,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificates.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ReportingMTACertificate */
/**
 * @summary ReportingMTACertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportingMTACertificate  ::=  Certificates
 * ```
 */
export type ReportingMTACertificate = Certificates; // DefinedType
/* END_OF_SYMBOL_DEFINITION ReportingMTACertificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportingMTACertificate */
let _cached_decoder_for_ReportingMTACertificate: $.ASN1Decoder<ReportingMTACertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportingMTACertificate */

/* START_OF_SYMBOL_DEFINITION _decode_ReportingMTACertificate */
/**
 * @summary Decodes an ASN.1 element into a(n) ReportingMTACertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportingMTACertificate} The decoded data structure.
 */
export function _decode_ReportingMTACertificate(el: _Element) {
    if (!_cached_decoder_for_ReportingMTACertificate) {
        _cached_decoder_for_ReportingMTACertificate = _decode_Certificates;
    }
    return _cached_decoder_for_ReportingMTACertificate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReportingMTACertificate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportingMTACertificate */
let _cached_encoder_for_ReportingMTACertificate: $.ASN1Encoder<ReportingMTACertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportingMTACertificate */

/* START_OF_SYMBOL_DEFINITION _encode_ReportingMTACertificate */
/**
 * @summary Encodes a(n) ReportingMTACertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingMTACertificate, encoded as an ASN.1 Element.
 */
export function _encode_ReportingMTACertificate(
    value: ReportingMTACertificate,
    elGetter: $.ASN1Encoder<ReportingMTACertificate>
) {
    if (!_cached_encoder_for_ReportingMTACertificate) {
        _cached_encoder_for_ReportingMTACertificate = _encode_Certificates;
    }
    return _cached_encoder_for_ReportingMTACertificate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReportingMTACertificate */

/* eslint-enable */

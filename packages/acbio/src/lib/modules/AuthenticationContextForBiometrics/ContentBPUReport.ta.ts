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
    SIGNEDDATA,
    _get_decoder_for_SIGNEDDATA,
    _get_encoder_for_SIGNEDDATA,
} from '../AuthenticationContextForBiometrics/SIGNEDDATA.ta';
export {
    SIGNEDDATA,
    _get_decoder_for_SIGNEDDATA,
    _get_encoder_for_SIGNEDDATA,
} from '../AuthenticationContextForBiometrics/SIGNEDDATA.ta';
import {
    EncapsulatedContentInfoBPUReport,
    _decode_EncapsulatedContentInfoBPUReport,
    _encode_EncapsulatedContentInfoBPUReport,
} from '../AuthenticationContextForBiometrics/EncapsulatedContentInfoBPUReport.ta';
export {
    EncapsulatedContentInfoBPUReport,
    _decode_EncapsulatedContentInfoBPUReport,
    _encode_EncapsulatedContentInfoBPUReport,
} from '../AuthenticationContextForBiometrics/EncapsulatedContentInfoBPUReport.ta';

/* START_OF_SYMBOL_DEFINITION ContentBPUReport */
/**
 * @summary ContentBPUReport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentBPUReport  ::=  SIGNEDDATA { EncapsulatedContentInfoBPUReport }
 * ```
 */
export type ContentBPUReport = SIGNEDDATA<EncapsulatedContentInfoBPUReport>; // DefinedType
/* END_OF_SYMBOL_DEFINITION ContentBPUReport */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentBPUReport */
let _cached_decoder_for_ContentBPUReport: $.ASN1Decoder<ContentBPUReport> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentBPUReport */

/* START_OF_SYMBOL_DEFINITION _decode_ContentBPUReport */
/**
 * @summary Decodes an ASN.1 element into a(n) ContentBPUReport
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentBPUReport} The decoded data structure.
 */
export function _decode_ContentBPUReport(el: _Element) {
    if (!_cached_decoder_for_ContentBPUReport) {
        _cached_decoder_for_ContentBPUReport = _get_decoder_for_SIGNEDDATA<EncapsulatedContentInfoBPUReport>(
            _decode_EncapsulatedContentInfoBPUReport
        );
    }
    return _cached_decoder_for_ContentBPUReport(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContentBPUReport */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentBPUReport */
let _cached_encoder_for_ContentBPUReport: $.ASN1Encoder<ContentBPUReport> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentBPUReport */

/* START_OF_SYMBOL_DEFINITION _encode_ContentBPUReport */
/**
 * @summary Encodes a(n) ContentBPUReport into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentBPUReport, encoded as an ASN.1 Element.
 */
export function _encode_ContentBPUReport(
    value: ContentBPUReport,
    elGetter: $.ASN1Encoder<ContentBPUReport>
) {
    if (!_cached_encoder_for_ContentBPUReport) {
        _cached_encoder_for_ContentBPUReport = _get_encoder_for_SIGNEDDATA<EncapsulatedContentInfoBPUReport>(
            _encode_EncapsulatedContentInfoBPUReport
        );
    }
    return _cached_encoder_for_ContentBPUReport(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContentBPUReport */

/* eslint-enable */

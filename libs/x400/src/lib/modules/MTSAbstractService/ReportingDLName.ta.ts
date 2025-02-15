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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta';
export {
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta';

/* START_OF_SYMBOL_DEFINITION ReportingDLName */
/**
 * @summary ReportingDLName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportingDLName  ::=  ORAddressAndOptionalDirectoryName
 * ```
 */
export type ReportingDLName = ORAddressAndOptionalDirectoryName; // DefinedType
/* END_OF_SYMBOL_DEFINITION ReportingDLName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportingDLName */
let _cached_decoder_for_ReportingDLName: $.ASN1Decoder<ReportingDLName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportingDLName */

/* START_OF_SYMBOL_DEFINITION _decode_ReportingDLName */
/**
 * @summary Decodes an ASN.1 element into a(n) ReportingDLName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportingDLName} The decoded data structure.
 */
export function _decode_ReportingDLName(el: _Element) {
    if (!_cached_decoder_for_ReportingDLName) {
        _cached_decoder_for_ReportingDLName = _decode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_decoder_for_ReportingDLName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReportingDLName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportingDLName */
let _cached_encoder_for_ReportingDLName: $.ASN1Encoder<ReportingDLName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportingDLName */

/* START_OF_SYMBOL_DEFINITION _encode_ReportingDLName */
/**
 * @summary Encodes a(n) ReportingDLName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingDLName, encoded as an ASN.1 Element.
 */
export function _encode_ReportingDLName(
    value: ReportingDLName,
    elGetter: $.ASN1Encoder<ReportingDLName>
) {
    if (!_cached_encoder_for_ReportingDLName) {
        _cached_encoder_for_ReportingDLName = _encode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_encoder_for_ReportingDLName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReportingDLName */

/* eslint-enable */

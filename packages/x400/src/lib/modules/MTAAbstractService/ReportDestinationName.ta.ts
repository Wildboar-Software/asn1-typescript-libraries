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

/* START_OF_SYMBOL_DEFINITION ReportDestinationName */
/**
 * @summary ReportDestinationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportDestinationName  ::=  ORAddressAndOptionalDirectoryName
 * ```
 */
export type ReportDestinationName = ORAddressAndOptionalDirectoryName; // DefinedType
/* END_OF_SYMBOL_DEFINITION ReportDestinationName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportDestinationName */
let _cached_decoder_for_ReportDestinationName: $.ASN1Decoder<ReportDestinationName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportDestinationName */

/* START_OF_SYMBOL_DEFINITION _decode_ReportDestinationName */
/**
 * @summary Decodes an ASN.1 element into a(n) ReportDestinationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportDestinationName} The decoded data structure.
 */
export function _decode_ReportDestinationName(el: _Element) {
    if (!_cached_decoder_for_ReportDestinationName) {
        _cached_decoder_for_ReportDestinationName = _decode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_decoder_for_ReportDestinationName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReportDestinationName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportDestinationName */
let _cached_encoder_for_ReportDestinationName: $.ASN1Encoder<ReportDestinationName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportDestinationName */

/* START_OF_SYMBOL_DEFINITION _encode_ReportDestinationName */
/**
 * @summary Encodes a(n) ReportDestinationName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportDestinationName, encoded as an ASN.1 Element.
 */
export function _encode_ReportDestinationName(
    value: ReportDestinationName,
    elGetter: $.ASN1Encoder<ReportDestinationName>
) {
    if (!_cached_encoder_for_ReportDestinationName) {
        _cached_encoder_for_ReportDestinationName = _encode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_encoder_for_ReportDestinationName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReportDestinationName */

/* eslint-enable */

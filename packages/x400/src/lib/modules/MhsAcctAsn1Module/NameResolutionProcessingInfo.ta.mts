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
    DirectoryNameAndOptionalORAddress,
    _decode_DirectoryNameAndOptionalORAddress,
    _encode_DirectoryNameAndOptionalORAddress,
} from '../MhsAcctAsn1Module/DirectoryNameAndOptionalORAddress.ta.mjs';
export {
    DirectoryNameAndOptionalORAddress,
    _decode_DirectoryNameAndOptionalORAddress,
    _encode_DirectoryNameAndOptionalORAddress,
} from '../MhsAcctAsn1Module/DirectoryNameAndOptionalORAddress.ta.mjs';

/* START_OF_SYMBOL_DEFINITION NameResolutionProcessingInfo */
/**
 * @summary NameResolutionProcessingInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameResolutionProcessingInfo  ::=  DirectoryNameAndOptionalORAddress
 * ```
 */
export type NameResolutionProcessingInfo = DirectoryNameAndOptionalORAddress; // DefinedType
/* END_OF_SYMBOL_DEFINITION NameResolutionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NameResolutionProcessingInfo */
let _cached_decoder_for_NameResolutionProcessingInfo: $.ASN1Decoder<NameResolutionProcessingInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NameResolutionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _decode_NameResolutionProcessingInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) NameResolutionProcessingInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameResolutionProcessingInfo} The decoded data structure.
 */
export function _decode_NameResolutionProcessingInfo(el: _Element) {
    if (!_cached_decoder_for_NameResolutionProcessingInfo) {
        _cached_decoder_for_NameResolutionProcessingInfo = _decode_DirectoryNameAndOptionalORAddress;
    }
    return _cached_decoder_for_NameResolutionProcessingInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NameResolutionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NameResolutionProcessingInfo */
let _cached_encoder_for_NameResolutionProcessingInfo: $.ASN1Encoder<NameResolutionProcessingInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NameResolutionProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _encode_NameResolutionProcessingInfo */
/**
 * @summary Encodes a(n) NameResolutionProcessingInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameResolutionProcessingInfo, encoded as an ASN.1 Element.
 */
export function _encode_NameResolutionProcessingInfo(
    value: NameResolutionProcessingInfo,
    elGetter: $.ASN1Encoder<NameResolutionProcessingInfo>
) {
    if (!_cached_encoder_for_NameResolutionProcessingInfo) {
        _cached_encoder_for_NameResolutionProcessingInfo = _encode_DirectoryNameAndOptionalORAddress;
    }
    return _cached_encoder_for_NameResolutionProcessingInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NameResolutionProcessingInfo */

/* eslint-enable */

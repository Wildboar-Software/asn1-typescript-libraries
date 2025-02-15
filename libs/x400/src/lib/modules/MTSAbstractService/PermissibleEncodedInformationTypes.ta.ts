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
    EncodedInformationTypesConstraints,
    _decode_EncodedInformationTypesConstraints,
    _encode_EncodedInformationTypesConstraints,
} from '../MTSAbstractService/EncodedInformationTypesConstraints.ta';
export {
    EncodedInformationTypesConstraints,
    _decode_EncodedInformationTypesConstraints,
    _encode_EncodedInformationTypesConstraints,
} from '../MTSAbstractService/EncodedInformationTypesConstraints.ta';

/* START_OF_SYMBOL_DEFINITION PermissibleEncodedInformationTypes */
/**
 * @summary PermissibleEncodedInformationTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PermissibleEncodedInformationTypes  ::=
 *   EncodedInformationTypesConstraints
 * ```
 */
export type PermissibleEncodedInformationTypes = EncodedInformationTypesConstraints; // DefinedType
/* END_OF_SYMBOL_DEFINITION PermissibleEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PermissibleEncodedInformationTypes */
let _cached_decoder_for_PermissibleEncodedInformationTypes: $.ASN1Decoder<PermissibleEncodedInformationTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PermissibleEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _decode_PermissibleEncodedInformationTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) PermissibleEncodedInformationTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PermissibleEncodedInformationTypes} The decoded data structure.
 */
export function _decode_PermissibleEncodedInformationTypes(el: _Element) {
    if (!_cached_decoder_for_PermissibleEncodedInformationTypes) {
        _cached_decoder_for_PermissibleEncodedInformationTypes = _decode_EncodedInformationTypesConstraints;
    }
    return _cached_decoder_for_PermissibleEncodedInformationTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PermissibleEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PermissibleEncodedInformationTypes */
let _cached_encoder_for_PermissibleEncodedInformationTypes: $.ASN1Encoder<PermissibleEncodedInformationTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PermissibleEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _encode_PermissibleEncodedInformationTypes */
/**
 * @summary Encodes a(n) PermissibleEncodedInformationTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PermissibleEncodedInformationTypes, encoded as an ASN.1 Element.
 */
export function _encode_PermissibleEncodedInformationTypes(
    value: PermissibleEncodedInformationTypes,
    elGetter: $.ASN1Encoder<PermissibleEncodedInformationTypes>
) {
    if (!_cached_encoder_for_PermissibleEncodedInformationTypes) {
        _cached_encoder_for_PermissibleEncodedInformationTypes = _encode_EncodedInformationTypesConstraints;
    }
    return _cached_encoder_for_PermissibleEncodedInformationTypes(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_PermissibleEncodedInformationTypes */

/* eslint-enable */

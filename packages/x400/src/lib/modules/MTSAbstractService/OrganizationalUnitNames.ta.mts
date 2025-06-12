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
    OrganizationalUnitName,
    _decode_OrganizationalUnitName,
    _encode_OrganizationalUnitName,
} from '../MTSAbstractService/OrganizationalUnitName.ta.mjs';
export {
    OrganizationalUnitName,
    _decode_OrganizationalUnitName,
    _encode_OrganizationalUnitName,
} from '../MTSAbstractService/OrganizationalUnitName.ta.mjs';

/* START_OF_SYMBOL_DEFINITION OrganizationalUnitNames */
/**
 * @summary OrganizationalUnitNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrganizationalUnitNames  ::=
 *   SEQUENCE SIZE (1..ub-organizational-units) OF OrganizationalUnitName
 * ```
 */
export type OrganizationalUnitNames = OrganizationalUnitName[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION OrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OrganizationalUnitNames */
let _cached_decoder_for_OrganizationalUnitNames: $.ASN1Decoder<OrganizationalUnitNames> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _decode_OrganizationalUnitNames */
/**
 * @summary Decodes an ASN.1 element into a(n) OrganizationalUnitNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrganizationalUnitNames} The decoded data structure.
 */
export function _decode_OrganizationalUnitNames(el: _Element) {
    if (!_cached_decoder_for_OrganizationalUnitNames) {
        _cached_decoder_for_OrganizationalUnitNames = $._decodeSequenceOf<OrganizationalUnitName>(
            () => _decode_OrganizationalUnitName
        );
    }
    return _cached_decoder_for_OrganizationalUnitNames(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OrganizationalUnitNames */
let _cached_encoder_for_OrganizationalUnitNames: $.ASN1Encoder<OrganizationalUnitNames> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _encode_OrganizationalUnitNames */
/**
 * @summary Encodes a(n) OrganizationalUnitNames into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrganizationalUnitNames, encoded as an ASN.1 Element.
 */
export function _encode_OrganizationalUnitNames(
    value: OrganizationalUnitNames,
    elGetter: $.ASN1Encoder<OrganizationalUnitNames>
) {
    if (!_cached_encoder_for_OrganizationalUnitNames) {
        _cached_encoder_for_OrganizationalUnitNames = $._encodeSequenceOf<OrganizationalUnitName>(
            () => _encode_OrganizationalUnitName,
            $.BER
        );
    }
    return _cached_encoder_for_OrganizationalUnitNames(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OrganizationalUnitNames */

/* eslint-enable */

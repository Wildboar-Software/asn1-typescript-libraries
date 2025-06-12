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
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta.js';
export {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta.js';
import { ub_organizational_unit_name_length } from '../MTSUpperBounds/ub-organizational-unit-name-length.va.js';
export { ub_organizational_unit_name_length } from '../MTSUpperBounds/ub-organizational-unit-name-length.va.js';

/* START_OF_SYMBOL_DEFINITION UniversalOrganizationalUnitName */
/**
 * @summary UniversalOrganizationalUnitName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalOrganizationalUnitName  ::=
 *   UniversalOrBMPString{ub-organizational-unit-name-length}
 * ```
 */
export type UniversalOrganizationalUnitName = UniversalOrBMPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalOrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalOrganizationalUnitName */
let _cached_decoder_for_UniversalOrganizationalUnitName: $.ASN1Decoder<UniversalOrganizationalUnitName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalOrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalOrganizationalUnitName */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrganizationalUnitName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrganizationalUnitName} The decoded data structure.
 */
export function _decode_UniversalOrganizationalUnitName(el: _Element) {
    if (!_cached_decoder_for_UniversalOrganizationalUnitName) {
        _cached_decoder_for_UniversalOrganizationalUnitName = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalOrganizationalUnitName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalOrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalOrganizationalUnitName */
let _cached_encoder_for_UniversalOrganizationalUnitName: $.ASN1Encoder<UniversalOrganizationalUnitName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalOrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalOrganizationalUnitName */
/**
 * @summary Encodes a(n) UniversalOrganizationalUnitName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrganizationalUnitName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalOrganizationalUnitName(
    value: UniversalOrganizationalUnitName,
    elGetter: $.ASN1Encoder<UniversalOrganizationalUnitName>
) {
    if (!_cached_encoder_for_UniversalOrganizationalUnitName) {
        _cached_encoder_for_UniversalOrganizationalUnitName = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalOrganizationalUnitName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalOrganizationalUnitName */

/* eslint-enable */

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
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta';
export {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta';
import { ub_organization_name_length } from '../MTSUpperBounds/ub-organization-name-length.va';
export { ub_organization_name_length } from '../MTSUpperBounds/ub-organization-name-length.va';

/* START_OF_SYMBOL_DEFINITION UniversalOrganizationName */
/**
 * @summary UniversalOrganizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalOrganizationName  ::=  UniversalOrBMPString{ub-organization-name-length}
 * ```
 */
export type UniversalOrganizationName = UniversalOrBMPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalOrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalOrganizationName */
let _cached_decoder_for_UniversalOrganizationName: $.ASN1Decoder<UniversalOrganizationName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalOrganizationName */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalOrganizationName */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrganizationName} The decoded data structure.
 */
export function _decode_UniversalOrganizationName(el: _Element) {
    if (!_cached_decoder_for_UniversalOrganizationName) {
        _cached_decoder_for_UniversalOrganizationName = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalOrganizationName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalOrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalOrganizationName */
let _cached_encoder_for_UniversalOrganizationName: $.ASN1Encoder<UniversalOrganizationName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalOrganizationName */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalOrganizationName */
/**
 * @summary Encodes a(n) UniversalOrganizationName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrganizationName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalOrganizationName(
    value: UniversalOrganizationName,
    elGetter: $.ASN1Encoder<UniversalOrganizationName>
) {
    if (!_cached_encoder_for_UniversalOrganizationName) {
        _cached_encoder_for_UniversalOrganizationName = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalOrganizationName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalOrganizationName */

/* eslint-enable */

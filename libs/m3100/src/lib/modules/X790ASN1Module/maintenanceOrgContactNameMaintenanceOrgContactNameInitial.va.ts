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
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta';
export {
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta';
import {
    PersonNumber,
    _decode_PersonNumber,
    _encode_PersonNumber,
} from '../X790ASN1Module/PersonNumber.ta';
export {
    PersonNumber,
    _decode_PersonNumber,
    _encode_PersonNumber,
} from '../X790ASN1Module/PersonNumber.ta';
import {
    PersonName,
    _decode_PersonName,
    _encode_PersonName,
} from '../X790ASN1Module/PersonName.ta';
export {
    PersonName,
    _decode_PersonName,
    _encode_PersonName,
} from '../X790ASN1Module/PersonName.ta';
import {
    PersonPhone,
    _decode_PersonPhone,
    _encode_PersonPhone,
} from '../X790ASN1Module/PersonPhone.ta';
export {
    PersonPhone,
    _decode_PersonPhone,
    _encode_PersonPhone,
} from '../X790ASN1Module/PersonPhone.ta';
import {
    PersonLocation,
    _decode_PersonLocation,
    _encode_PersonLocation,
} from '../X790ASN1Module/PersonLocation.ta';
export {
    PersonLocation,
    _decode_PersonLocation,
    _encode_PersonLocation,
} from '../X790ASN1Module/PersonLocation.ta';
import {
    PersonEmail,
    _decode_PersonEmail,
    _encode_PersonEmail,
} from '../X790ASN1Module/PersonEmail.ta';
export {
    PersonEmail,
    _decode_PersonEmail,
    _encode_PersonEmail,
} from '../X790ASN1Module/PersonEmail.ta';
import {
    PersonFax,
    _decode_PersonFax,
    _encode_PersonFax,
} from '../X790ASN1Module/PersonFax.ta';
export {
    PersonFax,
    _decode_PersonFax,
    _encode_PersonFax,
} from '../X790ASN1Module/PersonFax.ta';
import {
    PersonRespon,
    _decode_PersonRespon,
    _encode_PersonRespon,
} from '../X790ASN1Module/PersonRespon.ta';
export {
    PersonRespon,
    _decode_PersonRespon,
    _encode_PersonRespon,
} from '../X790ASN1Module/PersonRespon.ta';

/* START_OF_SYMBOL_DEFINITION maintenanceOrgContactNameMaintenanceOrgContactNameInitial */
/**
 * @summary maintenanceOrgContactNameMaintenanceOrgContactNameInitial
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * maintenanceOrgContactNameMaintenanceOrgContactNameInitial PersonReach ::= {number "", name ""}
 * ```
 *
 * @constant
 */
export const maintenanceOrgContactNameMaintenanceOrgContactNameInitial: PersonReach = PersonReach._from_object(
    {
        number_: '',
        name: '',
        phone: undefined,
        loc: undefined,
        email: undefined,
        fax: undefined,
        respon: undefined,
        _unrecognizedExtensionsList: undefined,
    },
);
/* END_OF_SYMBOL_DEFINITION maintenanceOrgContactNameMaintenanceOrgContactNameInitial */

/* eslint-enable */

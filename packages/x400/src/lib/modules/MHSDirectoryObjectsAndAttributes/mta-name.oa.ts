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
    mta_name_Type,
    _decode_mta_name_Type,
    _encode_mta_name_Type,
} from '../MHSDirectoryObjectsAndAttributes/mta-name-Type.ta.js';
export {
    mta_name_Type,
    _decode_mta_name_Type,
    _encode_mta_name_Type,
} from '../MHSDirectoryObjectsAndAttributes/mta-name-Type.ta.js';
import { id_san_mta_name } from '../MHSObjectIdentifiers/id-san-mta-name.va.js';
export { id_san_mta_name } from '../MHSObjectIdentifiers/id-san-mta-name.va.js';
import { OTHER_NAME } from '@wildboar/x500/src/lib/modules/CertificateExtensions/OTHER-NAME.oca.js';
export { OTHER_NAME } from '@wildboar/x500/src/lib/modules/CertificateExtensions/OTHER-NAME.oca.js';

/* START_OF_SYMBOL_DEFINITION mta_name */
/**
 * @summary mta_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mta-name OTHER-NAME ::= {
 *   SEQUENCE {domain    GlobalDomainIdentifier,
 *             mta-name  MTAName}
 *   IDENTIFIED BY  id-san-mta-name
 * }
 * ```
 *
 * @constant
 * @type {OTHER_NAME<mta_name_Type>}
 * @implements {OTHER_NAME<mta_name_Type>}
 */
export const mta_name: OTHER_NAME<mta_name_Type> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_mta_name_Type,
    },
    encoderFor: {
        '&Type': _encode_mta_name_Type,
    },
    '&id': id_san_mta_name /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mta_name */

/* eslint-enable */

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
    DistributionCodes,
    _decode_DistributionCodes,
    _encode_DistributionCodes,
} from '../IPMSHeadingExtensions/DistributionCodes.ta';
export {
    DistributionCodes,
    _decode_DistributionCodes,
    _encode_DistributionCodes,
} from '../IPMSHeadingExtensions/DistributionCodes.ta';
import { id_hex_distribution_codes } from '../IPMSObjectIdentifiers/id-hex-distribution-codes.va';
export { id_hex_distribution_codes } from '../IPMSObjectIdentifiers/id-hex-distribution-codes.va';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca';
export { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca';

/* START_OF_SYMBOL_DEFINITION distribution_codes */
/**
 * @summary distribution_codes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * distribution-codes IPMS-EXTENSION ::= {
 *   VALUE          DistributionCodes,
 *   IDENTIFIED BY  id-hex-distribution-codes
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<DistributionCodes>}
 * @implements {IPMS_EXTENSION<DistributionCodes>}
 */
export const distribution_codes: IPMS_EXTENSION<DistributionCodes> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_DistributionCodes,
    },
    encoderFor: {
        '&Type': _encode_DistributionCodes,
    },
    '&id': id_hex_distribution_codes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION distribution_codes */

/* eslint-enable */

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
    PrecedencePolicyIdentifier,
    _decode_PrecedencePolicyIdentifier,
    _encode_PrecedencePolicyIdentifier,
} from '../IPMSHeadingExtensions/PrecedencePolicyIdentifier.ta';
export {
    PrecedencePolicyIdentifier,
    _decode_PrecedencePolicyIdentifier,
    _encode_PrecedencePolicyIdentifier,
} from '../IPMSHeadingExtensions/PrecedencePolicyIdentifier.ta';
import { id_hex_precedence_policy_id } from '../IPMSObjectIdentifiers/id-hex-precedence-policy-id.va';
export { id_hex_precedence_policy_id } from '../IPMSObjectIdentifiers/id-hex-precedence-policy-id.va';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca';
export { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca';

/* START_OF_SYMBOL_DEFINITION precedence_policy_identifier */
/**
 * @summary precedence_policy_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * precedence-policy-identifier IPMS-EXTENSION ::= {
 *   VALUE          PrecedencePolicyIdentifier,
 *   IDENTIFIED BY  id-hex-precedence-policy-id
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<PrecedencePolicyIdentifier>}
 * @implements {IPMS_EXTENSION<PrecedencePolicyIdentifier>}
 */
export const precedence_policy_identifier: IPMS_EXTENSION<PrecedencePolicyIdentifier> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_PrecedencePolicyIdentifier,
    },
    encoderFor: {
        '&Type': _encode_PrecedencePolicyIdentifier,
    },
    '&id': id_hex_precedence_policy_id /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION precedence_policy_identifier */

/* eslint-enable */

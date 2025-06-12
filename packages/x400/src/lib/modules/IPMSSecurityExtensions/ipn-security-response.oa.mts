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
    IpnSecurityResponse,
    _decode_IpnSecurityResponse,
    _encode_IpnSecurityResponse,
} from '../IPMSSecurityExtensions/IpnSecurityResponse.ta.mjs';
export {
    IpnSecurityResponse,
    _decode_IpnSecurityResponse,
    _encode_IpnSecurityResponse,
} from '../IPMSSecurityExtensions/IpnSecurityResponse.ta.mjs';
import { id_sec_security_common_fields } from '../IPMSObjectIdentifiers/id-sec-security-common-fields.va.mjs';
export { id_sec_security_common_fields } from '../IPMSObjectIdentifiers/id-sec-security-common-fields.va.mjs';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
export { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';

/* START_OF_SYMBOL_DEFINITION ipn_security_response */
/**
 * @summary ipn_security_response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipn-security-response IPMS-EXTENSION ::= {
 *   VALUE          IpnSecurityResponse,
 *   IDENTIFIED BY  id-sec-security-common-fields
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<IpnSecurityResponse>}
 * @implements {IPMS_EXTENSION<IpnSecurityResponse>}
 */
export const ipn_security_response: IPMS_EXTENSION<IpnSecurityResponse> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_IpnSecurityResponse,
    },
    encoderFor: {
        '&Type': _encode_IpnSecurityResponse,
    },
    '&id': id_sec_security_common_fields /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ipn_security_response */

/* eslint-enable */

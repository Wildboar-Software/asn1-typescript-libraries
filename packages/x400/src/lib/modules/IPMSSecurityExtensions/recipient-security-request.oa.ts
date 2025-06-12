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
    RecipientSecurityRequest,
    RecipientSecurityRequest_content_non_repudiation /* IMPORTED_LONG_NAMED_BIT */,
    content_non_repudiation /* IMPORTED_SHORT_NAMED_BIT */,
    RecipientSecurityRequest_content_proof /* IMPORTED_LONG_NAMED_BIT */,
    content_proof /* IMPORTED_SHORT_NAMED_BIT */,
    RecipientSecurityRequest_ipn_non_repudiation /* IMPORTED_LONG_NAMED_BIT */,
    ipn_non_repudiation /* IMPORTED_SHORT_NAMED_BIT */,
    RecipientSecurityRequest_ipn_proof /* IMPORTED_LONG_NAMED_BIT */,
    ipn_proof /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_RecipientSecurityRequest,
    _encode_RecipientSecurityRequest,
} from '../IPMSSecurityExtensions/RecipientSecurityRequest.ta.js';
export {
    RecipientSecurityRequest,
    RecipientSecurityRequest_content_non_repudiation /* IMPORTED_LONG_NAMED_BIT */,
    content_non_repudiation /* IMPORTED_SHORT_NAMED_BIT */,
    RecipientSecurityRequest_content_proof /* IMPORTED_LONG_NAMED_BIT */,
    content_proof /* IMPORTED_SHORT_NAMED_BIT */,
    RecipientSecurityRequest_ipn_non_repudiation /* IMPORTED_LONG_NAMED_BIT */,
    ipn_non_repudiation /* IMPORTED_SHORT_NAMED_BIT */,
    RecipientSecurityRequest_ipn_proof /* IMPORTED_LONG_NAMED_BIT */,
    ipn_proof /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_RecipientSecurityRequest,
    _encode_RecipientSecurityRequest,
} from '../IPMSSecurityExtensions/RecipientSecurityRequest.ta.js';
import { id_sec_ipm_security_request } from '../IPMSObjectIdentifiers/id-sec-ipm-security-request.va.js';
export { id_sec_ipm_security_request } from '../IPMSObjectIdentifiers/id-sec-ipm-security-request.va.js';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.js';
export { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.js';

/* START_OF_SYMBOL_DEFINITION recipient_security_request */
/**
 * @summary recipient_security_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * recipient-security-request IPMS-EXTENSION ::= {
 *   VALUE          RecipientSecurityRequest,
 *   IDENTIFIED BY  id-sec-ipm-security-request
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<RecipientSecurityRequest>}
 * @implements {IPMS_EXTENSION<RecipientSecurityRequest>}
 */
export const recipient_security_request: IPMS_EXTENSION<RecipientSecurityRequest> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_RecipientSecurityRequest,
    },
    encoderFor: {
        '&Type': _encode_RecipientSecurityRequest,
    },
    '&id': id_sec_ipm_security_request /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION recipient_security_request */

/* eslint-enable */

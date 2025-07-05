/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
    RecipientSecurityRequest,
    _decode_RecipientSecurityRequest,
    _encode_RecipientSecurityRequest,
} from '../IPMSSecurityExtensions/RecipientSecurityRequest.ta.mjs';
import { id_sec_ipm_security_request } from '../IPMSObjectIdentifiers/id-sec-ipm-security-request.va.mjs';
import { type IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
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

/* eslint-enable */

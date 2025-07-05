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
    IpnSecurityResponse,
    _decode_IpnSecurityResponse,
    _encode_IpnSecurityResponse,
} from '../IPMSSecurityExtensions/IpnSecurityResponse.ta.mjs';
import { id_sec_security_common_fields } from '../IPMSObjectIdentifiers/id-sec-security-common-fields.va.mjs';
import { type IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
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

/* eslint-enable */

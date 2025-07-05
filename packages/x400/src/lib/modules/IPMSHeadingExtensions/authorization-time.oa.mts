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
    AuthorizationTime,
    _decode_AuthorizationTime,
    _encode_AuthorizationTime,
} from '../IPMSHeadingExtensions/AuthorizationTime.ta.mjs';
import { id_hex_authorization_time } from '../IPMSObjectIdentifiers/id-hex-authorization-time.va.mjs';
import { type IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/**
 * @summary authorization_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorization-time IPMS-EXTENSION ::= {
 *   VALUE          AuthorizationTime,
 *   IDENTIFIED BY  id-hex-authorization-time
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<AuthorizationTime>}
 * @implements {IPMS_EXTENSION<AuthorizationTime>}
 */
export const authorization_time: IPMS_EXTENSION<AuthorizationTime> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_AuthorizationTime,
    },
    encoderFor: {
        '&Type': _encode_AuthorizationTime,
    },
    '&id': id_hex_authorization_time /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

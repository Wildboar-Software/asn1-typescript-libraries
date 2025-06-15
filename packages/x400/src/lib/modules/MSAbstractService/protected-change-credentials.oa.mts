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
} from 'asn1-ts';
import {
    ProtectedChangeCredentials,
    _decode_ProtectedChangeCredentials,
    _encode_ProtectedChangeCredentials,
} from '../MSAbstractService/ProtectedChangeCredentials.ta.mjs';
import { id_ext_protected_change_credentials } from '../MSObjectIdentifiers/id-ext-protected-change-credentials.va.mjs';
import { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
/**
 * @summary protected_change_credentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protected-change-credentials MS-EXTENSION ::= {
 *   ProtectedChangeCredentials
 *   IDENTIFIED BY  id-ext-protected-change-credentials
 * }
 * ```
 *
 * @constant
 * @type {MS_EXTENSION<ProtectedChangeCredentials>}
 * @implements {MS_EXTENSION<ProtectedChangeCredentials>}
 */
export const protected_change_credentials: MS_EXTENSION<ProtectedChangeCredentials> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_ProtectedChangeCredentials,
    },
    encoderFor: {
        '&Type': _encode_ProtectedChangeCredentials,
    },
    '&id': id_ext_protected_change_credentials /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

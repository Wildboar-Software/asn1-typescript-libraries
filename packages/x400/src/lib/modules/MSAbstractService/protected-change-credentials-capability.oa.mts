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
    ChangeCredentialsAlgorithms,
    _decode_ChangeCredentialsAlgorithms,
    _encode_ChangeCredentialsAlgorithms,
} from '../MSAbstractService/ChangeCredentialsAlgorithms.ta.mjs';
import { id_ext_protected_change_credentials_capability } from '../MSObjectIdentifiers/id-ext-protected-change-credentials-capability.va.mjs';
import { type MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
/**
 * @summary protected_change_credentials_capability
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protected-change-credentials-capability MS-EXTENSION ::= {
 *   ChangeCredentialsAlgorithms
 *   IDENTIFIED BY  id-ext-protected-change-credentials-capability
 * }
 * ```
 *
 * @constant
 * @type {MS_EXTENSION<ChangeCredentialsAlgorithms>}
 * @implements {MS_EXTENSION<ChangeCredentialsAlgorithms>}
 */
export const protected_change_credentials_capability: MS_EXTENSION<ChangeCredentialsAlgorithms> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_ChangeCredentialsAlgorithms,
    },
    encoderFor: {
        '&Type': _encode_ChangeCredentialsAlgorithms,
    },
    '&id': id_ext_protected_change_credentials_capability /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

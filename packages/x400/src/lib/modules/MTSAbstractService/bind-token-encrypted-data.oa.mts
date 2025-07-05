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
    BindTokenEncryptedData,
    _decode_BindTokenEncryptedData,
    _encode_BindTokenEncryptedData,
} from '../MTSAbstractService/BindTokenEncryptedData.ta.mjs';
import { type TOKEN_DATA } from '../MTSAbstractService/TOKEN-DATA.oca.mjs';
/**
 * @summary bind_token_encrypted_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bind-token-encrypted-data TOKEN-DATA ::= {
 *   BindTokenEncryptedData
 *   IDENTIFIED BY  4
 * }
 * ```
 *
 * @constant
 * @type {TOKEN_DATA<BindTokenEncryptedData>}
 * @implements {TOKEN_DATA<BindTokenEncryptedData>}
 */
export const bind_token_encrypted_data: TOKEN_DATA<BindTokenEncryptedData> = {
    class: 'TOKEN-DATA',
    decoderFor: {
        '&Type': _decode_BindTokenEncryptedData,
    },
    encoderFor: {
        '&Type': _encode_BindTokenEncryptedData,
    },
    '&id': 4 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

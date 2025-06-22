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
    MessageTokenEncryptedData,
    _decode_MessageTokenEncryptedData,
    _encode_MessageTokenEncryptedData,
} from '../MTSAbstractService/MessageTokenEncryptedData.ta.mjs';
import { TOKEN_DATA } from '../MTSAbstractService/TOKEN-DATA.oca.mjs';
/**
 * @summary message_token_encrypted_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-token-encrypted-data TOKEN-DATA ::= {
 *   MessageTokenEncryptedData
 *   IDENTIFIED BY  3
 * }
 * ```
 *
 * @constant
 * @type {TOKEN_DATA<MessageTokenEncryptedData>}
 * @implements {TOKEN_DATA<MessageTokenEncryptedData>}
 */
export const message_token_encrypted_data: TOKEN_DATA<MessageTokenEncryptedData> = {
    class: 'TOKEN-DATA',
    decoderFor: {
        '&Type': _decode_MessageTokenEncryptedData,
    },
    encoderFor: {
        '&Type': _encode_MessageTokenEncryptedData,
    },
    '&id': 3 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

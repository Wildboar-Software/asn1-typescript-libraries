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
import { TOKEN_DATA } from '../MTSAbstractService/TOKEN-DATA.oca.mjs';
import { bind_token_signed_data } from '../MTSAbstractService/bind-token-signed-data.oa.mjs';
import { message_token_signed_data } from '../MTSAbstractService/message-token-signed-data.oa.mjs';
import { message_token_encrypted_data } from '../MTSAbstractService/message-token-encrypted-data.oa.mjs';
import { bind_token_encrypted_data } from '../MTSAbstractService/bind-token-encrypted-data.oa.mjs';
/**
 * @summary TokenDataTable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokenDataTable TOKEN-DATA ::= {bind-token-signed-data | message-token-signed-data |
 *    message-token-encrypted-data | bind-token-encrypted-data, ...}
 * ```
 *
 * @constant
 * @type {TOKEN_DATA[]}
 *
 */
export const TokenDataTable: TOKEN_DATA[] = [
    bind_token_signed_data,
    message_token_signed_data,
    message_token_encrypted_data,
    bind_token_encrypted_data,
];

/* eslint-enable */

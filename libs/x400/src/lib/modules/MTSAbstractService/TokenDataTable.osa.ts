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
import * as $ from 'asn1-ts/dist/node/functional';
import { TOKEN_DATA } from '../MTSAbstractService/TOKEN-DATA.oca';
export { TOKEN_DATA } from '../MTSAbstractService/TOKEN-DATA.oca';
import { bind_token_signed_data } from '../MTSAbstractService/bind-token-signed-data.oa';
export { bind_token_signed_data } from '../MTSAbstractService/bind-token-signed-data.oa';
import { message_token_signed_data } from '../MTSAbstractService/message-token-signed-data.oa';
export { message_token_signed_data } from '../MTSAbstractService/message-token-signed-data.oa';
import { message_token_encrypted_data } from '../MTSAbstractService/message-token-encrypted-data.oa';
export { message_token_encrypted_data } from '../MTSAbstractService/message-token-encrypted-data.oa';
import { bind_token_encrypted_data } from '../MTSAbstractService/bind-token-encrypted-data.oa';
export { bind_token_encrypted_data } from '../MTSAbstractService/bind-token-encrypted-data.oa';

/* START_OF_SYMBOL_DEFINITION TokenDataTable */
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
/* END_OF_SYMBOL_DEFINITION TokenDataTable */

/* eslint-enable */

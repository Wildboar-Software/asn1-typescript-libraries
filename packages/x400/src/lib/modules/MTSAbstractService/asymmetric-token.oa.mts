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
    AsymmetricToken,
    _decode_AsymmetricToken,
    _encode_AsymmetricToken,
} from '../MTSAbstractService/AsymmetricToken.ta.mjs';
export {
    AsymmetricToken,
    _decode_AsymmetricToken,
    _encode_AsymmetricToken,
} from '../MTSAbstractService/AsymmetricToken.ta.mjs';
import { id_tok_asymmetricToken } from '../MTSObjectIdentifiers/id-tok-asymmetricToken.va.mjs';
export { id_tok_asymmetricToken } from '../MTSObjectIdentifiers/id-tok-asymmetricToken.va.mjs';
import { TOKEN } from '../MTSAbstractService/TOKEN.oca.mjs';
export { TOKEN } from '../MTSAbstractService/TOKEN.oca.mjs';

/* START_OF_SYMBOL_DEFINITION asymmetric_token */
/**
 * @summary asymmetric_token
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * asymmetric-token TOKEN ::= {
 *   AsymmetricToken
 *   IDENTIFIED BY  id-tok-asymmetricToken
 * }
 * ```
 *
 * @constant
 * @type {TOKEN<AsymmetricToken>}
 * @implements {TOKEN<AsymmetricToken>}
 */
export const asymmetric_token: TOKEN<AsymmetricToken> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_AsymmetricToken,
    },
    encoderFor: {
        '&Type': _encode_AsymmetricToken,
    },
    '&id': id_tok_asymmetricToken /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION asymmetric_token */

/* eslint-enable */

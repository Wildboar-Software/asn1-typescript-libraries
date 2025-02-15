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
import {
    BindTokenSignedData,
    _decode_BindTokenSignedData,
    _encode_BindTokenSignedData,
} from '../MTSAbstractService/BindTokenSignedData.ta';
export {
    BindTokenSignedData,
    _decode_BindTokenSignedData,
    _encode_BindTokenSignedData,
} from '../MTSAbstractService/BindTokenSignedData.ta';
import { TOKEN_DATA } from '../MTSAbstractService/TOKEN-DATA.oca';
export { TOKEN_DATA } from '../MTSAbstractService/TOKEN-DATA.oca';

/* START_OF_SYMBOL_DEFINITION bind_token_signed_data */
/**
 * @summary bind_token_signed_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bind-token-signed-data TOKEN-DATA ::= {BindTokenSignedData
 *                                        IDENTIFIED BY  1
 * }
 * ```
 *
 * @constant
 * @type {TOKEN_DATA<BindTokenSignedData>}
 * @implements {TOKEN_DATA<BindTokenSignedData>}
 */
export const bind_token_signed_data: TOKEN_DATA<BindTokenSignedData> = {
    class: 'TOKEN-DATA',
    decoderFor: {
        '&Type': _decode_BindTokenSignedData,
    },
    encoderFor: {
        '&Type': _encode_BindTokenSignedData,
    },
    '&id': 1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION bind_token_signed_data */

/* eslint-enable */

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
    CompareRequest,
    _decode_CompareRequest,
    _encode_CompareRequest,
} from '../Pbact-access/CompareRequest.ta';
export {
    CompareRequest,
    _decode_CompareRequest,
    _encode_CompareRequest,
} from '../Pbact-access/CompareRequest.ta';
import { id_compareRequest } from '../Pbact-access/id-compareRequest.va';
export { id_compareRequest } from '../Pbact-access/id-compareRequest.va';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca';
export { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca';

/* START_OF_SYMBOL_DEFINITION compareRequest */
/**
 * @summary compareRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * compareRequest CONTENT-TYPE ::= {
 *               CompareRequest
 * IDENTIFIED BY id-compareRequest }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<CompareRequest>}
 * @implements {CONTENT_TYPE<CompareRequest>}
 */
export const compareRequest: CONTENT_TYPE<CompareRequest> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_CompareRequest,
    },
    encoderFor: {
        '&Type': _encode_CompareRequest,
    },
    '&id': id_compareRequest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION compareRequest */

/* eslint-enable */

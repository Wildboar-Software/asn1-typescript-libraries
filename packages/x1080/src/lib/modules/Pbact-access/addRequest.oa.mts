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
    AddRequest,
    _decode_AddRequest,
    _encode_AddRequest,
} from '../Pbact-access/AddRequest.ta.mjs';
export {
    AddRequest,
    _decode_AddRequest,
    _encode_AddRequest,
} from '../Pbact-access/AddRequest.ta.mjs';
import { id_addRequest } from '../Pbact-access/id-addRequest.va.mjs';
export { id_addRequest } from '../Pbact-access/id-addRequest.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';
export { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/* START_OF_SYMBOL_DEFINITION addRequest */
/**
 * @summary addRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * addRequest CONTENT-TYPE ::= {
 *               AddRequest
 * IDENTIFIED BY id-addRequest }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<AddRequest>}
 * @implements {CONTENT_TYPE<AddRequest>}
 */
export const addRequest: CONTENT_TYPE<AddRequest> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_AddRequest,
    },
    encoderFor: {
        '&Type': _encode_AddRequest,
    },
    '&id': id_addRequest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION addRequest */

/* eslint-enable */

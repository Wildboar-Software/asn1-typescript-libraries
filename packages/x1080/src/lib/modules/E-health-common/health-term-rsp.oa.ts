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
    E_terminateResponse,
    _decode_E_terminateResponse,
    _encode_E_terminateResponse,
} from '../E-health-common/E-terminateResponse.ta.js';
export {
    E_terminateResponse,
    _decode_E_terminateResponse,
    _encode_E_terminateResponse,
} from '../E-health-common/E-terminateResponse.ta.js';
import { id_health_term_rsp } from '../E-health-common/id-health-term-rsp.va.js';
export { id_health_term_rsp } from '../E-health-common/id-health-term-rsp.va.js';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.js';
export { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.js';

/* START_OF_SYMBOL_DEFINITION health_term_rsp */
/**
 * @summary health_term_rsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * health-term-rsp CONTENT-TYPE ::= {
 *                 E-terminateResponse
 *   IDENTIFIED BY id-health-term-rsp }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<E_terminateResponse>}
 * @implements {CONTENT_TYPE<E_terminateResponse>}
 */
export const health_term_rsp: CONTENT_TYPE<E_terminateResponse> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_E_terminateResponse,
    },
    encoderFor: {
        '&Type': _encode_E_terminateResponse,
    },
    '&id': id_health_term_rsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION health_term_rsp */

/* eslint-enable */

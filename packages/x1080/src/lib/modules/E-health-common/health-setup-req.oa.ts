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
    E_setupRequest,
    _decode_E_setupRequest,
    _encode_E_setupRequest,
} from '../E-health-common/E-setupRequest.ta';
export {
    E_setupRequest,
    _decode_E_setupRequest,
    _encode_E_setupRequest,
} from '../E-health-common/E-setupRequest.ta';
import { id_health_setup_req } from '../E-health-common/id-health-setup-req.va';
export { id_health_setup_req } from '../E-health-common/id-health-setup-req.va';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca';
export { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca';

/* START_OF_SYMBOL_DEFINITION health_setup_req */
/**
 * @summary health_setup_req
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * health-setup-req CONTENT-TYPE ::= {
 *                  E-setupRequest
 *   IDENTIFIED BY  id-health-setup-req }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<E_setupRequest>}
 * @implements {CONTENT_TYPE<E_setupRequest>}
 */
export const health_setup_req: CONTENT_TYPE<E_setupRequest> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_E_setupRequest,
    },
    encoderFor: {
        '&Type': _encode_E_setupRequest,
    },
    '&id': id_health_setup_req /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION health_setup_req */

/* eslint-enable */

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
import { CONNECTION_PACKAGE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca';
export { CONNECTION_PACKAGE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca';
import { OPERATION_PACKAGE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca';
export { OPERATION_PACKAGE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca';
import { ms_connect } from '../MSAbstractService/ms-connect.oa';
export { ms_connect } from '../MSAbstractService/ms-connect.oa';
import { retrieval } from '../MSAbstractService/retrieval.oa';
export { retrieval } from '../MSAbstractService/retrieval.oa';
import { ms_submission } from '../MSAbstractService/ms-submission.oa';
export { ms_submission } from '../MSAbstractService/ms-submission.oa';
import { administration } from '../MTSAbstractService/administration.oa';
export { administration } from '../MTSAbstractService/administration.oa';
import { id_crt_ms_access_94 } from '../MSObjectIdentifiers/id-crt-ms-access-94.va';
export { id_crt_ms_access_94 } from '../MSObjectIdentifiers/id-crt-ms-access-94.va';
import { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca';
export { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca';

/* START_OF_SYMBOL_DEFINITION ms_access_contract_94 */
/**
 * @summary ms_access_contract_94
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-access-contract-94 CONTRACT ::= {
 *   CONNECTION             ms-connect
 *   INITIATOR CONSUMER OF  {retrieval | ms-submission | administration}
 *   ID                     id-crt-ms-access-94
 * }
 * ```
 *
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export const ms_access_contract_94: CONTRACT = {
    class: 'CONTRACT',
    decoderFor: {},
    encoderFor: {},
    '&connection': ms_connect /* OBJECT_FIELD_SETTING */,
    '&InitiatorConsumerOf': [
        retrieval,
        ms_submission,
        administration,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_crt_ms_access_94 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ms_access_contract_94 */

/* eslint-enable */

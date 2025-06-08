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
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca';
import { message_transfer } from '../MTAAbstractService/message-transfer.oa';
export { message_transfer } from '../MTAAbstractService/message-transfer.oa';
import { probe_transfer } from '../MTAAbstractService/probe-transfer.oa';
export { probe_transfer } from '../MTAAbstractService/probe-transfer.oa';
import { report_transfer } from '../MTAAbstractService/report-transfer.oa';
export { report_transfer } from '../MTAAbstractService/report-transfer.oa';
import { id_pt_transfer } from '../MTSObjectIdentifiers/id-pt-transfer.va';
export { id_pt_transfer } from '../MTSObjectIdentifiers/id-pt-transfer.va';
import { PORT } from '../MTSAbstractService/PORT.oca';
export { PORT } from '../MTSAbstractService/PORT.oca';

/* START_OF_SYMBOL_DEFINITION transfer */
/**
 * @summary transfer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * transfer PORT ::= {
 *   OPERATIONS  {message-transfer | probe-transfer | report-transfer}
 *   ID          id-pt-transfer
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const transfer: PORT = {
    class: 'OPERATION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&Both': [
        message_transfer,
        probe_transfer,
        report_transfer,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_transfer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION transfer */

/* eslint-enable */

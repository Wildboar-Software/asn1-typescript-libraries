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
import { receive_report } from '../IPMSAbstractService/receive-report.oa';
export { receive_report } from '../IPMSAbstractService/receive-report.oa';
import { receive_ipm } from '../IPMSAbstractService/receive-ipm.oa';
export { receive_ipm } from '../IPMSAbstractService/receive-ipm.oa';
import { receive_rn } from '../IPMSAbstractService/receive-rn.oa';
export { receive_rn } from '../IPMSAbstractService/receive-rn.oa';
import { receive_nrn } from '../IPMSAbstractService/receive-nrn.oa';
export { receive_nrn } from '../IPMSAbstractService/receive-nrn.oa';
import { receive_on } from '../IPMSAbstractService/receive-on.oa';
export { receive_on } from '../IPMSAbstractService/receive-on.oa';
import { id_pt_reception } from '../IPMSObjectIdentifiers/id-pt-reception.va';
export { id_pt_reception } from '../IPMSObjectIdentifiers/id-pt-reception.va';
import { PORT } from '../MTSAbstractService/PORT.oca';
export { PORT } from '../MTSAbstractService/PORT.oca';

/* START_OF_SYMBOL_DEFINITION reception */
/**
 * @summary reception
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * reception PORT ::= {
 *   SUPPLIER INVOKES
 *     {receive-report | receive-ipm | receive-rn | receive-nrn | receive-on}
 *   ID                id-pt-reception
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const reception: PORT = {
    class: 'OPERATION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&Consumer': [
        receive_report,
        receive_ipm,
        receive_rn,
        receive_nrn,
        receive_on,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_reception /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION reception */

/* eslint-enable */

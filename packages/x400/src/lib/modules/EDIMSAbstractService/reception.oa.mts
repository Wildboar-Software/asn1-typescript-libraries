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
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import { receive_report } from '../EDIMSAbstractService/receive-report.oa.mjs';
export { receive_report } from '../EDIMSAbstractService/receive-report.oa.mjs';
import { receive_edim } from '../EDIMSAbstractService/receive-edim.oa.mjs';
export { receive_edim } from '../EDIMSAbstractService/receive-edim.oa.mjs';
import { receive_edin } from '../EDIMSAbstractService/receive-edin.oa.mjs';
export { receive_edin } from '../EDIMSAbstractService/receive-edin.oa.mjs';
import { id_pt_reception } from '../EDIMSObjectIdentifiers/id-pt-reception.va.mjs';
export { id_pt_reception } from '../EDIMSObjectIdentifiers/id-pt-reception.va.mjs';
import { PORT } from '../MTSAbstractService/PORT.oca.mjs';
export { PORT } from '../MTSAbstractService/PORT.oca.mjs';

/* START_OF_SYMBOL_DEFINITION reception */
/**
 * @summary reception
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * reception PORT ::= {
 *   SUPPLIER INVOKES  {receive-report | receive-edim | receive-edin}
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
        receive_edim,
        receive_edin,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_reception /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION reception */

/* eslint-enable */

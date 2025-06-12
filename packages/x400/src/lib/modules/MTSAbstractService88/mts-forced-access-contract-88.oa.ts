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
import { CONNECTION_PACKAGE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.js';
export { CONNECTION_PACKAGE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.js';
import { OPERATION_PACKAGE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.js';
export { OPERATION_PACKAGE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.js';
import { mts_connect } from '../MTSAbstractService/mts-connect.oa.js';
export { mts_connect } from '../MTSAbstractService/mts-connect.oa.js';
import { submission } from '../MTSAbstractService/submission.oa.js';
export { submission } from '../MTSAbstractService/submission.oa.js';
import { delivery_88 } from '../MTSAbstractService88/delivery-88.oa.js';
export { delivery_88 } from '../MTSAbstractService88/delivery-88.oa.js';
import { administration_88 } from '../MTSAbstractService88/administration-88.oa.js';
export { administration_88 } from '../MTSAbstractService88/administration-88.oa.js';
import { id_ct_mts_forced_access } from '../MTSObjectIdentifiers/id-ct-mts-forced-access.va.js';
export { id_ct_mts_forced_access } from '../MTSObjectIdentifiers/id-ct-mts-forced-access.va.js';
import { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca.js';
export { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca.js';

/* START_OF_SYMBOL_DEFINITION mts_forced_access_contract_88 */
/**
 * @summary mts_forced_access_contract_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-forced-access-contract-88 CONTRACT ::= {
 *   CONNECTION             mts-connect
 *   RESPONDER CONSUMER OF  {submission | delivery-88 | administration-88}
 *   ID                     {id-ct-mts-forced-access  88}
 * }
 * ```
 *
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export const mts_forced_access_contract_88: CONTRACT = {
    class: 'CONTRACT',
    decoderFor: {},
    encoderFor: {},
    '&connection': mts_connect /* OBJECT_FIELD_SETTING */,
    '&InitiatorSupplierOf': [
        submission,
        delivery_88,
        administration_88,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': new _OID(
        [88],
        id_ct_mts_forced_access
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mts_forced_access_contract_88 */

/* eslint-enable */

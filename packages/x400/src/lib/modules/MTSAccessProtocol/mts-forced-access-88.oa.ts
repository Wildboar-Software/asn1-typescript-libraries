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
import { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca.js';
export { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca.js';
import { REALIZATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects-extensions/REALIZATION.oca.js';
export { REALIZATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects-extensions/REALIZATION.oca.js';
import { mts_forced_access_contract_88 } from '../MTSAbstractService88/mts-forced-access-contract-88.oa.js';
export { mts_forced_access_contract_88 } from '../MTSAbstractService88/mts-forced-access-contract-88.oa.js';
import { acse } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/acse.oa.js';
export { acse } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/acse.oa.js';
import { pData } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/pData.oa.js';
export { pData } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/pData.oa.js';
import { acse_abstract_syntax } from '@wildboar/rose/src/lib/modules/Remote-Operations-Abstract-Syntaxes/acse-abstract-syntax.oa.js';
export { acse_abstract_syntax } from '@wildboar/rose/src/lib/modules/Remote-Operations-Abstract-Syntaxes/acse-abstract-syntax.oa.js';
import { message_submission_abstract_syntax } from '../MTSAccessProtocol/message-submission-abstract-syntax.oa.js';
export { message_submission_abstract_syntax } from '../MTSAccessProtocol/message-submission-abstract-syntax.oa.js';
import { message_delivery_abstract_syntax_88 } from '../MTSAccessProtocol/message-delivery-abstract-syntax-88.oa.js';
export { message_delivery_abstract_syntax_88 } from '../MTSAccessProtocol/message-delivery-abstract-syntax-88.oa.js';
import { message_administration_abstract_syntax_88 } from '../MTSAccessProtocol/message-administration-abstract-syntax-88.oa.js';
export { message_administration_abstract_syntax_88 } from '../MTSAccessProtocol/message-administration-abstract-syntax-88.oa.js';
import { mts_bind_unbind_abstract_syntax } from '../MTSAccessProtocol/mts-bind-unbind-abstract-syntax.oa.js';
export { mts_bind_unbind_abstract_syntax } from '../MTSAccessProtocol/mts-bind-unbind-abstract-syntax.oa.js';
import { id_ac_mts_forced_access_88 } from '../MHSProtocolObjectIdentifiers/id-ac-mts-forced-access-88.va.js';
export { id_ac_mts_forced_access_88 } from '../MHSProtocolObjectIdentifiers/id-ac-mts-forced-access-88.va.js';
import { APPLICATION_CONTEXT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects-extensions/APPLICATION-CONTEXT.oca.js';
export { APPLICATION_CONTEXT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects-extensions/APPLICATION-CONTEXT.oca.js';

/* START_OF_SYMBOL_DEFINITION mts_forced_access_88 */
/**
 * @summary mts_forced_access_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-forced-access-88 APPLICATION-CONTEXT ::= {
 *   CONTRACT                  mts-forced-access-contract-88
 *   ESTABLISHED BY            acse
 *   INFORMATION TRANSFER BY   pData
 *   ABSTRACT SYNTAXES
 *     {acse-abstract-syntax | message-submission-abstract-syntax |
 *       message-delivery-abstract-syntax-88 |
 *       message-administration-abstract-syntax-88 |
 *       mts-bind-unbind-abstract-syntax}
 *   APPLICATION CONTEXT NAME  id-ac-mts-forced-access-88
 * }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const mts_forced_access_88: APPLICATION_CONTEXT = {
    class: 'APPLICATION-CONTEXT',
    decoderFor: {},
    encoderFor: {},
    '&associationContract': mts_forced_access_contract_88 /* OBJECT_FIELD_SETTING */,
    '&associationRealization': acse /* OBJECT_FIELD_SETTING */,
    '&transferRealization': pData /* OBJECT_FIELD_SETTING */,
    '&AbstractSyntaxes': [
        acse_abstract_syntax,
        message_submission_abstract_syntax,
        message_delivery_abstract_syntax_88,
        message_administration_abstract_syntax_88,
        mts_bind_unbind_abstract_syntax,
    ] /* OBJECT_FIELD_SETTING */,
    '&applicationContextName': id_ac_mts_forced_access_88 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&probe': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&acknowledge': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mts_forced_access_88 */

/* eslint-enable */

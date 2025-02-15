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
import { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca';
export { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca';
import { REALIZATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects-extensions/REALIZATION.oca';
export { REALIZATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects-extensions/REALIZATION.oca';
import { ms_access_contract_94 } from '../MSAbstractService/ms-access-contract-94.oa';
export { ms_access_contract_94 } from '../MSAbstractService/ms-access-contract-94.oa';
import { acse } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/acse.oa';
export { acse } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/acse.oa';
import { pData } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/pData.oa';
export { pData } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/pData.oa';
import { acse_abstract_syntax } from '@wildboar/rose/src/lib/modules/Remote-Operations-Abstract-Syntaxes/acse-abstract-syntax.oa';
export { acse_abstract_syntax } from '@wildboar/rose/src/lib/modules/Remote-Operations-Abstract-Syntaxes/acse-abstract-syntax.oa';
import { ms_message_submission_abstract_syntax } from '../MSAccessProtocol/ms-message-submission-abstract-syntax.oa';
export { ms_message_submission_abstract_syntax } from '../MSAccessProtocol/ms-message-submission-abstract-syntax.oa';
import { message_retrieval_abstract_syntax_94 } from '../MSAccessProtocol/message-retrieval-abstract-syntax-94.oa';
export { message_retrieval_abstract_syntax_94 } from '../MSAccessProtocol/message-retrieval-abstract-syntax-94.oa';
import { message_administration_abstract_syntax_94 } from '../MTSAccessProtocol/message-administration-abstract-syntax-94.oa';
export { message_administration_abstract_syntax_94 } from '../MTSAccessProtocol/message-administration-abstract-syntax-94.oa';
import { ms_bind_unbind_abstract_syntax_94 } from '../MSAccessProtocol/ms-bind-unbind-abstract-syntax-94.oa';
export { ms_bind_unbind_abstract_syntax_94 } from '../MSAccessProtocol/ms-bind-unbind-abstract-syntax-94.oa';
import { id_ac_ms_access_94 } from '../MHSProtocolObjectIdentifiers/id-ac-ms-access-94.va';
export { id_ac_ms_access_94 } from '../MHSProtocolObjectIdentifiers/id-ac-ms-access-94.va';
import { APPLICATION_CONTEXT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects-extensions/APPLICATION-CONTEXT.oca';
export { APPLICATION_CONTEXT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects-extensions/APPLICATION-CONTEXT.oca';

/* START_OF_SYMBOL_DEFINITION ms_access_94 */
/**
 * @summary ms_access_94
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-access-94 APPLICATION-CONTEXT ::= {
 *   CONTRACT                  ms-access-contract-94
 *   ESTABLISHED BY            acse
 *   INFORMATION TRANSFER BY   pData
 *   ABSTRACT SYNTAXES
 *     {acse-abstract-syntax | ms-message-submission-abstract-syntax |
 *       message-retrieval-abstract-syntax-94 |
 *       message-administration-abstract-syntax-94 |
 *       ms-bind-unbind-abstract-syntax-94}
 *   APPLICATION CONTEXT NAME  id-ac-ms-access-94
 * }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const ms_access_94: APPLICATION_CONTEXT = {
    class: 'APPLICATION-CONTEXT',
    decoderFor: {},
    encoderFor: {},
    '&associationContract': ms_access_contract_94 /* OBJECT_FIELD_SETTING */,
    '&associationRealization': acse /* OBJECT_FIELD_SETTING */,
    '&transferRealization': pData /* OBJECT_FIELD_SETTING */,
    '&AbstractSyntaxes': [
        acse_abstract_syntax,
        ms_message_submission_abstract_syntax,
        message_retrieval_abstract_syntax_94,
        message_administration_abstract_syntax_94,
        ms_bind_unbind_abstract_syntax_94,
    ] /* OBJECT_FIELD_SETTING */,
    '&applicationContextName': id_ac_ms_access_94 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&probe': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&acknowledge': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ms_access_94 */

/* eslint-enable */

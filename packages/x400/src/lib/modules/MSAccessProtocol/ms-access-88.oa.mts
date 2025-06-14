/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import { ms_access_contract_88 } from '../MSAbstractService/ms-access-contract-88.oa.mjs';
import { acse } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/acse.oa.mjs';
import { pData } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/pData.oa.mjs';
import { acse_abstract_syntax } from '@wildboar/rose/src/lib/modules/Remote-Operations-Abstract-Syntaxes/acse-abstract-syntax.oa.mjs';
import { message_submission_abstract_syntax } from '../MTSAccessProtocol/message-submission-abstract-syntax.oa.mjs';
import { message_retrieval_abstract_syntax_88 } from '../MSAccessProtocol/message-retrieval-abstract-syntax-88.oa.mjs';
import { message_administration_abstract_syntax_88 } from '../MTSAccessProtocol/message-administration-abstract-syntax-88.oa.mjs';
import { ms_bind_unbind_abstract_syntax_88 } from '../MSAccessProtocol/ms-bind-unbind-abstract-syntax-88.oa.mjs';
import { id_ac_ms_access_88 } from '../MHSProtocolObjectIdentifiers/id-ac-ms-access-88.va.mjs';
import { APPLICATION_CONTEXT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects-extensions/APPLICATION-CONTEXT.oca.mjs';
/* START_OF_SYMBOL_DEFINITION ms_access_88 */
/**
 * @summary ms_access_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-access-88 APPLICATION-CONTEXT ::= {
 *   CONTRACT                  ms-access-contract-88
 *   ESTABLISHED BY            acse
 *   INFORMATION TRANSFER BY   pData
 *   ABSTRACT SYNTAXES
 *     {acse-abstract-syntax | message-submission-abstract-syntax |
 *       message-retrieval-abstract-syntax-88 |
 *       message-administration-abstract-syntax-88 |
 *       ms-bind-unbind-abstract-syntax-88}
 *   APPLICATION CONTEXT NAME  id-ac-ms-access-88
 * }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const ms_access_88: APPLICATION_CONTEXT = {
    class: 'APPLICATION-CONTEXT',
    decoderFor: {},
    encoderFor: {},
    '&associationContract': ms_access_contract_88 /* OBJECT_FIELD_SETTING */,
    '&associationRealization': acse /* OBJECT_FIELD_SETTING */,
    '&transferRealization': pData /* OBJECT_FIELD_SETTING */,
    '&AbstractSyntaxes': [
        acse_abstract_syntax,
        message_submission_abstract_syntax,
        message_retrieval_abstract_syntax_88,
        message_administration_abstract_syntax_88,
        ms_bind_unbind_abstract_syntax_88,
    ] /* OBJECT_FIELD_SETTING */,
    '&applicationContextName': id_ac_ms_access_88 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&probe': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&acknowledge': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ms_access_88 */

/* eslint-enable */

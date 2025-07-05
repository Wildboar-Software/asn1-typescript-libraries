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
} from '@wildboar/asn1';
import { ms_access_contract_94 } from '../MSAbstractService/ms-access-contract-94.oa.mjs';
import { acse } from '@wildboar/rose';
import { pData } from '@wildboar/rose';
import { acse_abstract_syntax } from '@wildboar/rose';
import { ms_message_submission_abstract_syntax } from '../MSAccessProtocol/ms-message-submission-abstract-syntax.oa.mjs';
import { message_retrieval_abstract_syntax_94 } from '../MSAccessProtocol/message-retrieval-abstract-syntax-94.oa.mjs';
import { message_administration_abstract_syntax_94 } from '../MTSAccessProtocol/message-administration-abstract-syntax-94.oa.mjs';
import { ms_bind_unbind_abstract_syntax_94 } from '../MSAccessProtocol/ms-bind-unbind-abstract-syntax-94.oa.mjs';
import { id_ac_ms_access_94 } from '../MHSProtocolObjectIdentifiers/id-ac-ms-access-94.va.mjs';
import { type APPLICATION_CONTEXT } from '@wildboar/rose';
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

/* eslint-enable */

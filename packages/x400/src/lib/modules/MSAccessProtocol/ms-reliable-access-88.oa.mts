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
import { association_by_RTSE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/association-by-RTSE.oa.mjs';
import { transfer_by_RTSE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/transfer-by-RTSE.oa.mjs';
import { acse_abstract_syntax } from '@wildboar/rose/src/lib/modules/Remote-Operations-Abstract-Syntaxes/acse-abstract-syntax.oa.mjs';
import { message_submission_abstract_syntax } from '../MTSAccessProtocol/message-submission-abstract-syntax.oa.mjs';
import { message_retrieval_abstract_syntax_88 } from '../MSAccessProtocol/message-retrieval-abstract-syntax-88.oa.mjs';
import { message_administration_abstract_syntax_88 } from '../MTSAccessProtocol/message-administration-abstract-syntax-88.oa.mjs';
import { ms_bind_unbind_rtse_abstract_syntax } from '../MSAccessProtocol/ms-bind-unbind-rtse-abstract-syntax.oa.mjs';
import { id_ac_ms_reliable_access_88 } from '../MHSProtocolObjectIdentifiers/id-ac-ms-reliable-access-88.va.mjs';
import { APPLICATION_CONTEXT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects-extensions/APPLICATION-CONTEXT.oca.mjs';
/**
 * @summary ms_reliable_access_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-reliable-access-88 APPLICATION-CONTEXT ::= {
 *   CONTRACT                  ms-access-contract-88
 *   ESTABLISHED BY            association-by-RTSE
 *   INFORMATION TRANSFER BY   transfer-by-RTSE
 *   ABSTRACT SYNTAXES
 *     {acse-abstract-syntax | message-submission-abstract-syntax |
 *       message-retrieval-abstract-syntax-88 |
 *       message-administration-abstract-syntax-88 |
 *       ms-bind-unbind-rtse-abstract-syntax}
 *   APPLICATION CONTEXT NAME  id-ac-ms-reliable-access-88
 * }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const ms_reliable_access_88: APPLICATION_CONTEXT = {
    class: 'APPLICATION-CONTEXT',
    decoderFor: {},
    encoderFor: {},
    '&associationContract': ms_access_contract_88 /* OBJECT_FIELD_SETTING */,
    '&associationRealization': association_by_RTSE /* OBJECT_FIELD_SETTING */,
    '&transferRealization': transfer_by_RTSE /* OBJECT_FIELD_SETTING */,
    '&AbstractSyntaxes': [
        acse_abstract_syntax,
        message_submission_abstract_syntax,
        message_retrieval_abstract_syntax_88,
        message_administration_abstract_syntax_88,
        ms_bind_unbind_rtse_abstract_syntax,
    ] /* OBJECT_FIELD_SETTING */,
    '&applicationContextName': id_ac_ms_reliable_access_88 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&probe': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&acknowledge': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

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
import { mts_forced_access_contract } from '../MTSAbstractService/mts-forced-access-contract.oa.mjs';
import { association_by_RTSE } from '@wildboar/rose';
import { transfer_by_RTSE } from '@wildboar/rose';
import { acse_abstract_syntax } from '@wildboar/rose';
import { message_submission_abstract_syntax } from '../MTSAccessProtocol/message-submission-abstract-syntax.oa.mjs';
import { message_delivery_abstract_syntax } from '../MTSAccessProtocol/message-delivery-abstract-syntax.oa.mjs';
import { message_administration_abstract_syntax_94 } from '../MTSAccessProtocol/message-administration-abstract-syntax-94.oa.mjs';
import { mts_bind_unbind_rtse_abstract_syntax } from '../MTSAccessProtocol/mts-bind-unbind-rtse-abstract-syntax.oa.mjs';
import { id_ac_mts_forced_reliable_access_94 } from '../MHSProtocolObjectIdentifiers/id-ac-mts-forced-reliable-access-94.va.mjs';
import { type APPLICATION_CONTEXT } from '@wildboar/rose';
/**
 * @summary mts_forced_reliable_access_94
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-forced-reliable-access-94 APPLICATION-CONTEXT ::= {
 *   CONTRACT                  mts-forced-access-contract
 *   ESTABLISHED BY            association-by-RTSE
 *   INFORMATION TRANSFER BY   transfer-by-RTSE
 *   ABSTRACT SYNTAXES
 *     {acse-abstract-syntax | message-submission-abstract-syntax |
 *       message-delivery-abstract-syntax |
 *       message-administration-abstract-syntax-94 |
 *       mts-bind-unbind-rtse-abstract-syntax}
 *   APPLICATION CONTEXT NAME  id-ac-mts-forced-reliable-access-94
 * }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const mts_forced_reliable_access_94: APPLICATION_CONTEXT = {
    class: 'APPLICATION-CONTEXT',
    decoderFor: {},
    encoderFor: {},
    '&associationContract': mts_forced_access_contract /* OBJECT_FIELD_SETTING */,
    '&associationRealization': association_by_RTSE /* OBJECT_FIELD_SETTING */,
    '&transferRealization': transfer_by_RTSE /* OBJECT_FIELD_SETTING */,
    '&AbstractSyntaxes': [
        acse_abstract_syntax,
        message_submission_abstract_syntax,
        message_delivery_abstract_syntax,
        message_administration_abstract_syntax_94,
        mts_bind_unbind_rtse_abstract_syntax,
    ] /* OBJECT_FIELD_SETTING */,
    '&applicationContextName': id_ac_mts_forced_reliable_access_94 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&probe': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&acknowledge': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

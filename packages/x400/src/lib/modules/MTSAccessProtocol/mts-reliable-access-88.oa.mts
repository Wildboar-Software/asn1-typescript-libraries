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
import { mts_access_contract_88 } from '../MTSAbstractService88/mts-access-contract-88.oa.mjs';
import { association_by_RTSE } from '@wildboar/rose';
import { transfer_by_RTSE } from '@wildboar/rose';
import { acse_abstract_syntax } from '@wildboar/rose';
import { message_submission_abstract_syntax } from '../MTSAccessProtocol/message-submission-abstract-syntax.oa.mjs';
import { message_delivery_abstract_syntax_88 } from '../MTSAccessProtocol/message-delivery-abstract-syntax-88.oa.mjs';
import { message_administration_abstract_syntax_88 } from '../MTSAccessProtocol/message-administration-abstract-syntax-88.oa.mjs';
import { mts_bind_unbind_rtse_abstract_syntax } from '../MTSAccessProtocol/mts-bind-unbind-rtse-abstract-syntax.oa.mjs';
import { id_ac_mts_reliable_access_88 } from '../MHSProtocolObjectIdentifiers/id-ac-mts-reliable-access-88.va.mjs';
import { type APPLICATION_CONTEXT } from '@wildboar/rose';
/**
 * @summary mts_reliable_access_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-reliable-access-88 APPLICATION-CONTEXT ::= {
 *   CONTRACT                  mts-access-contract-88
 *   ESTABLISHED BY            association-by-RTSE
 *   INFORMATION TRANSFER BY   transfer-by-RTSE
 *   ABSTRACT SYNTAXES
 *     {acse-abstract-syntax | message-submission-abstract-syntax |
 *       message-delivery-abstract-syntax-88 |
 *       message-administration-abstract-syntax-88 |
 *       mts-bind-unbind-rtse-abstract-syntax}
 *   APPLICATION CONTEXT NAME  id-ac-mts-reliable-access-88
 * }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const mts_reliable_access_88: APPLICATION_CONTEXT = {
    class: 'APPLICATION-CONTEXT',
    decoderFor: {},
    encoderFor: {},
    '&associationContract': mts_access_contract_88 /* OBJECT_FIELD_SETTING */,
    '&associationRealization': association_by_RTSE /* OBJECT_FIELD_SETTING */,
    '&transferRealization': transfer_by_RTSE /* OBJECT_FIELD_SETTING */,
    '&AbstractSyntaxes': [
        acse_abstract_syntax,
        message_submission_abstract_syntax,
        message_delivery_abstract_syntax_88,
        message_administration_abstract_syntax_88,
        mts_bind_unbind_rtse_abstract_syntax,
    ] /* OBJECT_FIELD_SETTING */,
    '&applicationContextName': id_ac_mts_reliable_access_88 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&probe': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&acknowledge': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

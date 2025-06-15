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
import { mta_transfer } from '../MTAAbstractService/mta-transfer.oa.mjs';
import { association_by_RTSE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/association-by-RTSE.oa.mjs';
import { transfer_by_RTSE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/transfer-by-RTSE.oa.mjs';
import { acse_abstract_syntax } from '@wildboar/rose/src/lib/modules/Remote-Operations-Abstract-Syntaxes/acse-abstract-syntax.oa.mjs';
import { message_transfer_abstract_syntax } from '../MTSTransferProtocol/message-transfer-abstract-syntax.oa.mjs';
import { mta_bind_unbind_rtse_abstract_syntax } from '../MTSTransferProtocol/mta-bind-unbind-rtse-abstract-syntax.oa.mjs';
import { id_ac_mts_transfer } from '../MHSProtocolObjectIdentifiers/id-ac-mts-transfer.va.mjs';
import { APPLICATION_CONTEXT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects-extensions/APPLICATION-CONTEXT.oca.mjs';
/**
 * @summary mts_transfer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-transfer APPLICATION-CONTEXT ::= {
 *   CONTRACT                  mta-transfer
 *   ESTABLISHED BY            association-by-RTSE
 *   INFORMATION TRANSFER BY   transfer-by-RTSE
 *   ABSTRACT SYNTAXES
 *     {acse-abstract-syntax | message-transfer-abstract-syntax |
 *       mta-bind-unbind-rtse-abstract-syntax}
 *   APPLICATION CONTEXT NAME  id-ac-mts-transfer
 * }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const mts_transfer: APPLICATION_CONTEXT = {
    class: 'APPLICATION-CONTEXT',
    decoderFor: {},
    encoderFor: {},
    '&associationContract': mta_transfer /* OBJECT_FIELD_SETTING */,
    '&associationRealization': association_by_RTSE /* OBJECT_FIELD_SETTING */,
    '&transferRealization': transfer_by_RTSE /* OBJECT_FIELD_SETTING */,
    '&AbstractSyntaxes': [
        acse_abstract_syntax,
        message_transfer_abstract_syntax,
        mta_bind_unbind_rtse_abstract_syntax,
    ] /* OBJECT_FIELD_SETTING */,
    '&applicationContextName': id_ac_mts_transfer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&probe': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&acknowledge': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

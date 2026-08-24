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
import { mta_transfer } from '../MTAAbstractService/mta-transfer.oa.mjs';
import { association_by_RTSE } from '@wildboar/rose';
import { transfer_by_RTSE } from '@wildboar/rose';
import { acse_abstract_syntax } from '@wildboar/rose';
import { message_transfer_abstract_syntax } from '../MTSTransferProtocol/message-transfer-abstract-syntax.oa.mjs';
import { mta_bind_unbind_rtse_abstract_syntax } from '../MTSTransferProtocol/mta-bind-unbind-rtse-abstract-syntax.oa.mjs';
import { id_ac_mts_transfer } from '../MHSProtocolObjectIdentifiers/id-ac-mts-transfer.va.mjs';
import { type APPLICATION_CONTEXT } from '@wildboar/rose';
/**
 * @summary mts_transfer
 * @description
 *
 * Information object `mts_transfer`. The MTS Transfer Protocol (P1) provides the
 * following services defined in a) MTA-bind b) MTA-unbind 26 Message Transfer Service
 * Element (MTSE) c) Message-transfer d) Probe-transfer e) Report-transfer 11.3 Use of
 * Underlying Services The MTS Transfer Protocol (P1) makes use of underlying services as
 * described below. 11.3.1 Use of the RTSE Services The Reliable Transfer Service Element
 * (RTSE) is defined in CCITT Rec. See ITU-T X.419 (1999), §11.2.
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

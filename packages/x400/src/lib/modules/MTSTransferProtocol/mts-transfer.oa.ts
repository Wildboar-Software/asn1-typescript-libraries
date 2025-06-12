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
import { mta_transfer } from '../MTAAbstractService/mta-transfer.oa.js';
export { mta_transfer } from '../MTAAbstractService/mta-transfer.oa.js';
import { association_by_RTSE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/association-by-RTSE.oa.js';
export { association_by_RTSE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/association-by-RTSE.oa.js';
import { transfer_by_RTSE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/transfer-by-RTSE.oa.js';
export { transfer_by_RTSE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/transfer-by-RTSE.oa.js';
import { acse_abstract_syntax } from '@wildboar/rose/src/lib/modules/Remote-Operations-Abstract-Syntaxes/acse-abstract-syntax.oa.js';
export { acse_abstract_syntax } from '@wildboar/rose/src/lib/modules/Remote-Operations-Abstract-Syntaxes/acse-abstract-syntax.oa.js';
import { message_transfer_abstract_syntax } from '../MTSTransferProtocol/message-transfer-abstract-syntax.oa.js';
export { message_transfer_abstract_syntax } from '../MTSTransferProtocol/message-transfer-abstract-syntax.oa.js';
import { mta_bind_unbind_rtse_abstract_syntax } from '../MTSTransferProtocol/mta-bind-unbind-rtse-abstract-syntax.oa.js';
export { mta_bind_unbind_rtse_abstract_syntax } from '../MTSTransferProtocol/mta-bind-unbind-rtse-abstract-syntax.oa.js';
import { id_ac_mts_transfer } from '../MHSProtocolObjectIdentifiers/id-ac-mts-transfer.va.js';
export { id_ac_mts_transfer } from '../MHSProtocolObjectIdentifiers/id-ac-mts-transfer.va.js';
import { APPLICATION_CONTEXT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects-extensions/APPLICATION-CONTEXT.oca.js';
export { APPLICATION_CONTEXT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects-extensions/APPLICATION-CONTEXT.oca.js';

/* START_OF_SYMBOL_DEFINITION mts_transfer */
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
/* END_OF_SYMBOL_DEFINITION mts_transfer */

/* eslint-enable */

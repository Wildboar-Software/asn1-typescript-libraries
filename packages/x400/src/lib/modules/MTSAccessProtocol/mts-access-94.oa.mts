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
import { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca.mjs';
export { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca.mjs';
import { REALIZATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects-extensions/REALIZATION.oca.mjs';
export { REALIZATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects-extensions/REALIZATION.oca.mjs';
import { mts_access_contract } from '../MTSAbstractService/mts-access-contract.oa.mjs';
export { mts_access_contract } from '../MTSAbstractService/mts-access-contract.oa.mjs';
import { acse } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/acse.oa.mjs';
export { acse } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/acse.oa.mjs';
import { pData } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/pData.oa.mjs';
export { pData } from '@wildboar/rose/src/lib/modules/Remote-Operations-Realizations/pData.oa.mjs';
import { acse_abstract_syntax } from '@wildboar/rose/src/lib/modules/Remote-Operations-Abstract-Syntaxes/acse-abstract-syntax.oa.mjs';
export { acse_abstract_syntax } from '@wildboar/rose/src/lib/modules/Remote-Operations-Abstract-Syntaxes/acse-abstract-syntax.oa.mjs';
import { message_submission_abstract_syntax } from '../MTSAccessProtocol/message-submission-abstract-syntax.oa.mjs';
export { message_submission_abstract_syntax } from '../MTSAccessProtocol/message-submission-abstract-syntax.oa.mjs';
import { message_delivery_abstract_syntax } from '../MTSAccessProtocol/message-delivery-abstract-syntax.oa.mjs';
export { message_delivery_abstract_syntax } from '../MTSAccessProtocol/message-delivery-abstract-syntax.oa.mjs';
import { message_administration_abstract_syntax_94 } from '../MTSAccessProtocol/message-administration-abstract-syntax-94.oa.mjs';
export { message_administration_abstract_syntax_94 } from '../MTSAccessProtocol/message-administration-abstract-syntax-94.oa.mjs';
import { mts_bind_unbind_abstract_syntax } from '../MTSAccessProtocol/mts-bind-unbind-abstract-syntax.oa.mjs';
export { mts_bind_unbind_abstract_syntax } from '../MTSAccessProtocol/mts-bind-unbind-abstract-syntax.oa.mjs';
import { id_ac_mts_access_94 } from '../MHSProtocolObjectIdentifiers/id-ac-mts-access-94.va.mjs';
export { id_ac_mts_access_94 } from '../MHSProtocolObjectIdentifiers/id-ac-mts-access-94.va.mjs';
import { APPLICATION_CONTEXT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects-extensions/APPLICATION-CONTEXT.oca.mjs';
export { APPLICATION_CONTEXT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects-extensions/APPLICATION-CONTEXT.oca.mjs';

/* START_OF_SYMBOL_DEFINITION mts_access_94 */
/**
 * @summary mts_access_94
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-access-94 APPLICATION-CONTEXT ::= {
 *   CONTRACT                  mts-access-contract
 *   ESTABLISHED BY            acse
 *   INFORMATION TRANSFER BY   pData
 *   ABSTRACT SYNTAXES
 *     {acse-abstract-syntax | message-submission-abstract-syntax |
 *       message-delivery-abstract-syntax |
 *       message-administration-abstract-syntax-94 |
 *       mts-bind-unbind-abstract-syntax}
 *   APPLICATION CONTEXT NAME  id-ac-mts-access-94
 * }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const mts_access_94: APPLICATION_CONTEXT = {
    class: 'APPLICATION-CONTEXT',
    decoderFor: {},
    encoderFor: {},
    '&associationContract': mts_access_contract /* OBJECT_FIELD_SETTING */,
    '&associationRealization': acse /* OBJECT_FIELD_SETTING */,
    '&transferRealization': pData /* OBJECT_FIELD_SETTING */,
    '&AbstractSyntaxes': [
        acse_abstract_syntax,
        message_submission_abstract_syntax,
        message_delivery_abstract_syntax,
        message_administration_abstract_syntax_94,
        mts_bind_unbind_abstract_syntax,
    ] /* OBJECT_FIELD_SETTING */,
    '&applicationContextName': id_ac_mts_access_94 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&probe': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&acknowledge': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mts_access_94 */

/* eslint-enable */

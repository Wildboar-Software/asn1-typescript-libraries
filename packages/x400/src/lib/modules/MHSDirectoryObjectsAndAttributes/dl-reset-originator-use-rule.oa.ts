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
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js';
import { CONTEXT } from '@wildboar/x500/src/lib/modules/InformationFramework/CONTEXT.oca.js';
export { CONTEXT } from '@wildboar/x500/src/lib/modules/InformationFramework/CONTEXT.oca.js';
import { mhs_dl_members } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-members.oa.js';
export { mhs_dl_members } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-members.oa.js';
import { dl_reset_originator } from '../MHSDirectoryObjectsAndAttributes/dl-reset-originator.oa.js';
export { dl_reset_originator } from '../MHSDirectoryObjectsAndAttributes/dl-reset-originator.oa.js';
import { DIT_CONTEXT_USE_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/DIT-CONTEXT-USE-RULE.oca.js';
export { DIT_CONTEXT_USE_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/DIT-CONTEXT-USE-RULE.oca.js';

/* START_OF_SYMBOL_DEFINITION dl_reset_originator_use_rule */
/**
 * @summary dl_reset_originator_use_rule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dl-reset-originator-use-rule DIT-CONTEXT-USE-RULE ::= {
 *   ATTRIBUTE TYPE     mhs-dl-members.&id
 *   OPTIONAL CONTEXTS  {dl-reset-originator}
 * }
 * ```
 *
 * @constant
 * @type {DIT_CONTEXT_USE_RULE}
 * @implements {DIT_CONTEXT_USE_RULE}
 */
export const dl_reset_originator_use_rule: DIT_CONTEXT_USE_RULE = {
    class: 'DIT-CONTEXT-USE-RULE',
    decoderFor: {},
    encoderFor: {},
    '&attributeType':
        mhs_dl_members[
            '&id'
        ] /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Optional': [dl_reset_originator] /* OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dl_reset_originator_use_rule */

/* eslint-enable */

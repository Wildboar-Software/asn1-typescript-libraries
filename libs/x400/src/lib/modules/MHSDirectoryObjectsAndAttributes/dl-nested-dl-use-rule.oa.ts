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
import * as $ from 'asn1-ts/dist/node/functional';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
import { CONTEXT } from '@wildboar/x500/src/lib/modules/InformationFramework/CONTEXT.oca';
export { CONTEXT } from '@wildboar/x500/src/lib/modules/InformationFramework/CONTEXT.oca';
import { mhs_dl_members } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-members.oa';
export { mhs_dl_members } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-members.oa';
import { dl_nested_dl } from '../MHSDirectoryObjectsAndAttributes/dl-nested-dl.oa';
export { dl_nested_dl } from '../MHSDirectoryObjectsAndAttributes/dl-nested-dl.oa';
import { DIT_CONTEXT_USE_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/DIT-CONTEXT-USE-RULE.oca';
export { DIT_CONTEXT_USE_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/DIT-CONTEXT-USE-RULE.oca';

/* START_OF_SYMBOL_DEFINITION dl_nested_dl_use_rule */
/**
 * @summary dl_nested_dl_use_rule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dl-nested-dl-use-rule DIT-CONTEXT-USE-RULE ::= {
 *   ATTRIBUTE TYPE     mhs-dl-members.&id
 *   OPTIONAL CONTEXTS  {dl-nested-dl}
 * }
 * ```
 *
 * @constant
 * @type {DIT_CONTEXT_USE_RULE}
 * @implements {DIT_CONTEXT_USE_RULE}
 */
export const dl_nested_dl_use_rule: DIT_CONTEXT_USE_RULE = {
    class: 'DIT-CONTEXT-USE-RULE',
    decoderFor: {},
    encoderFor: {},
    '&attributeType':
        mhs_dl_members[
            '&id'
        ] /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Optional': [dl_nested_dl] /* OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dl_nested_dl_use_rule */

/* eslint-enable */

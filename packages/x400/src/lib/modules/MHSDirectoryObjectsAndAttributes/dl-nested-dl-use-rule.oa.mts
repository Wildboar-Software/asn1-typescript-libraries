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
import { mhs_dl_members } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-members.oa.mjs';
import { dl_nested_dl } from '../MHSDirectoryObjectsAndAttributes/dl-nested-dl.oa.mjs';
import { DIT_CONTEXT_USE_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/DIT-CONTEXT-USE-RULE.oca.mjs';
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

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
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    Redirection,
    _decode_Redirection,
    _encode_Redirection,
} from '../MTSAbstractService/Redirection.ta.mjs';
import { redirectionOrDLExpansionMatch } from '../MSMatchingRules/redirectionOrDLExpansionMatch.oa.mjs';
import { redirectionOrDLExpansionElementsMatch } from '../MSMatchingRules/redirectionOrDLExpansionElementsMatch.oa.mjs';
import { redirectionOrDLExpansionSubstringElementsMatch } from '../MSMatchingRules/redirectionOrDLExpansionSubstringElementsMatch.oa.mjs';
import { redirectionOrDLExpansionSingleElementMatch } from '../MSMatchingRules/redirectionOrDLExpansionSingleElementMatch.oa.mjs';
import { redirectionReasonMatch } from '../MSMatchingRules/redirectionReasonMatch.oa.mjs';
import { id_att_redirection_history } from '../MSObjectIdentifiers/id-att-redirection-history.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION mt_redirection_history */
/**
 * @summary mt_redirection_history
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-redirection-history X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  Redirection,
 *   OTHER MATCHING-RULES
 *     {redirectionOrDLExpansionMatch | redirectionOrDLExpansionElementsMatch |
 *       redirectionOrDLExpansionSubstringElementsMatch |
 *       redirectionOrDLExpansionSingleElementMatch | redirectionReasonMatch,
 *       ...},
 *   NUMERATION             multi-valued,
 *   ID                     id-att-redirection-history
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<Redirection>}
 * @implements {X413ATTRIBUTE<Redirection>}
 */
export const mt_redirection_history: X413ATTRIBUTE<Redirection> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_Redirection,
    },
    encoderFor: {
        '&Type': _encode_Redirection,
    },
    '&OtherMatches': [
        redirectionOrDLExpansionMatch,
        redirectionOrDLExpansionElementsMatch,
        redirectionOrDLExpansionSubstringElementsMatch,
        redirectionOrDLExpansionSingleElementMatch,
        redirectionReasonMatch,
    ] /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_redirection_history /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mt_redirection_history */

/* eslint-enable */

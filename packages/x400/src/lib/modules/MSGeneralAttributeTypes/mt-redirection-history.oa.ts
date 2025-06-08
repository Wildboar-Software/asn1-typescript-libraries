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
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
import {
    Redirection,
    _decode_Redirection,
    _encode_Redirection,
} from '../MTSAbstractService/Redirection.ta';
export {
    Redirection,
    _decode_Redirection,
    _encode_Redirection,
} from '../MTSAbstractService/Redirection.ta';
import { redirectionOrDLExpansionMatch } from '../MSMatchingRules/redirectionOrDLExpansionMatch.oa';
export { redirectionOrDLExpansionMatch } from '../MSMatchingRules/redirectionOrDLExpansionMatch.oa';
import { redirectionOrDLExpansionElementsMatch } from '../MSMatchingRules/redirectionOrDLExpansionElementsMatch.oa';
export { redirectionOrDLExpansionElementsMatch } from '../MSMatchingRules/redirectionOrDLExpansionElementsMatch.oa';
import { redirectionOrDLExpansionSubstringElementsMatch } from '../MSMatchingRules/redirectionOrDLExpansionSubstringElementsMatch.oa';
export { redirectionOrDLExpansionSubstringElementsMatch } from '../MSMatchingRules/redirectionOrDLExpansionSubstringElementsMatch.oa';
import { redirectionOrDLExpansionSingleElementMatch } from '../MSMatchingRules/redirectionOrDLExpansionSingleElementMatch.oa';
export { redirectionOrDLExpansionSingleElementMatch } from '../MSMatchingRules/redirectionOrDLExpansionSingleElementMatch.oa';
import { redirectionReasonMatch } from '../MSMatchingRules/redirectionReasonMatch.oa';
export { redirectionReasonMatch } from '../MSMatchingRules/redirectionReasonMatch.oa';
import { id_att_redirection_history } from '../MSObjectIdentifiers/id-att-redirection-history.va';
export { id_att_redirection_history } from '../MSObjectIdentifiers/id-att-redirection-history.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

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

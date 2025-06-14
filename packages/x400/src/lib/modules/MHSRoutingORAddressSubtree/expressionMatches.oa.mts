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
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs';
import {
    ExpressionMatches,
    _decode_ExpressionMatches,
    _encode_ExpressionMatches,
} from '../MHSRoutingORAddressSubtree/ExpressionMatches.ta.mjs';
import { id_at_mhs_expression_matches } from '../MHSRoutingObjectIdentifiers/id-at-mhs-expression-matches.va.mjs';
/* START_OF_SYMBOL_DEFINITION expressionMatches */
/**
 * @summary expressionMatches
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * expressionMatches ATTRIBUTE ::= {
 *   WITH SYNTAX   ExpressionMatches
 *   SINGLE VALUE  TRUE
 *   ID            id-at-mhs-expression-matches
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ExpressionMatches>}
 * @implements {ATTRIBUTE<ExpressionMatches>}
 */
export const expressionMatches: ATTRIBUTE<ExpressionMatches> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ExpressionMatches,
    },
    encoderFor: {
        '&Type': _encode_ExpressionMatches,
    },
    '&single-valued': false /* OBJECT_FIELD_SETTING */,
    '&id': id_at_mhs_expression_matches /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION expressionMatches */

/* eslint-enable */

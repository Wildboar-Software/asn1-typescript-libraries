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
    ForwardedTo,
    _decode_ForwardedTo,
    _encode_ForwardedTo,
} from '../EDIMSInformationObjects/ForwardedTo.ta.mjs';
import { oRNameMatch } from '../MSMatchingRules/oRNameMatch.oa.mjs';
import { id_nat_forwarded_to } from '../EDIMSObjectIdentifiers/id-nat-forwarded-to.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION forwarded_to */
/**
 * @summary forwarded_to
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * forwarded-to X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ForwardedTo,
 *   EQUALITY MATCHING-RULE  oRNameMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-nat-forwarded-to
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ForwardedTo>}
 * @implements {X413ATTRIBUTE<ForwardedTo>}
 */
export const forwarded_to: X413ATTRIBUTE<ForwardedTo> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ForwardedTo,
    },
    encoderFor: {
        '&Type': _encode_ForwardedTo,
    },
    '&equalityMatch': oRNameMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_forwarded_to /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION forwarded_to */

/* eslint-enable */

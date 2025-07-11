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
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    EDISupplementaryInformation,
    _decode_EDISupplementaryInformation,
    _encode_EDISupplementaryInformation,
} from '../EDIMSInformationObjects/EDISupplementaryInformation.ta.mjs';
import { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa.mjs';
import { mSSubstringsMatch } from '../MSMatchingRules/mSSubstringsMatch.oa.mjs';
import { id_nat_fn_supplementary_info } from '../EDIMSObjectIdentifiers/id-nat-fn-supplementary-info.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary fn_supplementary_information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * fn-supplementary-information X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX     EDISupplementaryInformation,
 *   EQUALITY MATCHING-RULE    mSStringMatch,
 *   SUBSTRINGS MATCHING-RULE  mSSubstringsMatch,
 *   NUMERATION                single-valued,
 *   ID                        id-nat-fn-supplementary-info
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDISupplementaryInformation>}
 * @implements {X413ATTRIBUTE<EDISupplementaryInformation>}
 */
export const fn_supplementary_information: X413ATTRIBUTE<EDISupplementaryInformation> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDISupplementaryInformation,
    },
    encoderFor: {
        '&Type': _encode_EDISupplementaryInformation,
    },
    '&equalityMatch': mSStringMatch /* OBJECT_FIELD_SETTING */,
    '&substringsMatch': mSSubstringsMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_fn_supplementary_info /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

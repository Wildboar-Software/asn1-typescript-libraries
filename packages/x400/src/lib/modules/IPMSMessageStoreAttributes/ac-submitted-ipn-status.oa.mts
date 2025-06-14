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
    SubmittedIPNStatus,
    _decode_SubmittedIPNStatus,
    _encode_SubmittedIPNStatus,
} from '../IPMSMessageStoreAttributes/SubmittedIPNStatus.ta.mjs';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
import { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.mjs';
import { id_cat_submitted_ipn_status } from '../IPMSObjectIdentifiers/id-cat-submitted-ipn-status.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION ac_submitted_ipn_status */
/**
 * @summary ac_submitted_ipn_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ac-submitted-ipn-status X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   SubmittedIPNStatus,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   ORDERING MATCHING-RULE  integerOrderingMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-cat-submitted-ipn-status
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SubmittedIPNStatus>}
 * @implements {X413ATTRIBUTE<SubmittedIPNStatus>}
 */
export const ac_submitted_ipn_status: X413ATTRIBUTE<SubmittedIPNStatus> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SubmittedIPNStatus,
    },
    encoderFor: {
        '&Type': _encode_SubmittedIPNStatus,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_cat_submitted_ipn_status /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ac_submitted_ipn_status */

/* eslint-enable */

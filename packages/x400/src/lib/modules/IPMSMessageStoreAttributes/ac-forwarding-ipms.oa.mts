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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
import { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.mjs';
import { id_cat_forwarding_ipms } from '../IPMSObjectIdentifiers/id-cat-forwarding-ipms.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ac_forwarding_ipms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ac-forwarding-ipms X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   SequenceNumber,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   ORDERING MATCHING-RULE  integerOrderingMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-cat-forwarding-ipms
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SequenceNumber>}
 * @implements {X413ATTRIBUTE<SequenceNumber>}
 */
export const ac_forwarding_ipms: X413ATTRIBUTE<SequenceNumber> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SequenceNumber,
    },
    encoderFor: {
        '&Type': _encode_SequenceNumber,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_cat_forwarding_ipms /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
import { integerMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { integerOrderingMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_cat_submitted_ipns } from '../IPMSObjectIdentifiers/id-cat-submitted-ipns.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ac_submitted_ipns
 * @description
 *
 * Information object `ac_submitted_ipns`. The AC Submitted IPNs attribute, which is
 * multi-valued, identifies the IPNs submitted in response to a delivered IPM. The
 * IPMS-MS shall record, by means of this attribute, any IPN submitted by the
 * IPMS-MS-user, and any NRN caused by the invocation of the Delete abstract-operation
 * (see 19.4), or caused as a consequence of auto-actions performed by the IPMS-MS. See
 * ITU-T X.420 (1999), §19.6.5.3.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ac-submitted-ipns X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   SequenceNumber,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   ORDERING MATCHING-RULE  integerOrderingMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-cat-submitted-ipns
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SequenceNumber>}
 * @implements {X413ATTRIBUTE<SequenceNumber>}
 */
export const ac_submitted_ipns: X413ATTRIBUTE<SequenceNumber> = {
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
    '&id': id_cat_submitted_ipns /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

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
    EDINStatus,
    _decode_EDINStatus,
    _encode_EDINStatus,
} from '../EDIMSMessageStoreAttributes/EDINStatus.ta.mjs';
import { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa.mjs';
import { id_cat_delivered_edin_summary } from '../EDIMSObjectIdentifiers/id-cat-delivered-edin-summary.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ac_delivered_edin_summary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ac-delivered-edin-summary X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   EDINStatus,
 *   EQUALITY MATCHING-RULE  bitStringMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-cat-delivered-edin-summary
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDINStatus>}
 * @implements {X413ATTRIBUTE<EDINStatus>}
 */
export const ac_delivered_edin_summary: X413ATTRIBUTE<EDINStatus> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDINStatus,
    },
    encoderFor: {
        '&Type': _encode_EDINStatus,
    },
    '&equalityMatch': bitStringMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_cat_delivered_edin_summary /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

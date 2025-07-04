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
import { bitStringMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_cat_submitted_edin_status } from '../EDIMSObjectIdentifiers/id-cat-submitted-edin-status.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ac_submitted_edin_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ac-submitted-edin-status X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   EDINStatus,
 *   EQUALITY MATCHING-RULE  bitStringMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-cat-submitted-edin-status
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDINStatus>}
 * @implements {X413ATTRIBUTE<EDINStatus>}
 */
export const ac_submitted_edin_status: X413ATTRIBUTE<EDINStatus> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDINStatus,
    },
    encoderFor: {
        '&Type': _encode_EDINStatus,
    },
    '&equalityMatch': bitStringMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_cat_submitted_edin_status /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

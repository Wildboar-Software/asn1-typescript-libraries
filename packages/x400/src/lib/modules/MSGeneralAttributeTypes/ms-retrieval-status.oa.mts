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
    RetrievalStatus,
    _decode_RetrievalStatus,
    _encode_RetrievalStatus,
} from '../MSAbstractService/RetrievalStatus.ta.mjs';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
import { id_att_retrieval_status } from '../MSObjectIdentifiers/id-att-retrieval-status.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ms_retrieval_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-retrieval-status X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   RetrievalStatus,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-retrieval-status
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<RetrievalStatus>}
 * @implements {X413ATTRIBUTE<RetrievalStatus>}
 */
export const ms_retrieval_status: X413ATTRIBUTE<RetrievalStatus> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_RetrievalStatus,
    },
    encoderFor: {
        '&Type': _encode_RetrievalStatus,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_retrieval_status /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

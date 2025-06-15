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
    BodyPartDescriptor,
    _decode_BodyPartDescriptor,
    _encode_BodyPartDescriptor,
} from '../IPMSMessageStoreAttributes/BodyPartDescriptor.ta.mjs';
import { id_sat_body_parts_summary } from '../IPMSObjectIdentifiers/id-sat-body-parts-summary.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary body_parts_summary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * body-parts-summary X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  BodyPartDescriptor,
 *   NUMERATION             multi-valued,
 *   ID                     id-sat-body-parts-summary
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<BodyPartDescriptor>}
 * @implements {X413ATTRIBUTE<BodyPartDescriptor>}
 */
export const body_parts_summary: X413ATTRIBUTE<BodyPartDescriptor> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_BodyPartDescriptor,
    },
    encoderFor: {
        '&Type': _encode_BodyPartDescriptor,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_sat_body_parts_summary /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

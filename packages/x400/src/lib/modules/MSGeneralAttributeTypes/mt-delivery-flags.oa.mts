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
    DeliveryFlags,
    _decode_DeliveryFlags,
    _encode_DeliveryFlags,
} from '../MTSAbstractService/DeliveryFlags.ta.mjs';
import { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa.mjs';
import { id_att_delivery_flags } from '../MSObjectIdentifiers/id-att-delivery-flags.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_delivery_flags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-delivery-flags X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   DeliveryFlags,
 *   EQUALITY MATCHING-RULE  bitStringMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-delivery-flags
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<DeliveryFlags>}
 * @implements {X413ATTRIBUTE<DeliveryFlags>}
 */
export const mt_delivery_flags: X413ATTRIBUTE<DeliveryFlags> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_DeliveryFlags,
    },
    encoderFor: {
        '&Type': _encode_DeliveryFlags,
    },
    '&equalityMatch': bitStringMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_delivery_flags /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

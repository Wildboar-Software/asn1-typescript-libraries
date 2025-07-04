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
    ConversionWithLossProhibited,
    _enum_for_ConversionWithLossProhibited,
    _decode_ConversionWithLossProhibited,
    _encode_ConversionWithLossProhibited,
} from '../MTSAbstractService/ConversionWithLossProhibited.ta.mjs';
import { integerMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_att_conversion_with_loss_prohibited } from '../MSObjectIdentifiers/id-att-conversion-with-loss-prohibited.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_conversion_with_loss_prohibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-conversion-with-loss-prohibited X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ConversionWithLossProhibited,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-conversion-with-loss-prohibited
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ConversionWithLossProhibited>}
 * @implements {X413ATTRIBUTE<ConversionWithLossProhibited>}
 */
export const mt_conversion_with_loss_prohibited: X413ATTRIBUTE<ConversionWithLossProhibited> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ConversionWithLossProhibited,
    },
    encoderFor: {
        '&Type': _encode_ConversionWithLossProhibited,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_conversion_with_loss_prohibited /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

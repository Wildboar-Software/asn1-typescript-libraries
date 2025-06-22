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
    ThisEDIMField,
    _decode_ThisEDIMField,
    _encode_ThisEDIMField,
} from '../EDIMSInformationObjects/ThisEDIMField.ta.mjs';
import { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa.mjs';
import { id_hat_this_edim } from '../EDIMSObjectIdentifiers/id-hat-this-edim.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary this_edim
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * this-edim X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ThisEDIMField,
 *   EQUALITY MATCHING-RULE  iPMIdentifierMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-hat-this-edim
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ThisEDIMField>}
 * @implements {X413ATTRIBUTE<ThisEDIMField>}
 */
export const this_edim: X413ATTRIBUTE<ThisEDIMField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ThisEDIMField,
    },
    encoderFor: {
        '&Type': _encode_ThisEDIMField,
    },
    '&equalityMatch': iPMIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_this_edim /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

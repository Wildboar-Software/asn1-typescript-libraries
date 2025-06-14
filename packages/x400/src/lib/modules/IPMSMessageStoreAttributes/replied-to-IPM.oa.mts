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
    RepliedToIPMField,
    _decode_RepliedToIPMField,
    _encode_RepliedToIPMField,
} from '../IPMSInformationObjects/RepliedToIPMField.ta.mjs';
import { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa.mjs';
import { id_hat_replied_to_IPM } from '../IPMSObjectIdentifiers/id-hat-replied-to-IPM.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION replied_to_IPM */
/**
 * @summary replied_to_IPM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * replied-to-IPM X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   RepliedToIPMField,
 *   EQUALITY MATCHING-RULE  iPMIdentifierMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-hat-replied-to-IPM
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<RepliedToIPMField>}
 * @implements {X413ATTRIBUTE<RepliedToIPMField>}
 */
export const replied_to_IPM: X413ATTRIBUTE<RepliedToIPMField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_RepliedToIPMField,
    },
    encoderFor: {
        '&Type': _encode_RepliedToIPMField,
    },
    '&equalityMatch': iPMIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_replied_to_IPM /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION replied_to_IPM */

/* eslint-enable */

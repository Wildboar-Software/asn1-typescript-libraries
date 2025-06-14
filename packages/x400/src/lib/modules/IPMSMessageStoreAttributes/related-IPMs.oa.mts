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
    RelatedIPMsSubfield,
    _decode_RelatedIPMsSubfield,
    _encode_RelatedIPMsSubfield,
} from '../IPMSInformationObjects/RelatedIPMsSubfield.ta.mjs';
import { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa.mjs';
import { id_hat_related_IPMs } from '../IPMSObjectIdentifiers/id-hat-related-IPMs.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION related_IPMs */
/**
 * @summary related_IPMs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * related-IPMs X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   RelatedIPMsSubfield,
 *   EQUALITY MATCHING-RULE  iPMIdentifierMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-related-IPMs
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<RelatedIPMsSubfield>}
 * @implements {X413ATTRIBUTE<RelatedIPMsSubfield>}
 */
export const related_IPMs: X413ATTRIBUTE<RelatedIPMsSubfield> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_RelatedIPMsSubfield,
    },
    encoderFor: {
        '&Type': _encode_RelatedIPMsSubfield,
    },
    '&equalityMatch': iPMIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_related_IPMs /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION related_IPMs */

/* eslint-enable */

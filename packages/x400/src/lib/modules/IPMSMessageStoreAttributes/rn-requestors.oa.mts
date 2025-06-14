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
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta.mjs';
import { oRDescriptorMatch } from '../IPMSMessageStoreAttributes/oRDescriptorMatch.oa.mjs';
import { id_hat_rn_requestors } from '../IPMSObjectIdentifiers/id-hat-rn-requestors.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION rn_requestors */
/**
 * @summary rn_requestors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rn-requestors X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ORDescriptor,
 *   EQUALITY MATCHING-RULE  oRDescriptorMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-rn-requestors
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ORDescriptor>}
 * @implements {X413ATTRIBUTE<ORDescriptor>}
 */
export const rn_requestors: X413ATTRIBUTE<ORDescriptor> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ORDescriptor,
    },
    encoderFor: {
        '&Type': _encode_ORDescriptor,
    },
    '&equalityMatch': oRDescriptorMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_rn_requestors /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION rn_requestors */

/* eslint-enable */

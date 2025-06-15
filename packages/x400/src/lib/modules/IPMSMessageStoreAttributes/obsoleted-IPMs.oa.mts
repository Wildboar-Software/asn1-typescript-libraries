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
    ObsoletedIPMsSubfield,
    _decode_ObsoletedIPMsSubfield,
    _encode_ObsoletedIPMsSubfield,
} from '../IPMSInformationObjects/ObsoletedIPMsSubfield.ta.mjs';
import { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa.mjs';
import { id_hat_obsoleted_IPMs } from '../IPMSObjectIdentifiers/id-hat-obsoleted-IPMs.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary obsoleted_IPMs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * obsoleted-IPMs X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ObsoletedIPMsSubfield,
 *   EQUALITY MATCHING-RULE  iPMIdentifierMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-obsoleted-IPMs
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ObsoletedIPMsSubfield>}
 * @implements {X413ATTRIBUTE<ObsoletedIPMsSubfield>}
 */
export const obsoleted_IPMs: X413ATTRIBUTE<ObsoletedIPMsSubfield> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ObsoletedIPMsSubfield,
    },
    encoderFor: {
        '&Type': _encode_ObsoletedIPMsSubfield,
    },
    '&equalityMatch': iPMIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_obsoleted_IPMs /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

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
    ObsoletedEDIMsSubfield,
    _decode_ObsoletedEDIMsSubfield,
    _encode_ObsoletedEDIMsSubfield,
} from '../EDIMSInformationObjects/ObsoletedEDIMsSubfield.ta.mjs';
import { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa.mjs';
import { id_hat_obsoleted_edims } from '../EDIMSObjectIdentifiers/id-hat-obsoleted-edims.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary obsoleted_edims
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * obsoleted-edims X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ObsoletedEDIMsSubfield,
 *   EQUALITY MATCHING-RULE  iPMIdentifierMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-obsoleted-edims
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ObsoletedEDIMsSubfield>}
 * @implements {X413ATTRIBUTE<ObsoletedEDIMsSubfield>}
 */
export const obsoleted_edims: X413ATTRIBUTE<ObsoletedEDIMsSubfield> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ObsoletedEDIMsSubfield,
    },
    encoderFor: {
        '&Type': _encode_ObsoletedEDIMsSubfield,
    },
    '&equalityMatch': iPMIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_obsoleted_edims /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

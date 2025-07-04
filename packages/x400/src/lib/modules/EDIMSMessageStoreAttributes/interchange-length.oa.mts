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
    InterchangeLength,
    _decode_InterchangeLength,
    _encode_InterchangeLength,
} from '../EDIMSMessageStoreAttributes/InterchangeLength.ta.mjs';
import { integerOrderingMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_bat_interchange_length } from '../EDIMSObjectIdentifiers/id-bat-interchange-length.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary interchange_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * interchange-length X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   InterchangeLength,
 *   ORDERING MATCHING-RULE  integerOrderingMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-bat-interchange-length
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<InterchangeLength>}
 * @implements {X413ATTRIBUTE<InterchangeLength>}
 */
export const interchange_length: X413ATTRIBUTE<InterchangeLength> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_InterchangeLength,
    },
    encoderFor: {
        '&Type': _encode_InterchangeLength,
    },
    '&orderingMatch': integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_interchange_length /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

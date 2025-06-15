/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import { objectIdentifierMatch } from '@wildboar/x500/src/lib/modules/InformationFramework/objectIdentifierMatch.oa.mjs';
import { id_bat_extended_body_part_types } from '../IPMSObjectIdentifiers/id-bat-extended-body-part-types.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary extended_body_part_types
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extended-body-part-types X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   OBJECT IDENTIFIER,
 *   EQUALITY MATCHING-RULE  objectIdentifierMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-bat-extended-body-part-types
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<OBJECT_IDENTIFIER>}
 * @implements {X413ATTRIBUTE<OBJECT_IDENTIFIER>}
 */
export const extended_body_part_types: X413ATTRIBUTE<OBJECT_IDENTIFIER> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': $._decodeObjectIdentifier,
    },
    encoderFor: {
        '&Type': $._encodeObjectIdentifier,
    },
    '&equalityMatch': objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_extended_body_part_types /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

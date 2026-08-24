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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import { objectIdentifierMatch } from '@wildboar/x500/InformationFramework';
import { id_bat_extended_body_part_types } from '../EDIMSObjectIdentifiers/id-bat-extended-body-part-types.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary extended_body_part_types
 * @description
 *
 * Information object `extended_body_part_types`. The types of body parts that may appear
 * in the Body of an EDIM are defined and described below. 8.3.1 EDI Body Part An EDI
 * Body Part carries a single EDI Interchange. See ITU-T X.435 (1999), §8.3.
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

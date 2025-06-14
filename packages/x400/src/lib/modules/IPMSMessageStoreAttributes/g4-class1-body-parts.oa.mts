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
    G4Class1BodyPart,
    _decode_G4Class1BodyPart,
    _encode_G4Class1BodyPart,
} from '../IPMSInformationObjects/G4Class1BodyPart.ta.mjs';
import { id_bat_g4_class1_body_parts } from '../IPMSObjectIdentifiers/id-bat-g4-class1-body-parts.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION g4_class1_body_parts */
/**
 * @summary g4_class1_body_parts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * g4-class1-body-parts X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  G4Class1BodyPart,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-g4-class1-body-parts
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<G4Class1BodyPart>}
 * @implements {X413ATTRIBUTE<G4Class1BodyPart>}
 */
export const g4_class1_body_parts: X413ATTRIBUTE<G4Class1BodyPart> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_G4Class1BodyPart,
    },
    encoderFor: {
        '&Type': _encode_G4Class1BodyPart,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_g4_class1_body_parts /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION g4_class1_body_parts */

/* eslint-enable */

/* eslint-disable */
import {
    TYPE_IDENTIFIER,
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
    G4Class1BodyPart,
    _decode_G4Class1BodyPart,
    _encode_G4Class1BodyPart,
} from '../IPMSInformationObjects/G4Class1BodyPart.ta.mjs';
import { id_et_g4_class1 } from '../IPMSObjectIdentifiers/id-et-g4-class1.va.mjs';
/* START_OF_SYMBOL_DEFINITION g4_class1_body_part_data */
/**
 * @summary g4_class1_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * g4-class1-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<G4Class1BodyPart>}
 * @implements {TYPE_IDENTIFIER<G4Class1BodyPart>}
 */
export const g4_class1_body_part_data: TYPE_IDENTIFIER<G4Class1BodyPart> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_G4Class1BodyPart,
    },
    encoderFor: {
        '&Type': _encode_G4Class1BodyPart,
    },
    '&id': id_et_g4_class1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION g4_class1_body_part_data */

/* eslint-enable */

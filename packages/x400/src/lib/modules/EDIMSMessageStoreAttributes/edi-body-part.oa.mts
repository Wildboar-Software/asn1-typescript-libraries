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
    EDIBodyPart,
    _decode_EDIBodyPart,
    _encode_EDIBodyPart,
} from '../EDIMSInformationObjects/EDIBodyPart.ta.mjs';
import { id_bat_edi_body_part } from '../EDIMSObjectIdentifiers/id-bat-edi-body-part.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION edi_body_part */
/**
 * @summary edi_body_part
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-body-part X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  EDIBodyPart,
 *   NUMERATION             single-valued,
 *   ID                     id-bat-edi-body-part
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDIBodyPart>}
 * @implements {X413ATTRIBUTE<EDIBodyPart>}
 */
export const edi_body_part: X413ATTRIBUTE<EDIBodyPart> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDIBodyPart,
    },
    encoderFor: {
        '&Type': _encode_EDIBodyPart,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_edi_body_part /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION edi_body_part */

/* eslint-enable */

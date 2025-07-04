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
    EDIBodyPartType,
    _decode_EDIBodyPartType,
    _encode_EDIBodyPartType,
} from '../EDIMSInformationObjects/EDIBodyPartType.ta.mjs';
import { objectIdentifierMatch } from '@wildboar/x500/InformationFramework';
import { id_hat_edi_bodypart_type } from '../EDIMSObjectIdentifiers/id-hat-edi-bodypart-type.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary edi_bodypart_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-bodypart-type X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   EDIBodyPartType,
 *   EQUALITY MATCHING-RULE  objectIdentifierMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-hat-edi-bodypart-type
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDIBodyPartType>}
 * @implements {X413ATTRIBUTE<EDIBodyPartType>}
 */
export const edi_bodypart_type: X413ATTRIBUTE<EDIBodyPartType> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDIBodyPartType,
    },
    encoderFor: {
        '&Type': _encode_EDIBodyPartType,
    },
    '&equalityMatch': objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_edi_bodypart_type /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

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
    Body,
    _decode_Body,
    _encode_Body,
} from '../IPMSInformationObjects/Body.ta.mjs';
import { id_bat_body } from '../IPMSObjectIdentifiers/id-bat-body.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary body
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * body X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  Body,
 *   NUMERATION             single-valued,
 *   ID                     id-bat-body
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<Body>}
 * @implements {X413ATTRIBUTE<Body>}
 */
export const body: X413ATTRIBUTE<Body> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_Body,
    },
    encoderFor: {
        '&Type': _encode_Body,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_body /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

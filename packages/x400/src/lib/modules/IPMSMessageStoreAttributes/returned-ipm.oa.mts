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
    ReturnedIPMField,
    _decode_ReturnedIPMField,
    _encode_ReturnedIPMField,
} from '../IPMSInformationObjects/ReturnedIPMField.ta.mjs';
import { id_nat_returned_ipm } from '../IPMSObjectIdentifiers/id-nat-returned-ipm.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary returned_ipm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * returned-ipm X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  ReturnedIPMField,
 *   NUMERATION             single-valued,
 *   ID                     id-nat-returned-ipm
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ReturnedIPMField>}
 * @implements {X413ATTRIBUTE<ReturnedIPMField>}
 */
export const returned_ipm: X413ATTRIBUTE<ReturnedIPMField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ReturnedIPMField,
    },
    encoderFor: {
        '&Type': _encode_ReturnedIPMField,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_returned_ipm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

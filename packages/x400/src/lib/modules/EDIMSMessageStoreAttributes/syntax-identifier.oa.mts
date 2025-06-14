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
    SyntaxIdentifierField,
    _decode_SyntaxIdentifierField,
    _encode_SyntaxIdentifierField,
} from '../EDIMSInformationObjects/SyntaxIdentifierField.ta.mjs';
import { id_hat_syntax_identifier } from '../EDIMSObjectIdentifiers/id-hat-syntax-identifier.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION syntax_identifier */
/**
 * @summary syntax_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * syntax-identifier X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  SyntaxIdentifierField,
 *
 *   -- EQUALITY MATCHING-RULE   rule not defined
 *   NUMERATION             single-valued,
 *   ID                     id-hat-syntax-identifier
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SyntaxIdentifierField>}
 * @implements {X413ATTRIBUTE<SyntaxIdentifierField>}
 */
export const syntax_identifier: X413ATTRIBUTE<SyntaxIdentifierField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SyntaxIdentifierField,
    },
    encoderFor: {
        '&Type': _encode_SyntaxIdentifierField,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_syntax_identifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION syntax_identifier */

/* eslint-enable */

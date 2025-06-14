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
    FNExtensionsSubField,
    _decode_FNExtensionsSubField,
    _encode_FNExtensionsSubField,
} from '../EDIMSInformationObjects/FNExtensionsSubField.ta.mjs';
import { id_nat_fn_extensions } from '../EDIMSObjectIdentifiers/id-nat-fn-extensions.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION fn_extensions */
/**
 * @summary fn_extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * fn-extensions X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  FNExtensionsSubField,
 *
 *   -- EQUALITY MATCHING-RULE   rule not defined
 *   NUMERATION             multi-valued,
 *   ID                     id-nat-fn-extensions
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<FNExtensionsSubField>}
 * @implements {X413ATTRIBUTE<FNExtensionsSubField>}
 */
export const fn_extensions: X413ATTRIBUTE<FNExtensionsSubField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_FNExtensionsSubField,
    },
    encoderFor: {
        '&Type': _encode_FNExtensionsSubField,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_fn_extensions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION fn_extensions */

/* eslint-enable */

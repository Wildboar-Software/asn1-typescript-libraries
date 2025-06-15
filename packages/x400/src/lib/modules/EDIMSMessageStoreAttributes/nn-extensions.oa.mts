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
    NNExtensionsSubField,
    _decode_NNExtensionsSubField,
    _encode_NNExtensionsSubField,
} from '../EDIMSInformationObjects/NNExtensionsSubField.ta.mjs';
import { id_nat_nn_extensions } from '../EDIMSObjectIdentifiers/id-nat-nn-extensions.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary nn_extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nn-extensions X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  NNExtensionsSubField,
 *
 *   -- EQUALITY MATCHING-RULE   rule not defined
 *   NUMERATION             multi-valued,
 *   ID                     id-nat-nn-extensions
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<NNExtensionsSubField>}
 * @implements {X413ATTRIBUTE<NNExtensionsSubField>}
 */
export const nn_extensions: X413ATTRIBUTE<NNExtensionsSubField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_NNExtensionsSubField,
    },
    encoderFor: {
        '&Type': _encode_NNExtensionsSubField,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_nn_extensions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

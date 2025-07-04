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
    HeadingExtensionsSubField,
    _decode_HeadingExtensionsSubField,
    _encode_HeadingExtensionsSubField,
} from '../EDIMSInformationObjects/HeadingExtensionsSubField.ta.mjs';
import { id_hat_heading_extensions } from '../EDIMSObjectIdentifiers/id-hat-heading-extensions.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary heading_extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * heading-extensions X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  HeadingExtensionsSubField,
 *
 *   -- EQUALITY MATCHING-RULE   rule not defined
 *   NUMERATION             multi-valued,
 *   ID                     id-hat-heading-extensions
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<HeadingExtensionsSubField>}
 * @implements {X413ATTRIBUTE<HeadingExtensionsSubField>}
 */
export const heading_extensions: X413ATTRIBUTE<HeadingExtensionsSubField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_HeadingExtensionsSubField,
    },
    encoderFor: {
        '&Type': _encode_HeadingExtensionsSubField,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_heading_extensions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

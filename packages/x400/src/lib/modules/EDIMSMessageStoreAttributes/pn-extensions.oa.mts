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
    PNExtensionsSubField,
    _decode_PNExtensionsSubField,
    _encode_PNExtensionsSubField,
} from '../EDIMSInformationObjects/PNExtensionsSubField.ta.mjs';
import { id_nat_pn_extensions } from '../EDIMSObjectIdentifiers/id-nat-pn-extensions.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary pn_extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pn-extensions X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  PNExtensionsSubField,
 *
 *   -- EQUALITY MATCHING-RULE   rule not defined
 *   NUMERATION             multi-valued,
 *   ID                     id-nat-pn-extensions
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<PNExtensionsSubField>}
 * @implements {X413ATTRIBUTE<PNExtensionsSubField>}
 */
export const pn_extensions: X413ATTRIBUTE<PNExtensionsSubField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_PNExtensionsSubField,
    },
    encoderFor: {
        '&Type': _encode_PNExtensionsSubField,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_pn_extensions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

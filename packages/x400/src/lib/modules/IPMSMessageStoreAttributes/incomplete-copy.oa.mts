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
    IncompleteCopy,
    _decode_IncompleteCopy,
    _encode_IncompleteCopy,
} from '../IPMSHeadingExtensions/IncompleteCopy.ta.mjs';
import { id_hat_incomplete_copy } from '../IPMSObjectIdentifiers/id-hat-incomplete-copy.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary incomplete_copy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * incomplete-copy X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  IncompleteCopy,
 *   NUMERATION
 *     single-valued, -- An equality match is specified for 1988
 *
 *
 *   -- Application Contexts
 *   ID                     id-hat-incomplete-copy
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<IncompleteCopy>}
 * @implements {X413ATTRIBUTE<IncompleteCopy>}
 */
export const incomplete_copy: X413ATTRIBUTE<IncompleteCopy> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_IncompleteCopy,
    },
    encoderFor: {
        '&Type': _encode_IncompleteCopy,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_incomplete_copy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

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
    Heading,
    _decode_Heading,
    _encode_Heading,
} from '../EDIMSInformationObjects/Heading.ta.mjs';
import { id_hat_heading } from '../EDIMSObjectIdentifiers/id-hat-heading.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary heading
 * @description
 *
 * Information object `heading`. The Heading attribute is the (entire) Heading of an
 * EDIM. 
 * 
 * An MS that supports this attribute shall maintain it for an
 * information object that it holds if, and only if, that object is a message whose
 * content is an EDIM. See ITU-T X.435 (1999), §18.8.3.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * heading X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  Heading,
 *   NUMERATION             single-valued,
 *   ID                     id-hat-heading
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<Heading>}
 * @implements {X413ATTRIBUTE<Heading>}
 */
export const heading: X413ATTRIBUTE<Heading> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_Heading,
    },
    encoderFor: {
        '&Type': _encode_Heading,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_heading /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
export {
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    Criticality,
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    for_submission /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_transfer /* IMPORTED_LONG_NAMED_BIT */,
    for_transfer /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    for_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
export {
    Criticality,
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    for_submission /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_transfer /* IMPORTED_LONG_NAMED_BIT */,
    for_transfer /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    for_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    PhysicalRenditionAttributes,
    _decode_PhysicalRenditionAttributes,
    _encode_PhysicalRenditionAttributes,
} from '../MTSAbstractService/PhysicalRenditionAttributes.ta.mjs';
export {
    PhysicalRenditionAttributes,
    _decode_PhysicalRenditionAttributes,
    _encode_PhysicalRenditionAttributes,
} from '../MTSAbstractService/PhysicalRenditionAttributes.ta.mjs';
import { id_att_physicalRendition_basic } from '../MTSObjectIdentifiers/id-att-physicalRendition-basic.va.mjs';
export { id_att_physicalRendition_basic } from '../MTSObjectIdentifiers/id-att-physicalRendition-basic.va.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
export { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';

/* START_OF_SYMBOL_DEFINITION physical_rendition_attributes */
/**
 * @summary physical_rendition_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-rendition-attributes EXTENSION ::= {
 *   PhysicalRenditionAttributes
 *   IF ABSENT                id-att-physicalRendition-basic,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:12
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<PhysicalRenditionAttributes>}
 * @implements {EXTENSION<PhysicalRenditionAttributes>}
 */
export const physical_rendition_attributes: EXTENSION<PhysicalRenditionAttributes> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_PhysicalRenditionAttributes,
    },
    encoderFor: {
        '&Type': _encode_PhysicalRenditionAttributes,
    },
    '&absent': id_att_physicalRendition_basic /* OBJECT_FIELD_SETTING */,
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(3);
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 12,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION physical_rendition_attributes */

/* eslint-enable */

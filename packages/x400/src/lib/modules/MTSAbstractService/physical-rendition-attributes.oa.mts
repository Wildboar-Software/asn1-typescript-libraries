/* eslint-disable */
import {
    TRUE_BIT,
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
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    PhysicalRenditionAttributes,
    _decode_PhysicalRenditionAttributes,
    _encode_PhysicalRenditionAttributes,
} from '../MTSAbstractService/PhysicalRenditionAttributes.ta.mjs';
import { id_att_physicalRendition_basic } from '../MTSObjectIdentifiers/id-att-physicalRendition-basic.va.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
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

/* eslint-enable */

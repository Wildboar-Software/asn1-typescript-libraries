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
    UniversalDomainDefinedAttributes,
    _decode_UniversalDomainDefinedAttributes,
    _encode_UniversalDomainDefinedAttributes,
} from '../MTSAbstractService/UniversalDomainDefinedAttributes.ta.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary universal_domain_defined_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-domain-defined-attributes EXTENSION-ATTRIBUTE ::= {
 *   UniversalDomainDefinedAttributes
 *   IDENTIFIED BY  28
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalDomainDefinedAttributes>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalDomainDefinedAttributes>}
 */
export const universal_domain_defined_attributes: EXTENSION_ATTRIBUTE<UniversalDomainDefinedAttributes> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UniversalDomainDefinedAttributes,
    },
    encoderFor: {
        '&Type': _encode_UniversalDomainDefinedAttributes,
    },
    '&id': 28 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

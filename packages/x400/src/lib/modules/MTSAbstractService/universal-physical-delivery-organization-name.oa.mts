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
    UniversalPhysicalDeliveryOrganizationName,
    _decode_UniversalPhysicalDeliveryOrganizationName,
    _encode_UniversalPhysicalDeliveryOrganizationName,
} from '../MTSAbstractService/UniversalPhysicalDeliveryOrganizationName.ta.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary universal_physical_delivery_organization_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-physical-delivery-organization-name EXTENSION-ATTRIBUTE ::= {UniversalPhysicalDeliveryOrganizationName
 *  IDENTIFIED BY  33
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryOrganizationName>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryOrganizationName>}
 */
export const universal_physical_delivery_organization_name: EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryOrganizationName> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UniversalPhysicalDeliveryOrganizationName,
    },
    encoderFor: {
        '&Type': _encode_UniversalPhysicalDeliveryOrganizationName,
    },
    '&id': 33 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

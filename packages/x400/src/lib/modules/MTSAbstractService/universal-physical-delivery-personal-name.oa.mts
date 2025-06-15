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
    UniversalPhysicalDeliveryPersonalName,
    _decode_UniversalPhysicalDeliveryPersonalName,
    _encode_UniversalPhysicalDeliveryPersonalName,
} from '../MTSAbstractService/UniversalPhysicalDeliveryPersonalName.ta.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary universal_physical_delivery_personal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-physical-delivery-personal-name EXTENSION-ATTRIBUTE ::= {
 *   UniversalPhysicalDeliveryPersonalName
 *   IDENTIFIED BY  32
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryPersonalName>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryPersonalName>}
 */
export const universal_physical_delivery_personal_name: EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryPersonalName> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UniversalPhysicalDeliveryPersonalName,
    },
    encoderFor: {
        '&Type': _encode_UniversalPhysicalDeliveryPersonalName,
    },
    '&id': 32 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

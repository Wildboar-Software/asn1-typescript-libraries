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
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    PhysicalForwardingAddress,
    _decode_PhysicalForwardingAddress,
    _encode_PhysicalForwardingAddress,
} from '../MTSAbstractService/PhysicalForwardingAddress.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary physical_forwarding_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-forwarding-address EXTENSION ::= {
 *   PhysicalForwardingAddress,
 *   IDENTIFIED BY  standard-extension:27
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<PhysicalForwardingAddress>}
 * @implements {EXTENSION<PhysicalForwardingAddress>}
 */
export const physical_forwarding_address: EXTENSION<PhysicalForwardingAddress> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_PhysicalForwardingAddress,
    },
    encoderFor: {
        '&Type': _encode_PhysicalForwardingAddress,
    },
    '&id': {
        standard_extension: 27,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

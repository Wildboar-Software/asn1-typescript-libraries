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
    ExtensionORAddressComponents,
    _decode_ExtensionORAddressComponents,
    _encode_ExtensionORAddressComponents,
} from '../MTSAbstractService/ExtensionORAddressComponents.ta.mjs';
import { type EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary extension_OR_address_components
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extension-OR-address-components EXTENSION-ATTRIBUTE ::= {
 *   ExtensionORAddressComponents
 *   IDENTIFIED BY  12
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<ExtensionORAddressComponents>}
 * @implements {EXTENSION_ATTRIBUTE<ExtensionORAddressComponents>}
 */
export const extension_OR_address_components: EXTENSION_ATTRIBUTE<ExtensionORAddressComponents> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ExtensionORAddressComponents,
    },
    encoderFor: {
        '&Type': _encode_ExtensionORAddressComponents,
    },
    '&id': 12 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

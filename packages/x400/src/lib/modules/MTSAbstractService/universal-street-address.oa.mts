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
    UniversalStreetAddress,
    _decode_UniversalStreetAddress,
    _encode_UniversalStreetAddress,
} from '../MTSAbstractService/UniversalStreetAddress.ta.mjs';
import { type EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary universal_street_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-street-address EXTENSION-ATTRIBUTE ::= {
 *   UniversalStreetAddress
 *   IDENTIFIED BY  36
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalStreetAddress>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalStreetAddress>}
 */
export const universal_street_address: EXTENSION_ATTRIBUTE<UniversalStreetAddress> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UniversalStreetAddress,
    },
    encoderFor: {
        '&Type': _encode_UniversalStreetAddress,
    },
    '&id': 36 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

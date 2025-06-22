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
    UnformattedPostalAddress,
    _decode_UnformattedPostalAddress,
    _encode_UnformattedPostalAddress,
} from '../MTSAbstractService/UnformattedPostalAddress.ta.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary unformatted_postal_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * unformatted-postal-address EXTENSION-ATTRIBUTE ::= {
 *   UnformattedPostalAddress
 *   IDENTIFIED BY  16
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UnformattedPostalAddress>}
 * @implements {EXTENSION_ATTRIBUTE<UnformattedPostalAddress>}
 */
export const unformatted_postal_address: EXTENSION_ATTRIBUTE<UnformattedPostalAddress> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UnformattedPostalAddress,
    },
    encoderFor: {
        '&Type': _encode_UnformattedPostalAddress,
    },
    '&id': 16 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

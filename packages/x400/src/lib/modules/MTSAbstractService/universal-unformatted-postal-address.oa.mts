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
    UniversalUnformattedPostalAddress,
    _decode_UniversalUnformattedPostalAddress,
    _encode_UniversalUnformattedPostalAddress,
} from '../MTSAbstractService/UniversalUnformattedPostalAddress.ta.mjs';
import { type EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary universal_unformatted_postal_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-unformatted-postal-address EXTENSION-ATTRIBUTE ::= {
 *   UniversalUnformattedPostalAddress
 *   IDENTIFIED BY  35
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalUnformattedPostalAddress>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalUnformattedPostalAddress>}
 */
export const universal_unformatted_postal_address: EXTENSION_ATTRIBUTE<UniversalUnformattedPostalAddress> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UniversalUnformattedPostalAddress,
    },
    encoderFor: {
        '&Type': _encode_UniversalUnformattedPostalAddress,
    },
    '&id': 35 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

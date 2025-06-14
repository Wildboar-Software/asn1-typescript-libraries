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
    StreetAddress,
    _decode_StreetAddress,
    _encode_StreetAddress,
} from '../MTSAbstractService/StreetAddress.ta.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/* START_OF_SYMBOL_DEFINITION street_address */
/**
 * @summary street_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * street-address EXTENSION-ATTRIBUTE ::= {StreetAddress
 *                                         IDENTIFIED BY  17
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<StreetAddress>}
 * @implements {EXTENSION_ATTRIBUTE<StreetAddress>}
 */
export const street_address: EXTENSION_ATTRIBUTE<StreetAddress> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_StreetAddress,
    },
    encoderFor: {
        '&Type': _encode_StreetAddress,
    },
    '&id': 17 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION street_address */

/* eslint-enable */

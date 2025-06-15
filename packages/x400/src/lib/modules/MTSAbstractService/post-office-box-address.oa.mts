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
    PostOfficeBoxAddress,
    _decode_PostOfficeBoxAddress,
    _encode_PostOfficeBoxAddress,
} from '../MTSAbstractService/PostOfficeBoxAddress.ta.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary post_office_box_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * post-office-box-address EXTENSION-ATTRIBUTE ::= {
 *   PostOfficeBoxAddress
 *   IDENTIFIED BY  18
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PostOfficeBoxAddress>}
 * @implements {EXTENSION_ATTRIBUTE<PostOfficeBoxAddress>}
 */
export const post_office_box_address: EXTENSION_ATTRIBUTE<PostOfficeBoxAddress> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_PostOfficeBoxAddress,
    },
    encoderFor: {
        '&Type': _encode_PostOfficeBoxAddress,
    },
    '&id': 18 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

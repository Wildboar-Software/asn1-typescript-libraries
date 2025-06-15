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
    PosteRestanteAddress,
    _decode_PosteRestanteAddress,
    _encode_PosteRestanteAddress,
} from '../MTSAbstractService/PosteRestanteAddress.ta.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary poste_restante_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * poste-restante-address EXTENSION-ATTRIBUTE ::= {
 *   PosteRestanteAddress
 *   IDENTIFIED BY  19
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PosteRestanteAddress>}
 * @implements {EXTENSION_ATTRIBUTE<PosteRestanteAddress>}
 */
export const poste_restante_address: EXTENSION_ATTRIBUTE<PosteRestanteAddress> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_PosteRestanteAddress,
    },
    encoderFor: {
        '&Type': _encode_PosteRestanteAddress,
    },
    '&id': 19 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

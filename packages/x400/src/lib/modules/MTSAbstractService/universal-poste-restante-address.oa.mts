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
    UniversalPosteRestanteAddress,
    _decode_UniversalPosteRestanteAddress,
    _encode_UniversalPosteRestanteAddress,
} from '../MTSAbstractService/UniversalPosteRestanteAddress.ta.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/* START_OF_SYMBOL_DEFINITION universal_poste_restante_address */
/**
 * @summary universal_poste_restante_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-poste-restante-address EXTENSION-ATTRIBUTE ::= {
 *   UniversalPosteRestanteAddress
 *   IDENTIFIED BY  38
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalPosteRestanteAddress>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalPosteRestanteAddress>}
 */
export const universal_poste_restante_address: EXTENSION_ATTRIBUTE<UniversalPosteRestanteAddress> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UniversalPosteRestanteAddress,
    },
    encoderFor: {
        '&Type': _encode_UniversalPosteRestanteAddress,
    },
    '&id': 38 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_poste_restante_address */

/* eslint-enable */

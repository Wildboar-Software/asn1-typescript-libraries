/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    UniversalPosteRestanteAddress,
    _decode_UniversalPosteRestanteAddress,
    _encode_UniversalPosteRestanteAddress,
} from "../PkiPmiExternalDataTypes/UniversalPosteRestanteAddress.ta.mjs";
/**
 * @summary universal_poste_restante_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-poste-restante-address EXTENSION-ATTRIBUTE ::= {
 *                  UniversalPosteRestanteAddress
 *   IDENTIFIED BY  38 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalPosteRestanteAddress>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalPosteRestanteAddress>}
 */
export const universal_poste_restante_address: EXTENSION_ATTRIBUTE<UniversalPosteRestanteAddress> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPosteRestanteAddress,
    },
    encoderFor: {
        "&Type": _encode_UniversalPosteRestanteAddress,
    },
    "&id": 38 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

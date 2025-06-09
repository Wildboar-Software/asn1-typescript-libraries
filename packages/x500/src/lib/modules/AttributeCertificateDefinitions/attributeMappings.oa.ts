/* eslint-disable */
import {
    AttributeMappings,
    _decode_AttributeMappings,
    _encode_AttributeMappings,
} from "../AttributeCertificateDefinitions/AttributeMappings.ta.js";
import { id_ce_attributeMappings } from "../AttributeCertificateDefinitions/id-ce-attributeMappings.va.js";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export {
    AttributeMappings,
    _decode_AttributeMappings,
    _encode_AttributeMappings,
} from "../AttributeCertificateDefinitions/AttributeMappings.ta.js";
export { id_ce_attributeMappings } from "../AttributeCertificateDefinitions/id-ce-attributeMappings.va.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";

/* START_OF_SYMBOL_DEFINITION attributeMappings */
/**
 * @summary attributeMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeMappings EXTENSION ::= {
 *   SYNTAX         AttributeMappings
 *   IDENTIFIED BY  id-ce-attributeMappings }
 * ```
 *
 * @constant
 * @type {EXTENSION<AttributeMappings>}
 * @implements {EXTENSION<AttributeMappings>}
 */
export const attributeMappings: EXTENSION<AttributeMappings> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AttributeMappings,
    },
    encoderFor: {
        "&ExtnType": _encode_AttributeMappings,
    },
    "&id": id_ce_attributeMappings /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attributeMappings */

/* eslint-enable */

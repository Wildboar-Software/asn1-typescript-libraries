/* eslint-disable */
import {
    AttributeMappings,
    _decode_AttributeMappings,
    _encode_AttributeMappings,
} from "../AttributeCertificateDefinitions/AttributeMappings.ta.mjs";
import { id_ce_attributeMappings } from "../AttributeCertificateDefinitions/id-ce-attributeMappings.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
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

/* eslint-enable */

/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { id_ce_groupAC } from "../AttributeCertificateDefinitions/id-ce-groupAC.va.js";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export { id_ce_groupAC } from "../AttributeCertificateDefinitions/id-ce-groupAC.va.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";

/* START_OF_SYMBOL_DEFINITION groupAC */
/**
 * @summary groupAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * groupAC EXTENSION ::= {
 *   SYNTAX         NULL
 *   IDENTIFIED BY  id-ce-groupAC }
 * ```
 *
 * @constant
 * @type {EXTENSION<NULL>}
 * @implements {EXTENSION<NULL>}
 */
export const groupAC: EXTENSION<NULL> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_ce_groupAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION groupAC */

/* eslint-enable */

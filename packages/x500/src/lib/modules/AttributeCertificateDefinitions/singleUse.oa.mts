/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { id_ce_singleUse } from "../AttributeCertificateDefinitions/id-ce-singleUse.va.mjs";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
/**
 * @summary singleUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * singleUse EXTENSION ::= {
 *   SYNTAX         NULL
 *   IDENTIFIED BY  id-ce-singleUse }
 * ```
 *
 * @constant
 * @type {EXTENSION<NULL>}
 * @implements {EXTENSION<NULL>}
 */
export const singleUse: EXTENSION<NULL> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_ce_singleUse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

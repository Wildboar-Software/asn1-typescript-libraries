/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { id_ce_indirectIssuer } from "../AttributeCertificateDefinitions/id-ce-indirectIssuer.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
/**
 * @summary indirectIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * indirectIssuer EXTENSION ::= {
 *   SYNTAX         NULL
 *   IDENTIFIED BY  id-ce-indirectIssuer }
 * ```
 *
 * @constant
 * @type {EXTENSION<NULL>}
 * @implements {EXTENSION<NULL>}
 */
export const indirectIssuer: EXTENSION<NULL> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_ce_indirectIssuer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

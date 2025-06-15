/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { id_ce_noRevAvail } from "../AttributeCertificateDefinitions/id-ce-noRevAvail.va.mjs";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
/**
 * @summary noRevAvail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noRevAvail EXTENSION ::= {
 *   SYNTAX         NULL
 *   IDENTIFIED BY  id-ce-noRevAvail }
 * ```
 *
 * @constant
 * @type {EXTENSION<NULL>}
 * @implements {EXTENSION<NULL>}
 */
export const noRevAvail: EXTENSION<NULL> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_ce_noRevAvail /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

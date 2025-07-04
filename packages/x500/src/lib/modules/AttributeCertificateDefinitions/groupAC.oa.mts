/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { id_ce_groupAC } from "../AttributeCertificateDefinitions/id-ce-groupAC.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
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

/* eslint-enable */

/* eslint-disable */
import { GeneralizedTime } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import { id_ce_baseUpdateTime } from "../CertificateExtensions/id-ce-baseUpdateTime.va.mjs";
/**
 * @summary baseUpdateTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * baseUpdateTime EXTENSION ::= {
 *   SYNTAX         GeneralizedTime
 *   IDENTIFIED BY  id-ce-baseUpdateTime }
 * ```
 *
 * @constant
 * @type {EXTENSION<GeneralizedTime>}
 * @implements {EXTENSION<GeneralizedTime>}
 */
export const baseUpdateTime: EXTENSION<GeneralizedTime> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&ExtnType": $._encodeGeneralizedTime,
    },
    "&id": id_ce_baseUpdateTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

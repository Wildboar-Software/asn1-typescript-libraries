/* eslint-disable */
import { GeneralizedTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import { id_ce_invalidityDate } from "../CertificateExtensions/id-ce-invalidityDate.va.mjs";
/**
 * @summary invalidityDate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * invalidityDate EXTENSION ::= {
 *   SYNTAX         GeneralizedTime
 *   IDENTIFIED BY  id-ce-invalidityDate }
 * ```
 *
 * @constant
 * @type {EXTENSION<GeneralizedTime>}
 * @implements {EXTENSION<GeneralizedTime>}
 */
export const invalidityDate: EXTENSION<GeneralizedTime> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&ExtnType": $._encodeGeneralizedTime,
    },
    "&id": id_ce_invalidityDate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

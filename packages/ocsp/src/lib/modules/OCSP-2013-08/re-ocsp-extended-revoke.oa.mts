/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import type { EXTENSION } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/EXTENSION.oca.mjs";
import { id_pkix_ocsp_extended_revoke } from "../OCSP-2013-08/id-pkix-ocsp-extended-revoke.va.mjs";


/**
 * @summary re_ocsp_extended_revoke
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * re-ocsp-extended-revoke EXTENSION ::= { SYNTAX NULL IDENTIFIED BY
 *                                     id-pkix-ocsp-extended-revoke }
 * ```
 *
 * @constant
 * @type {EXTENSION<NULL>}
 * @implements {EXTENSION<NULL>}
 */
export const re_ocsp_extended_revoke: EXTENSION<NULL> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_pkix_ocsp_extended_revoke /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import type { EXTENSION } from "@wildboar/pki-stub";
import { id_pkix_ocsp_nocheck } from "../OCSP-2013-08/id-pkix-ocsp-nocheck.va.mjs";


/**
 * @summary ext_ocsp_nocheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ext-ocsp-nocheck EXTENSION ::= { SYNTAX NULL IDENTIFIED
 *                                 BY id-pkix-ocsp-nocheck }
 * ```
 *
 * @constant
 * @type {EXTENSION<NULL>}
 * @implements {EXTENSION<NULL>}
 */
export const ext_ocsp_nocheck: EXTENSION<NULL> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_pkix_ocsp_nocheck /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import type { EXTENSION } from "@wildboar/pki-stub";
import { id_pkix_ocsp_nonce } from "../OCSP-2013-08/id-pkix-ocsp-nonce.va.mjs";


/**
 * @summary re_ocsp_nonce
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * re-ocsp-nonce EXTENSION ::= { SYNTAX OCTET STRING IDENTIFIED
 *                             BY id-pkix-ocsp-nonce }
 * ```
 *
 * @constant
 * @type {EXTENSION<OCTET_STRING>}
 * @implements {EXTENSION<OCTET_STRING>}
 */
export const re_ocsp_nonce: EXTENSION<OCTET_STRING> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeOctetString,
    },
    encoderFor: {
        "&ExtnType": $._encodeOctetString,
    },
    "&id": id_pkix_ocsp_nonce /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

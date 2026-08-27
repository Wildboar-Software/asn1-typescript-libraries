/* eslint-disable */
import type { EXTENSION } from "@wildboar/pki-stub";
import { CrlID, _decode_CrlID, _encode_CrlID } from "../OCSP-2013-08/CrlID.ta.mjs";
import { id_pkix_ocsp_crl } from "../OCSP-2013-08/id-pkix-ocsp-crl.va.mjs";


/**
 * @summary re_ocsp_crl
 * @description
 *
 * Response singleExtension for CRL References (`CrlID`), identified
 * by `id-pkix-ocsp-crl`
 * ([RFC 6960 §4.4.2](https://datatracker.ietf.org/doc/html/rfc6960#section-4.4.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * re-ocsp-crl EXTENSION ::= { SYNTAX CrlID IDENTIFIED BY
 *                             id-pkix-ocsp-crl }
 * ```
 *
 * @constant
 * @type {EXTENSION<CrlID>}
 * @implements {EXTENSION<CrlID>}
 */
export const re_ocsp_crl: EXTENSION<CrlID> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CrlID,
    },
    encoderFor: {
        "&ExtnType": _encode_CrlID,
    },
    "&id": id_pkix_ocsp_crl /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

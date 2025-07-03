/* eslint-disable */
import type { EXTENSION } from "@wildboar/pki-stub";
import {
    ArchiveCutoff,
    _decode_ArchiveCutoff,
    _encode_ArchiveCutoff,
} from "../OCSP-2013-08/ArchiveCutoff.ta.mjs";
import { id_pkix_ocsp_archive_cutoff } from "../OCSP-2013-08/id-pkix-ocsp-archive-cutoff.va.mjs";


/**
 * @summary re_ocsp_archive_cutoff
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * re-ocsp-archive-cutoff EXTENSION ::= { SYNTAX ArchiveCutoff
 *                                     IDENTIFIED BY
 *                                     id-pkix-ocsp-archive-cutoff }
 * ```
 *
 * @constant
 * @type {EXTENSION<ArchiveCutoff>}
 * @implements {EXTENSION<ArchiveCutoff>}
 */
export const re_ocsp_archive_cutoff: EXTENSION<ArchiveCutoff> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_ArchiveCutoff,
    },
    encoderFor: {
        "&ExtnType": _encode_ArchiveCutoff,
    },
    "&id": id_pkix_ocsp_archive_cutoff /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import {
    CertReq,
    _decode_CertReq,
    _encode_CertReq,
} from "../PKIXCRMF-2009/CertReq.ta.mjs";
import { id_regInfo_certReq } from "../PKIXCRMF-2009/id-regInfo-certReq.va.mjs";


/**
 * @summary regInfo_certReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * regInfo-certReq ATTRIBUTE ::= { TYPE CertReq IDENTIFIED BY id-regInfo-certReq }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<CertReq>}
 * @implements {ATTRIBUTE<CertReq>}
 */
export const regInfo_certReq: ATTRIBUTE<CertReq> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CertReq,
    },
    encoderFor: {
        "&Type": _encode_CertReq,
    },
    "&id": id_regInfo_certReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

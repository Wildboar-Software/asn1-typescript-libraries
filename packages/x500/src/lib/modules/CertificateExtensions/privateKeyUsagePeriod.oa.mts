/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import { id_ce_privateKeyUsagePeriod } from "../CertificateExtensions/id-ce-privateKeyUsagePeriod.va.mjs";
import {
    PrivateKeyUsagePeriod,
    _decode_PrivateKeyUsagePeriod,
    _encode_PrivateKeyUsagePeriod,
} from "../CertificateExtensions/PrivateKeyUsagePeriod.ta.mjs";
/**
 * @summary privateKeyUsagePeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * privateKeyUsagePeriod EXTENSION ::= {
 *   SYNTAX         PrivateKeyUsagePeriod
 *   IDENTIFIED BY  id-ce-privateKeyUsagePeriod }
 * ```
 *
 * @constant
 * @type {EXTENSION<PrivateKeyUsagePeriod>}
 * @implements {EXTENSION<PrivateKeyUsagePeriod>}
 */
export const privateKeyUsagePeriod: EXTENSION<PrivateKeyUsagePeriod> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_PrivateKeyUsagePeriod,
    },
    encoderFor: {
        "&ExtnType": _encode_PrivateKeyUsagePeriod,
    },
    "&id": id_ce_privateKeyUsagePeriod /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

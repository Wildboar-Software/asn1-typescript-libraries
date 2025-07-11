/* eslint-disable */
import type { EXTENSION } from "@wildboar/x500/AuthenticationFramework";
import {
    BiometricSyntax,
    _decode_BiometricSyntax,
    _encode_BiometricSyntax,
} from "../PKIXqualified97/BiometricSyntax.ta.mjs";
import { id_pe_biometricInfo } from "../PKIXqualified97/id-pe-biometricInfo.va.mjs";


/**
 * @summary biometricInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * biometricInfo  EXTENSION ::= {
 *     SYNTAX             BiometricSyntax
 *     IDENTIFIED BY      id-pe-biometricInfo }
 * ```
 *
 * @constant
 * @type {EXTENSION<BiometricSyntax>}
 * @implements {EXTENSION<BiometricSyntax>}
 */
export const biometricInfo: EXTENSION<BiometricSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_BiometricSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_BiometricSyntax,
    },
    "&id": id_pe_biometricInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

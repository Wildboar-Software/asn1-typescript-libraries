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
 * Optional certificate extension for storage of biometric information
 * as hashes of biometric templates
 * ([RFC 3739 §3.2.5](https://datatracker.ietf.org/doc/html/rfc3739#section-3.2.5)).
 * Purpose is authentication of biometric information; the biometric
 * data itself is not stored here (an optional URI may reference it).
 * It is RECOMMENDED that content be limited to types suitable for
 * human verification (e.g., a graphical image). This extension MUST
 * NOT be marked critical.
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

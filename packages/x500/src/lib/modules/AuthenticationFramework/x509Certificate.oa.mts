/* eslint-disable */
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta.mjs";
import { id_lsx_x509Certificate } from "../AuthenticationFramework/id-lsx-x509Certificate.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
/**
 * @summary x509Certificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x509Certificate SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate"
 *   DIRECTORY SYNTAX  Certificate
 *   ID                id-lsx-x509Certificate }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<Certificate>}
 * @implements {SYNTAX_NAME<Certificate>}
 */
export const x509Certificate: SYNTAX_NAME<Certificate> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_Certificate,
    },
    encoderFor: {
        "&Type": _encode_Certificate,
    },
    "&ldapDesc": "X.509 Certificate" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_x509Certificate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

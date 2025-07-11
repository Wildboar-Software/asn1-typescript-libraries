/* eslint-disable */
import {
    CertificatePair,
    _decode_CertificatePair,
    _encode_CertificatePair,
} from "../AuthenticationFramework/CertificatePair.ta.mjs";
import { id_lsx_x509CertificatePair } from "../AuthenticationFramework/id-lsx-x509CertificatePair.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
/**
 * @summary x509CertificatePair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x509CertificatePair SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate Pair"
 *   DIRECTORY SYNTAX  CertificatePair
 *   ID                id-lsx-x509CertificatePair }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<CertificatePair>}
 * @implements {SYNTAX_NAME<CertificatePair>}
 */
export const x509CertificatePair: SYNTAX_NAME<CertificatePair> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificatePair,
    },
    encoderFor: {
        "&Type": _encode_CertificatePair,
    },
    "&ldapDesc": "X.509 Certificate Pair" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_x509CertificatePair /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

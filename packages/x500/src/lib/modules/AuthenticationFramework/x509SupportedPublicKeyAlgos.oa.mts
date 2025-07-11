/* eslint-disable */
import { id_asx_x509SupportedPublicKeyAlgos } from "../AuthenticationFramework/id-asx-x509SupportedPublicKeyAlgos.va.mjs";
import {
    SupportedPublicKeyAlgorithms,
    _decode_SupportedPublicKeyAlgorithms,
    _encode_SupportedPublicKeyAlgorithms,
} from "../AuthenticationFramework/SupportedPublicKeyAlgorithms.ta.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
/**
 * @summary x509SupportedPublicKeyAlgos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x509SupportedPublicKeyAlgos SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 supported publiv key algorithms"
 *   DIRECTORY SYNTAX  SupportedPublicKeyAlgorithms
 *   ID                id-asx-x509SupportedPublicKeyAlgos }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<SupportedPublicKeyAlgorithms>}
 * @implements {SYNTAX_NAME<SupportedPublicKeyAlgorithms>}
 */
export const x509SupportedPublicKeyAlgos: SYNTAX_NAME<SupportedPublicKeyAlgorithms> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_SupportedPublicKeyAlgorithms,
    },
    encoderFor: {
        "&Type": _encode_SupportedPublicKeyAlgorithms,
    },
    "&ldapDesc":
        "X.509 supported publiv key algorithms" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_x509SupportedPublicKeyAlgos /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

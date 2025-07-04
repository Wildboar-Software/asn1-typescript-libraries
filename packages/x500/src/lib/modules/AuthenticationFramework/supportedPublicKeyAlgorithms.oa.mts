/* eslint-disable */
import { id_at_supportedPublicKeyAlgorithms } from "../AuthenticationFramework/id-at-supportedPublicKeyAlgorithms.va.mjs";
import {
    SupportedPublicKeyAlgorithms,
    _decode_SupportedPublicKeyAlgorithms,
    _encode_SupportedPublicKeyAlgorithms,
} from "../AuthenticationFramework/SupportedPublicKeyAlgorithms.ta.mjs";
import { x509SupportedPublicKeyAlgos } from "../AuthenticationFramework/x509SupportedPublicKeyAlgos.oa.mjs";
import { algorithmIdentifierMatch } from "../CertificateExtensions/algorithmIdentifierMatch.oa.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary supportedPublicKeyAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedPublicKeyAlgorithms ATTRIBUTE ::= {
 *   WITH SYNTAX            SupportedPublicKeyAlgorithms
 *   EQUALITY MATCHING RULE algorithmIdentifierMatch
 *   LDAP-SYNTAX            x509SupportedPublicKeyAlgos.&id
 *   LDAP-NAME              {"supportedPublicKeyAlgorithms"}
 *   LDAP-DESC              "X.509 supported publiv key algorithms"
 *   ID                     id-at-supportedPublicKeyAlgorithms }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SupportedPublicKeyAlgorithms>}
 * @implements {ATTRIBUTE<SupportedPublicKeyAlgorithms>}
 */
export const supportedPublicKeyAlgorithms: ATTRIBUTE<SupportedPublicKeyAlgorithms> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SupportedPublicKeyAlgorithms,
    },
    encoderFor: {
        "&Type": _encode_SupportedPublicKeyAlgorithms,
    },
    "&equality-match": algorithmIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax":
        x509SupportedPublicKeyAlgos["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc":
        "X.509 supported publiv key algorithms" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_supportedPublicKeyAlgorithms /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

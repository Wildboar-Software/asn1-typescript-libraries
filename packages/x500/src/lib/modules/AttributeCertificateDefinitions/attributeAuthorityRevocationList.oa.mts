/* eslint-disable */
import { id_at_attributeAuthorityRevocationList } from "../AttributeCertificateDefinitions/id-at-attributeAuthorityRevocationList.va.mjs";
import {
    CertificateList,
    _decode_CertificateList,
    _encode_CertificateList,
} from "../AuthenticationFramework/CertificateList.ta.mjs";
import { x509CertificateList } from "../AuthenticationFramework/x509CertificateList.oa.mjs";
import { certificateListExactMatch } from "../CertificateExtensions/certificateListExactMatch.oa.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary attributeAuthorityRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeAuthorityRevocationList ATTRIBUTE ::= {
 *   WITH SYNTAX             CertificateList
 *   EQUALITY MATCHING RULE  certificateListExactMatch
 *   LDAP-SYNTAX             x509CertificateList.&id
 *   LDAP-NAME               {"AACertificateRevocationList"}
 *   LDAP-DESC               "X.509 AA certificate revocation list"
 *   ID                      id-at-attributeAuthorityRevocationList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<CertificateList>}
 * @implements {ATTRIBUTE<CertificateList>}
 */
export const attributeAuthorityRevocationList: ATTRIBUTE<CertificateList> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CertificateList,
    },
    encoderFor: {
        "&Type": _encode_CertificateList,
    },
    "&equality-match": certificateListExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509CertificateList["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["AACertificateRevocationList"],
    "&ldapDesc":
        "X.509 AA certificate revocation list" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_attributeAuthorityRevocationList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type CertificateList, _decode_CertificateList, _encode_CertificateList } from "../AuthenticationFramework/CertificateList.ta.mjs";
// export { CertificateList, _decode_CertificateList, _encode_CertificateList } from "../AuthenticationFramework/CertificateList.ta.mjs";
import { x509CertificateList } from "../AuthenticationFramework/x509CertificateList.oa.mjs";
// export { x509CertificateList } from "../AuthenticationFramework/x509CertificateList.oa.mjs";
import { id_at_authorityRevocationList } from "../AuthenticationFramework/id-at-authorityRevocationList.va.mjs";
// export { id_at_authorityRevocationList } from "../AuthenticationFramework/id-at-authorityRevocationList.va.mjs";


/**
 * @summary authorityRevocationList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * authorityRevocationList ATTRIBUTE ::= {
 *   WITH SYNTAX              CertificateList
 *   EQUALITY MATCHING RULE   certificateListExactMatch
 *   LDAP-SYNTAX              x509CertificateList.&id
 *   LDAP-NAME                {"authorityRevocationList"}
 *   LDAP-DESC                "X.509 authority revocation list"
 *   ID                       id-at-authorityRevocationList }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<CertificateList>}
 * @implements {ATTRIBUTE<CertificateList>}
 */
export
const authorityRevocationList: ATTRIBUTE<CertificateList> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CertificateList,
    },
    encoderFor: {
        "&Type": _encode_CertificateList,
    },
    "&equality-match": certificateListExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509CertificateList["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "authorityRevocationList" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "X.509 authority revocation list" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_authorityRevocationList /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

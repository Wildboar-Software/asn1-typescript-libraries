/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { fileName } from "../LdapIspenv2/fileName.oa.mjs";
// export { fileName } from "../LdapIspenv2/fileName.oa.mjs";
import { id_oc_file } from "../LdapIspenv2/id-oc-file.va.mjs";
import { filePath } from "../LdapIspenv2/filePath.oa.mjs";
import { filePerm } from "../LdapIspenv2/filePerm.oa.mjs";
import { fileContent } from "../LdapIspenv2/fileContent.oa.mjs";
import { fileType } from "../LdapIspenv2/fileType.oa.mjs";
// export { id_oc_file } from "../LdapIspenv2/id-oc-file.va.mjs";


/**
 * @summary file
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * file OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { fileName }
 *   MAY CONTAIN               { filePath
 *                               | filePerm
 *                               | fileContent
 *                               | fileType }
 *   LDAP-NAME                 {"file"}
 *   LDAP-DESC                 "Used to store files in LDAP"
 *   ID                        id-oc-file }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const file: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ fileName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ filePath, filePerm, fileContent, fileType, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "file" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Used to store files in LDAP" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_file /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

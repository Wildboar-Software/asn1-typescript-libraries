/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mS_SQL_SQLRepository } from "../LdapSchema2ldifMicrosoft/id-oc-mS-SQL-SQLRepository.va.mjs";
import { mS_SQL_Name } from "../MSUser/mS-SQL-Name.oa.mjs";
import { mS_SQL_Contact } from "../MSUser/mS-SQL-Contact.oa.mjs";
import { mS_SQL_Build } from "../MSUser/mS-SQL-Build.oa.mjs";
import { mS_SQL_Status } from "../MSUser/mS-SQL-Status.oa.mjs";
import { mS_SQL_Version } from "../MSUser/mS-SQL-Version.oa.mjs";
import { mS_SQL_Description } from "../MSUser/mS-SQL-Description.oa.mjs";
import { mS_SQL_InformationDirectory } from "../MSUser/mS-SQL-InformationDirectory.oa.mjs";
// export { id_oc_mS_SQL_SQLRepository } from "../LdapSchema2ldifMicrosoft/id-oc-mS-SQL-SQLRepository.va.mjs";


/**
 * @summary mS_SQL_SQLRepository
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mS-SQL-SQLRepository OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { mS-SQL-Name
 *                               | mS-SQL-Contact
 *                               | mS-SQL-Build
 *                               | mS-SQL-Status
 *                               | mS-SQL-Version
 *                               | mS-SQL-Description
 *                               | mS-SQL-InformationDirectory }
 *   LDAP-NAME                 {"mS-SQL-SQLRepository"}
 *   ID                        id-oc-mS-SQL-SQLRepository }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mS_SQL_SQLRepository: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mS_SQL_Name, mS_SQL_Contact, mS_SQL_Build, mS_SQL_Status, mS_SQL_Version, mS_SQL_Description, mS_SQL_InformationDirectory, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mS-SQL-SQLRepository" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mS_SQL_SQLRepository /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

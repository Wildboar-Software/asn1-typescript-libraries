/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mS_SQL_OLAPDatabase } from "../LdapSchema2ldifMicrosoft/id-oc-mS-SQL-OLAPDatabase.va.mjs";
import { mS_SQL_Name } from "../MSUser/mS-SQL-Name.oa.mjs";
import { mS_SQL_Contact } from "../MSUser/mS-SQL-Contact.oa.mjs";
import { mS_SQL_Status } from "../MSUser/mS-SQL-Status.oa.mjs";
import { mS_SQL_LastUpdatedDate } from "../MSUser/mS-SQL-LastUpdatedDate.oa.mjs";
import { mS_SQL_InformationURL } from "../MSUser/mS-SQL-InformationURL.oa.mjs";
import { mS_SQL_ConnectionURL } from "../MSUser/mS-SQL-ConnectionURL.oa.mjs";
import { mS_SQL_PublicationURL } from "../MSUser/mS-SQL-PublicationURL.oa.mjs";
import { mS_SQL_Description } from "../MSUser/mS-SQL-Description.oa.mjs";
import { mS_SQL_Type } from "../MSUser/mS-SQL-Type.oa.mjs";
import { mS_SQL_Size } from "../MSUser/mS-SQL-Size.oa.mjs";
import { mS_SQL_LastBackupDate } from "../MSUser/mS-SQL-LastBackupDate.oa.mjs";
import { mS_SQL_Applications } from "../MSUser/mS-SQL-Applications.oa.mjs";
import { mS_SQL_Keywords } from "../MSUser/mS-SQL-Keywords.oa.mjs";


/**
 * @summary mS_SQL_OLAPDatabase
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mS-SQL-OLAPDatabase OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { mS-SQL-Name
 *                               | mS-SQL-Contact
 *                               | mS-SQL-Status
 *                               | mS-SQL-LastUpdatedDate
 *                               | mS-SQL-InformationURL
 *                               | mS-SQL-ConnectionURL
 *                               | mS-SQL-PublicationURL
 *                               | mS-SQL-Description
 *                               | mS-SQL-Type
 *                               | mS-SQL-Size
 *                               | mS-SQL-LastBackupDate
 *                               | mS-SQL-Applications
 *                               | mS-SQL-Keywords }
 *   LDAP-NAME                 {"mS-SQL-OLAPDatabase"}
 *   ID                        id-oc-mS-SQL-OLAPDatabase }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mS_SQL_OLAPDatabase: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mS_SQL_Name, mS_SQL_Contact, mS_SQL_Status, mS_SQL_LastUpdatedDate, mS_SQL_InformationURL, mS_SQL_ConnectionURL, mS_SQL_PublicationURL, mS_SQL_Description, mS_SQL_Type, mS_SQL_Size, mS_SQL_LastBackupDate, mS_SQL_Applications, mS_SQL_Keywords, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mS-SQL-OLAPDatabase" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mS_SQL_OLAPDatabase /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */


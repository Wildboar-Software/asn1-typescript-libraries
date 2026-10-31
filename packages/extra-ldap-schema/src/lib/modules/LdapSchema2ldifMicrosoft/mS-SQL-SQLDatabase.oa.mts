/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mS_SQL_SQLDatabase } from "../LdapSchema2ldifMicrosoft/id-oc-mS-SQL-SQLDatabase.va.mjs";
import { mS_SQL_Alias } from "../MSUser/mS-SQL-Alias.oa.mjs";
import { mS_SQL_Applications } from "../MSUser/mS-SQL-Applications.oa.mjs";
import { mS_SQL_Contact } from "../MSUser/mS-SQL-Contact.oa.mjs";
import { mS_SQL_CreationDate } from "../MSUser/mS-SQL-CreationDate.oa.mjs";
import { mS_SQL_Description } from "../MSUser/mS-SQL-Description.oa.mjs";
import { mS_SQL_InformationURL } from "../MSUser/mS-SQL-InformationURL.oa.mjs";
import { mS_SQL_Keywords } from "../MSUser/mS-SQL-Keywords.oa.mjs";
import { mS_SQL_LastBackupDate } from "../MSUser/mS-SQL-LastBackupDate.oa.mjs";
import { mS_SQL_LastDiagnosticDate } from "../MSUser/mS-SQL-LastDiagnosticDate.oa.mjs";
import { mS_SQL_Name } from "../MSUser/mS-SQL-Name.oa.mjs";
import { mS_SQL_Size } from "../MSUser/mS-SQL-Size.oa.mjs";
import { mS_SQL_Status } from "../MSUser/mS-SQL-Status.oa.mjs";

/**
 * @summary mS_SQL_SQLDatabase
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mS-SQL-SQLDatabase OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { mS-SQL-Name
 *                               | mS-SQL-Contact
 *                               | mS-SQL-Status
 *                               | mS-SQL-InformationURL
 *                               | mS-SQL-Description
 *                               | mS-SQL-Alias
 *                               | mS-SQL-Size
 *                               | mS-SQL-CreationDate
 *                               | mS-SQL-LastBackupDate
 *                               | mS-SQL-LastDiagnosticDate
 *                               | mS-SQL-Applications
 *                               | mS-SQL-Keywords }
 *   LDAP-NAME                 {"mS-SQL-SQLDatabase"}
 *   ID                        id-oc-mS-SQL-SQLDatabase }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mS_SQL_SQLDatabase: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mS_SQL_Name, mS_SQL_Contact, mS_SQL_Status, mS_SQL_InformationURL, mS_SQL_Description, mS_SQL_Alias, mS_SQL_Size, mS_SQL_CreationDate, mS_SQL_LastBackupDate, mS_SQL_LastDiagnosticDate, mS_SQL_Applications, mS_SQL_Keywords] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mS-SQL-SQLDatabase"],
    "&id": id_oc_mS_SQL_SQLDatabase /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

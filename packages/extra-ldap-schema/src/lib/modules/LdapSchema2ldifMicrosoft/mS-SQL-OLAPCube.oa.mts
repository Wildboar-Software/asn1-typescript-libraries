/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mS_SQL_OLAPCube } from "../LdapSchema2ldifMicrosoft/id-oc-mS-SQL-OLAPCube.va.mjs";
import { mS_SQL_Contact } from "../MSUser/mS-SQL-Contact.oa.mjs";
import { mS_SQL_Description } from "../MSUser/mS-SQL-Description.oa.mjs";
import { mS_SQL_InformationURL } from "../MSUser/mS-SQL-InformationURL.oa.mjs";
import { mS_SQL_Keywords } from "../MSUser/mS-SQL-Keywords.oa.mjs";
import { mS_SQL_LastUpdatedDate } from "../MSUser/mS-SQL-LastUpdatedDate.oa.mjs";
import { mS_SQL_Name } from "../MSUser/mS-SQL-Name.oa.mjs";
import { mS_SQL_PublicationURL } from "../MSUser/mS-SQL-PublicationURL.oa.mjs";
import { mS_SQL_Size } from "../MSUser/mS-SQL-Size.oa.mjs";
import { mS_SQL_Status } from "../MSUser/mS-SQL-Status.oa.mjs";

/**
 * @summary mS_SQL_OLAPCube
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mS-SQL-OLAPCube OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { mS-SQL-Name
 *                               | mS-SQL-Contact
 *                               | mS-SQL-Status
 *                               | mS-SQL-LastUpdatedDate
 *                               | mS-SQL-InformationURL
 *                               | mS-SQL-PublicationURL
 *                               | mS-SQL-Description
 *                               | mS-SQL-Size
 *                               | mS-SQL-Keywords }
 *   LDAP-NAME                 {"mS-SQL-OLAPCube"}
 *   ID                        id-oc-mS-SQL-OLAPCube }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mS_SQL_OLAPCube: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mS_SQL_Name, mS_SQL_Contact, mS_SQL_Status, mS_SQL_LastUpdatedDate, mS_SQL_InformationURL, mS_SQL_PublicationURL, mS_SQL_Description, mS_SQL_Size, mS_SQL_Keywords] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mS-SQL-OLAPCube"],
    "&id": id_oc_mS_SQL_OLAPCube /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

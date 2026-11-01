/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_displayTemplate } from "../LdapSchema2ldifMicrosoft/id-oc-displayTemplate.va.mjs";
import { helpData32 } from "../MSUser/helpData32.oa.mjs";
import { originalDisplayTableMSDOS } from "../MSUser/originalDisplayTableMSDOS.oa.mjs";
import { addressEntryDisplayTable } from "../MSUser/addressEntryDisplayTable.oa.mjs";
import { helpFileName } from "../MSUser/helpFileName.oa.mjs";
import { addressEntryDisplayTableMSDOS } from "../MSUser/addressEntryDisplayTableMSDOS.oa.mjs";
import { helpData16 } from "../MSUser/helpData16.oa.mjs";
import { originalDisplayTable } from "../MSUser/originalDisplayTable.oa.mjs";


/**
 * @summary displayTemplate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * displayTemplate OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { helpData32
 *                               | originalDisplayTableMSDOS
 *                               | addressEntryDisplayTable
 *                               | helpFileName
 *                               | addressEntryDisplayTableMSDOS
 *                               | helpData16
 *                               | originalDisplayTable }
 *   LDAP-NAME                 {"displayTemplate"}
 *   ID                        id-oc-displayTemplate }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const displayTemplate: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ helpData32, originalDisplayTableMSDOS, addressEntryDisplayTable, helpFileName, addressEntryDisplayTableMSDOS, helpData16, originalDisplayTable, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "displayTemplate" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_displayTemplate /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */


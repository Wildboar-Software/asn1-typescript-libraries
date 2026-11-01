/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_gotoPrinter } from "../LdapGosaCoreGoto/id-oc-gotoPrinter.va.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { gotoPrinterPPD } from "../LdapGosaCoreGoto/gotoPrinterPPD.oa.mjs";
import { macAddress } from "../NIS/macAddress.oa.mjs";
import { ipHostNumber } from "../NIS/ipHostNumber.oa.mjs";
import { gotoUserPrinter } from "../LdapGosaCoreGoto/gotoUserPrinter.oa.mjs";
import { gotoUserAdminPrinter } from "../LdapGosaCoreGoto/gotoUserAdminPrinter.oa.mjs";
import { gotoGroupPrinter } from "../LdapGosaCoreGoto/gotoGroupPrinter.oa.mjs";
import { gotoGroupAdminPrinter } from "../LdapGosaCoreGoto/gotoGroupAdminPrinter.oa.mjs";
// export { id_oc_gotoPrinter } from "../LdapGosaCoreGoto/id-oc-gotoPrinter.va.mjs";


/**
 * @summary gotoPrinter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gotoPrinter OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { labeledURI
 *                               | description
 *                               | localityName
 *                               | gotoPrinterPPD
 *                               | macAddress
 *                               | ipHostNumber
 *                               | gotoUserPrinter
 *                               | gotoUserAdminPrinter
 *                               | gotoGroupPrinter
 *                               | gotoGroupAdminPrinter }
 *   LDAP-NAME                 {"gotoPrinter"}
 *   LDAP-DESC                 "GOto - Gonicus Terminal Concept, objectclass (v2.7)"
 *   ID                        id-oc-gotoPrinter }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gotoPrinter: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ labeledURI, description, localityName, gotoPrinterPPD, macAddress, ipHostNumber, gotoUserPrinter, gotoUserAdminPrinter, gotoGroupPrinter, gotoGroupAdminPrinter, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gotoPrinter" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "GOto - Gonicus Terminal Concept, objectclass (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gotoPrinter /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gotoPrinter } from "../LdapGosaCoreGoto/id-oc-gotoPrinter.va.mjs";
import { ipHostNumber } from "../NIS/ipHostNumber.oa.mjs";
import { macAddress } from "../NIS/macAddress.oa.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { gotoGroupAdminPrinter } from "./gotoGroupAdminPrinter.oa.mjs";
import { gotoGroupPrinter } from "./gotoGroupPrinter.oa.mjs";
import { gotoPrinterPPD } from "./gotoPrinterPPD.oa.mjs";
import { gotoUserAdminPrinter } from "./gotoUserAdminPrinter.oa.mjs";
import { gotoUserPrinter } from "./gotoUserPrinter.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [labeledURI, description, localityName, gotoPrinterPPD, macAddress, ipHostNumber, gotoUserPrinter, gotoUserAdminPrinter, gotoGroupPrinter, gotoGroupAdminPrinter] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gotoPrinter"],
    "&ldapDesc": "GOto - Gonicus Terminal Concept, objectclass (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gotoPrinter /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

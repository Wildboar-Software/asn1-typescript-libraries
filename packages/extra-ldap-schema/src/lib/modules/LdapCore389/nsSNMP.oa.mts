/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsSNMP } from "../LdapCore389/id-oc-nsSNMP.va.mjs";

import { nsSNMPOrganization } from "../LdapCore389/nsSNMPOrganization.oa.mjs";
import { nsSNMPLocation } from "../LdapCore389/nsSNMPLocation.oa.mjs";
import { nsSNMPContact } from "../LdapCore389/nsSNMPContact.oa.mjs";
import { nsSNMPDescription } from "../LdapCore389/nsSNMPDescription.oa.mjs";
import { nsSNMPName } from "../LdapCore389/nsSNMPName.oa.mjs";
import { nsSNMPMasterHost } from "../LdapCore389/nsSNMPMasterHost.oa.mjs";
import { nsSNMPMasterPort } from "../LdapCore389/nsSNMPMasterPort.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { nsSNMPEnabled } from "../LdapCore389/nsSNMPEnabled.oa.mjs";
/**
 * @summary nsSNMP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsSNMP OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | nsSNMPEnabled }
 *   MAY CONTAIN               { nsSNMPOrganization
 *                               | nsSNMPLocation
 *                               | nsSNMPContact
 *                               | nsSNMPDescription
 *                               | nsSNMPName
 *                               | nsSNMPMasterHost
 *                               | nsSNMPMasterPort }
 *   LDAP-NAME                 {"nsSNMP"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsSNMP }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsSNMP: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, nsSNMPEnabled, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nsSNMPOrganization, nsSNMPLocation, nsSNMPContact, nsSNMPDescription, nsSNMPName, nsSNMPMasterHost, nsSNMPMasterPort, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsSNMP" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsSNMP /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

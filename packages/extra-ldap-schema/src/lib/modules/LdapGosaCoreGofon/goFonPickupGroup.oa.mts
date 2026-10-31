/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goFonPickupGroup } from "../LdapGosaCoreGofon/id-oc-goFonPickupGroup.va.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";

/**
 * @summary goFonPickupGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFonPickupGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | gidNumber }
 *   LDAP-NAME                 {"goFonPickupGroup"}
 *   LDAP-DESC                 "Additive for posixGroups (v2.7)"
 *   ID                        id-oc-goFonPickupGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFonPickupGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, gidNumber] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goFonPickupGroup"],
    "&ldapDesc": "Additive for posixGroups (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goFonPickupGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

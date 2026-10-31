/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sunISManagedOrganization } from "../Ldapmigration71sunAm/id-oc-sunISManagedOrganization.va.mjs";
import { sunOrganizationAlias } from "../Ldapmigration71sunAm/sunOrganizationAlias.oa.mjs";

/**
 * @summary sunISManagedOrganization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunISManagedOrganization OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { sunOrganizationAlias }
 *   LDAP-NAME                 {"sunISManagedOrganization"}
 *   LDAP-DESC                 "Sun Java System objectclass to identify organizations"
 *   ID                        id-oc-sunISManagedOrganization }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunISManagedOrganization: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [sunOrganizationAlias] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sunISManagedOrganization"],
    "&ldapDesc": "Sun Java System objectclass to identify organizations" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunISManagedOrganization /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

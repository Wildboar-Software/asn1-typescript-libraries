/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { parentOrganization } from "../Ldapmigration20subscriber/parentOrganization.oa.mjs";
import { id_oc_iPlanetLinkedOrganization } from "../Ldapmigration20subscriber/id-oc-iPlanetLinkedOrganization.va.mjs";


/**
 * @summary iPlanetLinkedOrganization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iPlanetLinkedOrganization OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { parentOrganization }
 *   LDAP-NAME                 {"iPlanetLinkedOrganization"}
 *   ID                        id-oc-iPlanetLinkedOrganization }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iPlanetLinkedOrganization: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ parentOrganization, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iPlanetLinkedOrganization" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iPlanetLinkedOrganization /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */


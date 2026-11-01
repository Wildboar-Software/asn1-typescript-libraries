/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sunManagedSubOrganization } from "../Ldapmigration70sunSchema2/id-oc-sunManagedSubOrganization.va.mjs";
import { inetDomainStatus } from "../Ldapmigration20subscriber/inetDomainStatus.oa.mjs";
import { parentOrganization } from "../Ldapmigration20subscriber/parentOrganization.oa.mjs";


/**
 * @summary sunManagedSubOrganization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunManagedSubOrganization OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { inetDomainStatus
 *                               | parentOrganization }
 *   LDAP-NAME                 {"sunManagedSubOrganization"}
 *   LDAP-DESC                 "Auxiliary class which must be present in an sub organization entry"
 *   ID                        id-oc-sunManagedSubOrganization }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunManagedSubOrganization: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ inetDomainStatus, parentOrganization, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sunManagedSubOrganization" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Auxiliary class which must be present in an sub organization entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunManagedSubOrganization /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */


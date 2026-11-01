/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_inetDomainOrg } from "../Ldapmigration55imsIcal/id-oc-inetDomainOrg.va.mjs";
import { domOrgMaxUsers } from "../Ldapmigration55imsIcal/domOrgMaxUsers.oa.mjs";
import { domOrgNumUsers } from "../Ldapmigration55imsIcal/domOrgNumUsers.oa.mjs";


/**
 * @summary inetDomainOrg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetDomainOrg OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { domOrgMaxUsers
 *                               | domOrgNumUsers }
 *   LDAP-NAME                 {"inetDomainOrg"}
 *   LDAP-DESC                 "auxiliary class for suborganizations in a domain"
 *   ID                        id-oc-inetDomainOrg }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetDomainOrg: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ domOrgMaxUsers, domOrgNumUsers, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetDomainOrg" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "auxiliary class for suborganizations in a domain" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetDomainOrg /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */


/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_inetDomain } from "../Ldapmigration20subscriber/id-oc-inetDomain.va.mjs";
import { inetDomainBaseDN } from "../Ldapmigration20subscriber/inetDomainBaseDN.oa.mjs";
import { inetDomainStatus } from "../Ldapmigration20subscriber/inetDomainStatus.oa.mjs";


/**
 * @summary inetDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { inetDomainBaseDN
 *                               | inetDomainStatus }
 *   LDAP-NAME                 {"inetDomain"}
 *   LDAP-DESC                 "Auxiliary class for virtual domain nodes"
 *   ID                        id-oc-inetDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ inetDomainBaseDN, inetDomainStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetDomain" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Auxiliary class for virtual domain nodes" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetDomain /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */


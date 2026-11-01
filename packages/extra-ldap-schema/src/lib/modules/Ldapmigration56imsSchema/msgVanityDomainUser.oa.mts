/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { msgVanityDomain } from "../Ldapmigration56imsSchema/msgVanityDomain.oa.mjs";
import { id_oc_msgVanityDomainUser } from "../Ldapmigration56imsSchema/id-oc-msgVanityDomainUser.va.mjs";


/**
 * @summary msgVanityDomainUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * msgVanityDomainUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { msgVanityDomain }
 *   LDAP-NAME                 {"msgVanityDomainUser"}
 *   LDAP-DESC                 "auxiliary class for defining users in a vality domain"
 *   ID                        id-oc-msgVanityDomainUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const msgVanityDomainUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ msgVanityDomain, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "msgVanityDomainUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "auxiliary class for defining users in a vality domain" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_msgVanityDomainUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */


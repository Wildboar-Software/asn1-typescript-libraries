/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { dcMailAlternateAddress } from "../LdapDovecot/dcMailAlternateAddress.oa.mjs";
import { dcMailForwardingAddress } from "../LdapDovecot/dcMailForwardingAddress.oa.mjs";
import { id_oc_dcMailAlias } from "../LdapDovecot/id-oc-dcMailAlias.va.mjs";


/**
 * @summary dcMailAlias
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dcMailAlias OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dcMailAlternateAddress }
 *   MAY CONTAIN               { dcMailForwardingAddress }
 *   LDAP-NAME                 {"dcMailAlias"}
 *   LDAP-DESC                 "Dovecot Mail Alias"
 *   ID                        id-oc-dcMailAlias }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dcMailAlias: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ dcMailAlternateAddress, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ dcMailForwardingAddress, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dcMailAlias" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Dovecot Mail Alias" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dcMailAlias /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */


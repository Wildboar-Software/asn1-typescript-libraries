/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { alias } from "../InformationFramework/alias.oa.mjs";
import { dc } from "../SelectedAttributeTypes/dc.oa.mjs";
import { id_oc_inetDomainAlias } from "../Ldapmigration55imsIcal/id-oc-inetDomainAlias.va.mjs";

/**
 * @summary inetDomainAlias
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetDomainAlias OBJECT-CLASS ::= {
 *   SUBCLASS OF               { alias }
 *   MUST CONTAIN              { dc }
 *   LDAP-NAME                 {"inetDomainAlias"}
 *   LDAP-DESC                 "auxiliary class for hosted domain aliases"
 *   ID                        id-oc-inetDomainAlias }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetDomainAlias: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ alias, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ dc, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetDomainAlias" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "auxiliary class for hosted domain aliases" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetDomainAlias /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

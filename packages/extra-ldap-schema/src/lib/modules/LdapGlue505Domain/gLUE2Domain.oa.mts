/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { gLUE2DomainID } from "../LdapGlue505Domain/gLUE2DomainID.oa.mjs";
import { id_oc_gLUE2Domain } from "../LdapGlue505Domain/id-oc-gLUE2Domain.va.mjs";
import { gLUE2DomainDescription } from "./gLUE2DomainDescription.oa.mjs";
import { gLUE2DomainWWW } from "./gLUE2DomainWWW.oa.mjs";

/**
 * @summary gLUE2Domain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Domain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2DomainID }
 *   MAY CONTAIN               { gLUE2DomainDescription
 *                               | gLUE2DomainWWW }
 *   LDAP-NAME                 {"GLUE2Domain"}
 *   LDAP-DESC                 "A Domain"
 *   ID                        id-oc-gLUE2Domain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Domain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Entity] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2DomainID] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2DomainDescription, gLUE2DomainWWW] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2Domain"],
    "&ldapDesc": "A Domain" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2Domain /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

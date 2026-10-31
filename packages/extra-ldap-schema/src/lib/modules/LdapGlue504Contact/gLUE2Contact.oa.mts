/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2Contact } from "../LdapGlue504Contact/id-oc-gLUE2Contact.va.mjs";
import { gLUE2ContactDetail } from "./gLUE2ContactDetail.oa.mjs";
import { gLUE2ContactDomainForeignKey } from "./gLUE2ContactDomainForeignKey.oa.mjs";
import { gLUE2ContactID } from "./gLUE2ContactID.oa.mjs";
import { gLUE2ContactServiceForeignKey } from "./gLUE2ContactServiceForeignKey.oa.mjs";
import { gLUE2ContactType } from "./gLUE2ContactType.oa.mjs";

/**
 * @summary gLUE2Contact
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Contact OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2ContactID
 *                               | gLUE2ContactDetail
 *                               | gLUE2ContactType }
 *   MAY CONTAIN               { gLUE2ContactServiceForeignKey
 *                               | gLUE2ContactDomainForeignKey }
 *   LDAP-NAME                 {"GLUE2Contact"}
 *   LDAP-DESC                 "Information enabling to establish a communication with a person or group of persons part of a domain"
 *   ID                        id-oc-gLUE2Contact }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Contact: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Entity] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2ContactID, gLUE2ContactDetail, gLUE2ContactType] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2ContactServiceForeignKey, gLUE2ContactDomainForeignKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2Contact"],
    "&ldapDesc": "Information enabling to establish a communication with a person or group of persons part of a domain" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2Contact /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

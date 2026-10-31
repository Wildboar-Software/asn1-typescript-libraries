/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_contact } from "../LdapSchema2ldifMicrosoft/id-oc-contact.va.mjs";
import { notes } from "../MSUser/notes.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.mjs";

/**
 * @summary contact
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * contact OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalPerson }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { notes }
 *   LDAP-NAME                 {"contact"}
 *   ID                        id-oc-contact }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const contact: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [organizationalPerson] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [notes] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["contact"],
    "&id": id_oc_contact /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

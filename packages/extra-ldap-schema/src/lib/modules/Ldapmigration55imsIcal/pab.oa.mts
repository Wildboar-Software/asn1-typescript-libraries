/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_pab } from "../Ldapmigration55imsIcal/id-oc-pab.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { un } from "./un.oa.mjs";

/**
 * @summary pab
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pab OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { un
 *                               | description }
 *   LDAP-NAME                 {"pab"}
 *   LDAP-DESC                 "structural class for defining a personal address book"
 *   ID                        id-oc-pab }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pab: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [un, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pab"],
    "&ldapDesc": "structural class for defining a personal address book" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pab /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

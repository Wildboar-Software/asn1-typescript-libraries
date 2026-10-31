/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_costemplate } from "../LdapCommon389/id-oc-costemplate.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { cosPriority } from "./cosPriority.oa.mjs";

/**
 * @summary costemplate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * costemplate OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { commonName
 *                               | cosPriority }
 *   LDAP-NAME                 {"costemplate"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-costemplate }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const costemplate: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, cosPriority] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["costemplate"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_costemplate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

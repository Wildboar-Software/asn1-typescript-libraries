/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_crossRefContainer } from "../LdapSchema2ldifMicrosoft/id-oc-crossRefContainer.va.mjs";
import { uPNSuffixes } from "../MSUser/uPNSuffixes.oa.mjs";

/**
 * @summary crossRefContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * crossRefContainer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { uPNSuffixes }
 *   LDAP-NAME                 {"crossRefContainer"}
 *   ID                        id-oc-crossRefContainer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const crossRefContainer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [uPNSuffixes] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["crossRefContainer"],
    "&id": id_oc_crossRefContainer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

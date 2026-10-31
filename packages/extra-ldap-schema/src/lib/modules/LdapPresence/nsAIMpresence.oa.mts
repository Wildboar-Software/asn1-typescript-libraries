/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsAIMpresence } from "../LdapPresence/id-oc-nsAIMpresence.va.mjs";
import { nsAIMStatusGraphic } from "./nsAIMStatusGraphic.oa.mjs";
import { nsAIMStatusText } from "./nsAIMStatusText.oa.mjs";
import { nsAIMid } from "./nsAIMid.oa.mjs";

/**
 * @summary nsAIMpresence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsAIMpresence OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { nsAIMid
 *                               | nsAIMStatusGraphic
 *                               | nsAIMStatusText }
 *   LDAP-NAME                 {"nsAIMpresence"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsAIMpresence }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsAIMpresence: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [nsAIMid, nsAIMStatusGraphic, nsAIMStatusText] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsAIMpresence"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsAIMpresence /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

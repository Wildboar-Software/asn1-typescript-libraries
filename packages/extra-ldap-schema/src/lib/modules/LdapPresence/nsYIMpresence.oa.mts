/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsYIMpresence } from "../LdapPresence/id-oc-nsYIMpresence.va.mjs";
import { nsYIMStatusGraphic } from "./nsYIMStatusGraphic.oa.mjs";
import { nsYIMStatusText } from "./nsYIMStatusText.oa.mjs";
import { nsYIMid } from "./nsYIMid.oa.mjs";

/**
 * @summary nsYIMpresence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsYIMpresence OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { nsYIMid
 *                               | nsYIMStatusGraphic
 *                               | nsYIMStatusText }
 *   LDAP-NAME                 {"nsYIMpresence"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsYIMpresence }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsYIMpresence: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [nsYIMid, nsYIMStatusGraphic, nsYIMStatusText] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsYIMpresence"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsYIMpresence /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

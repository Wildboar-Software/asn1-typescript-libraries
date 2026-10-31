/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsICQpresence } from "../LdapPresence/id-oc-nsICQpresence.va.mjs";
import { nsICQStatusGraphic } from "./nsICQStatusGraphic.oa.mjs";
import { nsICQStatusText } from "./nsICQStatusText.oa.mjs";
import { nsICQid } from "./nsICQid.oa.mjs";

/**
 * @summary nsICQpresence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsICQpresence OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { nsICQid
 *                               | nsICQStatusGraphic
 *                               | nsICQStatusText }
 *   LDAP-NAME                 {"nsICQpresence"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsICQpresence }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsICQpresence: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [nsICQid, nsICQStatusGraphic, nsICQStatusText] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsICQpresence"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsICQpresence /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

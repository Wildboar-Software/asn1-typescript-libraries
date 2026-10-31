/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_puppetClient } from "../LdapPuppet/id-oc-puppetClient.va.mjs";
import { environment } from "./environment.oa.mjs";
import { parentNode } from "./parentNode.oa.mjs";
import { puppetClass } from "./puppetClass.oa.mjs";
import { puppetVar } from "./puppetVar.oa.mjs";

/**
 * @summary puppetClient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * puppetClient OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { puppetClass
 *                               | parentNode
 *                               | environment
 *                               | puppetVar }
 *   LDAP-NAME                 {"puppetClient"}
 *   LDAP-DESC                 "Puppet Client objectclass"
 *   ID                        id-oc-puppetClient }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const puppetClient: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [puppetClass, parentNode, environment, puppetVar] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["puppetClient"],
    "&ldapDesc": "Puppet Client objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_puppetClient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { cosSuperDefinition } from "../LdapCommon389/cosSuperDefinition.oa.mjs";
import { id_oc_cosClassicDefinition } from "../LdapCommon389/id-oc-cosClassicDefinition.va.mjs";
import { cosspecifier } from "./cosspecifier.oa.mjs";
import { costemplatedn } from "./costemplatedn.oa.mjs";

/**
 * @summary cosClassicDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cosClassicDefinition OBJECT-CLASS ::= {
 *   SUBCLASS OF               { cosSuperDefinition }
 *   MAY CONTAIN               { costemplatedn
 *                               | cosspecifier }
 *   LDAP-NAME                 {"cosClassicDefinition"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-cosClassicDefinition }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const cosClassicDefinition: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [cosSuperDefinition] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [costemplatedn, cosspecifier] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["cosClassicDefinition"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_cosClassicDefinition /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { aci } from "../LdapAci/aci.oa.mjs";
import { id_oc_cosDefinition } from "../LdapCommon389/id-oc-cosDefinition.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { cosAttribute } from "./cosAttribute.oa.mjs";
import { cosspecifier } from "./cosspecifier.oa.mjs";
import { costargettree } from "./costargettree.oa.mjs";
import { costemplatedn } from "./costemplatedn.oa.mjs";

/**
 * @summary cosDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cosDefinition OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { costargettree
 *                               | costemplatedn
 *                               | cosspecifier
 *                               | cosAttribute
 *                               | aci
 *                               | commonName
 *                               | uid }
 *   LDAP-NAME                 {"cosDefinition"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-cosDefinition }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const cosDefinition: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [costargettree, costemplatedn, cosspecifier, cosAttribute, aci, commonName, uid] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["cosDefinition"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_cosDefinition /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

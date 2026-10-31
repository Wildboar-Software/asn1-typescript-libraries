/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraAlias } from "../LdapZimbra/id-oc-zimbraAlias.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { zimbraAliasTargetId } from "./zimbraAliasTargetId.oa.mjs";
import { zimbraCreateTimestamp } from "./zimbraCreateTimestamp.oa.mjs";
import { zimbraId } from "./zimbraId.oa.mjs";
import { zimbraLocale } from "./zimbraLocale.oa.mjs";

/**
 * @summary zimbraAlias
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraAlias OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { zimbraAliasTargetId
 *                               | zimbraId }
 *   MAY CONTAIN               { commonName
 *                               | uid
 *                               | zimbraCreateTimestamp
 *                               | zimbraLocale }
 *   LDAP-NAME                 {"zimbraAlias"}
 *   LDAP-DESC                 "An alias to another zimbra object"
 *   ID                        id-oc-zimbraAlias }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraAlias: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [zimbraAliasTargetId, zimbraId] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, uid, zimbraCreateTimestamp, zimbraLocale] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraAlias"],
    "&ldapDesc": "An alias to another zimbra object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraAlias /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

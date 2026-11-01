/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraAlias } from "../LdapZimbra/id-oc-zimbraAlias.va.mjs";
import { zimbraAliasTargetId } from "../LdapZimbra/zimbraAliasTargetId.oa.mjs";
import { zimbraId } from "../LdapZimbra/zimbraId.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { zimbraCreateTimestamp } from "../LdapZimbra/zimbraCreateTimestamp.oa.mjs";
import { zimbraLocale } from "../LdapZimbra/zimbraLocale.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ zimbraAliasTargetId, zimbraId, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, uid, zimbraCreateTimestamp, zimbraLocale, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraAlias" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "An alias to another zimbra object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraAlias /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */


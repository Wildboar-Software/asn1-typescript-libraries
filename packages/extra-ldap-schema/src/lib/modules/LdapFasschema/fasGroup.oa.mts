/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { ipaUserGroup } from "../Ldap60basev2/ipaUserGroup.oa.mjs";
import { id_oc_fasGroup } from "../LdapFasschema/id-oc-fasGroup.va.mjs";
import { fasDiscussionURL } from "./fasDiscussionURL.oa.mjs";
import { fasIRCChannel } from "./fasIRCChannel.oa.mjs";
import { fasMailingList } from "./fasMailingList.oa.mjs";
import { fasURL } from "./fasURL.oa.mjs";

/**
 * @summary fasGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fasGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipaUserGroup }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { fasURL
 *                               | fasMailingList
 *                               | fasIRCChannel
 *                               | fasDiscussionURL }
 *   LDAP-NAME                 {"fasGroup"}
 *   LDAP-DESC                 "FAS group objectclass"
 *   ID                        id-oc-fasGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const fasGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [ipaUserGroup] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [fasURL, fasMailingList, fasIRCChannel, fasDiscussionURL] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["fasGroup"],
    "&ldapDesc": "FAS group objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_fasGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_goSpamServer } from "../LdapGosaCoreGoserver/id-oc-goSpamServer.va.mjs";
import { saRewriteHeader } from "../LdapGosaCoreGoserver/saRewriteHeader.oa.mjs";
import { saTrustedNetworks } from "../LdapGosaCoreGoserver/saTrustedNetworks.oa.mjs";
import { saRequiredScore } from "../LdapGosaCoreGoserver/saRequiredScore.oa.mjs";
import { saFlags } from "../LdapGosaCoreGoserver/saFlags.oa.mjs";
import { saRule } from "../LdapGosaCoreGoserver/saRule.oa.mjs";
import { saStatus } from "../LdapGosaCoreGoserver/saStatus.oa.mjs";
// export { id_oc_goSpamServer } from "../LdapGosaCoreGoserver/id-oc-goSpamServer.va.mjs";


/**
 * @summary goSpamServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goSpamServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { saRewriteHeader
 *                               | saTrustedNetworks
 *                               | saRequiredScore
 *                               | saFlags
 *                               | saRule
 *                               | saStatus }
 *   LDAP-NAME                 {"goSpamServer"}
 *   LDAP-DESC                 "Spam server definition (v2.7)"
 *   ID                        id-oc-goSpamServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goSpamServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ saRewriteHeader, saTrustedNetworks, saRequiredScore, saFlags, saRule, saStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "goSpamServer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Spam server definition (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goSpamServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

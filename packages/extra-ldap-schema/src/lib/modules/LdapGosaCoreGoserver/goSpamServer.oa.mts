/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goSpamServer } from "../LdapGosaCoreGoserver/id-oc-goSpamServer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { saFlags } from "./saFlags.oa.mjs";
import { saRequiredScore } from "./saRequiredScore.oa.mjs";
import { saRewriteHeader } from "./saRewriteHeader.oa.mjs";
import { saRule } from "./saRule.oa.mjs";
import { saStatus } from "./saStatus.oa.mjs";
import { saTrustedNetworks } from "./saTrustedNetworks.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [saRewriteHeader, saTrustedNetworks, saRequiredScore, saFlags, saRule, saStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goSpamServer"],
    "&ldapDesc": "Spam server definition (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goSpamServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

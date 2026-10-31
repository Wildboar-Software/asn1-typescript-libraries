/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goMailServer } from "../LdapGosaCoreGoserver/id-oc-goMailServer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goMailServerStatus } from "./goMailServerStatus.oa.mjs";
import { postfixHeaderSizeLimit } from "./postfixHeaderSizeLimit.oa.mjs";
import { postfixMailboxSizeLimit } from "./postfixMailboxSizeLimit.oa.mjs";
import { postfixMessageSizeLimit } from "./postfixMessageSizeLimit.oa.mjs";
import { postfixMyDestinations } from "./postfixMyDestinations.oa.mjs";
import { postfixMyDomain } from "./postfixMyDomain.oa.mjs";
import { postfixMyHostname } from "./postfixMyHostname.oa.mjs";
import { postfixMyNetworks } from "./postfixMyNetworks.oa.mjs";
import { postfixRecipientRestrictions } from "./postfixRecipientRestrictions.oa.mjs";
import { postfixRelayhost } from "./postfixRelayhost.oa.mjs";
import { postfixSenderRestrictions } from "./postfixSenderRestrictions.oa.mjs";
import { postfixTransportTable } from "./postfixTransportTable.oa.mjs";

/**
 * @summary goMailServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goMailServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | goMailServerStatus
 *                               | postfixHeaderSizeLimit
 *                               | postfixMailboxSizeLimit
 *                               | postfixMessageSizeLimit
 *                               | postfixMyDestinations
 *                               | postfixMyDomain
 *                               | postfixMyHostname
 *                               | postfixMyNetworks
 *                               | postfixRelayhost
 *                               | postfixTransportTable
 *                               | postfixSenderRestrictions
 *                               | postfixRecipientRestrictions }
 *   LDAP-NAME                 {"goMailServer"}
 *   LDAP-DESC                 "Mail server definition (v2.7)"
 *   ID                        id-oc-goMailServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goMailServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, goMailServerStatus, postfixHeaderSizeLimit, postfixMailboxSizeLimit, postfixMessageSizeLimit, postfixMyDestinations, postfixMyDomain, postfixMyHostname, postfixMyNetworks, postfixRelayhost, postfixTransportTable, postfixSenderRestrictions, postfixRecipientRestrictions] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goMailServer"],
    "&ldapDesc": "Mail server definition (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goMailServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_goMailServer } from "../LdapGosaCoreGoserver/id-oc-goMailServer.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goMailServerStatus } from "../LdapGosaCoreGoserver/goMailServerStatus.oa.mjs";
import { postfixHeaderSizeLimit } from "../LdapGosaCoreGoserver/postfixHeaderSizeLimit.oa.mjs";
import { postfixMailboxSizeLimit } from "../LdapGosaCoreGoserver/postfixMailboxSizeLimit.oa.mjs";
import { postfixMessageSizeLimit } from "../LdapGosaCoreGoserver/postfixMessageSizeLimit.oa.mjs";
import { postfixMyDestinations } from "../LdapGosaCoreGoserver/postfixMyDestinations.oa.mjs";
import { postfixMyDomain } from "../LdapGosaCoreGoserver/postfixMyDomain.oa.mjs";
import { postfixMyHostname } from "../LdapGosaCoreGoserver/postfixMyHostname.oa.mjs";
import { postfixMyNetworks } from "../LdapGosaCoreGoserver/postfixMyNetworks.oa.mjs";
import { postfixRelayhost } from "../LdapGosaCoreGoserver/postfixRelayhost.oa.mjs";
import { postfixTransportTable } from "../LdapGosaCoreGoserver/postfixTransportTable.oa.mjs";
import { postfixSenderRestrictions } from "../LdapGosaCoreGoserver/postfixSenderRestrictions.oa.mjs";
import { postfixRecipientRestrictions } from "../LdapGosaCoreGoserver/postfixRecipientRestrictions.oa.mjs";
// export { id_oc_goMailServer } from "../LdapGosaCoreGoserver/id-oc-goMailServer.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, goMailServerStatus, postfixHeaderSizeLimit, postfixMailboxSizeLimit, postfixMessageSizeLimit, postfixMyDestinations, postfixMyDomain, postfixMyHostname, postfixMyNetworks, postfixRelayhost, postfixTransportTable, postfixSenderRestrictions, postfixRecipientRestrictions, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "goMailServer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Mail server definition (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goMailServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
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
const goMailServer: OBJECT_CLASS = undefined;

/* eslint-enable */

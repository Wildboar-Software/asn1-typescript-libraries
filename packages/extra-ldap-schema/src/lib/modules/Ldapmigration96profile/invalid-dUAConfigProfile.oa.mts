/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_invalid_dUAConfigProfile } from "../Ldapmigration96profile/id-oc-invalid-dUAConfigProfile.va.mjs";


/**
 * @summary invalid_dUAConfigProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * invalid-dUAConfigProfile OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { attributeMap
 *                               | authenticationMethod
 *                               | bindTimeLimit
 *                               | credentialLevel
 *                               | defaultSearchBase
 *                               | defaultSearchScope
 *                               | defaultServerList
 *                               | followReferrals
 *                               | objectclassMap
 *                               | preferredServerList
 *                               | profileTTL
 *                               | searchTimeLimit
 *                               | serviceAuthenticationMethod
 *                               | serviceCredentialLevel
 *                               | serviceSearchDescriptor }
 *   LDAP-NAME                 {"DUAConfigProfile"}
 *   ID                        id-oc-invalid-dUAConfigProfile }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const invalid_dUAConfigProfile: OBJECT_CLASS = undefined;

/* eslint-enable */

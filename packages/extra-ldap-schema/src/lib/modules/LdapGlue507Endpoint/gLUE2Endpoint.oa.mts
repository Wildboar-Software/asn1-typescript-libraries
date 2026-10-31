/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { id_oc_gLUE2Endpoint } from "../LdapGlue507Endpoint/id-oc-gLUE2Endpoint.va.mjs";


/**
 * @summary gLUE2Endpoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Endpoint OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2EndpointID
 *                               | gLUE2EndpointURL
 *                               | gLUE2EndpointInterfaceName
 *                               | gLUE2EndpointQualityLevel
 *                               | gLUE2EndpointHealthState
 *                               | gLUE2EndpointServingState
 *                               | gLUE2EndpointServiceForeignKey }
 *   MAY CONTAIN               { gLUE2EndpointCapability
 *                               | gLUE2EndpointTechnology
 *                               | gLUE2EndpointInterfaceVersion
 *                               | gLUE2EndpointInterfaceExtension
 *                               | gLUE2EndpointWSDL
 *                               | gLUE2EndpointSupportedProfile
 *                               | gLUE2EndpointSemantics
 *                               | gLUE2EndpointImplementor
 *                               | gLUE2EndpointImplementationName
 *                               | gLUE2EndpointImplementationVersion
 *                               | gLUE2EndpointHealthStateInfo
 *                               | gLUE2EndpointStartTime
 *                               | gLUE2EndpointIssuerCA
 *                               | gLUE2EndpointTrustedCA
 *                               | gLUE2EndpointDowntimeAnnounce
 *                               | gLUE2EndpointDowntimeStart
 *                               | gLUE2EndpointDowntimeEnd
 *                               | gLUE2EndpointDowntimeInfo }
 *   LDAP-NAME                 {"GLUE2Endpoint"}
 *   LDAP-DESC                 "A network location having a well-defined interface and exposing the service functionalities"
 *   ID                        id-oc-gLUE2Endpoint }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Endpoint: OBJECT_CLASS = undefined;

/* eslint-enable */

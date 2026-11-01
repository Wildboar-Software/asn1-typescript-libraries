/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2Endpoint } from "../LdapGlue507Endpoint/id-oc-gLUE2Endpoint.va.mjs";
import { gLUE2EndpointID } from "../LdapGlue507Endpoint/gLUE2EndpointID.oa.mjs";
import { gLUE2EndpointURL } from "../LdapGlue507Endpoint/gLUE2EndpointURL.oa.mjs";
import { gLUE2EndpointInterfaceName } from "../LdapGlue507Endpoint/gLUE2EndpointInterfaceName.oa.mjs";
import { gLUE2EndpointQualityLevel } from "../LdapGlue507Endpoint/gLUE2EndpointQualityLevel.oa.mjs";
import { gLUE2EndpointHealthState } from "../LdapGlue507Endpoint/gLUE2EndpointHealthState.oa.mjs";
import { gLUE2EndpointServingState } from "../LdapGlue507Endpoint/gLUE2EndpointServingState.oa.mjs";
import { gLUE2EndpointServiceForeignKey } from "../LdapGlue507Endpoint/gLUE2EndpointServiceForeignKey.oa.mjs";
import { gLUE2EndpointCapability } from "../LdapGlue507Endpoint/gLUE2EndpointCapability.oa.mjs";
import { gLUE2EndpointTechnology } from "../LdapGlue507Endpoint/gLUE2EndpointTechnology.oa.mjs";
import { gLUE2EndpointInterfaceVersion } from "../LdapGlue507Endpoint/gLUE2EndpointInterfaceVersion.oa.mjs";
import { gLUE2EndpointInterfaceExtension } from "../LdapGlue507Endpoint/gLUE2EndpointInterfaceExtension.oa.mjs";
import { gLUE2EndpointWSDL } from "../LdapGlue507Endpoint/gLUE2EndpointWSDL.oa.mjs";
import { gLUE2EndpointSupportedProfile } from "../LdapGlue507Endpoint/gLUE2EndpointSupportedProfile.oa.mjs";
import { gLUE2EndpointSemantics } from "../LdapGlue507Endpoint/gLUE2EndpointSemantics.oa.mjs";
import { gLUE2EndpointImplementor } from "../LdapGlue507Endpoint/gLUE2EndpointImplementor.oa.mjs";
import { gLUE2EndpointImplementationName } from "../LdapGlue507Endpoint/gLUE2EndpointImplementationName.oa.mjs";
import { gLUE2EndpointImplementationVersion } from "../LdapGlue507Endpoint/gLUE2EndpointImplementationVersion.oa.mjs";
import { gLUE2EndpointHealthStateInfo } from "../LdapGlue507Endpoint/gLUE2EndpointHealthStateInfo.oa.mjs";
import { gLUE2EndpointStartTime } from "../LdapGlue507Endpoint/gLUE2EndpointStartTime.oa.mjs";
import { gLUE2EndpointIssuerCA } from "../LdapGlue507Endpoint/gLUE2EndpointIssuerCA.oa.mjs";
import { gLUE2EndpointTrustedCA } from "../LdapGlue507Endpoint/gLUE2EndpointTrustedCA.oa.mjs";
import { gLUE2EndpointDowntimeAnnounce } from "../LdapGlue507Endpoint/gLUE2EndpointDowntimeAnnounce.oa.mjs";
import { gLUE2EndpointDowntimeStart } from "../LdapGlue507Endpoint/gLUE2EndpointDowntimeStart.oa.mjs";
import { gLUE2EndpointDowntimeEnd } from "../LdapGlue507Endpoint/gLUE2EndpointDowntimeEnd.oa.mjs";
import { gLUE2EndpointDowntimeInfo } from "../LdapGlue507Endpoint/gLUE2EndpointDowntimeInfo.oa.mjs";


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
const gLUE2Endpoint: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Entity, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2EndpointID, gLUE2EndpointURL, gLUE2EndpointInterfaceName, gLUE2EndpointQualityLevel, gLUE2EndpointHealthState, gLUE2EndpointServingState, gLUE2EndpointServiceForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2EndpointCapability, gLUE2EndpointTechnology, gLUE2EndpointInterfaceVersion, gLUE2EndpointInterfaceExtension, gLUE2EndpointWSDL, gLUE2EndpointSupportedProfile, gLUE2EndpointSemantics, gLUE2EndpointImplementor, gLUE2EndpointImplementationName, gLUE2EndpointImplementationVersion, gLUE2EndpointHealthStateInfo, gLUE2EndpointStartTime, gLUE2EndpointIssuerCA, gLUE2EndpointTrustedCA, gLUE2EndpointDowntimeAnnounce, gLUE2EndpointDowntimeStart, gLUE2EndpointDowntimeEnd, gLUE2EndpointDowntimeInfo, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2Endpoint" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A network location having a well-defined interface and exposing the service functionalities" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2Endpoint /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */


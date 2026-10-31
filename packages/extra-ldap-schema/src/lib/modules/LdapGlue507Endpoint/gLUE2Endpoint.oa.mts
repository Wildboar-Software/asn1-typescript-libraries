/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2Endpoint } from "../LdapGlue507Endpoint/id-oc-gLUE2Endpoint.va.mjs";
import { gLUE2EndpointCapability } from "./gLUE2EndpointCapability.oa.mjs";
import { gLUE2EndpointDowntimeAnnounce } from "./gLUE2EndpointDowntimeAnnounce.oa.mjs";
import { gLUE2EndpointDowntimeEnd } from "./gLUE2EndpointDowntimeEnd.oa.mjs";
import { gLUE2EndpointDowntimeInfo } from "./gLUE2EndpointDowntimeInfo.oa.mjs";
import { gLUE2EndpointDowntimeStart } from "./gLUE2EndpointDowntimeStart.oa.mjs";
import { gLUE2EndpointHealthState } from "./gLUE2EndpointHealthState.oa.mjs";
import { gLUE2EndpointHealthStateInfo } from "./gLUE2EndpointHealthStateInfo.oa.mjs";
import { gLUE2EndpointID } from "./gLUE2EndpointID.oa.mjs";
import { gLUE2EndpointImplementationName } from "./gLUE2EndpointImplementationName.oa.mjs";
import { gLUE2EndpointImplementationVersion } from "./gLUE2EndpointImplementationVersion.oa.mjs";
import { gLUE2EndpointImplementor } from "./gLUE2EndpointImplementor.oa.mjs";
import { gLUE2EndpointInterfaceExtension } from "./gLUE2EndpointInterfaceExtension.oa.mjs";
import { gLUE2EndpointInterfaceName } from "./gLUE2EndpointInterfaceName.oa.mjs";
import { gLUE2EndpointInterfaceVersion } from "./gLUE2EndpointInterfaceVersion.oa.mjs";
import { gLUE2EndpointIssuerCA } from "./gLUE2EndpointIssuerCA.oa.mjs";
import { gLUE2EndpointQualityLevel } from "./gLUE2EndpointQualityLevel.oa.mjs";
import { gLUE2EndpointSemantics } from "./gLUE2EndpointSemantics.oa.mjs";
import { gLUE2EndpointServiceForeignKey } from "./gLUE2EndpointServiceForeignKey.oa.mjs";
import { gLUE2EndpointServingState } from "./gLUE2EndpointServingState.oa.mjs";
import { gLUE2EndpointStartTime } from "./gLUE2EndpointStartTime.oa.mjs";
import { gLUE2EndpointSupportedProfile } from "./gLUE2EndpointSupportedProfile.oa.mjs";
import { gLUE2EndpointTechnology } from "./gLUE2EndpointTechnology.oa.mjs";
import { gLUE2EndpointTrustedCA } from "./gLUE2EndpointTrustedCA.oa.mjs";
import { gLUE2EndpointURL } from "./gLUE2EndpointURL.oa.mjs";
import { gLUE2EndpointWSDL } from "./gLUE2EndpointWSDL.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Entity] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2EndpointID, gLUE2EndpointURL, gLUE2EndpointInterfaceName, gLUE2EndpointQualityLevel, gLUE2EndpointHealthState, gLUE2EndpointServingState, gLUE2EndpointServiceForeignKey] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2EndpointCapability, gLUE2EndpointTechnology, gLUE2EndpointInterfaceVersion, gLUE2EndpointInterfaceExtension, gLUE2EndpointWSDL, gLUE2EndpointSupportedProfile, gLUE2EndpointSemantics, gLUE2EndpointImplementor, gLUE2EndpointImplementationName, gLUE2EndpointImplementationVersion, gLUE2EndpointHealthStateInfo, gLUE2EndpointStartTime, gLUE2EndpointIssuerCA, gLUE2EndpointTrustedCA, gLUE2EndpointDowntimeAnnounce, gLUE2EndpointDowntimeStart, gLUE2EndpointDowntimeEnd, gLUE2EndpointDowntimeInfo] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2Endpoint"],
    "&ldapDesc": "A network location having a well-defined interface and exposing the service functionalities" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2Endpoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

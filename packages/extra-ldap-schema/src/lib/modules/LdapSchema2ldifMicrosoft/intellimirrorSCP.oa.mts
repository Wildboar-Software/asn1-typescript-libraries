/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { serviceAdministrationPoint } from "../LdapSchema2ldifMicrosoft/serviceAdministrationPoint.oa.mjs";
import { id_oc_intellimirrorSCP } from "../LdapSchema2ldifMicrosoft/id-oc-intellimirrorSCP.va.mjs";
import { netbootMachineFilePath } from "../MSUser/netbootMachineFilePath.oa.mjs";
import { netbootAllowNewClients } from "../MSUser/netbootAllowNewClients.oa.mjs";
import { netbootLimitClients } from "../MSUser/netbootLimitClients.oa.mjs";
import { netbootMaxClients } from "../MSUser/netbootMaxClients.oa.mjs";
import { netbootCurrentClientCount } from "../MSUser/netbootCurrentClientCount.oa.mjs";
import { netbootAnswerRequests } from "../MSUser/netbootAnswerRequests.oa.mjs";
import { netbootAnswerOnlyValidClients } from "../MSUser/netbootAnswerOnlyValidClients.oa.mjs";
import { netbootNewMachineNamingPolicy } from "../MSUser/netbootNewMachineNamingPolicy.oa.mjs";
import { netbootNewMachineOU } from "../MSUser/netbootNewMachineOU.oa.mjs";
import { netbootIntelliMirrorOSes } from "../MSUser/netbootIntelliMirrorOSes.oa.mjs";
import { netbootTools } from "../MSUser/netbootTools.oa.mjs";
import { netbootLocallyInstalledOSes } from "../MSUser/netbootLocallyInstalledOSes.oa.mjs";
import { netbootServer } from "../MSUser/netbootServer.oa.mjs";


/**
 * @summary intellimirrorSCP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * intellimirrorSCP OBJECT-CLASS ::= {
 *   SUBCLASS OF               { serviceAdministrationPoint }
 *   MAY CONTAIN               { netbootMachineFilePath
 *                               | netbootAllowNewClients
 *                               | netbootLimitClients
 *                               | netbootMaxClients
 *                               | netbootCurrentClientCount
 *                               | netbootAnswerRequests
 *                               | netbootAnswerOnlyValidClients
 *                               | netbootNewMachineNamingPolicy
 *                               | netbootNewMachineOU
 *                               | netbootIntelliMirrorOSes
 *                               | netbootTools
 *                               | netbootLocallyInstalledOSes
 *                               | netbootServer }
 *   LDAP-NAME                 {"intellimirrorSCP"}
 *   ID                        id-oc-intellimirrorSCP }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const intellimirrorSCP: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ serviceAdministrationPoint, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ netbootMachineFilePath, netbootAllowNewClients, netbootLimitClients, netbootMaxClients, netbootCurrentClientCount, netbootAnswerRequests, netbootAnswerOnlyValidClients, netbootNewMachineNamingPolicy, netbootNewMachineOU, netbootIntelliMirrorOSes, netbootTools, netbootLocallyInstalledOSes, netbootServer, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "intellimirrorSCP" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_intellimirrorSCP /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */


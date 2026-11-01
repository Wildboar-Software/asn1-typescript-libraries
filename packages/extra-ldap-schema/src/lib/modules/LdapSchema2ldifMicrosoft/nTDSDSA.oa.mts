/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { applicationSettings } from "../LdapSchema2ldifMicrosoft/applicationSettings.oa.mjs";
import { id_oc_nTDSDSA } from "../LdapSchema2ldifMicrosoft/id-oc-nTDSDSA.va.mjs";
import { hasMasterNCs } from "../MSUser/hasMasterNCs.oa.mjs";
import { hasPartialReplicaNCs } from "../MSUser/hasPartialReplicaNCs.oa.mjs";
import { dMDLocation } from "../MSUser/dMDLocation.oa.mjs";
import { invocationId } from "../MSUser/invocationId.oa.mjs";
import { networkAddress } from "../MSUser/networkAddress.oa.mjs";
import { options } from "../MSUser/options.oa.mjs";
import { fRSRootPath } from "../MSUser/fRSRootPath.oa.mjs";
import { serverReference } from "../MSUser/serverReference.oa.mjs";
import { lastBackupRestorationTime } from "../MSUser/lastBackupRestorationTime.oa.mjs";
import { queryPolicyObject } from "../MSUser/queryPolicyObject.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
import { retiredReplDSASignatures } from "../MSUser/retiredReplDSASignatures.oa.mjs";


/**
 * @summary nTDSDSA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTDSDSA OBJECT-CLASS ::= {
 *   SUBCLASS OF               { applicationSettings }
 *   MAY CONTAIN               { hasMasterNCs
 *                               | hasPartialReplicaNCs
 *                               | dMDLocation
 *                               | invocationId
 *                               | networkAddress
 *                               | options
 *                               | fRSRootPath
 *                               | serverReference
 *                               | lastBackupRestorationTime
 *                               | queryPolicyObject
 *                               | managedBy
 *                               | retiredReplDSASignatures }
 *   LDAP-NAME                 {"nTDSDSA"}
 *   ID                        id-oc-nTDSDSA }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTDSDSA: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ applicationSettings, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ hasMasterNCs, hasPartialReplicaNCs, dMDLocation, invocationId, networkAddress, options, fRSRootPath, serverReference, lastBackupRestorationTime, queryPolicyObject, managedBy, retiredReplDSASignatures, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nTDSDSA" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nTDSDSA /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */


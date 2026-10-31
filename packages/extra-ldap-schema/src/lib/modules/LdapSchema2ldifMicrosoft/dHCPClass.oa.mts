/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dHCPClass } from "../LdapSchema2ldifMicrosoft/id-oc-dHCPClass.va.mjs";
import { dhcpClasses } from "../MSUser/dhcpClasses.oa.mjs";
import { dhcpFlags } from "../MSUser/dhcpFlags.oa.mjs";
import { dhcpIdentification } from "../MSUser/dhcpIdentification.oa.mjs";
import { dhcpMask } from "../MSUser/dhcpMask.oa.mjs";
import { dhcpMaxKey } from "../MSUser/dhcpMaxKey.oa.mjs";
import { dhcpObjDescription } from "../MSUser/dhcpObjDescription.oa.mjs";
import { dhcpObjName } from "../MSUser/dhcpObjName.oa.mjs";
import { dhcpOptions } from "../MSUser/dhcpOptions.oa.mjs";
import { dhcpProperties } from "../MSUser/dhcpProperties.oa.mjs";
import { dhcpRanges } from "../MSUser/dhcpRanges.oa.mjs";
import { dhcpReservations } from "../MSUser/dhcpReservations.oa.mjs";
import { dhcpServers } from "../MSUser/dhcpServers.oa.mjs";
import { dhcpSites } from "../MSUser/dhcpSites.oa.mjs";
import { dhcpState } from "../MSUser/dhcpState.oa.mjs";
import { dhcpSubnets } from "../MSUser/dhcpSubnets.oa.mjs";
import { dhcpType } from "../MSUser/dhcpType.oa.mjs";
import { dhcpUniqueKey } from "../MSUser/dhcpUniqueKey.oa.mjs";
import { dhcpUpdateTime } from "../MSUser/dhcpUpdateTime.oa.mjs";
import { mscopeId } from "../MSUser/mscopeId.oa.mjs";
import { networkAddress } from "../MSUser/networkAddress.oa.mjs";
import { optionDescription } from "../MSUser/optionDescription.oa.mjs";
import { optionsLocation } from "../MSUser/optionsLocation.oa.mjs";
import { superScopeDescription } from "../MSUser/superScopeDescription.oa.mjs";
import { superScopes } from "../MSUser/superScopes.oa.mjs";

/**
 * @summary dHCPClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dHCPClass OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dhcpUniqueKey
 *                               | dhcpType
 *                               | dhcpFlags
 *                               | dhcpIdentification }
 *   MAY CONTAIN               { networkAddress
 *                               | dhcpObjName
 *                               | dhcpObjDescription
 *                               | dhcpServers
 *                               | dhcpSubnets
 *                               | dhcpMask
 *                               | dhcpRanges
 *                               | dhcpSites
 *                               | dhcpReservations
 *                               | superScopes
 *                               | superScopeDescription
 *                               | optionDescription
 *                               | optionsLocation
 *                               | dhcpOptions
 *                               | dhcpClasses
 *                               | mscopeId
 *                               | dhcpState
 *                               | dhcpProperties
 *                               | dhcpMaxKey
 *                               | dhcpUpdateTime }
 *   LDAP-NAME                 {"dHCPClass"}
 *   ID                        id-oc-dHCPClass }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dHCPClass: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [dhcpUniqueKey, dhcpType, dhcpFlags, dhcpIdentification] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [networkAddress, dhcpObjName, dhcpObjDescription, dhcpServers, dhcpSubnets, dhcpMask, dhcpRanges, dhcpSites, dhcpReservations, superScopes, superScopeDescription, optionDescription, optionsLocation, dhcpOptions, dhcpClasses, mscopeId, dhcpState, dhcpProperties, dhcpMaxKey, dhcpUpdateTime] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dHCPClass"],
    "&id": id_oc_dHCPClass /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import {
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { duaConfSchemaOID } from "../DUAConf/duaConfSchemaOID.va.mjs";

import { defaultServerList } from "../DUAConf/defaultServerList.oa.mjs";
import { preferredServerList } from "../DUAConf/preferredServerList.oa.mjs";
import { defaultSearchBase } from "../DUAConf/defaultSearchBase.oa.mjs";
import { defaultSearchScope } from "../DUAConf/defaultSearchScope.oa.mjs";
import { searchTimeLimit } from "../DUAConf/searchTimeLimit.oa.mjs";
import { bindTimeLimit } from "../DUAConf/bindTimeLimit.oa.mjs";
import { credentialLevel } from "../DUAConf/credentialLevel.oa.mjs";
import { authenticationMethod } from "../DUAConf/authenticationMethod.oa.mjs";
import { followReferrals } from "../DUAConf/followReferrals.oa.mjs";
import { dereferenceAliases } from "../DUAConf/dereferenceAliases.oa.mjs";
import { serviceSearchDescriptor } from "../DUAConf/serviceSearchDescriptor.oa.mjs";
import { serviceCredentialLevel } from "../DUAConf/serviceCredentialLevel.oa.mjs";
import { serviceAuthenticationMethod } from "../DUAConf/serviceAuthenticationMethod.oa.mjs";
import { objectclassMap } from "../DUAConf/objectclassMap.oa.mjs";
import { attributeMap } from "../DUAConf/attributeMap.oa.mjs";
import { profileTTL } from "../DUAConf/profileTTL.oa.mjs";
/**
 * @summary duaConfigProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * duaConfigProfile OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {commonName}
 *     MAY CONTAIN        {
 *         defaultServerList
 *         | preferredServerList
 *         | defaultSearchBase
 *         | defaultSearchScope
 *         | searchTimeLimit
 *         | bindTimeLimit
 *         | credentialLevel
 *         | authenticationMethod
 *         | followReferrals
 *         | dereferenceAliases
 *         | serviceSearchDescriptor
 *         | serviceCredentialLevel
 *         | serviceAuthenticationMethod
 *         | objectclassMap
 *         | attributeMap
 *         | profileTTL
 *     }
 *     LDAP-NAME        {"DUAConfigProfile"}
 *     LDAP-DESC        "Abstraction of a base configuration for a DUA"
 *     ID                { duaConfSchemaOID 2 5 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const duaConfigProfile: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ defaultServerList, preferredServerList, defaultSearchBase, defaultSearchScope, searchTimeLimit, bindTimeLimit, credentialLevel, authenticationMethod, followReferrals, dereferenceAliases, serviceSearchDescriptor, serviceCredentialLevel, serviceAuthenticationMethod, objectclassMap, attributeMap, profileTTL, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "DUAConfigProfile" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Abstraction of a base configuration for a DUA" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([2, 5,], duaConfSchemaOID) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

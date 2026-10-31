/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { duaConfSchemaOID } from "../DUAConf/duaConfSchemaOID.va.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { attributeMap } from "./attributeMap.oa.mjs";
import { authenticationMethod } from "./authenticationMethod.oa.mjs";
import { bindTimeLimit } from "./bindTimeLimit.oa.mjs";
import { credentialLevel } from "./credentialLevel.oa.mjs";
import { defaultSearchBase } from "./defaultSearchBase.oa.mjs";
import { defaultSearchScope } from "./defaultSearchScope.oa.mjs";
import { defaultServerList } from "./defaultServerList.oa.mjs";
import { dereferenceAliases } from "./dereferenceAliases.oa.mjs";
import { followReferrals } from "./followReferrals.oa.mjs";
import { objectclassMap } from "./objectclassMap.oa.mjs";
import { preferredServerList } from "./preferredServerList.oa.mjs";
import { profileTTL } from "./profileTTL.oa.mjs";
import { searchTimeLimit } from "./searchTimeLimit.oa.mjs";
import { serviceAuthenticationMethod } from "./serviceAuthenticationMethod.oa.mjs";
import { serviceCredentialLevel } from "./serviceCredentialLevel.oa.mjs";
import { serviceSearchDescriptor } from "./serviceSearchDescriptor.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [defaultServerList, preferredServerList, defaultSearchBase, defaultSearchScope, searchTimeLimit, bindTimeLimit, credentialLevel, authenticationMethod, followReferrals, dereferenceAliases, serviceSearchDescriptor, serviceCredentialLevel, serviceAuthenticationMethod, objectclassMap, attributeMap, profileTTL] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["DUAConfigProfile"],
    "&ldapDesc": "Abstraction of a base configuration for a DUA" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        2,
        5,
    ], duaConfSchemaOID) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

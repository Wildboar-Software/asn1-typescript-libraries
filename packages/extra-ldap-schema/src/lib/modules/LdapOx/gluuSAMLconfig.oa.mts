/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    type OPTIONAL,
    type BOOLEAN,
    type INTEGER,
    type BIT_STRING,
    type OCTET_STRING,
    type NULL,
    type OBJECT_IDENTIFIER,
    type ObjectDescriptor,
    type EXTERNAL,
    type REAL,
    type INSTANCE_OF,
    type ENUMERATED,
    type EMBEDDED_PDV,
    type UTF8String,
    type RELATIVE_OID,
    type SEQUENCE,
    type SEQUENCE_OF,
    type SET,
    type SET_OF,
    type GraphicString,
    type NumericString,
    type VisibleString,
    type PrintableString,
    type ISO646String,
    type TeletexString,
    type GeneralString,
    type T61String,
    type UniversalString,
    type VideotexString,
    type BMPString,
    type IA5String,
    type CharacterString,
    type UTCTime,
    type GeneralizedTime,
    type TIME,
    type DATE,
    type TIME_OF_DAY,
    type DATE_TIME,
    type DURATION,
    type OID_IRI,
    type RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    type TYPE_IDENTIFIER,
    type ABSTRACT_SYNTAX,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_gluuSAMLconfig } from "../LdapOx/id-oc-gluuSAMLconfig.va.mjs";

import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { federationRules } from "../LdapOx/federationRules.oa.mjs";
import { gluuContainerFederation } from "../LdapOx/gluuContainerFederation.oa.mjs";
import { gluuEntityId } from "../LdapOx/gluuEntityId.oa.mjs";
import { gluuIsFederation } from "../LdapOx/gluuIsFederation.oa.mjs";
import { gluuProfileConfiguration } from "../LdapOx/gluuProfileConfiguration.oa.mjs";
import { gluuReleasedAttribute } from "../LdapOx/gluuReleasedAttribute.oa.mjs";
import { gluuRulesAccepted } from "../LdapOx/gluuRulesAccepted.oa.mjs";
import { gluuSAMLMetaDataFilter } from "../LdapOx/gluuSAMLMetaDataFilter.oa.mjs";
import { gluuSAMLTrustEngine } from "../LdapOx/gluuSAMLTrustEngine.oa.mjs";
import { gluuSAMLmaxRefreshDelay } from "../LdapOx/gluuSAMLmaxRefreshDelay.oa.mjs";
import { gluuSAMLspMetaDataFN } from "../LdapOx/gluuSAMLspMetaDataFN.oa.mjs";
import { gluuSAMLspMetaDataSourceType } from "../LdapOx/gluuSAMLspMetaDataSourceType.oa.mjs";
import { gluuSAMLspMetaDataURL } from "../LdapOx/gluuSAMLspMetaDataURL.oa.mjs";
import { gluuSpecificRelyingPartyConfig } from "../LdapOx/gluuSpecificRelyingPartyConfig.oa.mjs";
import { gluuStatus } from "../LdapOx/gluuStatus.oa.mjs";
import { gluuTrustContact } from "../LdapOx/gluuTrustContact.oa.mjs";
import { gluuTrustDeconstruction } from "../LdapOx/gluuTrustDeconstruction.oa.mjs";
import { gluuValidationLog } from "../LdapOx/gluuValidationLog.oa.mjs";
import { gluuValidationStatus } from "../LdapOx/gluuValidationStatus.oa.mjs";
import { iname } from "../LdapOx/iname.oa.mjs";
import { inum } from "../LdapOx/inum.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { oxAuthPostLogoutRedirectURI } from "../LdapOx/oxAuthPostLogoutRedirectURI.oa.mjs";
import { url } from "../LdapOx/url.oa.mjs";
import { researchAndScholarshipEnabled } from "../LdapOx/researchAndScholarshipEnabled.oa.mjs";
import { gluuEntityType } from "../LdapOx/gluuEntityType.oa.mjs";
/**
 * @summary gluuSAMLconfig
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gluuSAMLconfig OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { description
 *                               | displayName
 *                               | federationRules
 *                               | gluuContainerFederation
 *                               | gluuEntityId
 *                               | gluuIsFederation
 *                               | gluuProfileConfiguration
 *                               | gluuReleasedAttribute
 *                               | gluuRulesAccepted
 *                               | gluuSAMLMetaDataFilter
 *                               | gluuSAMLTrustEngine
 *                               | gluuSAMLmaxRefreshDelay
 *                               | gluuSAMLspMetaDataFN
 *                               | gluuSAMLspMetaDataSourceType
 *                               | gluuSAMLspMetaDataURL
 *                               | gluuSpecificRelyingPartyConfig
 *                               | gluuStatus
 *                               | gluuTrustContact
 *                               | gluuTrustDeconstruction
 *                               | gluuValidationLog
 *                               | gluuValidationStatus
 *                               | iname
 *                               | inum
 *                               | organizationName
 *                               | oxAuthPostLogoutRedirectURI
 *                               | url
 *                               | researchAndScholarshipEnabled
 *                               | gluuEntityType }
 *   LDAP-NAME                 {"gluuSAMLconfig"}
 *   ID                        id-oc-gluuSAMLconfig }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gluuSAMLconfig: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, displayName, federationRules, gluuContainerFederation, gluuEntityId, gluuIsFederation, gluuProfileConfiguration, gluuReleasedAttribute, gluuRulesAccepted, gluuSAMLMetaDataFilter, gluuSAMLTrustEngine, gluuSAMLmaxRefreshDelay, gluuSAMLspMetaDataFN, gluuSAMLspMetaDataSourceType, gluuSAMLspMetaDataURL, gluuSpecificRelyingPartyConfig, gluuStatus, gluuTrustContact, gluuTrustDeconstruction, gluuValidationLog, gluuValidationStatus, iname, inum, organizationName, oxAuthPostLogoutRedirectURI, url, researchAndScholarshipEnabled, gluuEntityType, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gluuSAMLconfig" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gluuSAMLconfig /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

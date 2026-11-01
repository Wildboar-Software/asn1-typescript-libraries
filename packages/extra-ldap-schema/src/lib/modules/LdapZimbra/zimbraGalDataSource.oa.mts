/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { zimbraDataSource } from "../LdapZimbra/zimbraDataSource.oa.mjs";
import { id_oc_zimbraGalDataSource } from "../LdapZimbra/id-oc-zimbraGalDataSource.va.mjs";

import { zimbraGalLastFailedSyncTimestamp } from "../LdapZimbra/zimbraGalLastFailedSyncTimestamp.oa.mjs";
import { zimbraGalLastSuccessfulSyncTimestamp } from "../LdapZimbra/zimbraGalLastSuccessfulSyncTimestamp.oa.mjs";
import { zimbraGalLdapAttrMap } from "../LdapZimbra/zimbraGalLdapAttrMap.oa.mjs";
import { zimbraGalLdapGroupHandlerClass } from "../LdapZimbra/zimbraGalLdapGroupHandlerClass.oa.mjs";
import { zimbraGalLdapValueMap } from "../LdapZimbra/zimbraGalLdapValueMap.oa.mjs";
import { zimbraGalSyncIgnoredAttributes } from "../LdapZimbra/zimbraGalSyncIgnoredAttributes.oa.mjs";
import { zimbraGalSyncLdapAuthMech } from "../LdapZimbra/zimbraGalSyncLdapAuthMech.oa.mjs";
import { zimbraGalSyncLdapBindDn } from "../LdapZimbra/zimbraGalSyncLdapBindDn.oa.mjs";
import { zimbraGalSyncLdapBindPassword } from "../LdapZimbra/zimbraGalSyncLdapBindPassword.oa.mjs";
import { zimbraGalSyncLdapFilter } from "../LdapZimbra/zimbraGalSyncLdapFilter.oa.mjs";
import { zimbraGalSyncLdapKerberos5Keytab } from "../LdapZimbra/zimbraGalSyncLdapKerberos5Keytab.oa.mjs";
import { zimbraGalSyncLdapKerberos5Principal } from "../LdapZimbra/zimbraGalSyncLdapKerberos5Principal.oa.mjs";
import { zimbraGalSyncLdapPageSize } from "../LdapZimbra/zimbraGalSyncLdapPageSize.oa.mjs";
import { zimbraGalSyncLdapSearchBase } from "../LdapZimbra/zimbraGalSyncLdapSearchBase.oa.mjs";
import { zimbraGalSyncLdapStartTlsEnabled } from "../LdapZimbra/zimbraGalSyncLdapStartTlsEnabled.oa.mjs";
import { zimbraGalSyncLdapURL } from "../LdapZimbra/zimbraGalSyncLdapURL.oa.mjs";
import { zimbraGalSyncTimestampFormat } from "../LdapZimbra/zimbraGalSyncTimestampFormat.oa.mjs";
import { zimbraGalStatus } from "../LdapZimbra/zimbraGalStatus.oa.mjs";
import { zimbraGalType } from "../LdapZimbra/zimbraGalType.oa.mjs";
/**
 * @summary zimbraGalDataSource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraGalDataSource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { zimbraDataSource }
 *   MUST CONTAIN              { zimbraGalStatus
 *                               | zimbraGalType }
 *   MAY CONTAIN               { zimbraGalLastFailedSyncTimestamp
 *                               | zimbraGalLastSuccessfulSyncTimestamp
 *                               | zimbraGalLdapAttrMap
 *                               | zimbraGalLdapGroupHandlerClass
 *                               | zimbraGalLdapValueMap
 *                               | zimbraGalSyncIgnoredAttributes
 *                               | zimbraGalSyncLdapAuthMech
 *                               | zimbraGalSyncLdapBindDn
 *                               | zimbraGalSyncLdapBindPassword
 *                               | zimbraGalSyncLdapFilter
 *                               | zimbraGalSyncLdapKerberos5Keytab
 *                               | zimbraGalSyncLdapKerberos5Principal
 *                               | zimbraGalSyncLdapPageSize
 *                               | zimbraGalSyncLdapSearchBase
 *                               | zimbraGalSyncLdapStartTlsEnabled
 *                               | zimbraGalSyncLdapURL
 *                               | zimbraGalSyncTimestampFormat }
 *   LDAP-NAME                 {"zimbraGalDataSource"}
 *   LDAP-DESC                 "GAL data source object"
 *   ID                        id-oc-zimbraGalDataSource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraGalDataSource: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ zimbraDataSource, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ zimbraGalStatus, zimbraGalType, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ zimbraGalLastFailedSyncTimestamp, zimbraGalLastSuccessfulSyncTimestamp, zimbraGalLdapAttrMap, zimbraGalLdapGroupHandlerClass, zimbraGalLdapValueMap, zimbraGalSyncIgnoredAttributes, zimbraGalSyncLdapAuthMech, zimbraGalSyncLdapBindDn, zimbraGalSyncLdapBindPassword, zimbraGalSyncLdapFilter, zimbraGalSyncLdapKerberos5Keytab, zimbraGalSyncLdapKerberos5Principal, zimbraGalSyncLdapPageSize, zimbraGalSyncLdapSearchBase, zimbraGalSyncLdapStartTlsEnabled, zimbraGalSyncLdapURL, zimbraGalSyncTimestampFormat, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraGalDataSource" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "GAL data source object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraGalDataSource /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

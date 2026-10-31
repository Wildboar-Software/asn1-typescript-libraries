/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_zimbraGalDataSource } from "../LdapZimbra/id-oc-zimbraGalDataSource.va.mjs";
import { zimbraDataSource } from "../LdapZimbra/zimbraDataSource.oa.mjs";
import { zimbraGalLastFailedSyncTimestamp } from "./zimbraGalLastFailedSyncTimestamp.oa.mjs";
import { zimbraGalLastSuccessfulSyncTimestamp } from "./zimbraGalLastSuccessfulSyncTimestamp.oa.mjs";
import { zimbraGalLdapAttrMap } from "./zimbraGalLdapAttrMap.oa.mjs";
import { zimbraGalLdapGroupHandlerClass } from "./zimbraGalLdapGroupHandlerClass.oa.mjs";
import { zimbraGalLdapValueMap } from "./zimbraGalLdapValueMap.oa.mjs";
import { zimbraGalStatus } from "./zimbraGalStatus.oa.mjs";
import { zimbraGalSyncIgnoredAttributes } from "./zimbraGalSyncIgnoredAttributes.oa.mjs";
import { zimbraGalSyncLdapAuthMech } from "./zimbraGalSyncLdapAuthMech.oa.mjs";
import { zimbraGalSyncLdapBindDn } from "./zimbraGalSyncLdapBindDn.oa.mjs";
import { zimbraGalSyncLdapBindPassword } from "./zimbraGalSyncLdapBindPassword.oa.mjs";
import { zimbraGalSyncLdapFilter } from "./zimbraGalSyncLdapFilter.oa.mjs";
import { zimbraGalSyncLdapKerberos5Keytab } from "./zimbraGalSyncLdapKerberos5Keytab.oa.mjs";
import { zimbraGalSyncLdapKerberos5Principal } from "./zimbraGalSyncLdapKerberos5Principal.oa.mjs";
import { zimbraGalSyncLdapPageSize } from "./zimbraGalSyncLdapPageSize.oa.mjs";
import { zimbraGalSyncLdapSearchBase } from "./zimbraGalSyncLdapSearchBase.oa.mjs";
import { zimbraGalSyncLdapStartTlsEnabled } from "./zimbraGalSyncLdapStartTlsEnabled.oa.mjs";
import { zimbraGalSyncLdapURL } from "./zimbraGalSyncLdapURL.oa.mjs";
import { zimbraGalSyncTimestampFormat } from "./zimbraGalSyncTimestampFormat.oa.mjs";
import { zimbraGalType } from "./zimbraGalType.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [zimbraDataSource] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [zimbraGalStatus, zimbraGalType] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [zimbraGalLastFailedSyncTimestamp, zimbraGalLastSuccessfulSyncTimestamp, zimbraGalLdapAttrMap, zimbraGalLdapGroupHandlerClass, zimbraGalLdapValueMap, zimbraGalSyncIgnoredAttributes, zimbraGalSyncLdapAuthMech, zimbraGalSyncLdapBindDn, zimbraGalSyncLdapBindPassword, zimbraGalSyncLdapFilter, zimbraGalSyncLdapKerberos5Keytab, zimbraGalSyncLdapKerberos5Principal, zimbraGalSyncLdapPageSize, zimbraGalSyncLdapSearchBase, zimbraGalSyncLdapStartTlsEnabled, zimbraGalSyncLdapURL, zimbraGalSyncTimestampFormat] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraGalDataSource"],
    "&ldapDesc": "GAL data source object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraGalDataSource /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

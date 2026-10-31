/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_solarisNamingProfile } from "../LdapNisclient/id-oc-solarisNamingProfile.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { solarisAuthMethod } from "./solarisAuthMethod.oa.mjs";
import { solarisBindDN } from "./solarisBindDN.oa.mjs";
import { solarisBindPassword } from "./solarisBindPassword.oa.mjs";
import { solarisCacheTTL } from "./solarisCacheTTL.oa.mjs";
import { solarisCertificatePassword } from "./solarisCertificatePassword.oa.mjs";
import { solarisCertificatePath } from "./solarisCertificatePath.oa.mjs";
import { solarisDataSearchDN } from "./solarisDataSearchDN.oa.mjs";
import { solarisLDAPServers } from "./solarisLDAPServers.oa.mjs";
import { solarisPreferredServer } from "./solarisPreferredServer.oa.mjs";
import { solarisPreferredServerOnly } from "./solarisPreferredServerOnly.oa.mjs";
import { solarisSearchBaseDN } from "./solarisSearchBaseDN.oa.mjs";
import { solarisSearchReferral } from "./solarisSearchReferral.oa.mjs";
import { solarisSearchScope } from "./solarisSearchScope.oa.mjs";
import { solarisSearchTimeLimit } from "./solarisSearchTimeLimit.oa.mjs";
import { solarisTransportSecurity } from "./solarisTransportSecurity.oa.mjs";

/**
 * @summary solarisNamingProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * solarisNamingProfile OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | solarisLDAPServers
 *                               | solarisSearchBaseDN }
 *   MAY CONTAIN               { solarisAuthMethod
 *                               | solarisBindDN
 *                               | solarisBindPassword
 *                               | solarisCacheTTL
 *                               | solarisCertificatePassword
 *                               | solarisCertificatePath
 *                               | solarisDataSearchDN
 *                               | solarisPreferredServer
 *                               | solarisPreferredServerOnly
 *                               | solarisSearchReferral
 *                               | solarisSearchScope
 *                               | solarisSearchTimeLimit
 *                               | solarisTransportSecurity }
 *   LDAP-NAME                 {"SolarisNamingProfile"}
 *   ID                        id-oc-solarisNamingProfile }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const solarisNamingProfile: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, solarisLDAPServers, solarisSearchBaseDN] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [solarisAuthMethod, solarisBindDN, solarisBindPassword, solarisCacheTTL, solarisCertificatePassword, solarisCertificatePath, solarisDataSearchDN, solarisPreferredServer, solarisPreferredServerOnly, solarisSearchReferral, solarisSearchScope, solarisSearchTimeLimit, solarisTransportSecurity] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["SolarisNamingProfile"],
    "&id": id_oc_solarisNamingProfile /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

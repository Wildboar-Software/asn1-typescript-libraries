/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxAuthClient } from "../LdapOx/id-oc-oxAuthClient.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { associatedPerson } from "./associatedPerson.oa.mjs";
import { del } from "./del.oa.mjs";
import { exp } from "./exp.oa.mjs";
import { inum } from "./inum.oa.mjs";
import { oxAccessTokenAsJwt } from "./oxAccessTokenAsJwt.oa.mjs";
import { oxAccessTokenLifetime } from "./oxAccessTokenLifetime.oa.mjs";
import { oxAccessTokenSigningAlg } from "./oxAccessTokenSigningAlg.oa.mjs";
import { oxAttributes } from "./oxAttributes.oa.mjs";
import { oxAuthAppType } from "./oxAuthAppType.oa.mjs";
import { oxAuthAuthorizedOrigins } from "./oxAuthAuthorizedOrigins.oa.mjs";
import { oxAuthBackchannelAuthenticationRequestSigningAlg } from "./oxAuthBackchannelAuthenticationRequestSigningAlg.oa.mjs";
import { oxAuthBackchannelClientNotificationEndpoint } from "./oxAuthBackchannelClientNotificationEndpoint.oa.mjs";
import { oxAuthBackchannelTokenDeliveryMode } from "./oxAuthBackchannelTokenDeliveryMode.oa.mjs";
import { oxAuthBackchannelUserCodeParameter } from "./oxAuthBackchannelUserCodeParameter.oa.mjs";
import { oxAuthClaim } from "./oxAuthClaim.oa.mjs";
import { oxAuthClientIdIssuedAt } from "./oxAuthClientIdIssuedAt.oa.mjs";
import { oxAuthClientSecret } from "./oxAuthClientSecret.oa.mjs";
import { oxAuthClientSecretExpiresAt } from "./oxAuthClientSecretExpiresAt.oa.mjs";
import { oxAuthClientURI } from "./oxAuthClientURI.oa.mjs";
import { oxAuthContact } from "./oxAuthContact.oa.mjs";
import { oxAuthDefaultAcrValues } from "./oxAuthDefaultAcrValues.oa.mjs";
import { oxAuthDefaultMaxAge } from "./oxAuthDefaultMaxAge.oa.mjs";
import { oxAuthExtraConf } from "./oxAuthExtraConf.oa.mjs";
import { oxAuthGrantType } from "./oxAuthGrantType.oa.mjs";
import { oxAuthIdTokenEncryptedResponseAlg } from "./oxAuthIdTokenEncryptedResponseAlg.oa.mjs";
import { oxAuthIdTokenEncryptedResponseEnc } from "./oxAuthIdTokenEncryptedResponseEnc.oa.mjs";
import { oxAuthIdTokenSignedResponseAlg } from "./oxAuthIdTokenSignedResponseAlg.oa.mjs";
import { oxAuthInitiateLoginURI } from "./oxAuthInitiateLoginURI.oa.mjs";
import { oxAuthJwks } from "./oxAuthJwks.oa.mjs";
import { oxAuthJwksURI } from "./oxAuthJwksURI.oa.mjs";
import { oxAuthLogoURI } from "./oxAuthLogoURI.oa.mjs";
import { oxAuthLogoutSessionRequired } from "./oxAuthLogoutSessionRequired.oa.mjs";
import { oxAuthLogoutURI } from "./oxAuthLogoutURI.oa.mjs";
import { oxAuthPolicyURI } from "./oxAuthPolicyURI.oa.mjs";
import { oxAuthPostLogoutRedirectURI } from "./oxAuthPostLogoutRedirectURI.oa.mjs";
import { oxAuthRedirectURI } from "./oxAuthRedirectURI.oa.mjs";
import { oxAuthRegistrationAccessToken } from "./oxAuthRegistrationAccessToken.oa.mjs";
import { oxAuthRequestObjectEncryptionAlg } from "./oxAuthRequestObjectEncryptionAlg.oa.mjs";
import { oxAuthRequestObjectEncryptionEnc } from "./oxAuthRequestObjectEncryptionEnc.oa.mjs";
import { oxAuthRequestObjectSigningAlg } from "./oxAuthRequestObjectSigningAlg.oa.mjs";
import { oxAuthRequestURI } from "./oxAuthRequestURI.oa.mjs";
import { oxAuthRequireAuthTime } from "./oxAuthRequireAuthTime.oa.mjs";
import { oxAuthResponseType } from "./oxAuthResponseType.oa.mjs";
import { oxAuthScope } from "./oxAuthScope.oa.mjs";
import { oxAuthSectorIdentifierURI } from "./oxAuthSectorIdentifierURI.oa.mjs";
import { oxAuthSignedResponseAlg } from "./oxAuthSignedResponseAlg.oa.mjs";
import { oxAuthSubjectType } from "./oxAuthSubjectType.oa.mjs";
import { oxAuthTokenEndpointAuthMethod } from "./oxAuthTokenEndpointAuthMethod.oa.mjs";
import { oxAuthTokenEndpointAuthSigningAlg } from "./oxAuthTokenEndpointAuthSigningAlg.oa.mjs";
import { oxAuthTosURI } from "./oxAuthTosURI.oa.mjs";
import { oxAuthTrustedClient } from "./oxAuthTrustedClient.oa.mjs";
import { oxAuthUserInfoEncryptedResponseAlg } from "./oxAuthUserInfoEncryptedResponseAlg.oa.mjs";
import { oxAuthUserInfoEncryptedResponseEnc } from "./oxAuthUserInfoEncryptedResponseEnc.oa.mjs";
import { oxClaimRedirectURI } from "./oxClaimRedirectURI.oa.mjs";
import { oxDisabled } from "./oxDisabled.oa.mjs";
import { oxIncludeClaimsInIdToken } from "./oxIncludeClaimsInIdToken.oa.mjs";
import { oxLastAccessTime } from "./oxLastAccessTime.oa.mjs";
import { oxLastLogonTime } from "./oxLastLogonTime.oa.mjs";
import { oxPersistClientAuthorizations } from "./oxPersistClientAuthorizations.oa.mjs";
import { oxRefreshTokenLifetime } from "./oxRefreshTokenLifetime.oa.mjs";
import { oxRptAsJwt } from "./oxRptAsJwt.oa.mjs";
import { oxSoftwareId } from "./oxSoftwareId.oa.mjs";
import { oxSoftwareStatement } from "./oxSoftwareStatement.oa.mjs";
import { oxSoftwareVersion } from "./oxSoftwareVersion.oa.mjs";
import { oxdId } from "./oxdId.oa.mjs";
import { tknBndCnf } from "./tknBndCnf.oa.mjs";

/**
 * @summary oxAuthClient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxAuthClient OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { associatedPerson
 *                               | displayName
 *                               | description
 *                               | inum
 *                               | oxAuthAppType
 *                               | oxAuthClientIdIssuedAt
 *                               | oxAuthClientSecret
 *                               | oxAuthClientSecretExpiresAt
 *                               | exp
 *                               | del
 *                               | oxAuthClientURI
 *                               | oxAuthContact
 *                               | oxAuthDefaultAcrValues
 *                               | oxAuthDefaultMaxAge
 *                               | oxAuthGrantType
 *                               | oxAuthIdTokenEncryptedResponseAlg
 *                               | oxAuthIdTokenEncryptedResponseEnc
 *                               | oxAuthIdTokenSignedResponseAlg
 *                               | oxAuthInitiateLoginURI
 *                               | oxAuthJwksURI
 *                               | oxAuthJwks
 *                               | oxAuthLogoURI
 *                               | oxAuthPolicyURI
 *                               | oxAuthPostLogoutRedirectURI
 *                               | oxAuthRedirectURI
 *                               | oxAuthRegistrationAccessToken
 *                               | oxAuthRequestObjectSigningAlg
 *                               | oxAuthRequestObjectEncryptionAlg
 *                               | oxAuthRequestObjectEncryptionEnc
 *                               | oxAuthRequestURI
 *                               | oxAuthRequireAuthTime
 *                               | oxAuthResponseType
 *                               | oxAuthScope
 *                               | oxAuthClaim
 *                               | oxAuthSectorIdentifierURI
 *                               | oxAuthSignedResponseAlg
 *                               | oxAuthSubjectType
 *                               | oxAuthTokenEndpointAuthMethod
 *                               | oxAuthTokenEndpointAuthSigningAlg
 *                               | oxAuthTosURI
 *                               | oxAuthTrustedClient
 *                               | oxAuthUserInfoEncryptedResponseAlg
 *                               | oxAuthUserInfoEncryptedResponseEnc
 *                               | oxAuthExtraConf
 *                               | oxClaimRedirectURI
 *                               | oxLastAccessTime
 *                               | oxLastLogonTime
 *                               | oxPersistClientAuthorizations
 *                               | oxIncludeClaimsInIdToken
 *                               | oxRefreshTokenLifetime
 *                               | oxDisabled
 *                               | oxAuthLogoutURI
 *                               | oxAuthLogoutSessionRequired
 *                               | oxdId
 *                               | oxAuthAuthorizedOrigins
 *                               | tknBndCnf
 *                               | oxAccessTokenAsJwt
 *                               | oxAccessTokenSigningAlg
 *                               | oxAccessTokenLifetime
 *                               | oxSoftwareId
 *                               | oxSoftwareVersion
 *                               | oxSoftwareStatement
 *                               | oxRptAsJwt
 *                               | oxAttributes
 *                               | oxAuthBackchannelTokenDeliveryMode
 *                               | oxAuthBackchannelClientNotificationEndpoint
 *                               | oxAuthBackchannelAuthenticationRequestSigningAlg
 *                               | oxAuthBackchannelUserCodeParameter }
 *   LDAP-NAME                 {"oxAuthClient"}
 *   ID                        id-oc-oxAuthClient }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxAuthClient: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [associatedPerson, displayName, description, inum, oxAuthAppType, oxAuthClientIdIssuedAt, oxAuthClientSecret, oxAuthClientSecretExpiresAt, exp, del, oxAuthClientURI, oxAuthContact, oxAuthDefaultAcrValues, oxAuthDefaultMaxAge, oxAuthGrantType, oxAuthIdTokenEncryptedResponseAlg, oxAuthIdTokenEncryptedResponseEnc, oxAuthIdTokenSignedResponseAlg, oxAuthInitiateLoginURI, oxAuthJwksURI, oxAuthJwks, oxAuthLogoURI, oxAuthPolicyURI, oxAuthPostLogoutRedirectURI, oxAuthRedirectURI, oxAuthRegistrationAccessToken, oxAuthRequestObjectSigningAlg, oxAuthRequestObjectEncryptionAlg, oxAuthRequestObjectEncryptionEnc, oxAuthRequestURI, oxAuthRequireAuthTime, oxAuthResponseType, oxAuthScope, oxAuthClaim, oxAuthSectorIdentifierURI, oxAuthSignedResponseAlg, oxAuthSubjectType, oxAuthTokenEndpointAuthMethod, oxAuthTokenEndpointAuthSigningAlg, oxAuthTosURI, oxAuthTrustedClient, oxAuthUserInfoEncryptedResponseAlg, oxAuthUserInfoEncryptedResponseEnc, oxAuthExtraConf, oxClaimRedirectURI, oxLastAccessTime, oxLastLogonTime, oxPersistClientAuthorizations, oxIncludeClaimsInIdToken, oxRefreshTokenLifetime, oxDisabled, oxAuthLogoutURI, oxAuthLogoutSessionRequired, oxdId, oxAuthAuthorizedOrigins, tknBndCnf, oxAccessTokenAsJwt, oxAccessTokenSigningAlg, oxAccessTokenLifetime, oxSoftwareId, oxSoftwareVersion, oxSoftwareStatement, oxRptAsJwt, oxAttributes, oxAuthBackchannelTokenDeliveryMode, oxAuthBackchannelClientNotificationEndpoint, oxAuthBackchannelAuthenticationRequestSigningAlg, oxAuthBackchannelUserCodeParameter] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxAuthClient"],
    "&id": id_oc_oxAuthClient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

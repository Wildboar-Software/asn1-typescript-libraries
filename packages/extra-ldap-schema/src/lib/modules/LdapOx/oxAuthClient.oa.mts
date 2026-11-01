/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxAuthClient } from "../LdapOx/id-oc-oxAuthClient.va.mjs";
import { associatedPerson } from "../LdapOx/associatedPerson.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { inum } from "../LdapOx/inum.oa.mjs";
import { oxAuthAppType } from "../LdapOx/oxAuthAppType.oa.mjs";
import { oxAuthClientIdIssuedAt } from "../LdapOx/oxAuthClientIdIssuedAt.oa.mjs";
import { oxAuthClientSecret } from "../LdapOx/oxAuthClientSecret.oa.mjs";
import { oxAuthClientSecretExpiresAt } from "../LdapOx/oxAuthClientSecretExpiresAt.oa.mjs";
import { exp } from "../LdapOx/exp.oa.mjs";
import { del } from "../LdapOx/del.oa.mjs";
import { oxAuthClientURI } from "../LdapOx/oxAuthClientURI.oa.mjs";
import { oxAuthContact } from "../LdapOx/oxAuthContact.oa.mjs";
import { oxAuthDefaultAcrValues } from "../LdapOx/oxAuthDefaultAcrValues.oa.mjs";
import { oxAuthDefaultMaxAge } from "../LdapOx/oxAuthDefaultMaxAge.oa.mjs";
import { oxAuthGrantType } from "../LdapOx/oxAuthGrantType.oa.mjs";
import { oxAuthIdTokenEncryptedResponseAlg } from "../LdapOx/oxAuthIdTokenEncryptedResponseAlg.oa.mjs";
import { oxAuthIdTokenEncryptedResponseEnc } from "../LdapOx/oxAuthIdTokenEncryptedResponseEnc.oa.mjs";
import { oxAuthIdTokenSignedResponseAlg } from "../LdapOx/oxAuthIdTokenSignedResponseAlg.oa.mjs";
import { oxAuthInitiateLoginURI } from "../LdapOx/oxAuthInitiateLoginURI.oa.mjs";
import { oxAuthJwksURI } from "../LdapOx/oxAuthJwksURI.oa.mjs";
import { oxAuthJwks } from "../LdapOx/oxAuthJwks.oa.mjs";
import { oxAuthLogoURI } from "../LdapOx/oxAuthLogoURI.oa.mjs";
import { oxAuthPolicyURI } from "../LdapOx/oxAuthPolicyURI.oa.mjs";
import { oxAuthPostLogoutRedirectURI } from "../LdapOx/oxAuthPostLogoutRedirectURI.oa.mjs";
import { oxAuthRedirectURI } from "../LdapOx/oxAuthRedirectURI.oa.mjs";
import { oxAuthRegistrationAccessToken } from "../LdapOx/oxAuthRegistrationAccessToken.oa.mjs";
import { oxAuthRequestObjectSigningAlg } from "../LdapOx/oxAuthRequestObjectSigningAlg.oa.mjs";
import { oxAuthRequestObjectEncryptionAlg } from "../LdapOx/oxAuthRequestObjectEncryptionAlg.oa.mjs";
import { oxAuthRequestObjectEncryptionEnc } from "../LdapOx/oxAuthRequestObjectEncryptionEnc.oa.mjs";
import { oxAuthRequestURI } from "../LdapOx/oxAuthRequestURI.oa.mjs";
import { oxAuthRequireAuthTime } from "../LdapOx/oxAuthRequireAuthTime.oa.mjs";
import { oxAuthResponseType } from "../LdapOx/oxAuthResponseType.oa.mjs";
import { oxAuthScope } from "../LdapOx/oxAuthScope.oa.mjs";
import { oxAuthClaim } from "../LdapOx/oxAuthClaim.oa.mjs";
import { oxAuthSectorIdentifierURI } from "../LdapOx/oxAuthSectorIdentifierURI.oa.mjs";
import { oxAuthSignedResponseAlg } from "../LdapOx/oxAuthSignedResponseAlg.oa.mjs";
import { oxAuthSubjectType } from "../LdapOx/oxAuthSubjectType.oa.mjs";
import { oxAuthTokenEndpointAuthMethod } from "../LdapOx/oxAuthTokenEndpointAuthMethod.oa.mjs";
import { oxAuthTokenEndpointAuthSigningAlg } from "../LdapOx/oxAuthTokenEndpointAuthSigningAlg.oa.mjs";
import { oxAuthTosURI } from "../LdapOx/oxAuthTosURI.oa.mjs";
import { oxAuthTrustedClient } from "../LdapOx/oxAuthTrustedClient.oa.mjs";
import { oxAuthUserInfoEncryptedResponseAlg } from "../LdapOx/oxAuthUserInfoEncryptedResponseAlg.oa.mjs";
import { oxAuthUserInfoEncryptedResponseEnc } from "../LdapOx/oxAuthUserInfoEncryptedResponseEnc.oa.mjs";
import { oxAuthExtraConf } from "../LdapOx/oxAuthExtraConf.oa.mjs";
import { oxClaimRedirectURI } from "../LdapOx/oxClaimRedirectURI.oa.mjs";
import { oxLastAccessTime } from "../LdapOx/oxLastAccessTime.oa.mjs";
import { oxLastLogonTime } from "../LdapOx/oxLastLogonTime.oa.mjs";
import { oxPersistClientAuthorizations } from "../LdapOx/oxPersistClientAuthorizations.oa.mjs";
import { oxIncludeClaimsInIdToken } from "../LdapOx/oxIncludeClaimsInIdToken.oa.mjs";
import { oxRefreshTokenLifetime } from "../LdapOx/oxRefreshTokenLifetime.oa.mjs";
import { oxDisabled } from "../LdapOx/oxDisabled.oa.mjs";
import { oxAuthLogoutURI } from "../LdapOx/oxAuthLogoutURI.oa.mjs";
import { oxAuthLogoutSessionRequired } from "../LdapOx/oxAuthLogoutSessionRequired.oa.mjs";
import { oxdId } from "../LdapOx/oxdId.oa.mjs";
import { oxAuthAuthorizedOrigins } from "../LdapOx/oxAuthAuthorizedOrigins.oa.mjs";
import { tknBndCnf } from "../LdapOx/tknBndCnf.oa.mjs";
import { oxAccessTokenAsJwt } from "../LdapOx/oxAccessTokenAsJwt.oa.mjs";
import { oxAccessTokenSigningAlg } from "../LdapOx/oxAccessTokenSigningAlg.oa.mjs";
import { oxAccessTokenLifetime } from "../LdapOx/oxAccessTokenLifetime.oa.mjs";
import { oxSoftwareId } from "../LdapOx/oxSoftwareId.oa.mjs";
import { oxSoftwareVersion } from "../LdapOx/oxSoftwareVersion.oa.mjs";
import { oxSoftwareStatement } from "../LdapOx/oxSoftwareStatement.oa.mjs";
import { oxRptAsJwt } from "../LdapOx/oxRptAsJwt.oa.mjs";
import { oxAttributes } from "../LdapOx/oxAttributes.oa.mjs";
import { oxAuthBackchannelTokenDeliveryMode } from "../LdapOx/oxAuthBackchannelTokenDeliveryMode.oa.mjs";
import { oxAuthBackchannelClientNotificationEndpoint } from "../LdapOx/oxAuthBackchannelClientNotificationEndpoint.oa.mjs";
import { oxAuthBackchannelAuthenticationRequestSigningAlg } from "../LdapOx/oxAuthBackchannelAuthenticationRequestSigningAlg.oa.mjs";
import { oxAuthBackchannelUserCodeParameter } from "../LdapOx/oxAuthBackchannelUserCodeParameter.oa.mjs";
// export { id_oc_oxAuthClient } from "../LdapOx/id-oc-oxAuthClient.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ associatedPerson, displayName, description, inum, oxAuthAppType, oxAuthClientIdIssuedAt, oxAuthClientSecret, oxAuthClientSecretExpiresAt, exp, del, oxAuthClientURI, oxAuthContact, oxAuthDefaultAcrValues, oxAuthDefaultMaxAge, oxAuthGrantType, oxAuthIdTokenEncryptedResponseAlg, oxAuthIdTokenEncryptedResponseEnc, oxAuthIdTokenSignedResponseAlg, oxAuthInitiateLoginURI, oxAuthJwksURI, oxAuthJwks, oxAuthLogoURI, oxAuthPolicyURI, oxAuthPostLogoutRedirectURI, oxAuthRedirectURI, oxAuthRegistrationAccessToken, oxAuthRequestObjectSigningAlg, oxAuthRequestObjectEncryptionAlg, oxAuthRequestObjectEncryptionEnc, oxAuthRequestURI, oxAuthRequireAuthTime, oxAuthResponseType, oxAuthScope, oxAuthClaim, oxAuthSectorIdentifierURI, oxAuthSignedResponseAlg, oxAuthSubjectType, oxAuthTokenEndpointAuthMethod, oxAuthTokenEndpointAuthSigningAlg, oxAuthTosURI, oxAuthTrustedClient, oxAuthUserInfoEncryptedResponseAlg, oxAuthUserInfoEncryptedResponseEnc, oxAuthExtraConf, oxClaimRedirectURI, oxLastAccessTime, oxLastLogonTime, oxPersistClientAuthorizations, oxIncludeClaimsInIdToken, oxRefreshTokenLifetime, oxDisabled, oxAuthLogoutURI, oxAuthLogoutSessionRequired, oxdId, oxAuthAuthorizedOrigins, tknBndCnf, oxAccessTokenAsJwt, oxAccessTokenSigningAlg, oxAccessTokenLifetime, oxSoftwareId, oxSoftwareVersion, oxSoftwareStatement, oxRptAsJwt, oxAttributes, oxAuthBackchannelTokenDeliveryMode, oxAuthBackchannelClientNotificationEndpoint, oxAuthBackchannelAuthenticationRequestSigningAlg, oxAuthBackchannelUserCodeParameter, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxAuthClient" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxAuthClient /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

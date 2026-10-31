/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
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
const oxAuthClient: OBJECT_CLASS = undefined;

/* eslint-enable */

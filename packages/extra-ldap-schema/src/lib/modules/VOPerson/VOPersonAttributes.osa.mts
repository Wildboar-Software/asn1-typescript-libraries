/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { voPersonAffiliation } from "../VOPerson/voPersonAffiliation.oa.mjs";
// export { voPersonAffiliation } from "../VOPerson/voPersonAffiliation.oa.mjs";
import { voPersonApplicationPassword } from "../VOPerson/voPersonApplicationPassword.oa.mjs";
// export { voPersonApplicationPassword } from "../VOPerson/voPersonApplicationPassword.oa.mjs";
import { voPersonApplicationUID } from "../VOPerson/voPersonApplicationUID.oa.mjs";
// export { voPersonApplicationUID } from "../VOPerson/voPersonApplicationUID.oa.mjs";
import { voPersonAuthorName } from "../VOPerson/voPersonAuthorName.oa.mjs";
// export { voPersonAuthorName } from "../VOPerson/voPersonAuthorName.oa.mjs";
import { voPersonCertificateDN } from "../VOPerson/voPersonCertificateDN.oa.mjs";
// export { voPersonCertificateDN } from "../VOPerson/voPersonCertificateDN.oa.mjs";
import { voPersonCertificateIssuerDN } from "../VOPerson/voPersonCertificateIssuerDN.oa.mjs";
// export { voPersonCertificateIssuerDN } from "../VOPerson/voPersonCertificateIssuerDN.oa.mjs";
import { voPersonExternalAffiliation } from "../VOPerson/voPersonExternalAffiliation.oa.mjs";
// export { voPersonExternalAffiliation } from "../VOPerson/voPersonExternalAffiliation.oa.mjs";
import { voPersonExternalID } from "../VOPerson/voPersonExternalID.oa.mjs";
// export { voPersonExternalID } from "../VOPerson/voPersonExternalID.oa.mjs";
import { voPersonID } from "../VOPerson/voPersonID.oa.mjs";
// export { voPersonID } from "../VOPerson/voPersonID.oa.mjs";
import { voPersonPolicyAgreement } from "../VOPerson/voPersonPolicyAgreement.oa.mjs";
// export { voPersonPolicyAgreement } from "../VOPerson/voPersonPolicyAgreement.oa.mjs";
import { voPersonScopedAffiliation } from "../VOPerson/voPersonScopedAffiliation.oa.mjs";
// export { voPersonScopedAffiliation } from "../VOPerson/voPersonScopedAffiliation.oa.mjs";
import { voPersonSoRID } from "../VOPerson/voPersonSoRID.oa.mjs";
// export { voPersonSoRID } from "../VOPerson/voPersonSoRID.oa.mjs";
import { voPersonStatus } from "../VOPerson/voPersonStatus.oa.mjs";
// export { voPersonStatus } from "../VOPerson/voPersonStatus.oa.mjs";
import { voPersonToken } from "../VOPerson/voPersonToken.oa.mjs";
// export { voPersonToken } from "../VOPerson/voPersonToken.oa.mjs";
import { voPersonVerifiedEmail } from "../VOPerson/voPersonVerifiedEmail.oa.mjs";
// export { voPersonVerifiedEmail } from "../VOPerson/voPersonVerifiedEmail.oa.mjs";


/**
 * @summary VOPersonAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VOPersonAttributes ATTRIBUTE ::= {
 *     voPersonAffiliation
 *     | voPersonApplicationPassword
 *     | voPersonApplicationUID
 *     | voPersonAuthorName
 *     | voPersonCertificateDN
 *     | voPersonCertificateIssuerDN
 *     | voPersonExternalAffiliation
 *     | voPersonExternalID
 *     | voPersonID
 *     | voPersonPolicyAgreement
 *     | voPersonScopedAffiliation
 *     | voPersonSoRID
 *     | voPersonStatus
 *     | voPersonToken
 *     | voPersonVerifiedEmail,
 *     ...
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const VOPersonAttributes: (ATTRIBUTE)[] = [ voPersonAffiliation, voPersonApplicationPassword, voPersonApplicationUID, voPersonAuthorName, voPersonCertificateDN, voPersonCertificateIssuerDN, voPersonExternalAffiliation, voPersonExternalID, voPersonID, voPersonPolicyAgreement, voPersonScopedAffiliation, voPersonSoRID, voPersonStatus, voPersonToken, voPersonVerifiedEmail, ];

/* eslint-enable */

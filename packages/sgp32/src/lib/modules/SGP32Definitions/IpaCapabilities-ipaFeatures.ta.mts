/* eslint-disable */
import {
    type ASN1Element as _Element,
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IpaCapabilities_ipaFeatures
 * @description
 * 
 * Profile-download and compact-ESipa features. A bit set to 1 means the IPA
 * supports that feature. Indirect-download bits are additional capabilities of
 * an IPA that supports indirect Profile download. SGP.32 v1.2, section 4.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaCapabilities-ipaFeatures ::= BIT STRING {
 *     directRspServerCommunication(0),
 *     indirectRspServerCommunication(1),
 *     eimDownloadDataHandling(2),
 *     eimCtxParams1Generation(3),
 *     eimProfileMetadataVerification(4),
 *     minimizeEsipaBytes(5)
 * }
 * ```
 */
export
type IpaCapabilities_ipaFeatures = BIT_STRING;

/**
 * @summary IpaCapabilities_ipaFeatures_directRspServerCommunication
 * @description
 * Set to 1 when the IPA supports direct Profile download per section 3.2.3.1,
 * including direct delivery of Notifications to the SM-DP+. SGP.32 v1.2,
 * section 4.1.
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_directRspServerCommunication: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary directRspServerCommunication
 * @description
 * Set to 1 when the IPA supports direct Profile download, including
 * Notifications sent directly to the SM-DP+. SGP.32 v1.2, section 4.1.
 * @constant
 */
export
const directRspServerCommunication: number = IpaCapabilities_ipaFeatures_directRspServerCommunication; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaFeatures_indirectRspServerCommunication
 * @description
 * Set to 1 when the IPA supports indirect Profile download per section
 * 3.2.3.2, including delivery of Notifications via the eIM to the SM-DP+.
 * SGP.32 v1.2, section 4.1.
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_indirectRspServerCommunication: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary indirectRspServerCommunication
 * @description
 * Set to 1 when the IPA supports indirect Profile download, including
 * Notifications delivered via the eIM. SGP.32 v1.2, section 4.1.
 * @constant
 */
export
const indirectRspServerCommunication: number = IpaCapabilities_ipaFeatures_indirectRspServerCommunication; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaFeatures_eimDownloadDataHandling
 * @description
 * Set to 1 when, during indirect Profile download, the IPA leaves Activation
 * Codes, SM-DS data, and the default SM-DP+ address at the eIM. The eIM
 * extracts the SM-DP+ address, matchingId, and SM-DP+ OID for
 * ESipa.InitiateAuthentication. With an Activation Code, that IPA SHALL NOT
 * send `smdpAddress`. SGP.32 v1.2, sections 4.1 and 5.14.1.
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_eimDownloadDataHandling: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary eimDownloadDataHandling
 * @description
 * Set to 1 when the eIM, during indirect download, keeps the Activation Code,
 * SM-DS data, and default SM-DP+ address and supplies the extracted values.
 * SGP.32 v1.2, section 4.1.
 * @constant
 */
export
const eimDownloadDataHandling: number = IpaCapabilities_ipaFeatures_eimDownloadDataHandling; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaFeatures_eimCtxParams1Generation
 * @description
 * Set to 1 when the IPA does not generate CtxParams1 and expects the eIM to
 * provide it in ESipa.InitiateAuthentication. Such an IPA SHALL support
 * providing `deviceInfo` to the eIM. SGP.32 v1.2, sections 4.1 and 2.11.1.2.
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_eimCtxParams1Generation: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary eimCtxParams1Generation
 * @description
 * Set to 1 when the eIM must generate CtxParams1 and supply it in
 * ESipa.InitiateAuthentication. SGP.32 v1.2, section 4.1.
 * @constant
 */
export
const eimCtxParams1Generation: number = IpaCapabilities_ipaFeatures_eimCtxParams1Generation; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaFeatures_eimProfileMetadataVerification
 * @description
 * Set to 1 when the IPA does not verify Profile Metadata. The eIM verifies it
 * in ESipa.AuthenticateClient, and in ESipa.GetBoundProfilePackage checks that
 * the metadata in the Bound Profile Package matches the metadata from that
 * earlier response. SGP.32 v1.2, section 4.1.
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_eimProfileMetadataVerification: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary eimProfileMetadataVerification
 * @description
 * Set to 1 when the eIM verifies Profile Metadata and checks that the Bound
 * Profile Package still carries that metadata. SGP.32 v1.2, section 4.1.
 * @constant
 */
export
const eimProfileMetadataVerification: number = IpaCapabilities_ipaFeatures_eimProfileMetadataVerification; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaFeatures_minimizeEsipaBytes
 * @description
 * Set to 1 when the IPA uses compact data objects and omits ESipa bytes the
 * other party already has. The eIM rebuilds the full objects from
 * pre-configured data, data from the same eUICC batch, data read from the IoT
 * Device, and SM-DP+ session data. Such an IPA SHALL support returning
 * `euiccInfo1`, `euiccInfo2`, `eumCertificate`, and `euiccCertificate`. SGP.32
 * v1.2, sections 4.1 and 2.11.1.2.
 * @constant
 */
export
const IpaCapabilities_ipaFeatures_minimizeEsipaBytes: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary minimizeEsipaBytes
 * @description
 * Set to 1 when the IPA uses compact ESipa objects and omits bytes the eIM can
 * rebuild. SGP.32 v1.2, section 4.1.
 * @constant
 */
export
const minimizeEsipaBytes: number = IpaCapabilities_ipaFeatures_minimizeEsipaBytes; /* SHORT_NAMED_BIT */
export const _decode_IpaCapabilities_ipaFeatures: $.ASN1Decoder<IpaCapabilities_ipaFeatures> = $._decodeBitString;
export const _encode_IpaCapabilities_ipaFeatures: $.ASN1Encoder<IpaCapabilities_ipaFeatures> = $._encodeBitString;


/* eslint-enable */

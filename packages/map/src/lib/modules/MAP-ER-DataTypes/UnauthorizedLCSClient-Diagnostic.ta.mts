/* eslint-disable */
import {
    type ASN1Element as _Element,
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_UnauthorizedLCSClient_Diagnostic {
    noAdditionalInformation = 0,
    clientNotInMSPrivacyExceptionList = 1,
    callToClientNotSetup = 2,
    privacyOverrideNotApplicable = 3,
    disallowedByLocalRegulatoryRequirements = 4,
    unauthorizedPrivacyClass = 5,
    unauthorizedCallSessionUnrelatedExternalClient = 6,
    unauthorizedCallSessionRelatedExternalClient = 7,
}

/**
 * @summary UnauthorizedLCSClient_Diagnostic
 * @description
 * 
 * Diagnostic on `UnauthorizedLCSClient-Param`. Any unrecognized value shall be
 * ignored (3GPP TS 29.002 V19.1.0 clauses 7.6.1.4 and 17.7.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnauthorizedLCSClient-Diagnostic  ::=  ENUMERATED {
 *     noAdditionalInformation (0),
 *     clientNotInMSPrivacyExceptionList (1),
 *     callToClientNotSetup (2),
 *     privacyOverrideNotApplicable (3),
 *     disallowedByLocalRegulatoryRequirements (4),
 *     ...,
 *     unauthorizedPrivacyClass (5),
 *     unauthorizedCallSessionUnrelatedExternalClient (6),
 *     unauthorizedCallSessionRelatedExternalClient (7) }
 * ```
 * 
 * @enum {number}
 */
export
type UnauthorizedLCSClient_Diagnostic = _enum_for_UnauthorizedLCSClient_Diagnostic | ENUMERATED;

/**
 * @summary UnauthorizedLCSClient_Diagnostic_noAdditionalInformation
 * @description
 *
 * NoAdditional Information (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_noAdditionalInformation = _enum_for_UnauthorizedLCSClient_Diagnostic.noAdditionalInformation satisfies UnauthorizedLCSClient_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAdditionalInformation
 * @description
 *
 * NoAdditional Information (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const noAdditionalInformation = UnauthorizedLCSClient_Diagnostic_noAdditionalInformation satisfies UnauthorizedLCSClient_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_clientNotInMSPrivacyExceptionList
 * @description
 *
 * Client not in MS Privacy Exception List (3GPP TS 29.002 V19.1.0 clause
 * 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_clientNotInMSPrivacyExceptionList = _enum_for_UnauthorizedLCSClient_Diagnostic.clientNotInMSPrivacyExceptionList satisfies UnauthorizedLCSClient_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary clientNotInMSPrivacyExceptionList
 * @description
 *
 * Client not in MS Privacy Exception List (3GPP TS 29.002 V19.1.0 clause
 * 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const clientNotInMSPrivacyExceptionList = UnauthorizedLCSClient_Diagnostic_clientNotInMSPrivacyExceptionList satisfies UnauthorizedLCSClient_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_callToClientNotSetup
 * @description
 *
 * Call to Client not setup (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_callToClientNotSetup = _enum_for_UnauthorizedLCSClient_Diagnostic.callToClientNotSetup satisfies UnauthorizedLCSClient_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callToClientNotSetup
 * @description
 *
 * Call to Client not setup (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const callToClientNotSetup = UnauthorizedLCSClient_Diagnostic_callToClientNotSetup satisfies UnauthorizedLCSClient_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_privacyOverrideNotApplicable
 * @description
 *
 * Privacy override not applicable (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_privacyOverrideNotApplicable = _enum_for_UnauthorizedLCSClient_Diagnostic.privacyOverrideNotApplicable satisfies UnauthorizedLCSClient_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privacyOverrideNotApplicable
 * @description
 *
 * Privacy override not applicable (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const privacyOverrideNotApplicable = UnauthorizedLCSClient_Diagnostic_privacyOverrideNotApplicable satisfies UnauthorizedLCSClient_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_disallowedByLocalRegulatoryRequirements
 * @description
 *
 * Disallowed by Local Regulatory Requirements (3GPP TS 29.002 V19.1.0 clause
 * 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_disallowedByLocalRegulatoryRequirements = _enum_for_UnauthorizedLCSClient_Diagnostic.disallowedByLocalRegulatoryRequirements satisfies UnauthorizedLCSClient_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disallowedByLocalRegulatoryRequirements
 * @description
 *
 * Disallowed by Local Regulatory Requirements (3GPP TS 29.002 V19.1.0 clause
 * 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const disallowedByLocalRegulatoryRequirements = UnauthorizedLCSClient_Diagnostic_disallowedByLocalRegulatoryRequirements satisfies UnauthorizedLCSClient_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_unauthorizedPrivacyClass
 * @description
 *
 * Unauthorised Privacy Class (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_unauthorizedPrivacyClass = _enum_for_UnauthorizedLCSClient_Diagnostic.unauthorizedPrivacyClass satisfies UnauthorizedLCSClient_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorizedPrivacyClass
 * @description
 *
 * Unauthorised Privacy Class (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const unauthorizedPrivacyClass = UnauthorizedLCSClient_Diagnostic_unauthorizedPrivacyClass satisfies UnauthorizedLCSClient_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionUnrelatedExternalClient
 * @description
 *
 * Unauthorised Call/Session Unrelated External Client (3GPP TS 29.002 V19.1.0
 * clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionUnrelatedExternalClient = _enum_for_UnauthorizedLCSClient_Diagnostic.unauthorizedCallSessionUnrelatedExternalClient satisfies UnauthorizedLCSClient_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorizedCallSessionUnrelatedExternalClient
 * @description
 *
 * Unauthorised Call/Session Unrelated External Client (3GPP TS 29.002 V19.1.0
 * clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const unauthorizedCallSessionUnrelatedExternalClient = UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionUnrelatedExternalClient satisfies UnauthorizedLCSClient_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionRelatedExternalClient
 * @description
 *
 * Unauthorised Call/Session Related External Client (3GPP TS 29.002 V19.1.0
 * clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionRelatedExternalClient = _enum_for_UnauthorizedLCSClient_Diagnostic.unauthorizedCallSessionRelatedExternalClient satisfies UnauthorizedLCSClient_Diagnostic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorizedCallSessionRelatedExternalClient
 * @description
 *
 * Unauthorised Call/Session Related External Client (3GPP TS 29.002 V19.1.0
 * clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const unauthorizedCallSessionRelatedExternalClient = UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionRelatedExternalClient satisfies UnauthorizedLCSClient_Diagnostic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) UnauthorizedLCSClient_Diagnostic
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UnauthorizedLCSClient_Diagnostic = $._decodeEnumerated;

/**
 * @summary Encodes a(n) UnauthorizedLCSClient_Diagnostic into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnauthorizedLCSClient_Diagnostic, encoded as an ASN.1 Element.
 */
export const _encode_UnauthorizedLCSClient_Diagnostic = $._encodeEnumerated;


/* eslint-enable */

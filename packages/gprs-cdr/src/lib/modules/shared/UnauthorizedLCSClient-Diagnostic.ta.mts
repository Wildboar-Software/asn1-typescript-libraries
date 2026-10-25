/* eslint-disable */
import {
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
 * Detailed cause for an unauthorized LCS client, carried as the
 * `unauthorizedLCSClientCause` alternative of `Diagnostics`.
 * TS 32.271 does not define this enumeration. Clause 4.1 notes
 * that the MSC and the SGSN also take part in LCS charging, and
 * that this is described in TS 32.250 and TS 32.251.
 *
 * After the H-GMLC has performed the privacy check on the MT-LR
 * response, it processes the LCS-HGMT-CDR (clause 5.2.3.2). The
 * scenarios in clause 5.2.3 assume the LCS client has no privacy
 * override capability. TS 32.271 does not say that this
 * enumeration records the result of that check.
 *
 * On an LCS-GMO-CDR, a location-service failure is User Error
 * (category C).
 *
 * 3GPP TS 32.271 V12.1.0 clauses 4.1, 5.2.3.0, 5.2.3.2, and
 * 6.1.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnauthorizedLCSClient-Diagnostic  ::=  ENUMERATED {
 *    noAdditionalInformation                           ( 0 ),
 *    clientNotInMSPrivacyExceptionList                 ( 1 ),
 *    callToClientNotSetup                              ( 2 ),
 *    privacyOverrideNotApplicable                      ( 3 ),
 *    disallowedByLocalRegulatoryRequirements           ( 4 ),
 *    ... ,
 *    unauthorizedPrivacyClass                          ( 5 ),
 *    unauthorizedCallSessionUnrelatedExternalClient    ( 6 ),
 *    unauthorizedCallSessionRelatedExternalClient      ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
type UnauthorizedLCSClient_Diagnostic = _enum_for_UnauthorizedLCSClient_Diagnostic | ENUMERATED;

/**
 * @summary UnauthorizedLCSClient_Diagnostic_noAdditionalInformation
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_noAdditionalInformation: _enum_for_UnauthorizedLCSClient_Diagnostic.noAdditionalInformation = _enum_for_UnauthorizedLCSClient_Diagnostic.noAdditionalInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAdditionalInformation
 * @constant
 * @type {number}
 */
export
const noAdditionalInformation: _enum_for_UnauthorizedLCSClient_Diagnostic.noAdditionalInformation = UnauthorizedLCSClient_Diagnostic_noAdditionalInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_clientNotInMSPrivacyExceptionList
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_clientNotInMSPrivacyExceptionList: _enum_for_UnauthorizedLCSClient_Diagnostic.clientNotInMSPrivacyExceptionList = _enum_for_UnauthorizedLCSClient_Diagnostic.clientNotInMSPrivacyExceptionList; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary clientNotInMSPrivacyExceptionList
 * @constant
 * @type {number}
 */
export
const clientNotInMSPrivacyExceptionList: _enum_for_UnauthorizedLCSClient_Diagnostic.clientNotInMSPrivacyExceptionList = UnauthorizedLCSClient_Diagnostic_clientNotInMSPrivacyExceptionList; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_callToClientNotSetup
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_callToClientNotSetup: _enum_for_UnauthorizedLCSClient_Diagnostic.callToClientNotSetup = _enum_for_UnauthorizedLCSClient_Diagnostic.callToClientNotSetup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callToClientNotSetup
 * @constant
 * @type {number}
 */
export
const callToClientNotSetup: _enum_for_UnauthorizedLCSClient_Diagnostic.callToClientNotSetup = UnauthorizedLCSClient_Diagnostic_callToClientNotSetup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_privacyOverrideNotApplicable
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_privacyOverrideNotApplicable: _enum_for_UnauthorizedLCSClient_Diagnostic.privacyOverrideNotApplicable = _enum_for_UnauthorizedLCSClient_Diagnostic.privacyOverrideNotApplicable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privacyOverrideNotApplicable
 * @constant
 * @type {number}
 */
export
const privacyOverrideNotApplicable: _enum_for_UnauthorizedLCSClient_Diagnostic.privacyOverrideNotApplicable = UnauthorizedLCSClient_Diagnostic_privacyOverrideNotApplicable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_disallowedByLocalRegulatoryRequirements
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_disallowedByLocalRegulatoryRequirements: _enum_for_UnauthorizedLCSClient_Diagnostic.disallowedByLocalRegulatoryRequirements = _enum_for_UnauthorizedLCSClient_Diagnostic.disallowedByLocalRegulatoryRequirements; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disallowedByLocalRegulatoryRequirements
 * @constant
 * @type {number}
 */
export
const disallowedByLocalRegulatoryRequirements: _enum_for_UnauthorizedLCSClient_Diagnostic.disallowedByLocalRegulatoryRequirements = UnauthorizedLCSClient_Diagnostic_disallowedByLocalRegulatoryRequirements; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_unauthorizedPrivacyClass
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_unauthorizedPrivacyClass: _enum_for_UnauthorizedLCSClient_Diagnostic.unauthorizedPrivacyClass = _enum_for_UnauthorizedLCSClient_Diagnostic.unauthorizedPrivacyClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorizedPrivacyClass
 * @constant
 * @type {number}
 */
export
const unauthorizedPrivacyClass: _enum_for_UnauthorizedLCSClient_Diagnostic.unauthorizedPrivacyClass = UnauthorizedLCSClient_Diagnostic_unauthorizedPrivacyClass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionUnrelatedExternalClient
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionUnrelatedExternalClient: _enum_for_UnauthorizedLCSClient_Diagnostic.unauthorizedCallSessionUnrelatedExternalClient = _enum_for_UnauthorizedLCSClient_Diagnostic.unauthorizedCallSessionUnrelatedExternalClient; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorizedCallSessionUnrelatedExternalClient
 * @constant
 * @type {number}
 */
export
const unauthorizedCallSessionUnrelatedExternalClient: _enum_for_UnauthorizedLCSClient_Diagnostic.unauthorizedCallSessionUnrelatedExternalClient = UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionUnrelatedExternalClient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionRelatedExternalClient
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionRelatedExternalClient: _enum_for_UnauthorizedLCSClient_Diagnostic.unauthorizedCallSessionRelatedExternalClient = _enum_for_UnauthorizedLCSClient_Diagnostic.unauthorizedCallSessionRelatedExternalClient; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorizedCallSessionRelatedExternalClient
 * @constant
 * @type {number}
 */
export
const unauthorizedCallSessionRelatedExternalClient: _enum_for_UnauthorizedLCSClient_Diagnostic.unauthorizedCallSessionRelatedExternalClient = UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionRelatedExternalClient; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_UnauthorizedLCSClient_Diagnostic: $.ASN1Decoder<UnauthorizedLCSClient_Diagnostic> = $._decodeEnumerated;

export
const _encode_UnauthorizedLCSClient_Diagnostic: $.ASN1Encoder<UnauthorizedLCSClient_Diagnostic> = $._encodeEnumerated;

/* eslint-enable */

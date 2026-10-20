/* eslint-disable */
import {
    ENUMERATED
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
const UnauthorizedLCSClient_Diagnostic_noAdditionalInformation: UnauthorizedLCSClient_Diagnostic = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAdditionalInformation
 * @constant
 * @type {number}
 */
export
const noAdditionalInformation: UnauthorizedLCSClient_Diagnostic = UnauthorizedLCSClient_Diagnostic_noAdditionalInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_clientNotInMSPrivacyExceptionList
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_clientNotInMSPrivacyExceptionList: UnauthorizedLCSClient_Diagnostic = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary clientNotInMSPrivacyExceptionList
 * @constant
 * @type {number}
 */
export
const clientNotInMSPrivacyExceptionList: UnauthorizedLCSClient_Diagnostic = UnauthorizedLCSClient_Diagnostic_clientNotInMSPrivacyExceptionList; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_callToClientNotSetup
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_callToClientNotSetup: UnauthorizedLCSClient_Diagnostic = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callToClientNotSetup
 * @constant
 * @type {number}
 */
export
const callToClientNotSetup: UnauthorizedLCSClient_Diagnostic = UnauthorizedLCSClient_Diagnostic_callToClientNotSetup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_privacyOverrideNotApplicable
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_privacyOverrideNotApplicable: UnauthorizedLCSClient_Diagnostic = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privacyOverrideNotApplicable
 * @constant
 * @type {number}
 */
export
const privacyOverrideNotApplicable: UnauthorizedLCSClient_Diagnostic = UnauthorizedLCSClient_Diagnostic_privacyOverrideNotApplicable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_disallowedByLocalRegulatoryRequirements
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_disallowedByLocalRegulatoryRequirements: UnauthorizedLCSClient_Diagnostic = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disallowedByLocalRegulatoryRequirements
 * @constant
 * @type {number}
 */
export
const disallowedByLocalRegulatoryRequirements: UnauthorizedLCSClient_Diagnostic = UnauthorizedLCSClient_Diagnostic_disallowedByLocalRegulatoryRequirements; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_unauthorizedPrivacyClass
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_unauthorizedPrivacyClass: UnauthorizedLCSClient_Diagnostic = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorizedPrivacyClass
 * @constant
 * @type {number}
 */
export
const unauthorizedPrivacyClass: UnauthorizedLCSClient_Diagnostic = UnauthorizedLCSClient_Diagnostic_unauthorizedPrivacyClass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionUnrelatedExternalClient
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionUnrelatedExternalClient: UnauthorizedLCSClient_Diagnostic = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorizedCallSessionUnrelatedExternalClient
 * @constant
 * @type {number}
 */
export
const unauthorizedCallSessionUnrelatedExternalClient: UnauthorizedLCSClient_Diagnostic = UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionUnrelatedExternalClient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionRelatedExternalClient
 * @constant
 * @type {number}
 */
export
const UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionRelatedExternalClient: UnauthorizedLCSClient_Diagnostic = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorizedCallSessionRelatedExternalClient
 * @constant
 * @type {number}
 */
export
const unauthorizedCallSessionRelatedExternalClient: UnauthorizedLCSClient_Diagnostic = UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionRelatedExternalClient; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_UnauthorizedLCSClient_Diagnostic: $.ASN1Decoder<UnauthorizedLCSClient_Diagnostic> = $._decodeEnumerated;

export
const _encode_UnauthorizedLCSClient_Diagnostic: $.ASN1Encoder<UnauthorizedLCSClient_Diagnostic> = $._encodeEnumerated;

/* eslint-enable */

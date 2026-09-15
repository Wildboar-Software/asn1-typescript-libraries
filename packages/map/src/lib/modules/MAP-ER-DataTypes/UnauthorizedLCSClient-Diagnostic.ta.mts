/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
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
const UnauthorizedLCSClient_Diagnostic_noAdditionalInformation: UnauthorizedLCSClient_Diagnostic = 0; /* LONG_NAMED_ENUMERATED_VALUE */

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
const noAdditionalInformation: UnauthorizedLCSClient_Diagnostic = UnauthorizedLCSClient_Diagnostic_noAdditionalInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const UnauthorizedLCSClient_Diagnostic_clientNotInMSPrivacyExceptionList: UnauthorizedLCSClient_Diagnostic = 1; /* LONG_NAMED_ENUMERATED_VALUE */

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
const clientNotInMSPrivacyExceptionList: UnauthorizedLCSClient_Diagnostic = UnauthorizedLCSClient_Diagnostic_clientNotInMSPrivacyExceptionList; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const UnauthorizedLCSClient_Diagnostic_callToClientNotSetup: UnauthorizedLCSClient_Diagnostic = 2; /* LONG_NAMED_ENUMERATED_VALUE */

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
const callToClientNotSetup: UnauthorizedLCSClient_Diagnostic = UnauthorizedLCSClient_Diagnostic_callToClientNotSetup; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const UnauthorizedLCSClient_Diagnostic_privacyOverrideNotApplicable: UnauthorizedLCSClient_Diagnostic = 3; /* LONG_NAMED_ENUMERATED_VALUE */

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
const privacyOverrideNotApplicable: UnauthorizedLCSClient_Diagnostic = UnauthorizedLCSClient_Diagnostic_privacyOverrideNotApplicable; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const UnauthorizedLCSClient_Diagnostic_disallowedByLocalRegulatoryRequirements: UnauthorizedLCSClient_Diagnostic = 4; /* LONG_NAMED_ENUMERATED_VALUE */

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
const disallowedByLocalRegulatoryRequirements: UnauthorizedLCSClient_Diagnostic = UnauthorizedLCSClient_Diagnostic_disallowedByLocalRegulatoryRequirements; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const UnauthorizedLCSClient_Diagnostic_unauthorizedPrivacyClass: UnauthorizedLCSClient_Diagnostic = 5; /* LONG_NAMED_ENUMERATED_VALUE */

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
const unauthorizedPrivacyClass: UnauthorizedLCSClient_Diagnostic = UnauthorizedLCSClient_Diagnostic_unauthorizedPrivacyClass; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionUnrelatedExternalClient: UnauthorizedLCSClient_Diagnostic = 6; /* LONG_NAMED_ENUMERATED_VALUE */

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
const unauthorizedCallSessionUnrelatedExternalClient: UnauthorizedLCSClient_Diagnostic = UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionUnrelatedExternalClient; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionRelatedExternalClient: UnauthorizedLCSClient_Diagnostic = 7; /* LONG_NAMED_ENUMERATED_VALUE */

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
const unauthorizedCallSessionRelatedExternalClient: UnauthorizedLCSClient_Diagnostic = UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionRelatedExternalClient; /* SHORT_NAMED_ENUMERATED_VALUE */

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

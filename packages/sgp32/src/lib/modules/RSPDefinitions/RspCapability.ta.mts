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



/**
 * @summary RspCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RspCapability  ::=  BIT STRING {
 *     additionalProfile(0), -- at least one more Profile can be installed
 *     crlSupport(1), -- CRL
 *     rpmSupport(2), -- Remote Profile Management
 *     testProfileSupport (3), -- support for test profile
 *     deviceInfoExtensibilitySupport (4),  -- support for ASN.1 extensibility in the Device Info
 *     serviceSpecificDataSupport (5),  -- support for Service Specific Data in the Profile Metadata
 *     -- bits 6 to 18 are reserved values
 *     osUpdateSupport (19), -- support for eUICC OS Update
 *     -- bits 20 to (25) are reserved values
 *     iotSpecificMetadataSupport (26), -- support for iotSpecificMetadata and iotSpecificProfileInfo defined in SGP.32 [97]
 *     mslCheckSupport (27), -- support for eUICC Minimum Security Level Check
 *     rspServerTestProfileAllowlistCheckSupport (28) -- support for RSP Server Test Profile Allow-list Check
 * }
 * ```
 */
export
type RspCapability = BIT_STRING;

/**
 * @summary RspCapability_additionalProfile
 * @constant
 */
export
const RspCapability_additionalProfile: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary additionalProfile
 * @constant
 */
export
const additionalProfile: number = RspCapability_additionalProfile; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_crlSupport
 * @constant
 */
export
const RspCapability_crlSupport: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary crlSupport
 * @constant
 */
export
const crlSupport: number = RspCapability_crlSupport; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_rpmSupport
 * @constant
 */
export
const RspCapability_rpmSupport: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary rpmSupport
 * @constant
 */
export
const rpmSupport: number = RspCapability_rpmSupport; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_testProfileSupport
 * @constant
 */
export
const RspCapability_testProfileSupport: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary testProfileSupport
 * @constant
 */
export
const testProfileSupport: number = RspCapability_testProfileSupport; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_deviceInfoExtensibilitySupport
 * @constant
 */
export
const RspCapability_deviceInfoExtensibilitySupport: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary deviceInfoExtensibilitySupport
 * @constant
 */
export
const deviceInfoExtensibilitySupport: number = RspCapability_deviceInfoExtensibilitySupport; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_serviceSpecificDataSupport
 * @constant
 */
export
const RspCapability_serviceSpecificDataSupport: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary serviceSpecificDataSupport
 * @constant
 */
export
const serviceSpecificDataSupport: number = RspCapability_serviceSpecificDataSupport; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_osUpdateSupport
 * @constant
 */
export
const RspCapability_osUpdateSupport: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary osUpdateSupport
 * @constant
 */
export
const osUpdateSupport: number = RspCapability_osUpdateSupport; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_iotSpecificMetadataSupport
 * @constant
 */
export
const RspCapability_iotSpecificMetadataSupport: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary iotSpecificMetadataSupport
 * @constant
 */
export
const iotSpecificMetadataSupport: number = RspCapability_iotSpecificMetadataSupport; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_mslCheckSupport
 * @constant
 */
export
const RspCapability_mslCheckSupport: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary mslCheckSupport
 * @constant
 */
export
const mslCheckSupport: number = RspCapability_mslCheckSupport; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_rspServerTestProfileAllowlistCheckSupport
 * @constant
 */
export
const RspCapability_rspServerTestProfileAllowlistCheckSupport: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary rspServerTestProfileAllowlistCheckSupport
 * @constant
 */
export
const rspServerTestProfileAllowlistCheckSupport: number = RspCapability_rspServerTestProfileAllowlistCheckSupport; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RspCapability: $.ASN1Decoder<RspCapability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RspCapability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RspCapability (el: _Element): RspCapability {
    if (!_cached_decoder_for_RspCapability) { _cached_decoder_for_RspCapability = $._decodeBitString; }
    return _cached_decoder_for_RspCapability(el);
}

let _cached_encoder_for_RspCapability: $.ASN1Encoder<RspCapability> | null = null;

/**
 * @summary Encodes a(n) RspCapability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RspCapability, encoded as an ASN.1 Element.
 */
export
function _encode_RspCapability (value: RspCapability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RspCapability) { _cached_encoder_for_RspCapability = $._encodeBitString; }
    return _cached_encoder_for_RspCapability(value, elGetter);
}


/* eslint-enable */

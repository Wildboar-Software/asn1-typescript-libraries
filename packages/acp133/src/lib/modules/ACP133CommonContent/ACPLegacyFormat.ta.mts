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
 * @summary ACPLegacyFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACPLegacyFormat  ::=  INTEGER {
 *     janap128(0),
 *     acp126(1),
 *     doi103(2),
 *     doi103-special(3),
 *     acp127(4),
 *     acp127-converted(5),
 *     reserved-1(6),  -- hold for ACP127Standard if needed
 *     acp127-state(7),
 *     acp127-modified(8),
 *     socomm-special(9),
 *     socomm-narrative(10),
 *     reserved-2(11), -- hold for SOCOMMNarrativeTTY if needed
 *     socomm-narrative-special(12),
 *     socomm-data(13),
 *     socomm-internal(14),
 *     socomm-external(15),
 *     mfi-default(16),
 *     acp-legacy-format-smtp(17),
 *     p22(18),
 *     -- 19 - 31 for national or bilateral use
 *     acp145-united-states(32),
 *     acp145-australia(33),
 *     acp145-canada(34),
 *     acp145-united-kingdom(35),
 *     acp145-new-zealand(36)
 * }
 * ```
 */
export
type ACPLegacyFormat = INTEGER;

/**
 * @summary ACPLegacyFormat_janap128
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_janap128: ACPLegacyFormat = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_janap128
 * @constant
 * @type {number}
 */
export
const janap128: ACPLegacyFormat = ACPLegacyFormat_janap128; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp126
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp126: ACPLegacyFormat = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp126
 * @constant
 * @type {number}
 */
export
const acp126: ACPLegacyFormat = ACPLegacyFormat_acp126; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_doi103
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_doi103: ACPLegacyFormat = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_doi103
 * @constant
 * @type {number}
 */
export
const doi103: ACPLegacyFormat = ACPLegacyFormat_doi103; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_doi103_special
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_doi103_special: ACPLegacyFormat = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_doi103_special
 * @constant
 * @type {number}
 */
export
const doi103_special: ACPLegacyFormat = ACPLegacyFormat_doi103_special; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp127
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp127: ACPLegacyFormat = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp127
 * @constant
 * @type {number}
 */
export
const acp127: ACPLegacyFormat = ACPLegacyFormat_acp127; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp127_converted
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp127_converted: ACPLegacyFormat = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp127_converted
 * @constant
 * @type {number}
 */
export
const acp127_converted: ACPLegacyFormat = ACPLegacyFormat_acp127_converted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_reserved_1
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_reserved_1: ACPLegacyFormat = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_reserved_1
 * @constant
 * @type {number}
 */
export
const reserved_1: ACPLegacyFormat = ACPLegacyFormat_reserved_1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp127_state
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp127_state: ACPLegacyFormat = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp127_state
 * @constant
 * @type {number}
 */
export
const acp127_state: ACPLegacyFormat = ACPLegacyFormat_acp127_state; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp127_modified
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp127_modified: ACPLegacyFormat = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp127_modified
 * @constant
 * @type {number}
 */
export
const acp127_modified: ACPLegacyFormat = ACPLegacyFormat_acp127_modified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_socomm_special
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_special: ACPLegacyFormat = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_socomm_special
 * @constant
 * @type {number}
 */
export
const socomm_special: ACPLegacyFormat = ACPLegacyFormat_socomm_special; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_socomm_narrative
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_narrative: ACPLegacyFormat = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_socomm_narrative
 * @constant
 * @type {number}
 */
export
const socomm_narrative: ACPLegacyFormat = ACPLegacyFormat_socomm_narrative; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_reserved_2
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_reserved_2: ACPLegacyFormat = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_reserved_2
 * @constant
 * @type {number}
 */
export
const reserved_2: ACPLegacyFormat = ACPLegacyFormat_reserved_2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_socomm_narrative_special
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_narrative_special: ACPLegacyFormat = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_socomm_narrative_special
 * @constant
 * @type {number}
 */
export
const socomm_narrative_special: ACPLegacyFormat = ACPLegacyFormat_socomm_narrative_special; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_socomm_data
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_data: ACPLegacyFormat = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_socomm_data
 * @constant
 * @type {number}
 */
export
const socomm_data: ACPLegacyFormat = ACPLegacyFormat_socomm_data; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_socomm_internal
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_internal: ACPLegacyFormat = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_socomm_internal
 * @constant
 * @type {number}
 */
export
const socomm_internal: ACPLegacyFormat = ACPLegacyFormat_socomm_internal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_socomm_external
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_socomm_external: ACPLegacyFormat = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_socomm_external
 * @constant
 * @type {number}
 */
export
const socomm_external: ACPLegacyFormat = ACPLegacyFormat_socomm_external; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_mfi_default
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_mfi_default: ACPLegacyFormat = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_mfi_default
 * @constant
 * @type {number}
 */
export
const mfi_default: ACPLegacyFormat = ACPLegacyFormat_mfi_default; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp_legacy_format_smtp
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp_legacy_format_smtp: ACPLegacyFormat = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp_legacy_format_smtp
 * @constant
 * @type {number}
 */
export
const acp_legacy_format_smtp: ACPLegacyFormat = ACPLegacyFormat_acp_legacy_format_smtp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_p22
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_p22: ACPLegacyFormat = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_p22
 * @constant
 * @type {number}
 */
export
const p22: ACPLegacyFormat = ACPLegacyFormat_p22; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp145_united_states
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp145_united_states: ACPLegacyFormat = 32; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp145_united_states
 * @constant
 * @type {number}
 */
export
const acp145_united_states: ACPLegacyFormat = ACPLegacyFormat_acp145_united_states; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp145_australia
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp145_australia: ACPLegacyFormat = 33; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp145_australia
 * @constant
 * @type {number}
 */
export
const acp145_australia: ACPLegacyFormat = ACPLegacyFormat_acp145_australia; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp145_canada
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp145_canada: ACPLegacyFormat = 34; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp145_canada
 * @constant
 * @type {number}
 */
export
const acp145_canada: ACPLegacyFormat = ACPLegacyFormat_acp145_canada; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp145_united_kingdom
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp145_united_kingdom: ACPLegacyFormat = 35; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp145_united_kingdom
 * @constant
 * @type {number}
 */
export
const acp145_united_kingdom: ACPLegacyFormat = ACPLegacyFormat_acp145_united_kingdom; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp145_new_zealand
 * @constant
 * @type {number}
 */
export
const ACPLegacyFormat_acp145_new_zealand: ACPLegacyFormat = 36; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ACPLegacyFormat_acp145_new_zealand
 * @constant
 * @type {number}
 */
export
const acp145_new_zealand: ACPLegacyFormat = ACPLegacyFormat_acp145_new_zealand; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ACPLegacyFormat: $.ASN1Decoder<ACPLegacyFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACPLegacyFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACPLegacyFormat (el: _Element): ACPLegacyFormat {
    if (!_cached_decoder_for_ACPLegacyFormat) { _cached_decoder_for_ACPLegacyFormat = $._decodeInteger; }
    return _cached_decoder_for_ACPLegacyFormat(el);
}

let _cached_encoder_for_ACPLegacyFormat: $.ASN1Encoder<ACPLegacyFormat> | null = null;

/**
 * @summary Encodes a(n) ACPLegacyFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACPLegacyFormat, encoded as an ASN.1 Element.
 */
export
function _encode_ACPLegacyFormat (value: ACPLegacyFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACPLegacyFormat) { _cached_encoder_for_ACPLegacyFormat = $._encodeInteger; }
    return _cached_encoder_for_ACPLegacyFormat(value, elGetter);
}


/* eslint-enable */

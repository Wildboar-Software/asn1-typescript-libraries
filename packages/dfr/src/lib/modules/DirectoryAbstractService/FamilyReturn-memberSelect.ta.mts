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
enum _enum_for_FamilyReturn_memberSelect {
    contributingEntriesOnly = 1,
    participatingEntriesOnly = 2,
    compoundEntry = 3,
}

/**
 * @summary FamilyReturn_memberSelect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FamilyReturn-memberSelect ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type FamilyReturn_memberSelect = _enum_for_FamilyReturn_memberSelect | ENUMERATED;

/**
 * @summary FamilyReturn_memberSelect_contributingEntriesOnly
 * @constant
 * @type {number}
 */
export
const FamilyReturn_memberSelect_contributingEntriesOnly: FamilyReturn_memberSelect = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contributingEntriesOnly
 * @constant
 * @type {number}
 */
export
const contributingEntriesOnly: FamilyReturn_memberSelect = FamilyReturn_memberSelect_contributingEntriesOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FamilyReturn_memberSelect_participatingEntriesOnly
 * @constant
 * @type {number}
 */
export
const FamilyReturn_memberSelect_participatingEntriesOnly: FamilyReturn_memberSelect = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary participatingEntriesOnly
 * @constant
 * @type {number}
 */
export
const participatingEntriesOnly: FamilyReturn_memberSelect = FamilyReturn_memberSelect_participatingEntriesOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FamilyReturn_memberSelect_compoundEntry
 * @constant
 * @type {number}
 */
export
const FamilyReturn_memberSelect_compoundEntry: FamilyReturn_memberSelect = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary compoundEntry
 * @constant
 * @type {number}
 */
export
const compoundEntry: FamilyReturn_memberSelect = FamilyReturn_memberSelect_compoundEntry; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_FamilyReturn_memberSelect: $.ASN1Decoder<FamilyReturn_memberSelect> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FamilyReturn_memberSelect
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FamilyReturn_memberSelect (el: _Element): FamilyReturn_memberSelect {
    if (!_cached_decoder_for_FamilyReturn_memberSelect) { _cached_decoder_for_FamilyReturn_memberSelect = $._decodeEnumerated; }
    return _cached_decoder_for_FamilyReturn_memberSelect(el);
}

let _cached_encoder_for_FamilyReturn_memberSelect: $.ASN1Encoder<FamilyReturn_memberSelect> | null = null;

/**
 * @summary Encodes a(n) FamilyReturn_memberSelect into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FamilyReturn_memberSelect, encoded as an ASN.1 Element.
 */
export
function _encode_FamilyReturn_memberSelect (value: FamilyReturn_memberSelect, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FamilyReturn_memberSelect) { _cached_encoder_for_FamilyReturn_memberSelect = $._encodeEnumerated; }
    return _cached_encoder_for_FamilyReturn_memberSelect(value, elGetter);
}


/* eslint-enable */

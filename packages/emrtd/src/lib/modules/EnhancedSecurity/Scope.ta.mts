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
import { SelectedTypes, _decode_SelectedTypes, _encode_SelectedTypes } from "../EnhancedSecurity/SelectedTypes.ta.mjs";
// export { SelectedTypes, _decode_SelectedTypes, _encode_SelectedTypes } from "../EnhancedSecurity/SelectedTypes.ta.mjs";


/**
 * @summary Scope
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Scope  ::=  CHOICE {
 *   wholeEntry     [0]  NULL, -- Signature protects all attribute values in this entry
 *   selectedTypes  [1]  SelectedTypes,
 *       -- Signature protects all attribute values of the selected attribute types
 *   ... }
 * ```
 */
export
type Scope =
    { wholeEntry: NULL } /* CHOICE_ALT_ROOT */
    | { selectedTypes: SelectedTypes } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Scope: $.ASN1Decoder<Scope> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Scope
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Scope (el: _Element): Scope {
    if (!_cached_decoder_for_Scope) { _cached_decoder_for_Scope = $._decode_extensible_choice<Scope>({
    "CONTEXT 0": [ "wholeEntry", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "selectedTypes", $._decode_implicit<SelectedTypes>(() => _decode_SelectedTypes) ]
}); }
    return _cached_decoder_for_Scope(el);
}

let _cached_encoder_for_Scope: $.ASN1Encoder<Scope> | null = null;

/**
 * @summary Encodes a(n) Scope into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Scope, encoded as an ASN.1 Element.
 */
export
function _encode_Scope (value: Scope, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Scope) { _cached_encoder_for_Scope = $._encode_choice<Scope>({
    "wholeEntry": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "selectedTypes": $._encode_implicit(_TagClass.context, 1, () => _encode_SelectedTypes, $.BER),
}, $.BER); }
    return _cached_encoder_for_Scope(value, elGetter);
}


/* eslint-enable */

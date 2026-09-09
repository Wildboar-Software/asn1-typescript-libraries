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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary Component
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Component  ::=  CHOICE {
 *   componentInfo     [0]  OCTET STRING(SIZE (1..118)),
 *   -- Contains the operation value (object identifier), error value, etc. within the UNI APDU, in addition also contains
 *   -- the parameter set/sequence for the operation invocation/return result of return error/reject on UNI. See Rec. Q.932
 *   -- for encoding
 *   relayedComponent  [1]  EMBEDDED PDV
 * }
 * ```
 */
export
type Component =
    { componentInfo: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { relayedComponent: EMBEDDED_PDV } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Component: $.ASN1Decoder<Component> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Component
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Component (el: _Element): Component {
    if (!_cached_decoder_for_Component) { _cached_decoder_for_Component = $._decode_inextensible_choice<Component>({
    "CONTEXT 0": [ "componentInfo", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "relayedComponent", $._decode_implicit<EMBEDDED_PDV>(() => $._decodeEmbeddedPDV) ]
}); }
    return _cached_decoder_for_Component(el);
}

let _cached_encoder_for_Component: $.ASN1Encoder<Component> | null = null;

/**
 * @summary Encodes a(n) Component into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Component, encoded as an ASN.1 Element.
 */
export
function _encode_Component (value: Component, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Component) { _cached_encoder_for_Component = $._encode_choice<Component>({
    "componentInfo": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "relayedComponent": $._encode_implicit(_TagClass.context, 1, () => $._encodeEmbeddedPDV, $.BER),
}, $.BER); }
    return _cached_encoder_for_Component(value, elGetter);
}


/* eslint-enable */

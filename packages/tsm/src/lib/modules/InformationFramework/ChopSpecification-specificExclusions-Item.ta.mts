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
import { LocalName, _decode_LocalName, _encode_LocalName } from "../InformationFramework/LocalName.ta.mjs";
// export { LocalName, _decode_LocalName, _encode_LocalName } from "../InformationFramework/LocalName.ta.mjs";


/**
 * @summary ChopSpecification_specificExclusions_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChopSpecification-specificExclusions-Item  ::=  CHOICE {
 *     chopBefore  [0]  LocalName,
 *     chopAfter   [1]  LocalName,
 *     ...}
 * ```
 */
export
type ChopSpecification_specificExclusions_Item =
    { chopBefore: LocalName } /* CHOICE_ALT_ROOT */
    | { chopAfter: LocalName } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ChopSpecification_specificExclusions_Item: $.ASN1Decoder<ChopSpecification_specificExclusions_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChopSpecification_specificExclusions_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChopSpecification_specificExclusions_Item (el: _Element): ChopSpecification_specificExclusions_Item {
    if (!_cached_decoder_for_ChopSpecification_specificExclusions_Item) { _cached_decoder_for_ChopSpecification_specificExclusions_Item = $._decode_extensible_choice<ChopSpecification_specificExclusions_Item>({
    "CONTEXT 0": [ "chopBefore", $._decode_implicit<LocalName>(() => _decode_LocalName) ],
    "CONTEXT 1": [ "chopAfter", $._decode_implicit<LocalName>(() => _decode_LocalName) ]
}); }
    return _cached_decoder_for_ChopSpecification_specificExclusions_Item(el);
}

let _cached_encoder_for_ChopSpecification_specificExclusions_Item: $.ASN1Encoder<ChopSpecification_specificExclusions_Item> | null = null;

/**
 * @summary Encodes a(n) ChopSpecification_specificExclusions_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChopSpecification_specificExclusions_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ChopSpecification_specificExclusions_Item (value: ChopSpecification_specificExclusions_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChopSpecification_specificExclusions_Item) { _cached_encoder_for_ChopSpecification_specificExclusions_Item = $._encode_choice<ChopSpecification_specificExclusions_Item>({
    "chopBefore": $._encode_implicit(_TagClass.context, 0, () => _encode_LocalName, $.BER),
    "chopAfter": $._encode_implicit(_TagClass.context, 1, () => _encode_LocalName, $.BER),
}, $.BER); }
    return _cached_encoder_for_ChopSpecification_specificExclusions_Item(value, elGetter);
}


/* eslint-enable */

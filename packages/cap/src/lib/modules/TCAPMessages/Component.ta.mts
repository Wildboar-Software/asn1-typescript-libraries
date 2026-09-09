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
import { ROS, _decode_ROS, _encode_ROS } from "../Remote-Operations-Generic-ROS-PDUs/ROS.ta.mjs";
// export { ROS, _decode_ROS, _encode_ROS } from "../Remote-Operations-Generic-ROS-PDUs/ROS.ta.mjs";


/**
 * @summary Component
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Component{OPERATION:Invokable, OPERATION:Returnable}  ::=  CHOICE {
 *   basicROS             ROS{{TCInvokeIdSet}, {Invokable}, {Returnable}},
 *   returnResultNotLast
 *     [7]  returnResult < ROS{{TCInvokeIdSet}, {Invokable}, {Returnable}}
 * }
 * ```
 */
export
type Component =
    { basicROS: ROS } /* CHOICE_ALT_ROOT */
    | { returnResultNotLast: $.Selection<ROS, "returnResult"> } /* CHOICE_ALT_ROOT */;

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
    "CONTEXT 1": [ "basicROS", _decode_ROS ],
    "CONTEXT 2": [ "basicROS", _decode_ROS ],
    "CONTEXT 3": [ "basicROS", _decode_ROS ],
    "CONTEXT 4": [ "basicROS", _decode_ROS ],
    "CONTEXT 7": [ "returnResultNotLast", $._decode_implicit<$.Selection<ROS, "returnResult">>(() => $._decode_implicit<ReturnResult>(() => _decode_ReturnResult)) ]
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
    "basicROS": _encode_ROS,
    "returnResultNotLast": $._encode_implicit(_TagClass.context, 7, () => $._encode_implicit(_TagClass.context, 2, () => _encode_ReturnResult, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_Component(value, elGetter);
}


/* eslint-enable */

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
import { ROS, _decode_ROS, _encode_ROS } from "../Facility-Information-Element-Components/ROS.ta.mjs";
// export { ROS, _decode_ROS, _encode_ROS } from "../Facility-Information-Element-Components/ROS.ta.mjs";


/**
 * @summary Components
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Components{OPERATION:Invokable, OPERATION:Returnable}  ::=  CHOICE {
 *   gfpROS  ROS{{GFPInvokeIDSet}, {Invokable}, {Returnable}}
 * }
 * ```
 */
export
type Components =
    { gfpROS: ROS } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Components: $.ASN1Decoder<Components> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Components
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Components (el: _Element): Components {
    if (!_cached_decoder_for_Components) { _cached_decoder_for_Components = $._decode_inextensible_choice<Components>({
    "CONTEXT 1": [ "gfpROS", _decode_ROS ],
    "CONTEXT 2": [ "gfpROS", _decode_ROS ],
    "CONTEXT 3": [ "gfpROS", _decode_ROS ],
    "CONTEXT 4": [ "gfpROS", _decode_ROS ]
}); }
    return _cached_decoder_for_Components(el);
}

let _cached_encoder_for_Components: $.ASN1Encoder<Components> | null = null;

/**
 * @summary Encodes a(n) Components into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Components, encoded as an ASN.1 Element.
 */
export
function _encode_Components (value: Components, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Components) { _cached_encoder_for_Components = $._encode_choice<Components>({
    "gfpROS": _encode_ROS,
}, $.BER); }
    return _cached_encoder_for_Components(value, elGetter);
}


/* eslint-enable */

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
import { Bind, _decode_Bind, _encode_Bind } from "../Remote-Operations-Generic-ROS-PDUs/Bind.ta.mjs";
// export { Bind, _decode_Bind, _encode_Bind } from "../Remote-Operations-Generic-ROS-PDUs/Bind.ta.mjs";
import { Unbind, _decode_Unbind, _encode_Unbind } from "../Remote-Operations-Generic-ROS-PDUs/Unbind.ta.mjs";
// export { Unbind, _decode_Unbind, _encode_Unbind } from "../Remote-Operations-Generic-ROS-PDUs/Unbind.ta.mjs";
import { ROS_SingleAS, _decode_ROS_SingleAS, _encode_ROS_SingleAS } from "../Remote-Operations-Abstract-Syntaxes/ROS-SingleAS.ta.mjs";
// export { ROS_SingleAS, _decode_ROS_SingleAS, _encode_ROS_SingleAS } from "../Remote-Operations-Abstract-Syntaxes/ROS-SingleAS.ta.mjs";
import { combine } from "../Remote-Operations-Useful-Definitions/combine.oa.mjs";
// export { combine } from "../Remote-Operations-Useful-Definitions/combine.oa.mjs";


/**
 * @summary AllValues
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AllValues{APPLICATION-CONTEXT:ac}  ::=  CHOICE {
 *   bind          Bind{ac.&associationContract.&connection.&bind},
 *   unbind        Unbind{ac.&associationContract.&connection.&unbind},
 *   ros-singleAS
 *     ROS-SingleAS{{ROSEInvokeIds},
 *                 combine{{ac.&associationContract.&OperationsOf |
 *                        ac.&associationContract.&InitiatorConsumerOf |
 *                        ac.&associationContract.&ResponderConsumerOf},
 *                        {...},
 *                        {ID
 *                           {1 2--OID to be provided -- }-- Information Object of class OPERATION-PACKAGE to be defined -- }}}
 * }
 * ```
 */
export
type AllValues =
    { bind: Bind } /* CHOICE_ALT_ROOT */
    | { unbind: Unbind } /* CHOICE_ALT_ROOT */
    | { ros_singleAS: ROS_SingleAS } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AllValues: $.ASN1Decoder<AllValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AllValues
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AllValues (el: _Element): AllValues {
    if (!_cached_decoder_for_AllValues) { _cached_decoder_for_AllValues = $._decode_inextensible_choice<AllValues>({
    "CONTEXT 16": [ "bind", _decode_Bind ],
    "CONTEXT 17": [ "bind", _decode_Bind ],
    "CONTEXT 18": [ "bind", _decode_Bind ],
    "CONTEXT 19": [ "unbind", _decode_Unbind ],
    "CONTEXT 20": [ "unbind", _decode_Unbind ],
    "CONTEXT 21": [ "unbind", _decode_Unbind ],
    "CONTEXT 1": [ "ros_singleAS", _decode_ROS_SingleAS ],
    "CONTEXT 2": [ "ros_singleAS", _decode_ROS_SingleAS ],
    "CONTEXT 3": [ "ros_singleAS", _decode_ROS_SingleAS ],
    "CONTEXT 4": [ "ros_singleAS", _decode_ROS_SingleAS ]
}); }
    return _cached_decoder_for_AllValues(el);
}

let _cached_encoder_for_AllValues: $.ASN1Encoder<AllValues> | null = null;

/**
 * @summary Encodes a(n) AllValues into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllValues, encoded as an ASN.1 Element.
 */
export
function _encode_AllValues (value: AllValues, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AllValues) { _cached_encoder_for_AllValues = $._encode_choice<AllValues>({
    "bind": _encode_Bind,
    "unbind": _encode_Unbind,
    "ros_singleAS": _encode_ROS_SingleAS,
}, $.BER); }
    return _cached_encoder_for_AllValues(value, elGetter);
}


/* eslint-enable */

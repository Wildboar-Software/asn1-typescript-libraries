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
import { Parameter, _decode_Parameter, _encode_Parameter } from "../EmberPlus-Glow/Parameter.ta.mjs";
// export { Parameter, _decode_Parameter, _encode_Parameter } from "../EmberPlus-Glow/Parameter.ta.mjs";
import { Node, _decode_Node, _encode_Node } from "../EmberPlus-Glow/Node.ta.mjs";
// export { Node, _decode_Node, _encode_Node } from "../EmberPlus-Glow/Node.ta.mjs";
import { Matrix, _decode_Matrix, _encode_Matrix } from "../EmberPlus-Glow/Matrix.ta.mjs";
// export { Matrix, _decode_Matrix, _encode_Matrix } from "../EmberPlus-Glow/Matrix.ta.mjs";
import { Function, _decode_Function, _encode_Function } from "../EmberPlus-Glow/Function.ta.mjs";
// export { Function, _decode_Function, _encode_Function } from "../EmberPlus-Glow/Function.ta.mjs";


/**
 * @summary TemplateElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TemplateElement  ::= 
 *     CHOICE {
 *         parameter        Parameter,
 *         node            Node,
 *         matrix            Matrix,
 *         function        Function
 *     }
 * ```
 */
export
type TemplateElement =
    { parameter: Parameter } /* CHOICE_ALT_ROOT */
    | { node: Node } /* CHOICE_ALT_ROOT */
    | { matrix: Matrix } /* CHOICE_ALT_ROOT */
    | { function_: Function } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TemplateElement: $.ASN1Decoder<TemplateElement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TemplateElement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TemplateElement (el: _Element): TemplateElement {
    if (!_cached_decoder_for_TemplateElement) { _cached_decoder_for_TemplateElement = $._decode_inextensible_choice<TemplateElement>({
    "APPLICATION 1": [ "parameter", _decode_Parameter ],
    "APPLICATION 3": [ "node", _decode_Node ],
    "APPLICATION 13": [ "matrix", _decode_Matrix ],
    "APPLICATION 19": [ "function_", _decode_Function ]
}); }
    return _cached_decoder_for_TemplateElement(el);
}

let _cached_encoder_for_TemplateElement: $.ASN1Encoder<TemplateElement> | null = null;

/**
 * @summary Encodes a(n) TemplateElement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TemplateElement, encoded as an ASN.1 Element.
 */
export
function _encode_TemplateElement (value: TemplateElement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TemplateElement) { _cached_encoder_for_TemplateElement = $._encode_choice<TemplateElement>({
    "parameter": _encode_Parameter,
    "node": _encode_Node,
    "matrix": _encode_Matrix,
    "function_": _encode_Function,
}, $.BER); }
    return _cached_encoder_for_TemplateElement(value, elGetter);
}


/* eslint-enable */

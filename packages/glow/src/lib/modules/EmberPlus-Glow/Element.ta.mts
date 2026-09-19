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
import { Command, _decode_Command, _encode_Command } from "../EmberPlus-Glow/Command.ta.mjs";
// export { Command, _decode_Command, _encode_Command } from "../EmberPlus-Glow/Command.ta.mjs";
import { Matrix, _decode_Matrix, _encode_Matrix } from "../EmberPlus-Glow/Matrix.ta.mjs";
// export { Matrix, _decode_Matrix, _encode_Matrix } from "../EmberPlus-Glow/Matrix.ta.mjs";
import { Function, _decode_Function, _encode_Function } from "../EmberPlus-Glow/Function.ta.mjs";
// export { Function, _decode_Function, _encode_Function } from "../EmberPlus-Glow/Function.ta.mjs";
import { Template, _decode_Template, _encode_Template } from "../EmberPlus-Glow/Template.ta.mjs";
// export { Template, _decode_Template, _encode_Template } from "../EmberPlus-Glow/Template.ta.mjs";


/**
 * @summary Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Element  ::= 
 *     CHOICE {
 *         parameter          Parameter,
 *         node               Node,
 *         command            Command,
 *         matrix             Matrix,
 *         function           Function,
 *         template           Template
 *     }
 * ```
 */
export
type Element =
    { parameter: Parameter } /* CHOICE_ALT_ROOT */
    | { node: Node } /* CHOICE_ALT_ROOT */
    | { command: Command } /* CHOICE_ALT_ROOT */
    | { matrix: Matrix } /* CHOICE_ALT_ROOT */
    | { function_: Function } /* CHOICE_ALT_ROOT */
    | { template: Template } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Element: $.ASN1Decoder<Element> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Element
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Element (el: _Element): Element {
    if (!_cached_decoder_for_Element) { _cached_decoder_for_Element = $._decode_inextensible_choice<Element>({
    "APPLICATION 1": [ "parameter", _decode_Parameter ],
    "APPLICATION 3": [ "node", _decode_Node ],
    "APPLICATION 2": [ "command", _decode_Command ],
    "APPLICATION 13": [ "matrix", _decode_Matrix ],
    "APPLICATION 19": [ "function_", _decode_Function ],
    "APPLICATION 24": [ "template", _decode_Template ]
}); }
    return _cached_decoder_for_Element(el);
}

let _cached_encoder_for_Element: $.ASN1Encoder<Element> | null = null;

/**
 * @summary Encodes a(n) Element into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Element, encoded as an ASN.1 Element.
 */
export
function _encode_Element (value: Element, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Element) { _cached_encoder_for_Element = $._encode_choice<Element>({
    "parameter": _encode_Parameter,
    "node": _encode_Node,
    "command": _encode_Command,
    "matrix": _encode_Matrix,
    "function_": _encode_Function,
    "template": _encode_Template,
}, $.BER); }
    return _cached_encoder_for_Element(value, elGetter);
}


/* eslint-enable */

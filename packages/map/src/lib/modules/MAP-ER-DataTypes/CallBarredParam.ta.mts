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
import { CallBarringCause, _enum_for_CallBarringCause, CallBarringCause_barringServiceActive /* IMPORTED_LONG_ENUMERATION_ITEM */, barringServiceActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, CallBarringCause_operatorBarring /* IMPORTED_LONG_ENUMERATION_ITEM */, operatorBarring /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CallBarringCause, _encode_CallBarringCause } from "../MAP-ER-DataTypes/CallBarringCause.ta.mjs";
// export { CallBarringCause, _enum_for_CallBarringCause, CallBarringCause_barringServiceActive /* IMPORTED_LONG_ENUMERATION_ITEM */, barringServiceActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, CallBarringCause_operatorBarring /* IMPORTED_LONG_ENUMERATION_ITEM */, operatorBarring /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CallBarringCause, _encode_CallBarringCause } from "../MAP-ER-DataTypes/CallBarringCause.ta.mjs";
import { ExtensibleCallBarredParam, _decode_ExtensibleCallBarredParam, _encode_ExtensibleCallBarredParam } from "../MAP-ER-DataTypes/ExtensibleCallBarredParam.ta.mjs";
// export { ExtensibleCallBarredParam, _decode_ExtensibleCallBarredParam, _encode_ExtensibleCallBarredParam } from "../MAP-ER-DataTypes/ExtensibleCallBarredParam.ta.mjs";


/**
 * @summary CallBarredParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBarredParam  ::=  CHOICE {
 *     callBarringCause    CallBarringCause,
 *     -- call BarringCause must not be used in version 3 and higher
 *     extensibleCallBarredParam    ExtensibleCallBarredParam
 *     -- extensibleCallBarredParam must not be used in version <3
 *     }
 * ```
 */
export
type CallBarredParam =
    { callBarringCause: CallBarringCause } /* CHOICE_ALT_ROOT */
    | { extensibleCallBarredParam: ExtensibleCallBarredParam } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CallBarredParam: $.ASN1Decoder<CallBarredParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBarredParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBarredParam (el: _Element): CallBarredParam {
    if (!_cached_decoder_for_CallBarredParam) { _cached_decoder_for_CallBarredParam = $._decode_inextensible_choice<CallBarredParam>({
    "UNIVERSAL 10": [ "callBarringCause", _decode_CallBarringCause ],
    "UNIVERSAL 16": [ "extensibleCallBarredParam", _decode_ExtensibleCallBarredParam ]
}); }
    return _cached_decoder_for_CallBarredParam(el);
}

let _cached_encoder_for_CallBarredParam: $.ASN1Encoder<CallBarredParam> | null = null;

/**
 * @summary Encodes a(n) CallBarredParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBarredParam, encoded as an ASN.1 Element.
 */
export
function _encode_CallBarredParam (value: CallBarredParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBarredParam) { _cached_encoder_for_CallBarredParam = $._encode_choice<CallBarredParam>({
    "callBarringCause": _encode_CallBarringCause,
    "extensibleCallBarredParam": _encode_ExtensibleCallBarredParam,
}, $.BER); }
    return _cached_encoder_for_CallBarredParam(value, elGetter);
}


/* eslint-enable */

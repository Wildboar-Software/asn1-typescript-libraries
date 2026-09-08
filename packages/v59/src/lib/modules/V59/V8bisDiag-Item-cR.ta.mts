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
import { V8bisSignalType, _decode_V8bisSignalType, _encode_V8bisSignalType } from "../V59/V8bisSignalType.ta.mjs";
// export { V8bisSignalType, _decode_V8bisSignalType, _encode_V8bisSignalType } from "../V59/V8bisSignalType.ta.mjs";
import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";
// export { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";


/**
 * @summary V8bisDiag_Item_cR
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8bisDiag-Item-cR ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class V8bisDiag_Item_cR {
    constructor (
        /**
         * @summary `cRtype`.
         * @public
         * @readonly
         */
        readonly cRtype: V8bisSignalType,
        /**
         * @summary `cRSequence`.
         * @public
         * @readonly
         */
        readonly cRSequence: V59String
    ) {}

    /**
     * @summary Restructures an object into a V8bisDiag_Item_cR
     * @description
     * 
     * This takes an `object` and converts it to a `V8bisDiag_Item_cR`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V8bisDiag_Item_cR`.
     * @returns {V8bisDiag_Item_cR}
     */
    public static _from_object (_o: { [_K in keyof (V8bisDiag_Item_cR)]: (V8bisDiag_Item_cR)[_K] }): V8bisDiag_Item_cR {
        return new V8bisDiag_Item_cR(_o.cRtype, _o.cRSequence);
    }


}

/**
 * @summary The Leading Root Component Types of V8bisDiag_Item_cR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V8bisDiag_Item_cR: $.ComponentSpec[] = [
    new $.ComponentSpec("cRtype", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("cRSequence", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of V8bisDiag_Item_cR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V8bisDiag_Item_cR: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V8bisDiag_Item_cR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V8bisDiag_Item_cR: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V8bisDiag_Item_cR: $.ASN1Decoder<V8bisDiag_Item_cR> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8bisDiag_Item_cR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8bisDiag_Item_cR (el: _Element): V8bisDiag_Item_cR {
    if (!_cached_decoder_for_V8bisDiag_Item_cR) { _cached_decoder_for_V8bisDiag_Item_cR = function (el: _Element): V8bisDiag_Item_cR {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("V8bisDiag-Item-cR contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "cRtype";
    sequence[1].name = "cRSequence";
    let cRtype!: V8bisSignalType;
    let cRSequence!: V59String;
    cRtype = _decode_V8bisSignalType(sequence[0]);
    cRSequence = _decode_V59String(sequence[1]);
    return new V8bisDiag_Item_cR(
        cRtype,
        cRSequence,

    );
}; }
    return _cached_decoder_for_V8bisDiag_Item_cR(el);
}

let _cached_encoder_for_V8bisDiag_Item_cR: $.ASN1Encoder<V8bisDiag_Item_cR> | null = null;

/**
 * @summary Encodes a(n) V8bisDiag_Item_cR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8bisDiag_Item_cR, encoded as an ASN.1 Element.
 */
export
function _encode_V8bisDiag_Item_cR (value: V8bisDiag_Item_cR, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8bisDiag_Item_cR) { _cached_encoder_for_V8bisDiag_Item_cR = function (value: V8bisDiag_Item_cR, elGetter: $.ASN1Encoder<V8bisDiag_Item_cR>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_V8bisSignalType(value.cRtype, $.BER),
            /* REQUIRED   */ _encode_V59String(value.cRSequence, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V8bisDiag_Item_cR(value, elGetter);
}


/* eslint-enable */

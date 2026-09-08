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
import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";
// export { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";


/**
 * @summary V8bisDiag_Item_cLR
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8bisDiag-Item-cLR ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class V8bisDiag_Item_cLR {
    constructor (
        /**
         * @summary `cLRSequence`.
         * @public
         * @readonly
         */
        readonly cLRSequence: V59String
    ) {}

    /**
     * @summary Restructures an object into a V8bisDiag_Item_cLR
     * @description
     * 
     * This takes an `object` and converts it to a `V8bisDiag_Item_cLR`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V8bisDiag_Item_cLR`.
     * @returns {V8bisDiag_Item_cLR}
     */
    public static _from_object (_o: { [_K in keyof (V8bisDiag_Item_cLR)]: (V8bisDiag_Item_cLR)[_K] }): V8bisDiag_Item_cLR {
        return new V8bisDiag_Item_cLR(_o.cLRSequence);
    }


}

/**
 * @summary The Leading Root Component Types of V8bisDiag_Item_cLR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V8bisDiag_Item_cLR: $.ComponentSpec[] = [
    new $.ComponentSpec("cLRSequence", false, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of V8bisDiag_Item_cLR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V8bisDiag_Item_cLR: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V8bisDiag_Item_cLR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V8bisDiag_Item_cLR: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V8bisDiag_Item_cLR: $.ASN1Decoder<V8bisDiag_Item_cLR> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8bisDiag_Item_cLR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8bisDiag_Item_cLR (el: _Element): V8bisDiag_Item_cLR {
    if (!_cached_decoder_for_V8bisDiag_Item_cLR) { _cached_decoder_for_V8bisDiag_Item_cLR = function (el: _Element): V8bisDiag_Item_cLR {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("V8bisDiag-Item-cLR contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "cLRSequence";
    let cLRSequence!: V59String;
    cLRSequence = _decode_V59String(sequence[0]);
    return new V8bisDiag_Item_cLR(
        cLRSequence,

    );
}; }
    return _cached_decoder_for_V8bisDiag_Item_cLR(el);
}

let _cached_encoder_for_V8bisDiag_Item_cLR: $.ASN1Encoder<V8bisDiag_Item_cLR> | null = null;

/**
 * @summary Encodes a(n) V8bisDiag_Item_cLR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8bisDiag_Item_cLR, encoded as an ASN.1 Element.
 */
export
function _encode_V8bisDiag_Item_cLR (value: V8bisDiag_Item_cLR, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8bisDiag_Item_cLR) { _cached_encoder_for_V8bisDiag_Item_cLR = function (value: V8bisDiag_Item_cLR, elGetter: $.ASN1Encoder<V8bisDiag_Item_cLR>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_V59String(value.cLRSequence, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V8bisDiag_Item_cLR(value, elGetter);
}


/* eslint-enable */

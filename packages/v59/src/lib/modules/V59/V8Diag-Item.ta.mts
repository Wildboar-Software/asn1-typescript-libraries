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
import { V8Diag_Item_v8Result, _enum_for_V8Diag_Item_v8Result, V8Diag_Item_v8Result_v8ComNeg /* IMPORTED_LONG_ENUMERATION_ITEM */, v8ComNeg /* IMPORTED_SHORT_ENUMERATION_ITEM */, V8Diag_Item_v8Result_v8NoComNeg /* IMPORTED_LONG_ENUMERATION_ITEM */, v8NoComNeg /* IMPORTED_SHORT_ENUMERATION_ITEM */, V8Diag_Item_v8Result_v8NoNegAuto /* IMPORTED_LONG_ENUMERATION_ITEM */, v8NoNegAuto /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_V8Diag_Item_v8Result, _encode_V8Diag_Item_v8Result } from "../V59/V8Diag-Item-v8Result.ta.mjs";
// export { V8Diag_Item_v8Result, _enum_for_V8Diag_Item_v8Result, V8Diag_Item_v8Result_v8ComNeg /* IMPORTED_LONG_ENUMERATION_ITEM */, v8ComNeg /* IMPORTED_SHORT_ENUMERATION_ITEM */, V8Diag_Item_v8Result_v8NoComNeg /* IMPORTED_LONG_ENUMERATION_ITEM */, v8NoComNeg /* IMPORTED_SHORT_ENUMERATION_ITEM */, V8Diag_Item_v8Result_v8NoNegAuto /* IMPORTED_LONG_ENUMERATION_ITEM */, v8NoNegAuto /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_V8Diag_Item_v8Result, _encode_V8Diag_Item_v8Result } from "../V59/V8Diag-Item-v8Result.ta.mjs";


/**
 * @summary V8Diag_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8Diag-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class V8Diag_Item {
    constructor (
        /**
         * @summary `ci`.
         * @public
         * @readonly
         */
        readonly ci: V59String,
        /**
         * @summary `cm`.
         * @public
         * @readonly
         */
        readonly cm: V59String,
        /**
         * @summary `jm`.
         * @public
         * @readonly
         */
        readonly jm: V59String,
        /**
         * @summary `v8Result`.
         * @public
         * @readonly
         */
        readonly v8Result: V8Diag_Item_v8Result
    ) {}

    /**
     * @summary Restructures an object into a V8Diag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `V8Diag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V8Diag_Item`.
     * @returns {V8Diag_Item}
     */
    public static _from_object (_o: { [_K in keyof (V8Diag_Item)]: (V8Diag_Item)[_K] }): V8Diag_Item {
        return new V8Diag_Item(_o.ci, _o.cm, _o.jm, _o.v8Result);
    }

        /**
         * @summary The enum used as the type of the component `v8Result`
         * @public
         * @static
         */

    public static _enum_for_v8Result = _enum_for_V8Diag_Item_v8Result;
}

/**
 * @summary The Leading Root Component Types of V8Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V8Diag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("ci", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("cm", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("jm", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("v8Result", false, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of V8Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V8Diag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V8Diag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V8Diag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V8Diag_Item: $.ASN1Decoder<V8Diag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8Diag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8Diag_Item (el: _Element): V8Diag_Item {
    if (!_cached_decoder_for_V8Diag_Item) { _cached_decoder_for_V8Diag_Item = function (el: _Element): V8Diag_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("V8Diag-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ci";
    sequence[1].name = "cm";
    sequence[2].name = "jm";
    sequence[3].name = "v8Result";
    let ci!: V59String;
    let cm!: V59String;
    let jm!: V59String;
    let v8Result!: V8Diag_Item_v8Result;
    ci = _decode_V59String(sequence[0]);
    cm = _decode_V59String(sequence[1]);
    jm = _decode_V59String(sequence[2]);
    v8Result = _decode_V8Diag_Item_v8Result(sequence[3]);
    return new V8Diag_Item(
        ci,
        cm,
        jm,
        v8Result,

    );
}; }
    return _cached_decoder_for_V8Diag_Item(el);
}

let _cached_encoder_for_V8Diag_Item: $.ASN1Encoder<V8Diag_Item> | null = null;

/**
 * @summary Encodes a(n) V8Diag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8Diag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_V8Diag_Item (value: V8Diag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8Diag_Item) { _cached_encoder_for_V8Diag_Item = function (value: V8Diag_Item, elGetter: $.ASN1Encoder<V8Diag_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_V59String(value.ci, $.BER),
            /* REQUIRED   */ _encode_V59String(value.cm, $.BER),
            /* REQUIRED   */ _encode_V59String(value.jm, $.BER),
            /* REQUIRED   */ _encode_V8Diag_Item_v8Result(value.v8Result, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V8Diag_Item(value, elGetter);
}


/* eslint-enable */

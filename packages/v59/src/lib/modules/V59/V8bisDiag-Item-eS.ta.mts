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
import { V8bisDiag_Item_eS_eSType, _decode_V8bisDiag_Item_eS_eSType, _encode_V8bisDiag_Item_eS_eSType } from "../V59/V8bisDiag-Item-eS-eSType.ta.mjs";
// export { V8bisDiag_Item_eS_eSType, _decode_V8bisDiag_Item_eS_eSType, _encode_V8bisDiag_Item_eS_eSType } from "../V59/V8bisDiag-Item-eS-eSType.ta.mjs";
import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";
// export { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";


/**
 * @summary V8bisDiag_Item_eS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8bisDiag-Item-eS ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class V8bisDiag_Item_eS {
    constructor (
        /**
         * @summary `eSType`.
         * @public
         * @readonly
         */
        readonly eSType: V8bisDiag_Item_eS_eSType,
        /**
         * @summary `eSSequence`.
         * @public
         * @readonly
         */
        readonly eSSequence: V59String
    ) {}

    /**
     * @summary Restructures an object into a V8bisDiag_Item_eS
     * @description
     * 
     * This takes an `object` and converts it to a `V8bisDiag_Item_eS`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V8bisDiag_Item_eS`.
     * @returns {V8bisDiag_Item_eS}
     */
    public static _from_object (_o: { [_K in keyof (V8bisDiag_Item_eS)]: (V8bisDiag_Item_eS)[_K] }): V8bisDiag_Item_eS {
        return new V8bisDiag_Item_eS(_o.eSType, _o.eSSequence);
    }


}

/**
 * @summary The Leading Root Component Types of V8bisDiag_Item_eS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V8bisDiag_Item_eS: $.ComponentSpec[] = [
    new $.ComponentSpec("eSType", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("eSSequence", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of V8bisDiag_Item_eS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V8bisDiag_Item_eS: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V8bisDiag_Item_eS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V8bisDiag_Item_eS: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V8bisDiag_Item_eS: $.ASN1Decoder<V8bisDiag_Item_eS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8bisDiag_Item_eS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8bisDiag_Item_eS (el: _Element): V8bisDiag_Item_eS {
    if (!_cached_decoder_for_V8bisDiag_Item_eS) { _cached_decoder_for_V8bisDiag_Item_eS = function (el: _Element): V8bisDiag_Item_eS {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("V8bisDiag-Item-eS contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eSType";
    sequence[1].name = "eSSequence";
    let eSType!: V8bisDiag_Item_eS_eSType;
    let eSSequence!: V59String;
    eSType = _decode_V8bisDiag_Item_eS_eSType(sequence[0]);
    eSSequence = _decode_V59String(sequence[1]);
    return new V8bisDiag_Item_eS(
        eSType,
        eSSequence,

    );
}; }
    return _cached_decoder_for_V8bisDiag_Item_eS(el);
}

let _cached_encoder_for_V8bisDiag_Item_eS: $.ASN1Encoder<V8bisDiag_Item_eS> | null = null;

/**
 * @summary Encodes a(n) V8bisDiag_Item_eS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8bisDiag_Item_eS, encoded as an ASN.1 Element.
 */
export
function _encode_V8bisDiag_Item_eS (value: V8bisDiag_Item_eS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8bisDiag_Item_eS) { _cached_encoder_for_V8bisDiag_Item_eS = function (value: V8bisDiag_Item_eS, elGetter: $.ASN1Encoder<V8bisDiag_Item_eS>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_V8bisDiag_Item_eS_eSType(value.eSType, $.BER),
            /* REQUIRED   */ _encode_V59String(value.eSSequence, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V8bisDiag_Item_eS(value, elGetter);
}


/* eslint-enable */

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
import { V8bisDiag_Item_ackNak_aCK, _decode_V8bisDiag_Item_ackNak_aCK, _encode_V8bisDiag_Item_ackNak_aCK } from "../V59/V8bisDiag-Item-ackNak-aCK.ta.mjs";
// export { V8bisDiag_Item_ackNak_aCK, _decode_V8bisDiag_Item_ackNak_aCK, _encode_V8bisDiag_Item_ackNak_aCK } from "../V59/V8bisDiag-Item-ackNak-aCK.ta.mjs";
import { V8bisDiag_Item_ackNak_nAK, _decode_V8bisDiag_Item_ackNak_nAK, _encode_V8bisDiag_Item_ackNak_nAK } from "../V59/V8bisDiag-Item-ackNak-nAK.ta.mjs";
// export { V8bisDiag_Item_ackNak_nAK, _decode_V8bisDiag_Item_ackNak_nAK, _encode_V8bisDiag_Item_ackNak_nAK } from "../V59/V8bisDiag-Item-ackNak-nAK.ta.mjs";


/**
 * @summary V8bisDiag_Item_ackNak
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8bisDiag-Item-ackNak ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class V8bisDiag_Item_ackNak {
    constructor (
        /**
         * @summary `aCK`.
         * @public
         * @readonly
         */
        readonly aCK: V8bisDiag_Item_ackNak_aCK,
        /**
         * @summary `nAK`.
         * @public
         * @readonly
         */
        readonly nAK: V8bisDiag_Item_ackNak_nAK
    ) {}

    /**
     * @summary Restructures an object into a V8bisDiag_Item_ackNak
     * @description
     * 
     * This takes an `object` and converts it to a `V8bisDiag_Item_ackNak`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V8bisDiag_Item_ackNak`.
     * @returns {V8bisDiag_Item_ackNak}
     */
    public static _from_object (_o: { [_K in keyof (V8bisDiag_Item_ackNak)]: (V8bisDiag_Item_ackNak)[_K] }): V8bisDiag_Item_ackNak {
        return new V8bisDiag_Item_ackNak(_o.aCK, _o.nAK);
    }


}

/**
 * @summary The Leading Root Component Types of V8bisDiag_Item_ackNak
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V8bisDiag_Item_ackNak: $.ComponentSpec[] = [
    new $.ComponentSpec("aCK", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("nAK", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of V8bisDiag_Item_ackNak
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V8bisDiag_Item_ackNak: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V8bisDiag_Item_ackNak
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V8bisDiag_Item_ackNak: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V8bisDiag_Item_ackNak: $.ASN1Decoder<V8bisDiag_Item_ackNak> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8bisDiag_Item_ackNak
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8bisDiag_Item_ackNak (el: _Element): V8bisDiag_Item_ackNak {
    if (!_cached_decoder_for_V8bisDiag_Item_ackNak) { _cached_decoder_for_V8bisDiag_Item_ackNak = function (el: _Element): V8bisDiag_Item_ackNak {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("V8bisDiag-Item-ackNak contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aCK";
    sequence[1].name = "nAK";
    let aCK!: V8bisDiag_Item_ackNak_aCK;
    let nAK!: V8bisDiag_Item_ackNak_nAK;
    aCK = _decode_V8bisDiag_Item_ackNak_aCK(sequence[0]);
    nAK = _decode_V8bisDiag_Item_ackNak_nAK(sequence[1]);
    return new V8bisDiag_Item_ackNak(
        aCK,
        nAK,

    );
}; }
    return _cached_decoder_for_V8bisDiag_Item_ackNak(el);
}

let _cached_encoder_for_V8bisDiag_Item_ackNak: $.ASN1Encoder<V8bisDiag_Item_ackNak> | null = null;

/**
 * @summary Encodes a(n) V8bisDiag_Item_ackNak into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8bisDiag_Item_ackNak, encoded as an ASN.1 Element.
 */
export
function _encode_V8bisDiag_Item_ackNak (value: V8bisDiag_Item_ackNak, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8bisDiag_Item_ackNak) { _cached_encoder_for_V8bisDiag_Item_ackNak = function (value: V8bisDiag_Item_ackNak, elGetter: $.ASN1Encoder<V8bisDiag_Item_ackNak>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_V8bisDiag_Item_ackNak_aCK(value.aCK, $.BER),
            /* REQUIRED   */ _encode_V8bisDiag_Item_ackNak_nAK(value.nAK, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V8bisDiag_Item_ackNak(value, elGetter);
}


/* eslint-enable */

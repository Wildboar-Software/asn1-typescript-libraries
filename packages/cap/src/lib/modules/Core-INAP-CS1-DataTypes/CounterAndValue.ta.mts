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
import { CounterID, _decode_CounterID, _encode_CounterID } from "../Core-INAP-CS1-DataTypes/CounterID.ta.mjs";
// export { CounterID, _decode_CounterID, _encode_CounterID } from "../Core-INAP-CS1-DataTypes/CounterID.ta.mjs";
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../Core-INAP-CS1-DataTypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../Core-INAP-CS1-DataTypes/Integer4.ta.mjs";


/**
 * @summary CounterAndValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CounterAndValue ::= SEQUENCE {
 *      counterID     [0] CounterID,
 *      counterValue     [1] Integer4
 *      }
 * ```
 * 
 * @class
 */
export
class CounterAndValue {
    constructor (
        /**
         * @summary `counterID`.
         * @public
         * @readonly
         */
        readonly counterID: CounterID,
        /**
         * @summary `counterValue`.
         * @public
         * @readonly
         */
        readonly counterValue: Integer4
    ) {}

    /**
     * @summary Restructures an object into a CounterAndValue
     * @description
     * 
     * This takes an `object` and converts it to a `CounterAndValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CounterAndValue`.
     * @returns {CounterAndValue}
     */
    public static _from_object (_o: { [_K in keyof (CounterAndValue)]: (CounterAndValue)[_K] }): CounterAndValue {
        return new CounterAndValue(_o.counterID, _o.counterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CounterAndValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CounterAndValue: $.ComponentSpec[] = [
    new $.ComponentSpec("counterID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("counterValue", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CounterAndValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CounterAndValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CounterAndValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CounterAndValue: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CounterAndValue: $.ASN1Decoder<CounterAndValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CounterAndValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CounterAndValue (el: _Element): CounterAndValue {
    if (!_cached_decoder_for_CounterAndValue) { _cached_decoder_for_CounterAndValue = function (el: _Element): CounterAndValue {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CounterAndValue contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "counterID";
    sequence[1].name = "counterValue";
    let counterID!: CounterID;
    let counterValue!: Integer4;
    counterID = $._decode_implicit<CounterID>(() => _decode_CounterID)(sequence[0]);
    counterValue = $._decode_implicit<Integer4>(() => _decode_Integer4)(sequence[1]);
    return new CounterAndValue(
        counterID,
        counterValue,

    );
}; }
    return _cached_decoder_for_CounterAndValue(el);
}

let _cached_encoder_for_CounterAndValue: $.ASN1Encoder<CounterAndValue> | null = null;

/**
 * @summary Encodes a(n) CounterAndValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CounterAndValue, encoded as an ASN.1 Element.
 */
export
function _encode_CounterAndValue (value: CounterAndValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CounterAndValue) { _cached_encoder_for_CounterAndValue = function (value: CounterAndValue, elGetter: $.ASN1Encoder<CounterAndValue>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CounterID, $.BER)(value.counterID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Integer4, $.BER)(value.counterValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CounterAndValue(value, elGetter);
}


/* eslint-enable */

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
import { NonStandardIdentifier, _decode_NonStandardIdentifier, _encode_NonStandardIdentifier } from "../MEDIA-GATEWAY-CONTROL/NonStandardIdentifier.ta.mjs";
// export { NonStandardIdentifier, _decode_NonStandardIdentifier, _encode_NonStandardIdentifier } from "../MEDIA-GATEWAY-CONTROL/NonStandardIdentifier.ta.mjs";


/**
 * @summary NonStandardData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NonStandardData ::= SEQUENCE
 *     {
 *         nonStandardIdentifier        [0] NonStandardIdentifier,
 *         data                        [1] OCTET STRING
 *     }
 * ```
 * 
 * @class
 */
export
class NonStandardData {
    constructor (
        /**
         * @summary `nonStandardIdentifier`.
         * @public
         * @readonly
         */
        readonly nonStandardIdentifier: NonStandardIdentifier,
        /**
         * @summary `data`.
         * @public
         * @readonly
         */
        readonly data: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a NonStandardData
     * @description
     * 
     * This takes an `object` and converts it to a `NonStandardData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NonStandardData`.
     * @returns {NonStandardData}
     */
    public static _from_object (_o: { [_K in keyof (NonStandardData)]: (NonStandardData)[_K] }): NonStandardData {
        return new NonStandardData(_o.nonStandardIdentifier, _o.data);
    }


}

/**
 * @summary The Leading Root Component Types of NonStandardData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NonStandardData: $.ComponentSpec[] = [
    new $.ComponentSpec("nonStandardIdentifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("data", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NonStandardData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NonStandardData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NonStandardData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NonStandardData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NonStandardData: $.ASN1Decoder<NonStandardData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NonStandardData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NonStandardData (el: _Element): NonStandardData {
    if (!_cached_decoder_for_NonStandardData) { _cached_decoder_for_NonStandardData = function (el: _Element): NonStandardData {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("NonStandardData contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "nonStandardIdentifier";
    sequence[1].name = "data";
    let nonStandardIdentifier!: NonStandardIdentifier;
    let data!: OCTET_STRING;
    nonStandardIdentifier = $._decode_explicit<NonStandardIdentifier>(() => _decode_NonStandardIdentifier)(sequence[0]);
    data = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new NonStandardData(
        nonStandardIdentifier,
        data,

    );
}; }
    return _cached_decoder_for_NonStandardData(el);
}

let _cached_encoder_for_NonStandardData: $.ASN1Encoder<NonStandardData> | null = null;

/**
 * @summary Encodes a(n) NonStandardData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonStandardData, encoded as an ASN.1 Element.
 */
export
function _encode_NonStandardData (value: NonStandardData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NonStandardData) { _cached_encoder_for_NonStandardData = function (value: NonStandardData, elGetter: $.ASN1Encoder<NonStandardData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_NonStandardIdentifier, $.BER)(value.nonStandardIdentifier, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.data, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NonStandardData(value, elGetter);
}


/* eslint-enable */

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



/**
 * @summary GenericUAStarParams
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericUAStarParams ::= SEQUENCE
 * {
 *     genericClientParams [1] OCTET STRING,
 *     genericServerParams [2] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class GenericUAStarParams {
    constructor (
        /**
         * @summary `genericClientParams`.
         * @public
         * @readonly
         */
        readonly genericClientParams: OCTET_STRING,
        /**
         * @summary `genericServerParams`.
         * @public
         * @readonly
         */
        readonly genericServerParams: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a GenericUAStarParams
     * @description
     * 
     * This takes an `object` and converts it to a `GenericUAStarParams`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GenericUAStarParams`.
     * @returns {GenericUAStarParams}
     */
    public static _from_object (_o: { [_K in keyof (GenericUAStarParams)]: (GenericUAStarParams)[_K] }): GenericUAStarParams {
        return new GenericUAStarParams(_o.genericClientParams, _o.genericServerParams);
    }


}

/**
 * @summary The Leading Root Component Types of GenericUAStarParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GenericUAStarParams: $.ComponentSpec[] = [
    new $.ComponentSpec("genericClientParams", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("genericServerParams", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of GenericUAStarParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GenericUAStarParams: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GenericUAStarParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GenericUAStarParams: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GenericUAStarParams: $.ASN1Decoder<GenericUAStarParams> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericUAStarParams
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericUAStarParams (el: _Element): GenericUAStarParams {
    if (!_cached_decoder_for_GenericUAStarParams) { _cached_decoder_for_GenericUAStarParams = function (el: _Element): GenericUAStarParams {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GenericUAStarParams contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "genericClientParams";
    sequence[1].name = "genericServerParams";
    let genericClientParams!: OCTET_STRING;
    let genericServerParams!: OCTET_STRING;
    genericClientParams = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    genericServerParams = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new GenericUAStarParams(
        genericClientParams,
        genericServerParams,

    );
}; }
    return _cached_decoder_for_GenericUAStarParams(el);
}

let _cached_encoder_for_GenericUAStarParams: $.ASN1Encoder<GenericUAStarParams> | null = null;

/**
 * @summary Encodes a(n) GenericUAStarParams into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericUAStarParams, encoded as an ASN.1 Element.
 */
export
function _encode_GenericUAStarParams (value: GenericUAStarParams, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericUAStarParams) { _cached_encoder_for_GenericUAStarParams = function (value: GenericUAStarParams, elGetter: $.ASN1Encoder<GenericUAStarParams>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.genericClientParams, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.genericServerParams, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GenericUAStarParams(value, elGetter);
}


/* eslint-enable */

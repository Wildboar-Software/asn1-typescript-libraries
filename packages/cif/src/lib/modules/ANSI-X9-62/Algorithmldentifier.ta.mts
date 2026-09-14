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
import { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.mjs";
// export { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.mjs";


/**
 * @summary Algorithmldentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Algorithmldentifier { ALGORITHM:IOSet } ::= SEQUENCE {
 *     algorithm       ALGORITHM.&id({IOSet}),
 *     parameters      ALGORITHM.&Type({IOSet}{@algorithm})
 * }
 * ```
 * 
 * @class
 */
export
class Algorithmldentifier {
    constructor (
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: _Element
    ) {}

    /**
     * @summary Restructures an object into a Algorithmldentifier
     * @description
     * 
     * This takes an `object` and converts it to a `Algorithmldentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Algorithmldentifier`.
     * @returns {Algorithmldentifier}
     */
    public static _from_object (_o: { [_K in keyof (Algorithmldentifier)]: (Algorithmldentifier)[_K] }): Algorithmldentifier {
        return new Algorithmldentifier(_o.algorithm, _o.parameters);
    }


}

/**
 * @summary The Leading Root Component Types of Algorithmldentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Algorithmldentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("algorithm", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("parameters", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Algorithmldentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Algorithmldentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Algorithmldentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Algorithmldentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Algorithmldentifier: $.ASN1Decoder<Algorithmldentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Algorithmldentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Algorithmldentifier (el: _Element): Algorithmldentifier {
    if (!_cached_decoder_for_Algorithmldentifier) { _cached_decoder_for_Algorithmldentifier = function (el: _Element): Algorithmldentifier {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Algorithmldentifier contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "algorithm";
    sequence[1].name = "parameters";
    let algorithm!: OBJECT_IDENTIFIER;
    let parameters!: _Element;
    algorithm = $._decodeObjectIdentifier(sequence[0]);
    parameters = $._decodeAny(sequence[1]);
    return new Algorithmldentifier(
        algorithm,
        parameters,

    );
}; }
    return _cached_decoder_for_Algorithmldentifier(el);
}

let _cached_encoder_for_Algorithmldentifier: $.ASN1Encoder<Algorithmldentifier> | null = null;

/**
 * @summary Encodes a(n) Algorithmldentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Algorithmldentifier, encoded as an ASN.1 Element.
 */
export
function _encode_Algorithmldentifier (value: Algorithmldentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Algorithmldentifier) { _cached_encoder_for_Algorithmldentifier = function (value: Algorithmldentifier, elGetter: $.ASN1Encoder<Algorithmldentifier>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.algorithm, $.BER),
            /* REQUIRED   */ $._encodeAny(value.parameters, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Algorithmldentifier(value, elGetter);
}


/* eslint-enable */

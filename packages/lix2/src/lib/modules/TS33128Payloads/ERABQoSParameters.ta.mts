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
import { QCI, _decode_QCI, _encode_QCI } from "../TS33128Payloads/QCI.ta.mjs";
// export { QCI, _decode_QCI, _encode_QCI } from "../TS33128Payloads/QCI.ta.mjs";


/**
 * @summary ERABQoSParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ERABQoSParameters ::= SEQUENCE
 * {
 *     qCI [1] QCI
 * }
 * ```
 * 
 * @class
 */
export
class ERABQoSParameters {
    constructor (
        /**
         * @summary `qCI`.
         * @public
         * @readonly
         */
        readonly qCI: QCI
    ) {}

    /**
     * @summary Restructures an object into a ERABQoSParameters
     * @description
     * 
     * This takes an `object` and converts it to a `ERABQoSParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ERABQoSParameters`.
     * @returns {ERABQoSParameters}
     */
    public static _from_object (_o: { [_K in keyof (ERABQoSParameters)]: (ERABQoSParameters)[_K] }): ERABQoSParameters {
        return new ERABQoSParameters(_o.qCI);
    }


}

/**
 * @summary The Leading Root Component Types of ERABQoSParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ERABQoSParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("qCI", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ERABQoSParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ERABQoSParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ERABQoSParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ERABQoSParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ERABQoSParameters: $.ASN1Decoder<ERABQoSParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ERABQoSParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ERABQoSParameters (el: _Element): ERABQoSParameters {
    if (!_cached_decoder_for_ERABQoSParameters) { _cached_decoder_for_ERABQoSParameters = function (el: _Element): ERABQoSParameters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ERABQoSParameters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "qCI";
    let qCI!: QCI;
    qCI = $._decode_implicit<QCI>(() => _decode_QCI)(sequence[0]);
    return new ERABQoSParameters(
        qCI,

    );
}; }
    return _cached_decoder_for_ERABQoSParameters(el);
}

let _cached_encoder_for_ERABQoSParameters: $.ASN1Encoder<ERABQoSParameters> | null = null;

/**
 * @summary Encodes a(n) ERABQoSParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ERABQoSParameters, encoded as an ASN.1 Element.
 */
export
function _encode_ERABQoSParameters (value: ERABQoSParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ERABQoSParameters) { _cached_encoder_for_ERABQoSParameters = function (value: ERABQoSParameters, elGetter: $.ASN1Encoder<ERABQoSParameters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_QCI, $.BER)(value.qCI, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ERABQoSParameters(value, elGetter);
}


/* eslint-enable */

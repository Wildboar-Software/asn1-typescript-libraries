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
 * @summary UDMInvalidParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMInvalidParameters ::= SEQUENCE
 * {
 *     parameter    [1] UTF8String OPTIONAL,
 *     reason       [2] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UDMInvalidParameters {
    constructor (
        /**
         * @summary `parameter`.
         * @public
         * @readonly
         */
        readonly parameter: OPTIONAL<UTF8String>,
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a UDMInvalidParameters
     * @description
     * 
     * This takes an `object` and converts it to a `UDMInvalidParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMInvalidParameters`.
     * @returns {UDMInvalidParameters}
     */
    public static _from_object (_o: { [_K in keyof (UDMInvalidParameters)]: (UDMInvalidParameters)[_K] }): UDMInvalidParameters {
        return new UDMInvalidParameters(_o.parameter, _o.reason);
    }


}

/**
 * @summary The Leading Root Component Types of UDMInvalidParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMInvalidParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("parameter", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("reason", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of UDMInvalidParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMInvalidParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMInvalidParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMInvalidParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMInvalidParameters: $.ASN1Decoder<UDMInvalidParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMInvalidParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMInvalidParameters (el: _Element): UDMInvalidParameters {
    if (!_cached_decoder_for_UDMInvalidParameters) { _cached_decoder_for_UDMInvalidParameters = function (el: _Element): UDMInvalidParameters {
    let parameter: OPTIONAL<UTF8String>;
    let reason: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "parameter": (_el: _Element): void => { parameter = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "reason": (_el: _Element): void => { reason = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UDMInvalidParameters,
        _extension_additions_list_spec_for_UDMInvalidParameters,
        _root_component_type_list_2_spec_for_UDMInvalidParameters,
        undefined,
    );
    return new UDMInvalidParameters(
        parameter,
        reason
    );
}; }
    return _cached_decoder_for_UDMInvalidParameters(el);
}

let _cached_encoder_for_UDMInvalidParameters: $.ASN1Encoder<UDMInvalidParameters> | null = null;

/**
 * @summary Encodes a(n) UDMInvalidParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMInvalidParameters, encoded as an ASN.1 Element.
 */
export
function _encode_UDMInvalidParameters (value: UDMInvalidParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMInvalidParameters) { _cached_encoder_for_UDMInvalidParameters = function (value: UDMInvalidParameters, elGetter: $.ASN1Encoder<UDMInvalidParameters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.parameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.parameter, $.BER)),
            /* IF_ABSENT  */ ((value.reason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.reason, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UDMInvalidParameters(value, elGetter);
}


/* eslint-enable */

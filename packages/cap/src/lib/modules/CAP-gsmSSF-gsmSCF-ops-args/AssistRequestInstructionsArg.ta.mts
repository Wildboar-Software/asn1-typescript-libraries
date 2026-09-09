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



/**
 * @summary AssistRequestInstructionsArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistRequestInstructionsArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     correlationID            [0] CorrelationID {bound},
 *     iPSSPCapabilities            [2] IPSSPCapabilities {bound},
 *     extensions                [3] Extensions {bound}            OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class AssistRequestInstructionsArg {
    constructor (
        /**
         * @summary `correlationID`.
         * @public
         * @readonly
         */
        readonly correlationID: CorrelationID,
        /**
         * @summary `iPSSPCapabilities`.
         * @public
         * @readonly
         */
        readonly iPSSPCapabilities: IPSSPCapabilities,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AssistRequestInstructionsArg
     * @description
     * 
     * This takes an `object` and converts it to a `AssistRequestInstructionsArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AssistRequestInstructionsArg`.
     * @returns {AssistRequestInstructionsArg}
     */
    public static _from_object (_o: { [_K in keyof (AssistRequestInstructionsArg)]: (AssistRequestInstructionsArg)[_K] }): AssistRequestInstructionsArg {
        return new AssistRequestInstructionsArg(_o.correlationID, _o.iPSSPCapabilities, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AssistRequestInstructionsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AssistRequestInstructionsArg: $.ComponentSpec[] = [
    /* FIXME: correlationID COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: iPSSPCapabilities COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: extensions COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of AssistRequestInstructionsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AssistRequestInstructionsArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AssistRequestInstructionsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AssistRequestInstructionsArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AssistRequestInstructionsArg: $.ASN1Decoder<AssistRequestInstructionsArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssistRequestInstructionsArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssistRequestInstructionsArg (el: _Element): AssistRequestInstructionsArg {
    if (!_cached_decoder_for_AssistRequestInstructionsArg) { _cached_decoder_for_AssistRequestInstructionsArg = function (el: _Element): AssistRequestInstructionsArg {
    let correlationID!: CorrelationID;
    let iPSSPCapabilities!: IPSSPCapabilities;
    let extensions: OPTIONAL<Extensions>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "iPSSPCapabilities": (_el: _Element): void => { iPSSPCapabilities = $._decode_implicit<IPSSPCapabilities>(() => _decode_IPSSPCapabilities)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AssistRequestInstructionsArg,
        _extension_additions_list_spec_for_AssistRequestInstructionsArg,
        _root_component_type_list_2_spec_for_AssistRequestInstructionsArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AssistRequestInstructionsArg(
        correlationID,
        iPSSPCapabilities,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AssistRequestInstructionsArg(el);
}

let _cached_encoder_for_AssistRequestInstructionsArg: $.ASN1Encoder<AssistRequestInstructionsArg> | null = null;

/**
 * @summary Encodes a(n) AssistRequestInstructionsArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssistRequestInstructionsArg, encoded as an ASN.1 Element.
 */
export
function _encode_AssistRequestInstructionsArg (value: AssistRequestInstructionsArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssistRequestInstructionsArg) { _cached_encoder_for_AssistRequestInstructionsArg = function (value: AssistRequestInstructionsArg, elGetter: $.ASN1Encoder<AssistRequestInstructionsArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_IPSSPCapabilities, $.BER)(value.iPSSPCapabilities, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AssistRequestInstructionsArg(value, elGetter);
}


/* eslint-enable */

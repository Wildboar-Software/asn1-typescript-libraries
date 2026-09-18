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
 * @summary DimensionParamIdent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DimensionParamIdent ::= SEQUENCE {
 *     bound      [0] IMPLICIT NULL OPTIONAL,
 *     addressing [1] IMPLICIT NULL OPTIONAL,
 *     absolute   [2] IMPLICIT NULL OPTIONAL,
 *     window     [3] IMPLICIT NULL OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DimensionParamIdent {
    constructor (
        /**
         * @summary `bound`.
         * @public
         * @readonly
         */
        readonly bound: OPTIONAL<NULL>,
        /**
         * @summary `addressing`.
         * @public
         * @readonly
         */
        readonly addressing: OPTIONAL<NULL>,
        /**
         * @summary `absolute`.
         * @public
         * @readonly
         */
        readonly absolute: OPTIONAL<NULL>,
        /**
         * @summary `window`.
         * @public
         * @readonly
         */
        readonly window: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a DimensionParamIdent
     * @description
     * 
     * This takes an `object` and converts it to a `DimensionParamIdent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DimensionParamIdent`.
     * @returns {DimensionParamIdent}
     */
    public static _from_object (_o: { [_K in keyof (DimensionParamIdent)]: (DimensionParamIdent)[_K] }): DimensionParamIdent {
        return new DimensionParamIdent(_o.bound, _o.addressing, _o.absolute, _o.window);
    }


}

/**
 * @summary The Leading Root Component Types of DimensionParamIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DimensionParamIdent: $.ComponentSpec[] = [
    new $.ComponentSpec("bound", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("addressing", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("absolute", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("window", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of DimensionParamIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DimensionParamIdent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DimensionParamIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DimensionParamIdent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DimensionParamIdent: $.ASN1Decoder<DimensionParamIdent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DimensionParamIdent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DimensionParamIdent (el: _Element): DimensionParamIdent {
    if (!_cached_decoder_for_DimensionParamIdent) { _cached_decoder_for_DimensionParamIdent = function (el: _Element): DimensionParamIdent {
    let bound: OPTIONAL<NULL>;
    let addressing: OPTIONAL<NULL>;
    let absolute: OPTIONAL<NULL>;
    let window: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "bound": (_el: _Element): void => { bound = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "addressing": (_el: _Element): void => { addressing = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "absolute": (_el: _Element): void => { absolute = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "window": (_el: _Element): void => { window = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DimensionParamIdent,
        _extension_additions_list_spec_for_DimensionParamIdent,
        _root_component_type_list_2_spec_for_DimensionParamIdent,
        undefined,
    );
    return new DimensionParamIdent(
        bound,
        addressing,
        absolute,
        window
    );
}; }
    return _cached_decoder_for_DimensionParamIdent(el);
}

let _cached_encoder_for_DimensionParamIdent: $.ASN1Encoder<DimensionParamIdent> | null = null;

/**
 * @summary Encodes a(n) DimensionParamIdent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DimensionParamIdent, encoded as an ASN.1 Element.
 */
export
function _encode_DimensionParamIdent (value: DimensionParamIdent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DimensionParamIdent) { _cached_encoder_for_DimensionParamIdent = function (value: DimensionParamIdent, elGetter: $.ASN1Encoder<DimensionParamIdent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.bound === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.bound, $.BER)),
            /* IF_ABSENT  */ ((value.addressing === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.addressing, $.BER)),
            /* IF_ABSENT  */ ((value.absolute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.absolute, $.BER)),
            /* IF_ABSENT  */ ((value.window === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.window, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DimensionParamIdent(value, elGetter);
}


/* eslint-enable */

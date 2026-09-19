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
 * @summary NegHints
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NegHints ::= SEQUENCE {
 *         hintName        [0] GeneralString OPTIONAL,
 *         hintAddress     [1] OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NegHints {
    constructor (
        /**
         * @summary `hintName`.
         * @public
         * @readonly
         */
        readonly hintName: OPTIONAL<GeneralString>,
        /**
         * @summary `hintAddress`.
         * @public
         * @readonly
         */
        readonly hintAddress: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a NegHints
     * @description
     * 
     * This takes an `object` and converts it to a `NegHints`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NegHints`.
     * @returns {NegHints}
     */
    public static _from_object (_o: { [_K in keyof (NegHints)]: (NegHints)[_K] }): NegHints {
        return new NegHints(_o.hintName, _o.hintAddress);
    }


}

/**
 * @summary The Leading Root Component Types of NegHints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NegHints: $.ComponentSpec[] = [
    new $.ComponentSpec("hintName", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("hintAddress", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NegHints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NegHints: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NegHints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NegHints: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NegHints: $.ASN1Decoder<NegHints> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NegHints
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NegHints (el: _Element): NegHints {
    if (!_cached_decoder_for_NegHints) { _cached_decoder_for_NegHints = function (el: _Element): NegHints {
    let hintName: OPTIONAL<GeneralString>;
    let hintAddress: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "hintName": (_el: _Element): void => { hintName = $._decode_explicit<GeneralString>(() => $._decodeGeneralString)(_el); },
        "hintAddress": (_el: _Element): void => { hintAddress = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NegHints,
        _extension_additions_list_spec_for_NegHints,
        _root_component_type_list_2_spec_for_NegHints,
        undefined,
    );
    return new NegHints(
        hintName,
        hintAddress
    );
}; }
    return _cached_decoder_for_NegHints(el);
}

let _cached_encoder_for_NegHints: $.ASN1Encoder<NegHints> | null = null;

/**
 * @summary Encodes a(n) NegHints into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NegHints, encoded as an ASN.1 Element.
 */
export
function _encode_NegHints (value: NegHints, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NegHints) { _cached_encoder_for_NegHints = function (value: NegHints, elGetter: $.ASN1Encoder<NegHints>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.hintName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => $._encodeGeneralString, $.BER)(value.hintName, $.BER)),
            /* IF_ABSENT  */ ((value.hintAddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.hintAddress, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NegHints(value, elGetter);
}


/* eslint-enable */

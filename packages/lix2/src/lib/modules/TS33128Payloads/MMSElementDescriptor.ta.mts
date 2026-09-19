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
 * @summary MMSElementDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSElementDescriptor ::= SEQUENCE
 * {
 *     reference [1] UTF8String,
 *     parameter [2] UTF8String     OPTIONAL,
 *     value     [3] UTF8String     OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMSElementDescriptor {
    constructor (
        /**
         * @summary `reference`.
         * @public
         * @readonly
         */
        readonly reference: UTF8String,
        /**
         * @summary `parameter`.
         * @public
         * @readonly
         */
        readonly parameter: OPTIONAL<UTF8String>,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a MMSElementDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `MMSElementDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSElementDescriptor`.
     * @returns {MMSElementDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (MMSElementDescriptor)]: (MMSElementDescriptor)[_K] }): MMSElementDescriptor {
        return new MMSElementDescriptor(_o.reference, _o.parameter, _o.value);
    }


}

/**
 * @summary The Leading Root Component Types of MMSElementDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSElementDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("reference", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("parameter", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("value", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of MMSElementDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSElementDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSElementDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSElementDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSElementDescriptor: $.ASN1Decoder<MMSElementDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSElementDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSElementDescriptor (el: _Element): MMSElementDescriptor {
    if (!_cached_decoder_for_MMSElementDescriptor) { _cached_decoder_for_MMSElementDescriptor = function (el: _Element): MMSElementDescriptor {
    let reference!: UTF8String;
    let parameter: OPTIONAL<UTF8String>;
    let value: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "reference": (_el: _Element): void => { reference = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "parameter": (_el: _Element): void => { parameter = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "value": (_el: _Element): void => { value = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSElementDescriptor,
        _extension_additions_list_spec_for_MMSElementDescriptor,
        _root_component_type_list_2_spec_for_MMSElementDescriptor,
        undefined,
    );
    return new MMSElementDescriptor(
        reference,
        parameter,
        value
    );
}; }
    return _cached_decoder_for_MMSElementDescriptor(el);
}

let _cached_encoder_for_MMSElementDescriptor: $.ASN1Encoder<MMSElementDescriptor> | null = null;

/**
 * @summary Encodes a(n) MMSElementDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSElementDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_MMSElementDescriptor (value: MMSElementDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSElementDescriptor) { _cached_encoder_for_MMSElementDescriptor = function (value: MMSElementDescriptor, elGetter: $.ASN1Encoder<MMSElementDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.reference, $.BER),
            /* IF_ABSENT  */ ((value.parameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.parameter, $.BER)),
            /* IF_ABSENT  */ ((value.value === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.value, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSElementDescriptor(value, elGetter);
}


/* eslint-enable */

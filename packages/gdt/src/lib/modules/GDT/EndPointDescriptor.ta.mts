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
 * @summary EndPointDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EndPointDescriptor ::= SEQUENCE {
 *     type    [1] IA5String,
 *     id      [2] IA5String OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class EndPointDescriptor {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: IA5String,
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: OPTIONAL<IA5String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EndPointDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `EndPointDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EndPointDescriptor`.
     * @returns {EndPointDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (EndPointDescriptor)]: (EndPointDescriptor)[_K] }): EndPointDescriptor {
        return new EndPointDescriptor(_o.type_, _o.id, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EndPointDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EndPointDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("id", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EndPointDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EndPointDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EndPointDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EndPointDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EndPointDescriptor: $.ASN1Decoder<EndPointDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EndPointDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EndPointDescriptor (el: _Element): EndPointDescriptor {
    if (!_cached_decoder_for_EndPointDescriptor) { _cached_decoder_for_EndPointDescriptor = function (el: _Element): EndPointDescriptor {
    let type_!: IA5String;
    let id: OPTIONAL<IA5String>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "id": (_el: _Element): void => { id = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EndPointDescriptor,
        _extension_additions_list_spec_for_EndPointDescriptor,
        _root_component_type_list_2_spec_for_EndPointDescriptor,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EndPointDescriptor(
        type_,
        id,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EndPointDescriptor(el);
}

let _cached_encoder_for_EndPointDescriptor: $.ASN1Encoder<EndPointDescriptor> | null = null;

/**
 * @summary Encodes a(n) EndPointDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EndPointDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_EndPointDescriptor (value: EndPointDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EndPointDescriptor) { _cached_encoder_for_EndPointDescriptor = function (value: EndPointDescriptor, elGetter: $.ASN1Encoder<EndPointDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeIA5String, $.BER)(value.type_, $.BER),
            /* IF_ABSENT  */ ((value.id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeIA5String, $.BER)(value.id, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EndPointDescriptor(value, elGetter);
}


/* eslint-enable */

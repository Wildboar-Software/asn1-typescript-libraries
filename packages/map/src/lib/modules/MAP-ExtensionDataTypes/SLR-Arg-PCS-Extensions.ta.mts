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
 * @summary SLR_Arg_PCS_Extensions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SLR-Arg-PCS-Extensions ::= SEQUENCE {
 *     ...,
 *     na-ESRK-Request    [0]    NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SLR_Arg_PCS_Extensions {
    constructor (
        /**
         * @summary `na_ESRK_Request`.
         * @public
         * @readonly
         */
        readonly na_ESRK_Request: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SLR_Arg_PCS_Extensions
     * @description
     * 
     * This takes an `object` and converts it to a `SLR_Arg_PCS_Extensions`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SLR_Arg_PCS_Extensions`.
     * @returns {SLR_Arg_PCS_Extensions}
     */
    public static _from_object (_o: { [_K in keyof (SLR_Arg_PCS_Extensions)]: (SLR_Arg_PCS_Extensions)[_K] }): SLR_Arg_PCS_Extensions {
        return new SLR_Arg_PCS_Extensions(_o.na_ESRK_Request, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SLR_Arg_PCS_Extensions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SLR_Arg_PCS_Extensions: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of SLR_Arg_PCS_Extensions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SLR_Arg_PCS_Extensions: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SLR_Arg_PCS_Extensions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SLR_Arg_PCS_Extensions: $.ComponentSpec[] = [
    new $.ComponentSpec("na-ESRK-Request", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

let _cached_decoder_for_SLR_Arg_PCS_Extensions: $.ASN1Decoder<SLR_Arg_PCS_Extensions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SLR_Arg_PCS_Extensions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SLR_Arg_PCS_Extensions (el: _Element): SLR_Arg_PCS_Extensions {
    if (!_cached_decoder_for_SLR_Arg_PCS_Extensions) { _cached_decoder_for_SLR_Arg_PCS_Extensions = function (el: _Element): SLR_Arg_PCS_Extensions {
    let na_ESRK_Request: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "na-ESRK-Request": (_el: _Element): void => { na_ESRK_Request = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SLR_Arg_PCS_Extensions,
        _extension_additions_list_spec_for_SLR_Arg_PCS_Extensions,
        _root_component_type_list_2_spec_for_SLR_Arg_PCS_Extensions,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SLR_Arg_PCS_Extensions(
        na_ESRK_Request,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SLR_Arg_PCS_Extensions(el);
}

let _cached_encoder_for_SLR_Arg_PCS_Extensions: $.ASN1Encoder<SLR_Arg_PCS_Extensions> | null = null;

/**
 * @summary Encodes a(n) SLR_Arg_PCS_Extensions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SLR_Arg_PCS_Extensions, encoded as an ASN.1 Element.
 */
export
function _encode_SLR_Arg_PCS_Extensions (value: SLR_Arg_PCS_Extensions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SLR_Arg_PCS_Extensions) { _cached_encoder_for_SLR_Arg_PCS_Extensions = function (value: SLR_Arg_PCS_Extensions, elGetter: $.ASN1Encoder<SLR_Arg_PCS_Extensions>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.na_ESRK_Request === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.na_ESRK_Request, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SLR_Arg_PCS_Extensions(value, elGetter);
}


/* eslint-enable */

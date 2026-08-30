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
 * @summary PCS_Extensions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PCS-Extensions ::= SEQUENCE {
 *     ...}
 * ```
 * 
 * @class
 */
export
class PCS_Extensions {
    constructor (
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PCS_Extensions
     * @description
     * 
     * This takes an `object` and converts it to a `PCS_Extensions`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PCS_Extensions`.
     * @returns {PCS_Extensions}
     */
    public static _from_object (_o: { [_K in keyof (PCS_Extensions)]: (PCS_Extensions)[_K] }): PCS_Extensions {
        return new PCS_Extensions(_o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PCS_Extensions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PCS_Extensions: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of PCS_Extensions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PCS_Extensions: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PCS_Extensions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PCS_Extensions: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PCS_Extensions: $.ASN1Decoder<PCS_Extensions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PCS_Extensions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PCS_Extensions (el: _Element): PCS_Extensions {
    if (!_cached_decoder_for_PCS_Extensions) { _cached_decoder_for_PCS_Extensions = function (el: _Element): PCS_Extensions {
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PCS_Extensions,
        _extension_additions_list_spec_for_PCS_Extensions,
        _root_component_type_list_2_spec_for_PCS_Extensions,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PCS_Extensions(
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PCS_Extensions(el);
}

let _cached_encoder_for_PCS_Extensions: $.ASN1Encoder<PCS_Extensions> | null = null;

/**
 * @summary Encodes a(n) PCS_Extensions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PCS_Extensions, encoded as an ASN.1 Element.
 */
export
function _encode_PCS_Extensions (value: PCS_Extensions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PCS_Extensions) { _cached_encoder_for_PCS_Extensions = function (value: PCS_Extensions, elGetter: $.ASN1Encoder<PCS_Extensions>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PCS_Extensions(value, elGetter);
}


/* eslint-enable */

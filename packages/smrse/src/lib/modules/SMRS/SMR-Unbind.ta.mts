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
 * @summary SMR_Unbind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMR-Unbind ::= SEQUENCE {
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class SMR_Unbind {
    constructor (
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SMR_Unbind
     * @description
     * 
     * This takes an `object` and converts it to a `SMR_Unbind`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMR_Unbind`.
     * @returns {SMR_Unbind}
     */
    public static _from_object (_o: { [_K in keyof (SMR_Unbind)]: (SMR_Unbind)[_K] }): SMR_Unbind {
        return new SMR_Unbind(_o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SMR_Unbind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMR_Unbind: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of SMR_Unbind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMR_Unbind: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMR_Unbind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMR_Unbind: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMR_Unbind: $.ASN1Decoder<SMR_Unbind> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMR_Unbind
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMR_Unbind (el: _Element): SMR_Unbind {
    if (!_cached_decoder_for_SMR_Unbind) { _cached_decoder_for_SMR_Unbind = function (el: _Element): SMR_Unbind {
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMR_Unbind,
        _extension_additions_list_spec_for_SMR_Unbind,
        _root_component_type_list_2_spec_for_SMR_Unbind,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SMR_Unbind(
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SMR_Unbind(el);
}

let _cached_encoder_for_SMR_Unbind: $.ASN1Encoder<SMR_Unbind> | null = null;

/**
 * @summary Encodes a(n) SMR_Unbind into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMR_Unbind, encoded as an ASN.1 Element.
 */
export
function _encode_SMR_Unbind (value: SMR_Unbind, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMR_Unbind) { _cached_encoder_for_SMR_Unbind = function (value: SMR_Unbind, elGetter: $.ASN1Encoder<SMR_Unbind>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMR_Unbind(value, elGetter);
}


/* eslint-enable */

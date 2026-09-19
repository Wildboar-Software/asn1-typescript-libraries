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
 * @summary SMR_Bind_Confirm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMR-Bind-Confirm ::= SEQUENCE {
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class SMR_Bind_Confirm {
    constructor (
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SMR_Bind_Confirm
     * @description
     * 
     * This takes an `object` and converts it to a `SMR_Bind_Confirm`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMR_Bind_Confirm`.
     * @returns {SMR_Bind_Confirm}
     */
    public static _from_object (_o: { [_K in keyof (SMR_Bind_Confirm)]: (SMR_Bind_Confirm)[_K] }): SMR_Bind_Confirm {
        return new SMR_Bind_Confirm(_o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SMR_Bind_Confirm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMR_Bind_Confirm: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of SMR_Bind_Confirm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMR_Bind_Confirm: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMR_Bind_Confirm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMR_Bind_Confirm: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMR_Bind_Confirm: $.ASN1Decoder<SMR_Bind_Confirm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMR_Bind_Confirm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMR_Bind_Confirm (el: _Element): SMR_Bind_Confirm {
    if (!_cached_decoder_for_SMR_Bind_Confirm) { _cached_decoder_for_SMR_Bind_Confirm = function (el: _Element): SMR_Bind_Confirm {
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMR_Bind_Confirm,
        _extension_additions_list_spec_for_SMR_Bind_Confirm,
        _root_component_type_list_2_spec_for_SMR_Bind_Confirm,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SMR_Bind_Confirm(
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SMR_Bind_Confirm(el);
}

let _cached_encoder_for_SMR_Bind_Confirm: $.ASN1Encoder<SMR_Bind_Confirm> | null = null;

/**
 * @summary Encodes a(n) SMR_Bind_Confirm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMR_Bind_Confirm, encoded as an ASN.1 Element.
 */
export
function _encode_SMR_Bind_Confirm (value: SMR_Bind_Confirm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMR_Bind_Confirm) { _cached_encoder_for_SMR_Bind_Confirm = function (value: SMR_Bind_Confirm, elGetter: $.ASN1Encoder<SMR_Bind_Confirm>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMR_Bind_Confirm(value, elGetter);
}


/* eslint-enable */

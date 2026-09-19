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
import { TelephoneNumber, _decode_TelephoneNumber, _encode_TelephoneNumber } from "../SelectedAttributeTypes/TelephoneNumber.ta.mjs";
// export { TelephoneNumber, _decode_TelephoneNumber, _encode_TelephoneNumber } from "../SelectedAttributeTypes/TelephoneNumber.ta.mjs";


/**
 * @summary FacsimileTelephoneNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FacsimileTelephoneNumber ::= SEQUENCE {
 *   telephoneNumber  TelephoneNumber,
 *   parameters       G3FacsimileNonBasicParameters OPTIONAL,
 *   ... }
 * ```
 * 
 * @class
 */
export
class FacsimileTelephoneNumber {
    constructor (
        /**
         * @summary `telephoneNumber`.
         * @public
         * @readonly
         */
        readonly telephoneNumber: TelephoneNumber,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<G3FacsimileNonBasicParameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a FacsimileTelephoneNumber
     * @description
     * 
     * This takes an `object` and converts it to a `FacsimileTelephoneNumber`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FacsimileTelephoneNumber`.
     * @returns {FacsimileTelephoneNumber}
     */
    public static _from_object (_o: { [_K in keyof (FacsimileTelephoneNumber)]: (FacsimileTelephoneNumber)[_K] }): FacsimileTelephoneNumber {
        return new FacsimileTelephoneNumber(_o.telephoneNumber, _o.parameters, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of FacsimileTelephoneNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FacsimileTelephoneNumber: $.ComponentSpec[] = [
    new $.ComponentSpec("telephoneNumber", false, $.hasTag(_TagClass.universal, 19)),
    /* FIXME: parameters COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of FacsimileTelephoneNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FacsimileTelephoneNumber: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FacsimileTelephoneNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FacsimileTelephoneNumber: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FacsimileTelephoneNumber: $.ASN1Decoder<FacsimileTelephoneNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FacsimileTelephoneNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FacsimileTelephoneNumber (el: _Element): FacsimileTelephoneNumber {
    if (!_cached_decoder_for_FacsimileTelephoneNumber) { _cached_decoder_for_FacsimileTelephoneNumber = function (el: _Element): FacsimileTelephoneNumber {
    let telephoneNumber!: TelephoneNumber;
    let parameters: OPTIONAL<G3FacsimileNonBasicParameters>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "telephoneNumber": (_el: _Element): void => { telephoneNumber = _decode_TelephoneNumber(_el); },
        "parameters": (_el: _Element): void => { parameters = _decode_G3FacsimileNonBasicParameters(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FacsimileTelephoneNumber,
        _extension_additions_list_spec_for_FacsimileTelephoneNumber,
        _root_component_type_list_2_spec_for_FacsimileTelephoneNumber,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new FacsimileTelephoneNumber(
        telephoneNumber,
        parameters,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_FacsimileTelephoneNumber(el);
}

let _cached_encoder_for_FacsimileTelephoneNumber: $.ASN1Encoder<FacsimileTelephoneNumber> | null = null;

/**
 * @summary Encodes a(n) FacsimileTelephoneNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FacsimileTelephoneNumber, encoded as an ASN.1 Element.
 */
export
function _encode_FacsimileTelephoneNumber (value: FacsimileTelephoneNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FacsimileTelephoneNumber) { _cached_encoder_for_FacsimileTelephoneNumber = function (value: FacsimileTelephoneNumber, elGetter: $.ASN1Encoder<FacsimileTelephoneNumber>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TelephoneNumber(value.telephoneNumber, $.BER),
            /* IF_ABSENT  */ ((value.parameters === undefined) ? undefined : _encode_G3FacsimileNonBasicParameters(value.parameters, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FacsimileTelephoneNumber(value, elGetter);
}


/* eslint-enable */

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
 * @summary EventSpecificInformationBCSM_oReAnswer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-oReAnswer ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_oReAnswer {
    constructor (
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_oReAnswer
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_oReAnswer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_oReAnswer`.
     * @returns {EventSpecificInformationBCSM_oReAnswer}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oReAnswer)]: (EventSpecificInformationBCSM_oReAnswer)[_K] }): EventSpecificInformationBCSM_oReAnswer {
        return new EventSpecificInformationBCSM_oReAnswer(_o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_oReAnswer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oReAnswer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_oReAnswer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oReAnswer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_oReAnswer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oReAnswer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_oReAnswer: $.ASN1Decoder<EventSpecificInformationBCSM_oReAnswer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_oReAnswer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_oReAnswer (el: _Element): EventSpecificInformationBCSM_oReAnswer {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oReAnswer) { _cached_decoder_for_EventSpecificInformationBCSM_oReAnswer = function (el: _Element): EventSpecificInformationBCSM_oReAnswer {
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oReAnswer,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oReAnswer,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oReAnswer,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oReAnswer(
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_oReAnswer(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oReAnswer: $.ASN1Encoder<EventSpecificInformationBCSM_oReAnswer> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_oReAnswer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_oReAnswer, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_oReAnswer (value: EventSpecificInformationBCSM_oReAnswer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oReAnswer) { _cached_encoder_for_EventSpecificInformationBCSM_oReAnswer = function (value: EventSpecificInformationBCSM_oReAnswer, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_oReAnswer>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_oReAnswer(value, elGetter);
}


/* eslint-enable */

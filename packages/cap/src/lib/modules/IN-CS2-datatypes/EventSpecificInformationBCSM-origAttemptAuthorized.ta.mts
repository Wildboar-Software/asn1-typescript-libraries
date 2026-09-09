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
 * @summary EventSpecificInformationBCSM_origAttemptAuthorized
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-origAttemptAuthorized ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_origAttemptAuthorized {
    constructor (
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_origAttemptAuthorized
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_origAttemptAuthorized`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_origAttemptAuthorized`.
     * @returns {EventSpecificInformationBCSM_origAttemptAuthorized}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_origAttemptAuthorized)]: (EventSpecificInformationBCSM_origAttemptAuthorized)[_K] }): EventSpecificInformationBCSM_origAttemptAuthorized {
        return new EventSpecificInformationBCSM_origAttemptAuthorized(_o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_origAttemptAuthorized
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_origAttemptAuthorized: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_origAttemptAuthorized
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_origAttemptAuthorized: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_origAttemptAuthorized
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_origAttemptAuthorized: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_origAttemptAuthorized: $.ASN1Decoder<EventSpecificInformationBCSM_origAttemptAuthorized> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_origAttemptAuthorized
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_origAttemptAuthorized (el: _Element): EventSpecificInformationBCSM_origAttemptAuthorized {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_origAttemptAuthorized) { _cached_decoder_for_EventSpecificInformationBCSM_origAttemptAuthorized = function (el: _Element): EventSpecificInformationBCSM_origAttemptAuthorized {
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_origAttemptAuthorized,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_origAttemptAuthorized,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_origAttemptAuthorized,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_origAttemptAuthorized(
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_origAttemptAuthorized(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_origAttemptAuthorized: $.ASN1Encoder<EventSpecificInformationBCSM_origAttemptAuthorized> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_origAttemptAuthorized into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_origAttemptAuthorized, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_origAttemptAuthorized (value: EventSpecificInformationBCSM_origAttemptAuthorized, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_origAttemptAuthorized) { _cached_encoder_for_EventSpecificInformationBCSM_origAttemptAuthorized = function (value: EventSpecificInformationBCSM_origAttemptAuthorized, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_origAttemptAuthorized>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_origAttemptAuthorized(value, elGetter);
}


/* eslint-enable */

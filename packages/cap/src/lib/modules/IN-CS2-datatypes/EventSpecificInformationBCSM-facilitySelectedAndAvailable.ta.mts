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
 * @summary EventSpecificInformationBCSM_facilitySelectedAndAvailable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-facilitySelectedAndAvailable ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_facilitySelectedAndAvailable {
    constructor (
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_facilitySelectedAndAvailable
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_facilitySelectedAndAvailable`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_facilitySelectedAndAvailable`.
     * @returns {EventSpecificInformationBCSM_facilitySelectedAndAvailable}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_facilitySelectedAndAvailable)]: (EventSpecificInformationBCSM_facilitySelectedAndAvailable)[_K] }): EventSpecificInformationBCSM_facilitySelectedAndAvailable {
        return new EventSpecificInformationBCSM_facilitySelectedAndAvailable(_o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_facilitySelectedAndAvailable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_facilitySelectedAndAvailable: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_facilitySelectedAndAvailable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_facilitySelectedAndAvailable: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_facilitySelectedAndAvailable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_facilitySelectedAndAvailable: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_facilitySelectedAndAvailable: $.ASN1Decoder<EventSpecificInformationBCSM_facilitySelectedAndAvailable> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_facilitySelectedAndAvailable
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_facilitySelectedAndAvailable (el: _Element): EventSpecificInformationBCSM_facilitySelectedAndAvailable {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_facilitySelectedAndAvailable) { _cached_decoder_for_EventSpecificInformationBCSM_facilitySelectedAndAvailable = function (el: _Element): EventSpecificInformationBCSM_facilitySelectedAndAvailable {
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_facilitySelectedAndAvailable,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_facilitySelectedAndAvailable,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_facilitySelectedAndAvailable,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_facilitySelectedAndAvailable(
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_facilitySelectedAndAvailable(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_facilitySelectedAndAvailable: $.ASN1Encoder<EventSpecificInformationBCSM_facilitySelectedAndAvailable> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_facilitySelectedAndAvailable into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_facilitySelectedAndAvailable, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_facilitySelectedAndAvailable (value: EventSpecificInformationBCSM_facilitySelectedAndAvailable, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_facilitySelectedAndAvailable) { _cached_encoder_for_EventSpecificInformationBCSM_facilitySelectedAndAvailable = function (value: EventSpecificInformationBCSM_facilitySelectedAndAvailable, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_facilitySelectedAndAvailable>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_facilitySelectedAndAvailable(value, elGetter);
}


/* eslint-enable */

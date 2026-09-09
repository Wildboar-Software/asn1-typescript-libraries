/* eslint-disable */
import {
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
 * @summary EventSpecificInformationBCSM_tReAnswer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-tReAnswer ::= SEQUENCE {
 *     -- no specific info defined
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_tReAnswer {
    constructor (
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_tReAnswer
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_tReAnswer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_tReAnswer`.
     * @returns {EventSpecificInformationBCSM_tReAnswer}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_tReAnswer)]: (EventSpecificInformationBCSM_tReAnswer)[_K] }): EventSpecificInformationBCSM_tReAnswer {
        return new EventSpecificInformationBCSM_tReAnswer(_o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_tReAnswer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tReAnswer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_tReAnswer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tReAnswer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_tReAnswer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_tReAnswer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_tReAnswer: $.ASN1Decoder<EventSpecificInformationBCSM_tReAnswer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_tReAnswer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_tReAnswer (el: _Element): EventSpecificInformationBCSM_tReAnswer {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_tReAnswer) { _cached_decoder_for_EventSpecificInformationBCSM_tReAnswer = function (el: _Element): EventSpecificInformationBCSM_tReAnswer {
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tReAnswer,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_tReAnswer,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tReAnswer,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_tReAnswer(
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_tReAnswer(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_tReAnswer: $.ASN1Encoder<EventSpecificInformationBCSM_tReAnswer> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_tReAnswer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_tReAnswer, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_tReAnswer (value: EventSpecificInformationBCSM_tReAnswer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_tReAnswer) { _cached_encoder_for_EventSpecificInformationBCSM_tReAnswer = function (value: EventSpecificInformationBCSM_tReAnswer): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_tReAnswer(value, elGetter);
}


/* eslint-enable */

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
import { EventParameterName, _decode_EventParameterName, _encode_EventParameterName } from "../MEDIA-GATEWAY-CONTROL/EventParameterName.ta.mjs";
// export { EventParameterName, _decode_EventParameterName, _encode_EventParameterName } from "../MEDIA-GATEWAY-CONTROL/EventParameterName.ta.mjs";
import { EventParamValues, _decode_EventParamValues, _encode_EventParamValues } from "../MEDIA-GATEWAY-CONTROL/EventParamValues.ta.mjs";
// export { EventParamValues, _decode_EventParamValues, _encode_EventParamValues } from "../MEDIA-GATEWAY-CONTROL/EventParamValues.ta.mjs";
import { EventParameter_extraInfo, _decode_EventParameter_extraInfo, _encode_EventParameter_extraInfo } from "../MEDIA-GATEWAY-CONTROL/EventParameter-extraInfo.ta.mjs";
// export { EventParameter_extraInfo, _decode_EventParameter_extraInfo, _encode_EventParameter_extraInfo } from "../MEDIA-GATEWAY-CONTROL/EventParameter-extraInfo.ta.mjs";


/**
 * @summary EventParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventParameter ::= SEQUENCE
 *     {
 * -- Wireshark specific
 * --        eventParameterName            [0] Name,
 * --        value                        [1] Value,
 *         eventParameterName            [0] EventParameterName,
 *         eventParamValue                [1] EventParamValues,
 * -- end
 *         -- For use of extraInfos see the comment related to PropertyParm
 *         extraInfo [2] CHOICE
 *         {
 *             relation        [0] Relation,
 *             range            [1] BOOLEAN,
 *             sublist            [2] BOOLEAN
 *         } OPTIONAL,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class EventParameter {
    constructor (
        /**
         * @summary `eventParameterName`.
         * @public
         * @readonly
         */
        readonly eventParameterName: EventParameterName,
        /**
         * @summary `eventParamValue`.
         * @public
         * @readonly
         */
        readonly eventParamValue: EventParamValues,
        /**
         * @summary `extraInfo`.
         * @public
         * @readonly
         */
        readonly extraInfo: OPTIONAL<EventParameter_extraInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EventParameter
     * @description
     * 
     * This takes an `object` and converts it to a `EventParameter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventParameter`.
     * @returns {EventParameter}
     */
    public static _from_object (_o: { [_K in keyof (EventParameter)]: (EventParameter)[_K] }): EventParameter {
        return new EventParameter(_o.eventParameterName, _o.eventParamValue, _o.extraInfo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventParameter: $.ComponentSpec[] = [
    new $.ComponentSpec("eventParameterName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventParamValue", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extraInfo", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EventParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventParameter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventParameter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventParameter: $.ASN1Decoder<EventParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventParameter (el: _Element): EventParameter {
    if (!_cached_decoder_for_EventParameter) { _cached_decoder_for_EventParameter = function (el: _Element): EventParameter {
    let eventParameterName!: EventParameterName;
    let eventParamValue!: EventParamValues;
    let extraInfo: OPTIONAL<EventParameter_extraInfo>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "eventParameterName": (_el: _Element): void => { eventParameterName = $._decode_implicit<EventParameterName>(() => _decode_EventParameterName)(_el); },
        "eventParamValue": (_el: _Element): void => { eventParamValue = $._decode_implicit<EventParamValues>(() => _decode_EventParamValues)(_el); },
        "extraInfo": (_el: _Element): void => { extraInfo = $._decode_explicit<EventParameter_extraInfo>(() => _decode_EventParameter_extraInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventParameter,
        _extension_additions_list_spec_for_EventParameter,
        _root_component_type_list_2_spec_for_EventParameter,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventParameter(
        eventParameterName,
        eventParamValue,
        extraInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventParameter(el);
}

let _cached_encoder_for_EventParameter: $.ASN1Encoder<EventParameter> | null = null;

/**
 * @summary Encodes a(n) EventParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventParameter, encoded as an ASN.1 Element.
 */
export
function _encode_EventParameter (value: EventParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventParameter) { _cached_encoder_for_EventParameter = function (value: EventParameter, elGetter: $.ASN1Encoder<EventParameter>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventParameterName, $.BER)(value.eventParameterName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EventParamValues, $.BER)(value.eventParamValue, $.BER),
            /* IF_ABSENT  */ ((value.extraInfo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_EventParameter_extraInfo, $.BER)(value.extraInfo, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventParameter(value, elGetter);
}


/* eslint-enable */

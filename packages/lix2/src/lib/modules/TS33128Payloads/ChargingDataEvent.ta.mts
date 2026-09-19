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
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { ChargingDataInformation, _decode_ChargingDataInformation, _encode_ChargingDataInformation } from "../TS33128Payloads/ChargingDataInformation.ta.mjs";
// export { ChargingDataInformation, _decode_ChargingDataInformation, _encode_ChargingDataInformation } from "../TS33128Payloads/ChargingDataInformation.ta.mjs";


/**
 * @summary ChargingDataEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingDataEvent ::= SEQUENCE
 * {
 *     location                [1] Location OPTIONAL,
 *     chargingDataInformation [2] ChargingDataInformation
 * }
 * ```
 * 
 * @class
 */
export
class ChargingDataEvent {
    constructor (
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `chargingDataInformation`.
         * @public
         * @readonly
         */
        readonly chargingDataInformation: ChargingDataInformation
    ) {}

    /**
     * @summary Restructures an object into a ChargingDataEvent
     * @description
     * 
     * This takes an `object` and converts it to a `ChargingDataEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChargingDataEvent`.
     * @returns {ChargingDataEvent}
     */
    public static _from_object (_o: { [_K in keyof (ChargingDataEvent)]: (ChargingDataEvent)[_K] }): ChargingDataEvent {
        return new ChargingDataEvent(_o.location, _o.chargingDataInformation);
    }


}

/**
 * @summary The Leading Root Component Types of ChargingDataEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChargingDataEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("chargingDataInformation", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ChargingDataEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChargingDataEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChargingDataEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChargingDataEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChargingDataEvent: $.ASN1Decoder<ChargingDataEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingDataEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingDataEvent (el: _Element): ChargingDataEvent {
    if (!_cached_decoder_for_ChargingDataEvent) { _cached_decoder_for_ChargingDataEvent = function (el: _Element): ChargingDataEvent {
    let location: OPTIONAL<Location>;
    let chargingDataInformation!: ChargingDataInformation;
    const callbacks: $.DecodingMap = {
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "chargingDataInformation": (_el: _Element): void => { chargingDataInformation = $._decode_explicit<ChargingDataInformation>(() => _decode_ChargingDataInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChargingDataEvent,
        _extension_additions_list_spec_for_ChargingDataEvent,
        _root_component_type_list_2_spec_for_ChargingDataEvent,
        undefined,
    );
    return new ChargingDataEvent(
        location,
        chargingDataInformation
    );
}; }
    return _cached_decoder_for_ChargingDataEvent(el);
}

let _cached_encoder_for_ChargingDataEvent: $.ASN1Encoder<ChargingDataEvent> | null = null;

/**
 * @summary Encodes a(n) ChargingDataEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingDataEvent, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingDataEvent (value: ChargingDataEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingDataEvent) { _cached_encoder_for_ChargingDataEvent = function (value: ChargingDataEvent, elGetter: $.ASN1Encoder<ChargingDataEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ChargingDataInformation, $.BER)(value.chargingDataInformation, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChargingDataEvent(value, elGetter);
}


/* eslint-enable */

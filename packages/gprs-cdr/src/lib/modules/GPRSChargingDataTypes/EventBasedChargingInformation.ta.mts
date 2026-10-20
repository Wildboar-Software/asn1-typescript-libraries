/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventBasedChargingInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventBasedChargingInformation ::= SEQUENCE {
 *    numberOfEvents    [1] IMPLICIT INTEGER,
 *    eventTimeStamps   [2] IMPLICIT SEQUENCE  OF
 *       OCTET STRING ( SIZE( 9 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class EventBasedChargingInformation {
    /**
     * @summary `numberOfEvents`.
     * @public
     * @readonly
     */
    readonly numberOfEvents: INTEGER;
    /**
     * @summary `eventTimeStamps`.
     * @public
     * @readonly
     */
    readonly eventTimeStamps: OPTIONAL<OCTET_STRING[]>;

    constructor (
        numberOfEvents: INTEGER,
        eventTimeStamps: OPTIONAL<OCTET_STRING[]>
    ) {
        this.numberOfEvents = numberOfEvents;
        this.eventTimeStamps = eventTimeStamps;
    }

    /**
     * @summary Restructures an object into a EventBasedChargingInformation
     * @description
     * 
     * This takes an `object` and converts it to a `EventBasedChargingInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventBasedChargingInformation`.
     * @returns {EventBasedChargingInformation}
     */
    public static _from_object (_o: { [_K in keyof (EventBasedChargingInformation)]: (EventBasedChargingInformation)[_K] }): EventBasedChargingInformation {
        return new EventBasedChargingInformation(_o.numberOfEvents, _o.eventTimeStamps);
    }


}

/**
 * @summary The Leading Root Component Types of EventBasedChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventBasedChargingInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("numberOfEvents", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventTimeStamps", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EventBasedChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventBasedChargingInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventBasedChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventBasedChargingInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventBasedChargingInformation: $.ASN1Decoder<EventBasedChargingInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventBasedChargingInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventBasedChargingInformation (el: _Element): EventBasedChargingInformation {
    if (!_cached_decoder_for_EventBasedChargingInformation) { _cached_decoder_for_EventBasedChargingInformation = function (el: _Element): EventBasedChargingInformation {
    let numberOfEvents!: INTEGER;
    let eventTimeStamps: OPTIONAL<OCTET_STRING[]>;
    const callbacks: $.DecodingMap = {
        "numberOfEvents": (_el: _Element): void => { numberOfEvents = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "eventTimeStamps": (_el: _Element): void => { eventTimeStamps = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventBasedChargingInformation,
        _extension_additions_list_spec_for_EventBasedChargingInformation,
        _root_component_type_list_2_spec_for_EventBasedChargingInformation,
        undefined,
    );
    return new EventBasedChargingInformation(
        numberOfEvents,
        eventTimeStamps
    );
}; }
    return _cached_decoder_for_EventBasedChargingInformation(el);
}

let _cached_encoder_for_EventBasedChargingInformation: $.ASN1Encoder<EventBasedChargingInformation> | null = null;

/**
 * @summary Encodes a(n) EventBasedChargingInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventBasedChargingInformation, encoded as an ASN.1 Element.
 */
export
function _encode_EventBasedChargingInformation (value: EventBasedChargingInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventBasedChargingInformation) { _cached_encoder_for_EventBasedChargingInformation = function (value: EventBasedChargingInformation, elGetter: $.ASN1Encoder<EventBasedChargingInformation>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.numberOfEvents, $.BER));
    if (value.eventTimeStamps !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.eventTimeStamps, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EventBasedChargingInformation(value, elGetter);
}


/* eslint-enable */

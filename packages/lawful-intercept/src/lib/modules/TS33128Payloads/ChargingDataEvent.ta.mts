/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { type ChargingDataInformation, _decode_ChargingDataInformation, _encode_ChargingDataInformation } from "../TS33128Payloads/ChargingDataInformation.ta.mjs";
// export { ChargingDataInformation, _decode_ChargingDataInformation, _encode_ChargingDataInformation } from "../TS33128Payloads/ChargingDataInformation.ta.mjs";


/**
 * @summary ChargingDataEvent
 * @description
 * 
 * The IRI-POI in the charging function shall generate an xIRI containing a
 * ChargingDataEvent record when the IRI-POI present in the charging function
 * observes a charging data event for a target identity as provided over LI_X1.
 *
 * Table 7.19.4-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.19.3.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @summary `location`.
     * @description
     *
     * Shall contain the user location information when it is included within a
     * charging data request.
     *
     * 3GPP TS 33.128, clause 7.19.3.2.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `chargingDataInformation`.
     * @description
     *
     * Contains the selected choice between default charging data information
     * types or translated charging data information.
     *
     * 3GPP TS 33.128, clause 7.19.3.2.
     *
     * @public
     * @readonly
     */
    readonly chargingDataInformation: ChargingDataInformation;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        location: OPTIONAL<Location>,
        chargingDataInformation: ChargingDataInformation,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.location = location;
        this.chargingDataInformation = chargingDataInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new ChargingDataEvent(_o.location, _o.chargingDataInformation, _o._unrecognizedExtensionsList);
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
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "chargingDataInformation": (_el: _Element): void => { chargingDataInformation = $._decode_explicit<ChargingDataInformation>(() => _decode_ChargingDataInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChargingDataEvent,
        _extension_additions_list_spec_for_ChargingDataEvent,
        _root_component_type_list_2_spec_for_ChargingDataEvent,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ChargingDataEvent(
        location,
        chargingDataInformation,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ChargingDataInformation, $.BER)(value.chargingDataInformation, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ChargingDataEvent(value, elGetter);
}


/* eslint-enable */

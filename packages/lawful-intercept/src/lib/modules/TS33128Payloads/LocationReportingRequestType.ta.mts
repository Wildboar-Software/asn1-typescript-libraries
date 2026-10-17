/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LocationEventType, _decode_LocationEventType, _encode_LocationEventType, _enum_for_LocationEventType } from "../TS33128Payloads/LocationEventType.ta.mjs";
// export { LocationEventType, _enum_for_LocationEventType, LocationEventType_direct /* IMPORTED_LONG_ENUMERATION_ITEM */, direct /* IMPORTED_SHORT_ENUMERATION_ITEM */, LocationEventType_changeOfServeCell /* IMPORTED_LONG_ENUMERATION_ITEM */, changeOfServeCell /* IMPORTED_SHORT_ENUMERATION_ITEM */, LocationEventType_uEPrescenceInAreaOfInterest /* IMPORTED_LONG_ENUMERATION_ITEM */, uEPrescenceInAreaOfInterest /* IMPORTED_SHORT_ENUMERATION_ITEM */, LocationEventType_stopChangeOfServeCell /* IMPORTED_LONG_ENUMERATION_ITEM */, stopChangeOfServeCell /* IMPORTED_SHORT_ENUMERATION_ITEM */, LocationEventType_stopUEPresenceInAreaOfInterest /* IMPORTED_LONG_ENUMERATION_ITEM */, stopUEPresenceInAreaOfInterest /* IMPORTED_SHORT_ENUMERATION_ITEM */, LocationEventType_cancelLocationReportingForTheUE /* IMPORTED_LONG_ENUMERATION_ITEM */, cancelLocationReportingForTheUE /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LocationEventType, _encode_LocationEventType } from "../TS33128Payloads/LocationEventType.ta.mjs";
import { LocationReportArea, _decode_LocationReportArea, _encode_LocationReportArea, _enum_for_LocationReportArea } from "../TS33128Payloads/LocationReportArea.ta.mjs";
// export { LocationReportArea, _enum_for_LocationReportArea, LocationReportArea_cell /* IMPORTED_LONG_ENUMERATION_ITEM */, cell /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LocationReportArea, _encode_LocationReportArea } from "../TS33128Payloads/LocationReportArea.ta.mjs";
import { LocationAreaOfInterestList, _decode_LocationAreaOfInterestList, _encode_LocationAreaOfInterestList } from "../TS33128Payloads/LocationAreaOfInterestList.ta.mjs";
// export { LocationAreaOfInterestList, _decode_LocationAreaOfInterestList, _encode_LocationAreaOfInterestList } from "../TS33128Payloads/LocationAreaOfInterestList.ta.mjs";


/**
 * @summary LocationReportingRequestType
 * @description
 * 
 * Indicates the type of location reporting requested in the HANDOVER REQUEST.
 * Include if in HANDOVER REQUEST message. See TS 38.413 [23] clause 9.3.1.65.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.9.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationReportingRequestType ::= SEQUENCE
 * {
 *     eventType           [1] LocationEventType,
 *     reportArea          [2] LocationReportArea,
 *     areaOfInterestList  [3] LocationAreaOfInterestList
 * }
 * ```
 * 
 * @class
 */
export
class LocationReportingRequestType {
    /**
     * @summary `eventType`.
     * @public
     * @readonly
     */
    readonly eventType: LocationEventType;
    /**
     * @summary `reportArea`.
     * @public
     * @readonly
     */
    readonly reportArea: LocationReportArea;
    /**
     * @summary `areaOfInterestList`.
     * @public
     * @readonly
     */
    readonly areaOfInterestList: LocationAreaOfInterestList;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        eventType: LocationEventType,
        reportArea: LocationReportArea,
        areaOfInterestList: LocationAreaOfInterestList,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.eventType = eventType;
        this.reportArea = reportArea;
        this.areaOfInterestList = areaOfInterestList;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a LocationReportingRequestType
     * @description
     * 
     * This takes an `object` and converts it to a `LocationReportingRequestType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationReportingRequestType`.
     * @returns {LocationReportingRequestType}
     */
    public static _from_object (_o: { [_K in keyof (LocationReportingRequestType)]: (LocationReportingRequestType)[_K] }): LocationReportingRequestType {
        return new LocationReportingRequestType(_o.eventType, _o.reportArea, _o.areaOfInterestList, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `eventType`
         * @public
         * @static
         */

    public static _enum_for_eventType = _enum_for_LocationEventType;        /**
         * @summary The enum used as the type of the component `reportArea`
         * @public
         * @static
         */

    public static _enum_for_reportArea = _enum_for_LocationReportArea;
}

/**
 * @summary The Leading Root Component Types of LocationReportingRequestType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationReportingRequestType: $.ComponentSpec[] = [
    new $.ComponentSpec("eventType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("reportArea", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("areaOfInterestList", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of LocationReportingRequestType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationReportingRequestType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationReportingRequestType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationReportingRequestType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocationReportingRequestType: $.ASN1Decoder<LocationReportingRequestType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationReportingRequestType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationReportingRequestType (el: _Element): LocationReportingRequestType {
    if (!_cached_decoder_for_LocationReportingRequestType) { _cached_decoder_for_LocationReportingRequestType = function (el: _Element): LocationReportingRequestType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("LocationReportingRequestType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eventType";
    sequence[1].name = "reportArea";
    sequence[2].name = "areaOfInterestList";
    let eventType!: LocationEventType;
    let reportArea!: LocationReportArea;
    let areaOfInterestList!: LocationAreaOfInterestList;
    eventType = $._decode_implicit<LocationEventType>(() => _decode_LocationEventType)(sequence[0]);
    reportArea = $._decode_implicit<LocationReportArea>(() => _decode_LocationReportArea)(sequence[1]);
    areaOfInterestList = $._decode_implicit<LocationAreaOfInterestList>(() => _decode_LocationAreaOfInterestList)(sequence[2]);
    return new LocationReportingRequestType(
        eventType,
        reportArea,
        areaOfInterestList,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_LocationReportingRequestType(el);
}

let _cached_encoder_for_LocationReportingRequestType: $.ASN1Encoder<LocationReportingRequestType> | null = null;

/**
 * @summary Encodes a(n) LocationReportingRequestType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationReportingRequestType, encoded as an ASN.1 Element.
 */
export
function _encode_LocationReportingRequestType (value: LocationReportingRequestType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationReportingRequestType) { _cached_encoder_for_LocationReportingRequestType = function (value: LocationReportingRequestType, elGetter: $.ASN1Encoder<LocationReportingRequestType>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LocationEventType, $.BER)(value.eventType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_LocationReportArea, $.BER)(value.reportArea, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_LocationAreaOfInterestList, $.BER)(value.areaOfInterestList, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LocationReportingRequestType(value, elGetter);
}


/* eslint-enable */

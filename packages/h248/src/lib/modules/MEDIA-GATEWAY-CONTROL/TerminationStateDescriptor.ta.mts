/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PropertyParm, _decode_PropertyParm, _encode_PropertyParm } from "../MEDIA-GATEWAY-CONTROL/PropertyParm.ta.mjs";
// export { PropertyParm, _decode_PropertyParm, _encode_PropertyParm } from "../MEDIA-GATEWAY-CONTROL/PropertyParm.ta.mjs";
import { EventBufferControl, _decode_EventBufferControl, _encode_EventBufferControl, _enum_for_EventBufferControl } from "../MEDIA-GATEWAY-CONTROL/EventBufferControl.ta.mjs";
// export { EventBufferControl, _enum_for_EventBufferControl, EventBufferControl_off /* IMPORTED_LONG_ENUMERATION_ITEM */, off /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventBufferControl_lockStep /* IMPORTED_LONG_ENUMERATION_ITEM */, lockStep /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventBufferControl, _encode_EventBufferControl } from "../MEDIA-GATEWAY-CONTROL/EventBufferControl.ta.mjs";
import { ServiceState, _decode_ServiceState, _encode_ServiceState, _enum_for_ServiceState } from "../MEDIA-GATEWAY-CONTROL/ServiceState.ta.mjs";
// export { ServiceState, _enum_for_ServiceState, ServiceState_test /* IMPORTED_LONG_ENUMERATION_ITEM */, test /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceState_outOfSvc /* IMPORTED_LONG_ENUMERATION_ITEM */, outOfSvc /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceState_inSvc /* IMPORTED_LONG_ENUMERATION_ITEM */, inSvc /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ServiceState, _encode_ServiceState } from "../MEDIA-GATEWAY-CONTROL/ServiceState.ta.mjs";


/**
 * @summary TerminationStateDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminationStateDescriptor ::= SEQUENCE
 *     {
 *         propertyParms            [0] SEQUENCE OF PropertyParm,
 *         eventBufferControl        [1] EventBufferControl OPTIONAL,
 *         serviceState            [2] ServiceState OPTIONAL,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class TerminationStateDescriptor {
    constructor (
        /**
         * @summary `propertyParms`.
         * @public
         * @readonly
         */
        readonly propertyParms: PropertyParm[],
        /**
         * @summary `eventBufferControl`.
         * @public
         * @readonly
         */
        readonly eventBufferControl: OPTIONAL<EventBufferControl>,
        /**
         * @summary `serviceState`.
         * @public
         * @readonly
         */
        readonly serviceState: OPTIONAL<ServiceState>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TerminationStateDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `TerminationStateDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TerminationStateDescriptor`.
     * @returns {TerminationStateDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (TerminationStateDescriptor)]: (TerminationStateDescriptor)[_K] }): TerminationStateDescriptor {
        return new TerminationStateDescriptor(_o.propertyParms, _o.eventBufferControl, _o.serviceState, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `eventBufferControl`
         * @public
         * @static
         */

    public static _enum_for_eventBufferControl = _enum_for_EventBufferControl;        /**
         * @summary The enum used as the type of the component `serviceState`
         * @public
         * @static
         */

    public static _enum_for_serviceState = _enum_for_ServiceState;
}

/**
 * @summary The Leading Root Component Types of TerminationStateDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TerminationStateDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("propertyParms", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventBufferControl", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceState", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TerminationStateDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TerminationStateDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TerminationStateDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TerminationStateDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TerminationStateDescriptor: $.ASN1Decoder<TerminationStateDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminationStateDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TerminationStateDescriptor (el: _Element): TerminationStateDescriptor {
    if (!_cached_decoder_for_TerminationStateDescriptor) { _cached_decoder_for_TerminationStateDescriptor = function (el: _Element): TerminationStateDescriptor {
    let propertyParms!: PropertyParm[];
    let eventBufferControl: OPTIONAL<EventBufferControl>;
    let serviceState: OPTIONAL<ServiceState>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "propertyParms": (_el: _Element): void => { propertyParms = $._decode_implicit<PropertyParm[]>(() => $._decodeSequenceOf<PropertyParm>(() => _decode_PropertyParm))(_el); },
        "eventBufferControl": (_el: _Element): void => { eventBufferControl = $._decode_implicit<EventBufferControl>(() => _decode_EventBufferControl)(_el); },
        "serviceState": (_el: _Element): void => { serviceState = $._decode_implicit<ServiceState>(() => _decode_ServiceState)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TerminationStateDescriptor,
        _extension_additions_list_spec_for_TerminationStateDescriptor,
        _root_component_type_list_2_spec_for_TerminationStateDescriptor,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TerminationStateDescriptor(
        propertyParms,
        eventBufferControl,
        serviceState,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TerminationStateDescriptor(el);
}

let _cached_encoder_for_TerminationStateDescriptor: $.ASN1Encoder<TerminationStateDescriptor> | null = null;

/**
 * @summary Encodes a(n) TerminationStateDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminationStateDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_TerminationStateDescriptor (value: TerminationStateDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TerminationStateDescriptor) { _cached_encoder_for_TerminationStateDescriptor = function (value: TerminationStateDescriptor, elGetter: $.ASN1Encoder<TerminationStateDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<PropertyParm>(() => _encode_PropertyParm, $.BER), $.BER)(value.propertyParms, $.BER),
            /* IF_ABSENT  */ ((value.eventBufferControl === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EventBufferControl, $.BER)(value.eventBufferControl, $.BER)),
            /* IF_ABSENT  */ ((value.serviceState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ServiceState, $.BER)(value.serviceState, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TerminationStateDescriptor(value, elGetter);
}


/* eslint-enable */

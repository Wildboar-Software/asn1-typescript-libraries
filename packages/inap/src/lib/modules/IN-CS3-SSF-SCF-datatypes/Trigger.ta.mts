/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_EventTypeBCSM, _encode_EventTypeBCSM, _enum_for_EventTypeBCSM, EventTypeBCSM } from "../IN-CS3-SSF-SCF-datatypes/EventTypeBCSM.ta.mjs";
// export { EventTypeBCSM, _enum_for_EventTypeBCSM, EventTypeBCSM_origAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_analysedInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, analysedInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, oCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, oMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, oDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, oAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, tMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, tDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, tAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oTermSeized /* IMPORTED_LONG_ENUMERATION_ITEM */, oTermSeized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oSuspend /* IMPORTED_LONG_ENUMERATION_ITEM */, oSuspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tSuspend /* IMPORTED_LONG_ENUMERATION_ITEM */, tSuspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_origAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_facilitySelectedAndAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, facilitySelectedAndAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_callAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, callAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_authorizeRouteFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, authorizeRouteFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_originationAttemptDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, originationAttemptDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_terminationAttemptDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, terminationAttemptDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../IN-CS3-SSF-SCF-datatypes/EventTypeBCSM.ta.mjs";


/**
 * @summary Trigger
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Trigger ::= SEQUENCE {
 *   tDPIdentifier  [0]  INTEGER,
 *   dpName         [1]  EventTypeBCSM OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class Trigger {
    /**
     * @summary `tDPIdentifier`.
     * @public
     * @readonly
     */
    readonly tDPIdentifier: INTEGER;
    /**
     * @summary `dpName`.
     * @public
     * @readonly
     */
    readonly dpName: OPTIONAL<EventTypeBCSM>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        tDPIdentifier: INTEGER,
        dpName?: OPTIONAL<EventTypeBCSM>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.tDPIdentifier = tDPIdentifier;
        this.dpName = dpName;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Trigger
     * @description
     * 
     * This takes an `object` and converts it to a `Trigger`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Trigger`.
     * @returns {Trigger}
     */
    public static _from_object (_o: { [_K in keyof (Trigger)]: (Trigger)[_K] }): Trigger {
        return new Trigger(_o.tDPIdentifier, _o.dpName, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `dpName`
         * @public
         * @static
         */

    public static _enum_for_dpName = _enum_for_EventTypeBCSM;
}

/**
 * @summary The Leading Root Component Types of Trigger
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Trigger: $.ComponentSpec[] = [
    new $.ComponentSpec("tDPIdentifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dpName", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Trigger
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Trigger: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Trigger
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Trigger: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Trigger: $.ASN1Decoder<Trigger> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Trigger
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Trigger (el: _Element): Trigger {
    if (!_cached_decoder_for_Trigger) { _cached_decoder_for_Trigger = function (el: _Element): Trigger {
    let tDPIdentifier!: INTEGER;
    let dpName: OPTIONAL<EventTypeBCSM>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "tDPIdentifier": (_el: _Element): void => { tDPIdentifier = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dpName": (_el: _Element): void => { dpName = $._decode_implicit<EventTypeBCSM>(() => _decode_EventTypeBCSM)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Trigger,
        _extension_additions_list_spec_for_Trigger,
        _root_component_type_list_2_spec_for_Trigger,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Trigger(
        tDPIdentifier,
        dpName,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Trigger(el);
}

let _cached_encoder_for_Trigger: $.ASN1Encoder<Trigger> | null = null;

/**
 * @summary Encodes a(n) Trigger into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Trigger, encoded as an ASN.1 Element.
 */
export
function _encode_Trigger (value: Trigger, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Trigger) { _cached_encoder_for_Trigger = function (value: Trigger, elGetter: $.ASN1Encoder<Trigger>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.tDPIdentifier, $.BER);
    if (value.dpName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_EventTypeBCSM, $.BER)(value.dpName, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Trigger(value, elGetter);
}


/* eslint-enable */

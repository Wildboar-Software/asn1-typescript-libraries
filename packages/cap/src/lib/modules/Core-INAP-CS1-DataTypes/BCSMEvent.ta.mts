/* eslint-disable */
import {
    OPTIONAL,
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
import { EventTypeBCSM, _enum_for_EventTypeBCSM, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../Core-INAP-CS1-DataTypes/EventTypeBCSM.ta.mjs";
import { MonitorMode, _enum_for_MonitorMode, _decode_MonitorMode, _encode_MonitorMode } from "../Core-INAP-CS1-DataTypes/MonitorMode.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
import { DPSpecificCriteria, _decode_DPSpecificCriteria, _encode_DPSpecificCriteria } from "../Core-INAP-CS1-DataTypes/DPSpecificCriteria.ta.mjs";


/**
 * @summary BCSMEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BCSMEvent ::= SEQUENCE {
 *      eventTypeBCSM     [0] EventTypeBCSM,
 *      monitorMode     [1] MonitorMode,
 *      legID     [2] LegID     OPTIONAL,
 *      dPSpecificCriteria     [30] DPSpecificCriteria     OPTIONAL
 *      }
 * ```
 * 
 * @class
 */
export
class BCSMEvent {
    constructor (
        /**
         * @summary `eventTypeBCSM`.
         * @public
         * @readonly
         */
        readonly eventTypeBCSM: EventTypeBCSM,
        /**
         * @summary `monitorMode`.
         * @public
         * @readonly
         */
        readonly monitorMode: MonitorMode,
        /**
         * @summary `legID`.
         * @public
         * @readonly
         */
        readonly legID: OPTIONAL<LegID>,
        /**
         * @summary `dPSpecificCriteria`.
         * @public
         * @readonly
         */
        readonly dPSpecificCriteria: OPTIONAL<DPSpecificCriteria>
    ) {}

    /**
     * @summary Restructures an object into a BCSMEvent
     * @description
     * 
     * This takes an `object` and converts it to a `BCSMEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BCSMEvent`.
     * @returns {BCSMEvent}
     */
    public static _from_object (_o: { [_K in keyof (BCSMEvent)]: (BCSMEvent)[_K] }): BCSMEvent {
        return new BCSMEvent(_o.eventTypeBCSM, _o.monitorMode, _o.legID, _o.dPSpecificCriteria);
    }

        /**
         * @summary The enum used as the type of the component `eventTypeBCSM`
         * @public
         * @static
         */

    public static _enum_for_eventTypeBCSM = _enum_for_EventTypeBCSM;        /**
         * @summary The enum used as the type of the component `monitorMode`
         * @public
         * @static
         */

    public static _enum_for_monitorMode = _enum_for_MonitorMode;
}

/**
 * @summary The Leading Root Component Types of BCSMEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BCSMEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("eventTypeBCSM", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("monitorMode", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dPSpecificCriteria", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Trailing Root Component Types of BCSMEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BCSMEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BCSMEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BCSMEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BCSMEvent: $.ASN1Decoder<BCSMEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BCSMEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BCSMEvent (el: _Element): BCSMEvent {
    if (!_cached_decoder_for_BCSMEvent) { _cached_decoder_for_BCSMEvent = function (el: _Element): BCSMEvent {
    let eventTypeBCSM!: EventTypeBCSM;
    let monitorMode!: MonitorMode;
    let legID: OPTIONAL<LegID>;
    let dPSpecificCriteria: OPTIONAL<DPSpecificCriteria>;
    const callbacks: $.DecodingMap = {
        "eventTypeBCSM": (_el: _Element): void => { eventTypeBCSM = $._decode_implicit<EventTypeBCSM>(() => _decode_EventTypeBCSM)(_el); },
        "monitorMode": (_el: _Element): void => { monitorMode = $._decode_implicit<MonitorMode>(() => _decode_MonitorMode)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "dPSpecificCriteria": (_el: _Element): void => { dPSpecificCriteria = $._decode_explicit<DPSpecificCriteria>(() => _decode_DPSpecificCriteria)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BCSMEvent,
        _extension_additions_list_spec_for_BCSMEvent,
        _root_component_type_list_2_spec_for_BCSMEvent,
        undefined,
    );
    return new BCSMEvent(
        eventTypeBCSM,
        monitorMode,
        legID,
        dPSpecificCriteria
    );
}; }
    return _cached_decoder_for_BCSMEvent(el);
}

let _cached_encoder_for_BCSMEvent: $.ASN1Encoder<BCSMEvent> | null = null;

/**
 * @summary Encodes a(n) BCSMEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BCSMEvent, encoded as an ASN.1 Element.
 */
export
function _encode_BCSMEvent (value: BCSMEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BCSMEvent) { _cached_encoder_for_BCSMEvent = function (value: BCSMEvent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventTypeBCSM, $.BER)(value.eventTypeBCSM, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MonitorMode, $.BER)(value.monitorMode, $.BER),
            /* IF_ABSENT  */ ((value.legID === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_LegID, $.BER)(value.legID, $.BER)),
            /* IF_ABSENT  */ ((value.dPSpecificCriteria === undefined) ? undefined : $._encode_explicit(_TagClass.context, 30, () => _encode_DPSpecificCriteria, $.BER)(value.dPSpecificCriteria, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BCSMEvent(value, elGetter);
}


/* eslint-enable */

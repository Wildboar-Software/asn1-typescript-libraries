/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { NWDAFEvent, _decode_NWDAFEvent, _encode_NWDAFEvent } from "../TS33128Payloads/NWDAFEvent.ta.mjs";
// export { NWDAFEvent, _enum_for_NWDAFEvent, NWDAFEvent_serviceExperience /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceExperience /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_uEMobility /* IMPORTED_LONG_ENUMERATION_ITEM */, uEMobility /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_uEComm /* IMPORTED_LONG_ENUMERATION_ITEM */, uEComm /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_abnormalBehaviour /* IMPORTED_LONG_ENUMERATION_ITEM */, abnormalBehaviour /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_dispersion /* IMPORTED_LONG_ENUMERATION_ITEM */, dispersion /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_relativeProximity /* IMPORTED_LONG_ENUMERATION_ITEM */, relativeProximity /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_pDUSessionTraffic /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionTraffic /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFEvent, _encode_NWDAFEvent } from "../TS33128Payloads/NWDAFEvent.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary NWDAFEventsNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEventsNotification ::= SEQUENCE
 * {
 *     sUPI                        [1] SUPI,
 *     nWDAFNotifiedEventList      [2] SEQUENCE SIZE(1..MAX) OF NWDAFEvent,
 *     nWDAFEventsNotification     [3] SBIType
 * }
 * ```
 * 
 * @class
 */
export
class NWDAFEventsNotification {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `nWDAFNotifiedEventList`.
         * @public
         * @readonly
         */
        readonly nWDAFNotifiedEventList: NWDAFEvent[],
        /**
         * @summary `nWDAFEventsNotification`.
         * @public
         * @readonly
         */
        readonly nWDAFEventsNotification: SBIType
    ) {}

    /**
     * @summary Restructures an object into a NWDAFEventsNotification
     * @description
     * 
     * This takes an `object` and converts it to a `NWDAFEventsNotification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NWDAFEventsNotification`.
     * @returns {NWDAFEventsNotification}
     */
    public static _from_object (_o: { [_K in keyof (NWDAFEventsNotification)]: (NWDAFEventsNotification)[_K] }): NWDAFEventsNotification {
        return new NWDAFEventsNotification(_o.sUPI, _o.nWDAFNotifiedEventList, _o.nWDAFEventsNotification);
    }


}

/**
 * @summary The Leading Root Component Types of NWDAFEventsNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NWDAFEventsNotification: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nWDAFNotifiedEventList", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nWDAFEventsNotification", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of NWDAFEventsNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NWDAFEventsNotification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NWDAFEventsNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NWDAFEventsNotification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NWDAFEventsNotification: $.ASN1Decoder<NWDAFEventsNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NWDAFEventsNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NWDAFEventsNotification (el: _Element): NWDAFEventsNotification {
    if (!_cached_decoder_for_NWDAFEventsNotification) { _cached_decoder_for_NWDAFEventsNotification = function (el: _Element): NWDAFEventsNotification {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("NWDAFEventsNotification contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sUPI";
    sequence[1].name = "nWDAFNotifiedEventList";
    sequence[2].name = "nWDAFEventsNotification";
    let sUPI!: SUPI;
    let nWDAFNotifiedEventList!: NWDAFEvent[];
    let nWDAFEventsNotification!: SBIType;
    sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(sequence[0]);
    nWDAFNotifiedEventList = $._decode_implicit<NWDAFEvent[]>(() => $._decodeSequenceOf<NWDAFEvent>(() => _decode_NWDAFEvent))(sequence[1]);
    nWDAFEventsNotification = $._decode_implicit<SBIType>(() => _decode_SBIType)(sequence[2]);
    return new NWDAFEventsNotification(
        sUPI,
        nWDAFNotifiedEventList,
        nWDAFEventsNotification,

    );
}; }
    return _cached_decoder_for_NWDAFEventsNotification(el);
}

let _cached_encoder_for_NWDAFEventsNotification: $.ASN1Encoder<NWDAFEventsNotification> | null = null;

/**
 * @summary Encodes a(n) NWDAFEventsNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NWDAFEventsNotification, encoded as an ASN.1 Element.
 */
export
function _encode_NWDAFEventsNotification (value: NWDAFEventsNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NWDAFEventsNotification) { _cached_encoder_for_NWDAFEventsNotification = function (value: NWDAFEventsNotification, elGetter: $.ASN1Encoder<NWDAFEventsNotification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<NWDAFEvent>(() => _encode_NWDAFEvent, $.BER), $.BER)(value.nWDAFNotifiedEventList, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SBIType, $.BER)(value.nWDAFEventsNotification, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NWDAFEventsNotification(value, elGetter);
}


/* eslint-enable */

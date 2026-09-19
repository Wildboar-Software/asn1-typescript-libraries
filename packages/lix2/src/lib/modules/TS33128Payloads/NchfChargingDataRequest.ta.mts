/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SBIChargingData, _decode_SBIChargingData, _encode_SBIChargingData } from "../TS33128Payloads/SBIChargingData.ta.mjs";
// export { SBIChargingData, _decode_SBIChargingData, _encode_SBIChargingData } from "../TS33128Payloads/SBIChargingData.ta.mjs";
import { NchfChargingEvent, _decode_NchfChargingEvent, _encode_NchfChargingEvent, _enum_for_NchfChargingEvent } from "../TS33128Payloads/NchfChargingEvent.ta.mjs";
// export { NchfChargingEvent, _enum_for_NchfChargingEvent, NchfChargingEvent_pDUSessionChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_sMSChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_nEFChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, nEFChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_registrationChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, registrationChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_n2ConnectionChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, n2ConnectionChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_locationReportingChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, locationReportingChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_nSPAChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, nSPAChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_nSMChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, nSMChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_mMTelChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, mMTelChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_iMSChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, iMSChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_edgeInfrastructureUsageChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, edgeInfrastructureUsageChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_eASDeploymentChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, eASDeploymentChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_directEdgeEnablingServiceChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, directEdgeEnablingServiceChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_exposedEdgeEnablingServiceChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, exposedEdgeEnablingServiceChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_proSeChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, proSeChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_mMSChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, mMSChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_mBSSessionChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, mBSSessionChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_tSNChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, tSNChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_nSACFChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, nSACFChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_nSSAAChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, nSSAAChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NchfChargingEvent_rangingSLChargingInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, rangingSLChargingInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NchfChargingEvent, _encode_NchfChargingEvent } from "../TS33128Payloads/NchfChargingEvent.ta.mjs";
import { RoamerInOut, _decode_RoamerInOut, _encode_RoamerInOut, _enum_for_RoamerInOut } from "../TS33128Payloads/RoamerInOut.ta.mjs";
// export { RoamerInOut, _enum_for_RoamerInOut, RoamerInOut_in_bound /* IMPORTED_LONG_ENUMERATION_ITEM */, in_bound /* IMPORTED_SHORT_ENUMERATION_ITEM */, RoamerInOut_out_bound /* IMPORTED_LONG_ENUMERATION_ITEM */, out_bound /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RoamerInOut, _encode_RoamerInOut } from "../TS33128Payloads/RoamerInOut.ta.mjs";


/**
 * @summary NchfChargingDataRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NchfChargingDataRequest ::= SEQUENCE
 * {
 *     sBIchargingData   [1] SBIChargingData,
 *     nchfChargingEvent [2] NchfChargingEvent OPTIONAL,
 *     roamerInOut       [3] RoamerInOut
 * }
 * ```
 * 
 * @class
 */
export
class NchfChargingDataRequest {
    constructor (
        /**
         * @summary `sBIchargingData`.
         * @public
         * @readonly
         */
        readonly sBIchargingData: SBIChargingData,
        /**
         * @summary `nchfChargingEvent`.
         * @public
         * @readonly
         */
        readonly nchfChargingEvent: OPTIONAL<NchfChargingEvent>,
        /**
         * @summary `roamerInOut`.
         * @public
         * @readonly
         */
        readonly roamerInOut: RoamerInOut
    ) {}

    /**
     * @summary Restructures an object into a NchfChargingDataRequest
     * @description
     * 
     * This takes an `object` and converts it to a `NchfChargingDataRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NchfChargingDataRequest`.
     * @returns {NchfChargingDataRequest}
     */
    public static _from_object (_o: { [_K in keyof (NchfChargingDataRequest)]: (NchfChargingDataRequest)[_K] }): NchfChargingDataRequest {
        return new NchfChargingDataRequest(_o.sBIchargingData, _o.nchfChargingEvent, _o.roamerInOut);
    }

        /**
         * @summary The enum used as the type of the component `nchfChargingEvent`
         * @public
         * @static
         */

    public static _enum_for_nchfChargingEvent = _enum_for_NchfChargingEvent;        /**
         * @summary The enum used as the type of the component `roamerInOut`
         * @public
         * @static
         */

    public static _enum_for_roamerInOut = _enum_for_RoamerInOut;
}

/**
 * @summary The Leading Root Component Types of NchfChargingDataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NchfChargingDataRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("sBIchargingData", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nchfChargingEvent", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("roamerInOut", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of NchfChargingDataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NchfChargingDataRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NchfChargingDataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NchfChargingDataRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NchfChargingDataRequest: $.ASN1Decoder<NchfChargingDataRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NchfChargingDataRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NchfChargingDataRequest (el: _Element): NchfChargingDataRequest {
    if (!_cached_decoder_for_NchfChargingDataRequest) { _cached_decoder_for_NchfChargingDataRequest = function (el: _Element): NchfChargingDataRequest {
    let sBIchargingData!: SBIChargingData;
    let nchfChargingEvent: OPTIONAL<NchfChargingEvent>;
    let roamerInOut!: RoamerInOut;
    const callbacks: $.DecodingMap = {
        "sBIchargingData": (_el: _Element): void => { sBIchargingData = $._decode_explicit<SBIChargingData>(() => _decode_SBIChargingData)(_el); },
        "nchfChargingEvent": (_el: _Element): void => { nchfChargingEvent = $._decode_implicit<NchfChargingEvent>(() => _decode_NchfChargingEvent)(_el); },
        "roamerInOut": (_el: _Element): void => { roamerInOut = $._decode_implicit<RoamerInOut>(() => _decode_RoamerInOut)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NchfChargingDataRequest,
        _extension_additions_list_spec_for_NchfChargingDataRequest,
        _root_component_type_list_2_spec_for_NchfChargingDataRequest,
        undefined,
    );
    return new NchfChargingDataRequest(
        sBIchargingData,
        nchfChargingEvent,
        roamerInOut
    );
}; }
    return _cached_decoder_for_NchfChargingDataRequest(el);
}

let _cached_encoder_for_NchfChargingDataRequest: $.ASN1Encoder<NchfChargingDataRequest> | null = null;

/**
 * @summary Encodes a(n) NchfChargingDataRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NchfChargingDataRequest, encoded as an ASN.1 Element.
 */
export
function _encode_NchfChargingDataRequest (value: NchfChargingDataRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NchfChargingDataRequest) { _cached_encoder_for_NchfChargingDataRequest = function (value: NchfChargingDataRequest, elGetter: $.ASN1Encoder<NchfChargingDataRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SBIChargingData, $.BER)(value.sBIchargingData, $.BER),
            /* IF_ABSENT  */ ((value.nchfChargingEvent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NchfChargingEvent, $.BER)(value.nchfChargingEvent, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RoamerInOut, $.BER)(value.roamerInOut, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NchfChargingDataRequest(value, elGetter);
}


/* eslint-enable */

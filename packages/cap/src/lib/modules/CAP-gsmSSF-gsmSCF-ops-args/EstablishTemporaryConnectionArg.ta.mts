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
import { type AssistingSSPIPRoutingAddress, _decode_AssistingSSPIPRoutingAddress, _encode_AssistingSSPIPRoutingAddress } from "../CAP-datatypes/AssistingSSPIPRoutingAddress.ta.mjs";
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../CAP-datatypes/CallSegmentID.ta.mjs";
import { type CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../CAP-datatypes/CallingPartyNumber.ta.mjs";
import { type Carrier, _decode_Carrier, _encode_Carrier } from "../CAP-datatypes/Carrier.ta.mjs";
import { type ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../CAP-datatypes/ChargeNumber.ta.mjs";
import { type CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../CAP-datatypes/CorrelationID.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { type NAOliInfo, _decode_NAOliInfo, _encode_NAOliInfo } from "../CAP-datatypes/NAOliInfo.ta.mjs";
import { type OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../CAP-datatypes/OriginalCalledPartyID.ta.mjs";
import { type ScfID, _decode_ScfID, _encode_ScfID } from "../CAP-datatypes/ScfID.ta.mjs";
import { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../CAP-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";



/**
 * @summary EstablishTemporaryConnectionArg
 * @description
 * 
 * Argument of EstablishTemporaryConnection: assist/SRF routing address and
 * optional correlation, SCF identity, and call-setup parameters. (3GPP TS
 * 29.078 V19.0.0 clause 11.17.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishTemporaryConnectionArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     assistingSSPIPRoutingAddress    [0] AssistingSSPIPRoutingAddress {bound},
 *     correlationID            [1] CorrelationID {bound}            OPTIONAL,
 *     scfID                [3] ScfID {bound}                OPTIONAL,
 *     extensions                [4] Extensions {bound}            OPTIONAL,
 *     carrier                [5] Carrier {bound}                OPTIONAL,
 *     serviceInteractionIndicatorsTwo    [6] ServiceInteractionIndicatorsTwo        OPTIONAL,
 *     callSegmentID            [7]    CallSegmentID {bound}            OPTIONAL,
 *     naOliInfo                [50] NAOliInfo                OPTIONAL,
 *     chargeNumber            [51] ChargeNumber {bound}            OPTIONAL,
 *     ...,
 *     originalCalledPartyID        [52] OriginalCalledPartyID {bound}        OPTIONAL,
 *     callingPartyNumber            [53] CallingPartyNumber {bound}        OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class EstablishTemporaryConnectionArg {
    constructor (
        /**
         * @summary `assistingSSPIPRoutingAddress`.
         * @description
         *
         * Destination address of the gsmSRF for the assist procedure. May embed
         * `correlationID` and `scfID` only if those are not sent as separate
         * parameters. When connecting across PLMNs without a bilateral
         * agreement to pass them separately, this address shall contain routing
         * digits, correlationID, and scfID. (3GPP TS 29.078 V19.0.0 clause
         * 11.17.1.1).
         *
         * @public
         * @readonly
         */
        readonly assistingSSPIPRoutingAddress: AssistingSSPIPRoutingAddress,
        /**
         * @summary `correlationID`.
         * @description
         *
         * Lets gsmSCF associate AssistRequestInstructions from the assisting
         * gsmSSF or gsmSRF with the initiating gsmSSF's request. Use only if
         * not embedded in `assistingSSPIPRoutingAddress`. Mapping onto the
         * signalling system is network-operator defined. (3GPP TS 29.078
         * V19.0.0 clause 11.17.1.1).
         *
         * @public
         * @readonly
         */
        readonly correlationID: OPTIONAL<CorrelationID>,
        /**
         * @summary `scfID`.
         * @description
         *
         * gsmSCF identifier so the assisting gsmSSF knows where to send
         * AssistRequestInstructions. Use only if not embedded in
         * `assistingSSPIPRoutingAddress`. Across an inter-network boundary,
         * encoding must be understood in both networks; length beyond 10 bytes
         * requires bilateral agreement. (3GPP TS 29.078 V19.0.0 clause
         * 11.17.1.1).
         *
         * @public
         * @readonly
         */
        readonly scfID: OPTIONAL<ScfID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary `carrier`.
         * @description
         *
         * Carrier selection field (how the carrier is provided, e.g.
         * pre-subscribed) followed by carrier ID digits for routing to a
         * carrier. (3GPP TS 29.078 V19.0.0 clause 11.17.1.1).
         *
         * @public
         * @readonly
         */
        readonly carrier: OPTIONAL<Carrier>,
        /**
         * @summary `serviceInteractionIndicatorsTwo`.
         * @description
         *
         * Controls through-connection to the Calling Party. (3GPP TS 29.078
         * V19.0.0 clause 11.17.1.1).
         *
         * @public
         * @readonly
         */
        readonly serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        /**
         * @summary `callSegmentID`.
         * @description
         *
         * Call Segment to which the temporary connection shall be established.
         * (3GPP TS 29.078 V19.0.0 clause 11.17.1.1).
         *
         * @public
         * @readonly
         */
        readonly callSegmentID: OPTIONAL<CallSegmentID>,
        /**
         * @summary `naOliInfo`.
         * @description
         *
         * Originating line information identifying the charged-party number
         * type to the carrier. (3GPP TS 29.078 V19.0.0 clause 11.17.1.1).
         *
         * @public
         * @readonly
         */
        readonly naOliInfo: OPTIONAL<NAOliInfo>,
        /**
         * @summary `chargeNumber`.
         * @description
         *
         * Number identifying the entity to be charged; chargeable number for a
         * North American long-distance carrier (ANSI T1.113-1995). (3GPP TS
         * 29.078 V19.0.0 clause 11.17.1.1).
         *
         * @public
         * @readonly
         */
        readonly chargeNumber: OPTIONAL<ChargeNumber>,
        /**
         * @summary `originalCalledPartyID`.
         * @description
         *
         * Identifies the original called party. (3GPP TS 29.078 V19.0.0 clause
         * 11.17.1.1).
         *
         * @public
         * @readonly
         */
        readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>,
        /**
         * @summary `callingPartyNumber`.
         * @description
         *
         * Identifies the calling party. (3GPP TS 29.078 V19.0.0 clause
         * 11.17.1.1).
         *
         * @public
         * @readonly
         */
        readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EstablishTemporaryConnectionArg
     * @description
     * 
     * This takes an `object` and converts it to a `EstablishTemporaryConnectionArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EstablishTemporaryConnectionArg`.
     * @returns {EstablishTemporaryConnectionArg}
     */
    public static _from_object (_o: { [_K in keyof (EstablishTemporaryConnectionArg)]: (EstablishTemporaryConnectionArg)[_K] }): EstablishTemporaryConnectionArg {
        return new EstablishTemporaryConnectionArg(_o.assistingSSPIPRoutingAddress, _o.correlationID, _o.scfID, _o.extensions, _o.carrier, _o.serviceInteractionIndicatorsTwo, _o.callSegmentID, _o.naOliInfo, _o.chargeNumber, _o.originalCalledPartyID, _o.callingPartyNumber, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EstablishTemporaryConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EstablishTemporaryConnectionArg: $.ComponentSpec[] = [
    new $.ComponentSpec("assistingSSPIPRoutingAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("scfID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("naOliInfo", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("chargeNumber", true, $.hasTag(_TagClass.context, 51))
];

/**
 * @summary The Trailing Root Component Types of EstablishTemporaryConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EstablishTemporaryConnectionArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EstablishTemporaryConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EstablishTemporaryConnectionArg: $.ComponentSpec[] = [
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 53))
];

let _cached_decoder_for_EstablishTemporaryConnectionArg: $.ASN1Decoder<EstablishTemporaryConnectionArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishTemporaryConnectionArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EstablishTemporaryConnectionArg (el: _Element): EstablishTemporaryConnectionArg {
    if (!_cached_decoder_for_EstablishTemporaryConnectionArg) { _cached_decoder_for_EstablishTemporaryConnectionArg = function (el: _Element): EstablishTemporaryConnectionArg {
    let assistingSSPIPRoutingAddress!: AssistingSSPIPRoutingAddress;
    let correlationID: OPTIONAL<CorrelationID>;
    let scfID: OPTIONAL<ScfID>;
    let extensions: OPTIONAL<Extensions>;
    let carrier: OPTIONAL<Carrier>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    let callSegmentID: OPTIONAL<CallSegmentID>;
    let naOliInfo: OPTIONAL<NAOliInfo>;
    let chargeNumber: OPTIONAL<ChargeNumber>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "assistingSSPIPRoutingAddress": (_el: _Element): void => { assistingSSPIPRoutingAddress = $._decode_implicit<AssistingSSPIPRoutingAddress>(() => _decode_AssistingSSPIPRoutingAddress)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "scfID": (_el: _Element): void => { scfID = $._decode_implicit<ScfID>(() => _decode_ScfID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); },
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "naOliInfo": (_el: _Element): void => { naOliInfo = $._decode_implicit<NAOliInfo>(() => _decode_NAOliInfo)(_el); },
        "chargeNumber": (_el: _Element): void => { chargeNumber = $._decode_implicit<ChargeNumber>(() => _decode_ChargeNumber)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EstablishTemporaryConnectionArg,
        _extension_additions_list_spec_for_EstablishTemporaryConnectionArg,
        _root_component_type_list_2_spec_for_EstablishTemporaryConnectionArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EstablishTemporaryConnectionArg(
        assistingSSPIPRoutingAddress,
        correlationID,
        scfID,
        extensions,
        carrier,
        serviceInteractionIndicatorsTwo,
        callSegmentID,
        naOliInfo,
        chargeNumber,
        originalCalledPartyID,
        callingPartyNumber,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EstablishTemporaryConnectionArg(el);
}

let _cached_encoder_for_EstablishTemporaryConnectionArg: $.ASN1Encoder<EstablishTemporaryConnectionArg> | null = null;

/**
 * @summary Encodes a(n) EstablishTemporaryConnectionArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishTemporaryConnectionArg, encoded as an ASN.1 Element.
 */
export
function _encode_EstablishTemporaryConnectionArg (value: EstablishTemporaryConnectionArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EstablishTemporaryConnectionArg) { _cached_encoder_for_EstablishTemporaryConnectionArg = function (value: EstablishTemporaryConnectionArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AssistingSSPIPRoutingAddress, $.BER)(value.assistingSSPIPRoutingAddress, $.BER),
            /* IF_ABSENT  */ ((value.correlationID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER)),
            /* IF_ABSENT  */ ((value.scfID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ScfID, $.BER)(value.scfID, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Extensions, $.BER)(value.extensions, $.BER)),
            /* IF_ABSENT  */ ((value.carrier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Carrier, $.BER)(value.carrier, $.BER)),
            /* IF_ABSENT  */ ((value.serviceInteractionIndicatorsTwo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER)),
            /* IF_ABSENT  */ ((value.callSegmentID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER)),
            /* IF_ABSENT  */ ((value.naOliInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => _encode_NAOliInfo, $.BER)(value.naOliInfo, $.BER)),
            /* IF_ABSENT  */ ((value.chargeNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 51, () => _encode_ChargeNumber, $.BER)(value.chargeNumber, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.originalCalledPartyID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 52, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartyNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 53, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EstablishTemporaryConnectionArg(value, elGetter);
}


/* eslint-enable */

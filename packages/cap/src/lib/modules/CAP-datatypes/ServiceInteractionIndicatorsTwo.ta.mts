import {
    OPTIONAL,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ForwardServiceInteractionInd, _decode_ForwardServiceInteractionInd, _encode_ForwardServiceInteractionInd } from "./ForwardServiceInteractionInd.ta.mjs";
import { BackwardServiceInteractionInd, _decode_BackwardServiceInteractionInd, _encode_BackwardServiceInteractionInd } from "./BackwardServiceInteractionInd.ta.mjs";
import { BothwayThroughConnectionInd, _enum_for_BothwayThroughConnectionInd, _decode_BothwayThroughConnectionInd, _encode_BothwayThroughConnectionInd } from "../IN-CS2-datatypes/BothwayThroughConnectionInd.ta.mjs";
import { ConnectedNumberTreatmentInd, _enum_for_ConnectedNumberTreatmentInd, _decode_ConnectedNumberTreatmentInd, _encode_ConnectedNumberTreatmentInd } from "./ConnectedNumberTreatmentInd.ta.mjs";

/**
 * @summary ServiceInteractionIndicatorsTwo
 * @description
 *
 * Resolves interactions between CAMEL and network-based services. Each
 * indicator applies only to the operations noted on the fields. (3GPP TS 29.078
 * V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceInteractionIndicatorsTwo ::= SEQUENCE {
 *  forwardServiceInteractionInd	[0]	ForwardServiceInteractionInd		OPTIONAL,
 *  backwardServiceInteractionInd	[1]	BackwardServiceInteractionInd		OPTIONAL,
 *  bothwayThroughConnectionInd		[2] BothwayThroughConnectionInd		OPTIONAL,
 *  connectedNumberTreatmentInd		[4]	ConnectedNumberTreatmentInd		OPTIONAL,
 *  nonCUGCall				[13] NULL					OPTIONAL,
 *  holdTreatmentIndicator		[50] OCTET STRING (SIZE(1))			OPTIONAL,
 *  cwTreatmentIndicator		[51] OCTET STRING (SIZE(1))			OPTIONAL,
 *  ectTreatmentIndicator		[52] OCTET STRING (SIZE(1))			OPTIONAL,
 *  ...
 *  }
 * ```
 *
 */
export class ServiceInteractionIndicatorsTwo {
    constructor (
        /**
         * @summary `forwardServiceInteractionInd`.
         * @description
         *
         * Applicable to InitialDP, Connect and ContinueWithArgument. (3GPP TS
         * 29.078 V19.0.0 clause 5.1)
         *
         * @public
         * @readonly
         */
        readonly forwardServiceInteractionInd: OPTIONAL<ForwardServiceInteractionInd>,
        /**
         * @summary `backwardServiceInteractionInd`.
         * @description
         *
         * Applicable to Connect and ContinueWithArgument. (3GPP TS 29.078 V19.0.0
         * clause 5.1)
         *
         * @public
         * @readonly
         */
        readonly backwardServiceInteractionInd: OPTIONAL<BackwardServiceInteractionInd>,
        /**
         * @summary `bothwayThroughConnectionInd`.
         * @description
         *
         * Applicable to ConnectToResource and EstablishTemporaryConnection. (3GPP
         * TS 29.078 V19.0.0 clause 5.1)
         *
         * @public
         * @readonly
         */
        readonly bothwayThroughConnectionInd: OPTIONAL<BothwayThroughConnectionInd>,
        /**
         * @summary `connectedNumberTreatmentInd`.
         * @description
         *
         * Applicable to Connect and ContinueWithArgument. (3GPP TS 29.078 V19.0.0
         * clause 5.1)
         *
         * @public
         * @readonly
         */
        readonly connectedNumberTreatmentInd: OPTIONAL<ConnectedNumberTreatmentInd>,
        /**
         * @summary `nonCUGCall`.
         * @description
         *
         * Applicable to Connect and ContinueWithArgument. Present: no CUG
         * parameters shall be used (non-CUG call). Absent: continue with modified
         * CUG information (if CUG Interlock Code and/or Outgoing Access Indicator
         * are present), original CUG information (if neither is present), or the
         * original non-CUG call. (3GPP TS 29.078 V19.0.0 clause 5.1)
         *
         * @public
         * @readonly
         */
        readonly nonCUGCall: OPTIONAL<NULL>,
        /**
         * @summary `holdTreatmentIndicator`.
         * @description
         *
         * Applicable to InitialDP, Connect and ContinueWithArgument. Accept hold
         * `'xxxx xx01'B`; reject `'xxxx xx10'B`. If absent from Connect or
         * ContinueWithArgument, CAMEL does not affect call-hold treatment. (3GPP TS
         * 29.078 V19.0.0 clause 5.1)
         *
         * @public
         * @readonly
         */
        readonly holdTreatmentIndicator: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `cwTreatmentIndicator`.
         * @description
         *
         * Applicable to InitialDP, Connect and ContinueWithArgument. Accept CW
         * `'xxxx xx01'B`; reject `'xxxx xx10'B`. If absent from Connect or
         * ContinueWithArgument, CAMEL does not affect call-waiting treatment. (3GPP
         * TS 29.078 V19.0.0 clause 5.1)
         *
         * @public
         * @readonly
         */
        readonly cwTreatmentIndicator: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `ectTreatmentIndicator`.
         * @description
         *
         * Applicable to InitialDP, Connect and ContinueWithArgument. Accept ECT
         * `'xxxx xx01'B`; reject `'xxxx xx10'B`. If absent from Connect or
         * ContinueWithArgument, CAMEL does not affect explicit call transfer
         * treatment. (3GPP TS 29.078 V19.0.0 clause 5.1)
         *
         * @public
         * @readonly
         */
        readonly ectTreatmentIndicator: OPTIONAL<OCTET_STRING>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {
        if (holdTreatmentIndicator !== undefined && holdTreatmentIndicator.length !== 1) {
            throw new ASN1SizeError("ServiceInteractionIndicatorsTwo.holdTreatmentIndicator violates SIZE constraint");
        }
        if (cwTreatmentIndicator !== undefined && cwTreatmentIndicator.length !== 1) {
            throw new ASN1SizeError("ServiceInteractionIndicatorsTwo.cwTreatmentIndicator violates SIZE constraint");
        }
        if (ectTreatmentIndicator !== undefined && ectTreatmentIndicator.length !== 1) {
            throw new ASN1SizeError("ServiceInteractionIndicatorsTwo.ectTreatmentIndicator violates SIZE constraint");
        }
    }

    public static _from_object (_o: { [_K in keyof (ServiceInteractionIndicatorsTwo)]: (ServiceInteractionIndicatorsTwo)[_K] }): ServiceInteractionIndicatorsTwo {
        return new ServiceInteractionIndicatorsTwo(_o.forwardServiceInteractionInd, _o.backwardServiceInteractionInd, _o.bothwayThroughConnectionInd, _o.connectedNumberTreatmentInd, _o.nonCUGCall, _o.holdTreatmentIndicator, _o.cwTreatmentIndicator, _o.ectTreatmentIndicator, _o._unrecognizedExtensionsList);
    }

    public static _enum_for_bothwayThroughConnectionInd = _enum_for_BothwayThroughConnectionInd;
    public static _enum_for_connectedNumberTreatmentInd = _enum_for_ConnectedNumberTreatmentInd;
}

export const _root_component_type_list_1_spec_for_ServiceInteractionIndicatorsTwo: $.ComponentSpec[] = [
    new $.ComponentSpec("forwardServiceInteractionInd", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("backwardServiceInteractionInd", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bothwayThroughConnectionInd", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("connectedNumberTreatmentInd", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("nonCUGCall", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("holdTreatmentIndicator", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("cwTreatmentIndicator", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("ectTreatmentIndicator", true, $.hasTag(_TagClass.context, 52))
];

export const _root_component_type_list_2_spec_for_ServiceInteractionIndicatorsTwo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_ServiceInteractionIndicatorsTwo: $.ComponentSpec[] = [];

let _cached_decoder_for_ServiceInteractionIndicatorsTwo: $.ASN1Decoder<ServiceInteractionIndicatorsTwo> | null = null;
export function _decode_ServiceInteractionIndicatorsTwo (el: _Element): ServiceInteractionIndicatorsTwo {
    if (!_cached_decoder_for_ServiceInteractionIndicatorsTwo) {
        _cached_decoder_for_ServiceInteractionIndicatorsTwo = function (el: _Element): ServiceInteractionIndicatorsTwo {
    let forwardServiceInteractionInd: OPTIONAL<ForwardServiceInteractionInd>;
    let backwardServiceInteractionInd: OPTIONAL<BackwardServiceInteractionInd>;
    let bothwayThroughConnectionInd: OPTIONAL<BothwayThroughConnectionInd>;
    let connectedNumberTreatmentInd: OPTIONAL<ConnectedNumberTreatmentInd>;
    let nonCUGCall: OPTIONAL<NULL>;
    let holdTreatmentIndicator: OPTIONAL<OCTET_STRING>;
    let cwTreatmentIndicator: OPTIONAL<OCTET_STRING>;
    let ectTreatmentIndicator: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "forwardServiceInteractionInd": (_el: _Element): void => { forwardServiceInteractionInd = $._decode_implicit<ForwardServiceInteractionInd>(() => _decode_ForwardServiceInteractionInd)(_el); },
        "backwardServiceInteractionInd": (_el: _Element): void => { backwardServiceInteractionInd = $._decode_implicit<BackwardServiceInteractionInd>(() => _decode_BackwardServiceInteractionInd)(_el); },
        "bothwayThroughConnectionInd": (_el: _Element): void => { bothwayThroughConnectionInd = $._decode_implicit<BothwayThroughConnectionInd>(() => _decode_BothwayThroughConnectionInd)(_el); },
        "connectedNumberTreatmentInd": (_el: _Element): void => { connectedNumberTreatmentInd = $._decode_implicit<ConnectedNumberTreatmentInd>(() => _decode_ConnectedNumberTreatmentInd)(_el); },
        "nonCUGCall": (_el: _Element): void => { nonCUGCall = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "holdTreatmentIndicator": (_el: _Element): void => { holdTreatmentIndicator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cwTreatmentIndicator": (_el: _Element): void => { cwTreatmentIndicator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ectTreatmentIndicator": (_el: _Element): void => { ectTreatmentIndicator = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceInteractionIndicatorsTwo,
        _extension_additions_list_spec_for_ServiceInteractionIndicatorsTwo,
        _root_component_type_list_2_spec_for_ServiceInteractionIndicatorsTwo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ServiceInteractionIndicatorsTwo(
        forwardServiceInteractionInd,
        backwardServiceInteractionInd,
        bothwayThroughConnectionInd,
        connectedNumberTreatmentInd,
        nonCUGCall,
        holdTreatmentIndicator,
        cwTreatmentIndicator,
        ectTreatmentIndicator,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_ServiceInteractionIndicatorsTwo(el);
}

let _cached_encoder_for_ServiceInteractionIndicatorsTwo: $.ASN1Encoder<ServiceInteractionIndicatorsTwo> | null = null;
export function _encode_ServiceInteractionIndicatorsTwo (value: ServiceInteractionIndicatorsTwo, elGetter: $.ASN1Encoder<ServiceInteractionIndicatorsTwo>): _Element {
    if (!_cached_encoder_for_ServiceInteractionIndicatorsTwo) {
        _cached_encoder_for_ServiceInteractionIndicatorsTwo = function (value: ServiceInteractionIndicatorsTwo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.forwardServiceInteractionInd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ForwardServiceInteractionInd, $.BER)(value.forwardServiceInteractionInd, $.BER)),
            /* IF_ABSENT  */ ((value.backwardServiceInteractionInd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_BackwardServiceInteractionInd, $.BER)(value.backwardServiceInteractionInd, $.BER)),
            /* IF_ABSENT  */ ((value.bothwayThroughConnectionInd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_BothwayThroughConnectionInd, $.BER)(value.bothwayThroughConnectionInd, $.BER)),
            /* IF_ABSENT  */ ((value.connectedNumberTreatmentInd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ConnectedNumberTreatmentInd, $.BER)(value.connectedNumberTreatmentInd, $.BER)),
            /* IF_ABSENT  */ ((value.nonCUGCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER)(value.nonCUGCall, $.BER)),
            /* IF_ABSENT  */ ((value.holdTreatmentIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => $._encodeOctetString, $.BER)(value.holdTreatmentIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.cwTreatmentIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 51, () => $._encodeOctetString, $.BER)(value.cwTreatmentIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.ectTreatmentIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 52, () => $._encodeOctetString, $.BER)(value.ectTreatmentIndicator, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_ServiceInteractionIndicatorsTwo(value, elGetter);
}

import {
    OPTIONAL,
    BOOLEAN,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { leg1 } from "../Core-INAP-CS1-DataTypes/leg1.va.mjs";
import { type ReceivingSideID, _decode_ReceivingSideID, _encode_ReceivingSideID } from "./ReceivingSideID.ta.mjs";
import { type TimeInformation, _decode_TimeInformation, _encode_TimeInformation } from "./TimeInformation.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "./Extensions.ta.mjs";
import { type AChChargingAddress, _decode_AChChargingAddress, _encode_AChChargingAddress } from "./AChChargingAddress.ta.mjs";

/**
 * @summary CAMEL_CallResult_timeDurationChargingResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CAMEL-CallResult-timeDurationChargingResult {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *  partyToCharge			[0] ReceivingSideID,
 *  timeInformation			[1] TimeInformation,
 *  legActive				[2] BOOLEAN DEFAULT TRUE,
 *  callLegReleasedAtTcpExpiry		[3] NULL				OPTIONAL,
 *  extensions				[4] Extensions {bound}			OPTIONAL,
 *  aChChargingAddress			[5] AChChargingAddress {bound}
 *  DEFAULT legID:receivingSideID:leg1,
 *  ...
 *  }
 * ```
 *
 */
export class CAMEL_CallResult_timeDurationChargingResult {
    constructor (
        /**
         * @summary `partyToCharge`.
         * @description
         *
         * As received in the related ApplyCharging (or its default). Used by
         * the gsmSCF to correlate the report to the request. Receiving Side
         * LegID. (3GPP TS 29.078 V19.0.0 clauses 11.3 and 4.1.5).
         *
         * @public
         * @readonly
         */
        readonly partyToCharge: ReceivingSideID,
        readonly timeInformation: TimeInformation,
        /**
         * @summary `legActive`.
         * @description
         *
         * Whether the leg, Temporary Connection, or gsmSRF connection is still
         * active. (3GPP TS 29.078 V19.0.0 clause 11.3).
         *
         * @public
         * @readonly
         */
        readonly legActive: OPTIONAL<BOOLEAN>,
        /**
         * @summary `callLegReleasedAtTcpExpiry`.
         * @description
         *
         * gsmSSF released the call leg, Temporary Connection, or SRF connection
         * because allowed duration was reached.
         * (3GPP TS 29.078 V19.0.0 clause 11.3).
         *
         * @public
         * @readonly
         */
        readonly callLegReleasedAtTcpExpiry: OPTIONAL<NULL>,
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary `aChChargingAddress`.
         * @description
         *
         * As received in the related ApplyCharging (or its default). Used to
         * correlate the report to the request.
         * (3GPP TS 29.078 V19.0.0 clause 11.3).
         *
         * @public
         * @readonly
         */
        readonly aChChargingAddress: OPTIONAL<AChChargingAddress>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (CAMEL_CallResult_timeDurationChargingResult)]: (CAMEL_CallResult_timeDurationChargingResult)[_K] }): CAMEL_CallResult_timeDurationChargingResult {
        return new CAMEL_CallResult_timeDurationChargingResult(_o.partyToCharge, _o.timeInformation, _o.legActive, _o.callLegReleasedAtTcpExpiry, _o.extensions, _o.aChChargingAddress, _o._unrecognizedExtensionsList);
    }

    public static get _default_value_for_legActive () { return true; }
    public static get _default_value_for_aChChargingAddress () { return { legID: { receivingSideID: leg1 } }; }
}

export const _root_component_type_list_1_spec_for_CAMEL_CallResult_timeDurationChargingResult: $.ComponentSpec[] = [
    new $.ComponentSpec("partyToCharge", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timeInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("legActive", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callLegReleasedAtTcpExpiry", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("aChChargingAddress", true, $.hasTag(_TagClass.context, 5))
];

export const _root_component_type_list_2_spec_for_CAMEL_CallResult_timeDurationChargingResult: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_CAMEL_CallResult_timeDurationChargingResult: $.ComponentSpec[] = [];

let _cached_decoder_for_CAMEL_CallResult_timeDurationChargingResult: $.ASN1Decoder<CAMEL_CallResult_timeDurationChargingResult> | null = null;
export function _decode_CAMEL_CallResult_timeDurationChargingResult (el: _Element): CAMEL_CallResult_timeDurationChargingResult {
    if (!_cached_decoder_for_CAMEL_CallResult_timeDurationChargingResult) {
        _cached_decoder_for_CAMEL_CallResult_timeDurationChargingResult = function (el: _Element): CAMEL_CallResult_timeDurationChargingResult {
    let partyToCharge!: ReceivingSideID;
    let timeInformation!: TimeInformation;
    let legActive: OPTIONAL<BOOLEAN> = CAMEL_CallResult_timeDurationChargingResult._default_value_for_legActive;
    let callLegReleasedAtTcpExpiry: OPTIONAL<NULL>;
    let extensions: OPTIONAL<Extensions>;
    let aChChargingAddress: OPTIONAL<AChChargingAddress> = CAMEL_CallResult_timeDurationChargingResult._default_value_for_aChChargingAddress;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "partyToCharge": (_el: _Element): void => { partyToCharge = $._decode_explicit<ReceivingSideID>(() => _decode_ReceivingSideID)(_el); },
        "timeInformation": (_el: _Element): void => { timeInformation = $._decode_explicit<TimeInformation>(() => _decode_TimeInformation)(_el); },
        "legActive": (_el: _Element): void => { legActive = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "callLegReleasedAtTcpExpiry": (_el: _Element): void => { callLegReleasedAtTcpExpiry = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "aChChargingAddress": (_el: _Element): void => { aChChargingAddress = $._decode_explicit<AChChargingAddress>(() => _decode_AChChargingAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CAMEL_CallResult_timeDurationChargingResult,
        _extension_additions_list_spec_for_CAMEL_CallResult_timeDurationChargingResult,
        _root_component_type_list_2_spec_for_CAMEL_CallResult_timeDurationChargingResult,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CAMEL_CallResult_timeDurationChargingResult(
        partyToCharge,
        timeInformation,
        legActive,
        callLegReleasedAtTcpExpiry,
        extensions,
        aChChargingAddress,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_CAMEL_CallResult_timeDurationChargingResult(el);
}

let _cached_encoder_for_CAMEL_CallResult_timeDurationChargingResult: $.ASN1Encoder<CAMEL_CallResult_timeDurationChargingResult> | null = null;
export function _encode_CAMEL_CallResult_timeDurationChargingResult (value: CAMEL_CallResult_timeDurationChargingResult, elGetter: $.ASN1Encoder<CAMEL_CallResult_timeDurationChargingResult>): _Element {
    if (!_cached_encoder_for_CAMEL_CallResult_timeDurationChargingResult) {
        _cached_encoder_for_CAMEL_CallResult_timeDurationChargingResult = function (value: CAMEL_CallResult_timeDurationChargingResult): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ReceivingSideID, $.BER)(value.partyToCharge, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_TimeInformation, $.BER)(value.timeInformation, $.BER),
            /* IF_DEFAULT */ (value.legActive === undefined || $.deepEq(value.legActive, CAMEL_CallResult_timeDurationChargingResult._default_value_for_legActive) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.legActive, $.BER)),
            /* IF_ABSENT  */ ((value.callLegReleasedAtTcpExpiry === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.callLegReleasedAtTcpExpiry, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Extensions, $.BER)(value.extensions, $.BER)),
            /* IF_DEFAULT */ (value.aChChargingAddress === undefined || $.deepEq(value.aChChargingAddress, CAMEL_CallResult_timeDurationChargingResult._default_value_for_aChChargingAddress) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_AChChargingAddress, $.BER)(value.aChChargingAddress, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_CAMEL_CallResult_timeDurationChargingResult(value, elGetter);
}

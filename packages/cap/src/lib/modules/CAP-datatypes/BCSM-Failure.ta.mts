import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
import { type Cause, _decode_Cause, _encode_Cause } from "./Cause.ta.mjs";

/**
 * @summary BCSM_Failure
 * @description
 *
 * EntityReleased alternative: a leg (BCSM) was released.
 * (3GPP TS 29.078 V19.0.0 clause 11.16).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BCSM-Failure {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *  legID				[0]	LegID					OPTIONAL,
 *  cause				[2]	Cause {bound}				OPTIONAL,
 *  ...
 *  }
 * ```
 *
 */
export class BCSM_Failure {
    constructor (
        /**
         * @summary `legID`.
         * @description
         *
         * Released leg. Receiving Side LegID (gsmSSF → gsmSCF). LegID 1 =
         * calling party; 2 = called party from InitialDP; > 2 = called party
         * from InitiateCallAttempt.
         * (3GPP TS 29.078 V19.0.0 clauses 11.16 and 4.1.5).
         *
         * @public
         * @readonly
         */
        readonly legID: OPTIONAL<LegID>,
        /**
         * @summary `cause`.
         * @description
         *
         * Cause for releasing this BCSM. gsmSCF may use it to decide further
         * call handling. (3GPP TS 29.078 V19.0.0 clause 11.16).
         *
         * @public
         * @readonly
         */
        readonly cause: OPTIONAL<Cause>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (BCSM_Failure)]: (BCSM_Failure)[_K] }): BCSM_Failure {
        return new BCSM_Failure(_o.legID, _o.cause, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_BCSM_Failure: $.ComponentSpec[] = [
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.context, 2))
];

export const _root_component_type_list_2_spec_for_BCSM_Failure: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_BCSM_Failure: $.ComponentSpec[] = [];

let _cached_decoder_for_BCSM_Failure: $.ASN1Decoder<BCSM_Failure> | null = null;
export function _decode_BCSM_Failure (el: _Element): BCSM_Failure {
    if (!_cached_decoder_for_BCSM_Failure) {
        _cached_decoder_for_BCSM_Failure = function (el: _Element): BCSM_Failure {
    let legID: OPTIONAL<LegID>;
    let cause: OPTIONAL<Cause>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "cause": (_el: _Element): void => { cause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BCSM_Failure,
        _extension_additions_list_spec_for_BCSM_Failure,
        _root_component_type_list_2_spec_for_BCSM_Failure,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new BCSM_Failure(
        legID,
        cause,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_BCSM_Failure(el);
}

let _cached_encoder_for_BCSM_Failure: $.ASN1Encoder<BCSM_Failure> | null = null;
export function _encode_BCSM_Failure (value: BCSM_Failure, elGetter: $.ASN1Encoder<BCSM_Failure>): _Element {
    if (!_cached_encoder_for_BCSM_Failure) {
        _cached_encoder_for_BCSM_Failure = function (value: BCSM_Failure): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.legID === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_LegID, $.BER)(value.legID, $.BER)),
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Cause, $.BER)(value.cause, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_BCSM_Failure(value, elGetter);
}

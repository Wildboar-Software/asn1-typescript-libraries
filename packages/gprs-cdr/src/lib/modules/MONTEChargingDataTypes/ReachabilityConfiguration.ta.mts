/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReachabilityType, _decode_ReachabilityType, _encode_ReachabilityType, _enum_for_ReachabilityType } from "../MONTEChargingDataTypes/ReachabilityType.ta.mjs";


/**
 * @summary ReachabilityConfiguration
 * @description
 *
 * UE-reachability configuration on an ME-CO-CDR. Category Oc.
 * It includes reachability type, maximum latency, and maximum
 * response time, and applies only to UE reachability. Sent on
 * Rf for configuration only. Bound to
 * UE-Reachability-Configuration.
 *
 * Clause 5.1 also requires the MECN to collect, when applicable
 * to the event, the maximum delay acceptable for downlink data,
 * the time the UE stays reachable so the SCS/AS can deliver
 * that data, and how many packets the serving gateway buffers
 * while the UE is not reachable. This sequence has no component
 * for that packet count. TS 32.278 does not say which integer
 * is the delay and which is the reachable time.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 6.1.3.2, 6.3.3 and 6.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReachabilityConfiguration ::= SEQUENCE {
 *    reachabilityType      [0] IMPLICIT ReachabilityType OPTIONAL,
 *    maximumLatency        [1] IMPLICIT INTEGER OPTIONAL,
 *    maximumResponseTime   [2] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ReachabilityConfiguration {
    /**
     * @summary `reachabilityType`.
     * @description
     *
     * Reachability type, for example SMS or data.
     *
     * 3GPP TS 32.278 V19.0.0 clauses 5.1 and 6.1.3.2.
     *
     * @public
     * @readonly
     */
    readonly reachabilityType: OPTIONAL<ReachabilityType>;
    /**
     * @summary `maximumLatency`.
     * @description
     *
     * Named by TS 32.278 as part of the UE-reachability
     * configuration. The specification does not define this
     * integer.
     *
     * 3GPP TS 32.278 V19.0.0 clause 6.1.3.2.
     *
     * @public
     * @readonly
     */
    readonly maximumLatency: OPTIONAL<INTEGER>;
    /**
     * @summary `maximumResponseTime`.
     * @description
     *
     * Named by TS 32.278 as part of the UE-reachability
     * configuration. The specification does not define this
     * integer.
     *
     * 3GPP TS 32.278 V19.0.0 clause 6.1.3.2.
     *
     * @public
     * @readonly
     */
    readonly maximumResponseTime: OPTIONAL<INTEGER>;

    constructor (
        reachabilityType?: OPTIONAL<ReachabilityType>,
        maximumLatency?: OPTIONAL<INTEGER>,
        maximumResponseTime?: OPTIONAL<INTEGER>
    ) {
        this.reachabilityType = reachabilityType;
        this.maximumLatency = maximumLatency;
        this.maximumResponseTime = maximumResponseTime;
    }

    /**
     * @summary Restructures an object into a ReachabilityConfiguration
     * @description
     * 
     * This takes an `object` and converts it to a `ReachabilityConfiguration`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReachabilityConfiguration`.
     * @returns {ReachabilityConfiguration}
     */
    public static _from_object (_o: { [_K in keyof (ReachabilityConfiguration)]: (ReachabilityConfiguration)[_K] }): ReachabilityConfiguration {
        return new ReachabilityConfiguration(_o.reachabilityType, _o.maximumLatency, _o.maximumResponseTime);
    }

        /**
         * @summary The enum used as the type of the component `reachabilityType`
         * @public
         * @static
         */

    public static _enum_for_reachabilityType: typeof _enum_for_ReachabilityType = _enum_for_ReachabilityType;
}

/**
 * @summary The Leading Root Component Types of ReachabilityConfiguration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReachabilityConfiguration: $.ComponentSpec[] = [
    new $.ComponentSpec("reachabilityType", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("maximumLatency", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("maximumResponseTime", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ReachabilityConfiguration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReachabilityConfiguration: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReachabilityConfiguration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReachabilityConfiguration: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReachabilityConfiguration: $.ASN1Decoder<ReachabilityConfiguration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReachabilityConfiguration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReachabilityConfiguration (el: _Element): ReachabilityConfiguration {
    if (!_cached_decoder_for_ReachabilityConfiguration) { _cached_decoder_for_ReachabilityConfiguration = function (el: _Element): ReachabilityConfiguration {
    let reachabilityType: OPTIONAL<ReachabilityType>;
    let maximumLatency: OPTIONAL<INTEGER>;
    let maximumResponseTime: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "reachabilityType": (_el: _Element): void => { reachabilityType = $._decode_implicit<ReachabilityType>(() => _decode_ReachabilityType)(_el); },
        "maximumLatency": (_el: _Element): void => { maximumLatency = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maximumResponseTime": (_el: _Element): void => { maximumResponseTime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReachabilityConfiguration,
        _extension_additions_list_spec_for_ReachabilityConfiguration,
        _root_component_type_list_2_spec_for_ReachabilityConfiguration,
        undefined,
    );
    return new ReachabilityConfiguration(
        reachabilityType,
        maximumLatency,
        maximumResponseTime
    );
}; }
    return _cached_decoder_for_ReachabilityConfiguration(el);
}

let _cached_encoder_for_ReachabilityConfiguration: $.ASN1Encoder<ReachabilityConfiguration> | null = null;

/**
 * @summary Encodes a(n) ReachabilityConfiguration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReachabilityConfiguration, encoded as an ASN.1 Element.
 */
export
function _encode_ReachabilityConfiguration (value: ReachabilityConfiguration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReachabilityConfiguration) { _cached_encoder_for_ReachabilityConfiguration = function (value: ReachabilityConfiguration, _elGetter: $.ASN1Encoder<ReachabilityConfiguration>): _Element {
    const _components: _Element[] = [];
    if (value.reachabilityType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ReachabilityType, $.BER)(value.reachabilityType, $.BER));
    }
    if (value.maximumLatency !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.maximumLatency, $.BER));
    }
    if (value.maximumResponseTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.maximumResponseTime, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ReachabilityConfiguration(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiscoveredEAS, _decode_DiscoveredEAS, _encode_DiscoveredEAS } from "../TS33128Payloads/DiscoveredEAS.ta.mjs";
// export { DiscoveredEAS, _decode_DiscoveredEAS, _encode_DiscoveredEAS } from "../TS33128Payloads/DiscoveredEAS.ta.mjs";
import { EDNConfigurationInfo, _decode_EDNConfigurationInfo, _encode_EDNConfigurationInfo } from "../TS33128Payloads/EDNConfigurationInfo.ta.mjs";
// export { EDNConfigurationInfo, _decode_EDNConfigurationInfo, _encode_EDNConfigurationInfo } from "../TS33128Payloads/EDNConfigurationInfo.ta.mjs";


/**
 * @summary TargetInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TargetInfo ::= SEQUENCE
 * {
 *     discoveredEAS    [1] DiscoveredEAS,
 *     targetEESInfo    [2] EDNConfigurationInfo OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TargetInfo {
    constructor (
        /**
         * @summary `discoveredEAS`.
         * @public
         * @readonly
         */
        readonly discoveredEAS: DiscoveredEAS,
        /**
         * @summary `targetEESInfo`.
         * @public
         * @readonly
         */
        readonly targetEESInfo: OPTIONAL<EDNConfigurationInfo>
    ) {}

    /**
     * @summary Restructures an object into a TargetInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TargetInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TargetInfo`.
     * @returns {TargetInfo}
     */
    public static _from_object (_o: { [_K in keyof (TargetInfo)]: (TargetInfo)[_K] }): TargetInfo {
        return new TargetInfo(_o.discoveredEAS, _o.targetEESInfo);
    }


}

/**
 * @summary The Leading Root Component Types of TargetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TargetInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("discoveredEAS", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("targetEESInfo", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TargetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TargetInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TargetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TargetInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TargetInfo: $.ASN1Decoder<TargetInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TargetInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TargetInfo (el: _Element): TargetInfo {
    if (!_cached_decoder_for_TargetInfo) { _cached_decoder_for_TargetInfo = function (el: _Element): TargetInfo {
    let discoveredEAS!: DiscoveredEAS;
    let targetEESInfo: OPTIONAL<EDNConfigurationInfo>;
    const callbacks: $.DecodingMap = {
        "discoveredEAS": (_el: _Element): void => { discoveredEAS = $._decode_implicit<DiscoveredEAS>(() => _decode_DiscoveredEAS)(_el); },
        "targetEESInfo": (_el: _Element): void => { targetEESInfo = $._decode_implicit<EDNConfigurationInfo>(() => _decode_EDNConfigurationInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TargetInfo,
        _extension_additions_list_spec_for_TargetInfo,
        _root_component_type_list_2_spec_for_TargetInfo,
        undefined,
    );
    return new TargetInfo(
        discoveredEAS,
        targetEESInfo
    );
}; }
    return _cached_decoder_for_TargetInfo(el);
}

let _cached_encoder_for_TargetInfo: $.ASN1Encoder<TargetInfo> | null = null;

/**
 * @summary Encodes a(n) TargetInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TargetInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TargetInfo (value: TargetInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TargetInfo) { _cached_encoder_for_TargetInfo = function (value: TargetInfo, elGetter: $.ASN1Encoder<TargetInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DiscoveredEAS, $.BER)(value.discoveredEAS, $.BER),
            /* IF_ABSENT  */ ((value.targetEESInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_EDNConfigurationInfo, $.BER)(value.targetEESInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TargetInfo(value, elGetter);
}


/* eslint-enable */

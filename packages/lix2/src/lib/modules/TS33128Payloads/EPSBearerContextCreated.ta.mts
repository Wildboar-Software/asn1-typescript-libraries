/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { EPSBearerCreationCauseValue, _decode_EPSBearerCreationCauseValue, _encode_EPSBearerCreationCauseValue } from "../TS33128Payloads/EPSBearerCreationCauseValue.ta.mjs";
// export { EPSBearerCreationCauseValue, _decode_EPSBearerCreationCauseValue, _encode_EPSBearerCreationCauseValue } from "../TS33128Payloads/EPSBearerCreationCauseValue.ta.mjs";
import { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
// export { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
import { EPSBearerQOS, _decode_EPSBearerQOS, _encode_EPSBearerQOS } from "../TS33128Payloads/EPSBearerQOS.ta.mjs";
// export { EPSBearerQOS, _decode_EPSBearerQOS, _encode_EPSBearerQOS } from "../TS33128Payloads/EPSBearerQOS.ta.mjs";
import { PDNProtocolConfigurationOptions, _decode_PDNProtocolConfigurationOptions, _encode_PDNProtocolConfigurationOptions } from "../TS33128Payloads/PDNProtocolConfigurationOptions.ta.mjs";
// export { PDNProtocolConfigurationOptions, _decode_PDNProtocolConfigurationOptions, _encode_PDNProtocolConfigurationOptions } from "../TS33128Payloads/PDNProtocolConfigurationOptions.ta.mjs";


/**
 * @summary EPSBearerContextCreated
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerContextCreated ::= SEQUENCE
 * {
 *     ePSBearerID                  [1] EPSBearerID,
 *     cause                        [2] EPSBearerCreationCauseValue,
 *     gTPTunnelInfo                [3] GTPTunnelInfo OPTIONAL,
 *     bearerQOS                    [4] EPSBearerQOS OPTIONAL,
 *     protocolConfigurationOptions [5] PDNProtocolConfigurationOptions OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EPSBearerContextCreated {
    constructor (
        /**
         * @summary `ePSBearerID`.
         * @public
         * @readonly
         */
        readonly ePSBearerID: EPSBearerID,
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: EPSBearerCreationCauseValue,
        /**
         * @summary `gTPTunnelInfo`.
         * @public
         * @readonly
         */
        readonly gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>,
        /**
         * @summary `bearerQOS`.
         * @public
         * @readonly
         */
        readonly bearerQOS: OPTIONAL<EPSBearerQOS>,
        /**
         * @summary `protocolConfigurationOptions`.
         * @public
         * @readonly
         */
        readonly protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>
    ) {}

    /**
     * @summary Restructures an object into a EPSBearerContextCreated
     * @description
     * 
     * This takes an `object` and converts it to a `EPSBearerContextCreated`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSBearerContextCreated`.
     * @returns {EPSBearerContextCreated}
     */
    public static _from_object (_o: { [_K in keyof (EPSBearerContextCreated)]: (EPSBearerContextCreated)[_K] }): EPSBearerContextCreated {
        return new EPSBearerContextCreated(_o.ePSBearerID, _o.cause, _o.gTPTunnelInfo, _o.bearerQOS, _o.protocolConfigurationOptions);
    }


}

/**
 * @summary The Leading Root Component Types of EPSBearerContextCreated
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSBearerContextCreated: $.ComponentSpec[] = [
    new $.ComponentSpec("ePSBearerID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gTPTunnelInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("bearerQOS", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("protocolConfigurationOptions", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of EPSBearerContextCreated
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSBearerContextCreated: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSBearerContextCreated
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSBearerContextCreated: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSBearerContextCreated: $.ASN1Decoder<EPSBearerContextCreated> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearerContextCreated
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSBearerContextCreated (el: _Element): EPSBearerContextCreated {
    if (!_cached_decoder_for_EPSBearerContextCreated) { _cached_decoder_for_EPSBearerContextCreated = function (el: _Element): EPSBearerContextCreated {
    let ePSBearerID!: EPSBearerID;
    let cause!: EPSBearerCreationCauseValue;
    let gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>;
    let bearerQOS: OPTIONAL<EPSBearerQOS>;
    let protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>;
    const callbacks: $.DecodingMap = {
        "ePSBearerID": (_el: _Element): void => { ePSBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "cause": (_el: _Element): void => { cause = $._decode_implicit<EPSBearerCreationCauseValue>(() => _decode_EPSBearerCreationCauseValue)(_el); },
        "gTPTunnelInfo": (_el: _Element): void => { gTPTunnelInfo = $._decode_implicit<GTPTunnelInfo>(() => _decode_GTPTunnelInfo)(_el); },
        "bearerQOS": (_el: _Element): void => { bearerQOS = $._decode_implicit<EPSBearerQOS>(() => _decode_EPSBearerQOS)(_el); },
        "protocolConfigurationOptions": (_el: _Element): void => { protocolConfigurationOptions = $._decode_implicit<PDNProtocolConfigurationOptions>(() => _decode_PDNProtocolConfigurationOptions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSBearerContextCreated,
        _extension_additions_list_spec_for_EPSBearerContextCreated,
        _root_component_type_list_2_spec_for_EPSBearerContextCreated,
        undefined,
    );
    return new EPSBearerContextCreated(
        ePSBearerID,
        cause,
        gTPTunnelInfo,
        bearerQOS,
        protocolConfigurationOptions
    );
}; }
    return _cached_decoder_for_EPSBearerContextCreated(el);
}

let _cached_encoder_for_EPSBearerContextCreated: $.ASN1Encoder<EPSBearerContextCreated> | null = null;

/**
 * @summary Encodes a(n) EPSBearerContextCreated into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearerContextCreated, encoded as an ASN.1 Element.
 */
export
function _encode_EPSBearerContextCreated (value: EPSBearerContextCreated, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSBearerContextCreated) { _cached_encoder_for_EPSBearerContextCreated = function (value: EPSBearerContextCreated, elGetter: $.ASN1Encoder<EPSBearerContextCreated>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPSBearerID, $.BER)(value.ePSBearerID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EPSBearerCreationCauseValue, $.BER)(value.cause, $.BER),
            /* IF_ABSENT  */ ((value.gTPTunnelInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GTPTunnelInfo, $.BER)(value.gTPTunnelInfo, $.BER)),
            /* IF_ABSENT  */ ((value.bearerQOS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_EPSBearerQOS, $.BER)(value.bearerQOS, $.BER)),
            /* IF_ABSENT  */ ((value.protocolConfigurationOptions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_PDNProtocolConfigurationOptions, $.BER)(value.protocolConfigurationOptions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSBearerContextCreated(value, elGetter);
}


/* eslint-enable */

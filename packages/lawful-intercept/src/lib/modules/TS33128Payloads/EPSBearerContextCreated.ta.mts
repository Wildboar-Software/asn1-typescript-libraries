/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { type EPSBearerCreationCauseValue, _decode_EPSBearerCreationCauseValue, _encode_EPSBearerCreationCauseValue } from "../TS33128Payloads/EPSBearerCreationCauseValue.ta.mjs";
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
    /**
     * @summary `ePSBearerID`.
     * @public
     * @readonly
     */
    readonly ePSBearerID: EPSBearerID;
    /**
     * @summary `cause`.
     * @public
     * @readonly
     */
    readonly cause: EPSBearerCreationCauseValue;
    /**
     * @summary `gTPTunnelInfo`.
     * @public
     * @readonly
     */
    readonly gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>;
    /**
     * @summary `bearerQOS`.
     * @public
     * @readonly
     */
    readonly bearerQOS: OPTIONAL<EPSBearerQOS>;
    /**
     * @summary `protocolConfigurationOptions`.
     * @public
     * @readonly
     */
    readonly protocolConfigurationOptions: OPTIONAL<PDNProtocolConfigurationOptions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        ePSBearerID: EPSBearerID,
        cause: EPSBearerCreationCauseValue,
        gTPTunnelInfo?: OPTIONAL<GTPTunnelInfo>,
        bearerQOS?: OPTIONAL<EPSBearerQOS>,
        protocolConfigurationOptions?: OPTIONAL<PDNProtocolConfigurationOptions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.ePSBearerID = ePSBearerID;
        this.cause = cause;
        this.gTPTunnelInfo = gTPTunnelInfo;
        this.bearerQOS = bearerQOS;
        this.protocolConfigurationOptions = protocolConfigurationOptions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new EPSBearerContextCreated(_o.ePSBearerID, _o.cause, _o.gTPTunnelInfo, _o.bearerQOS, _o.protocolConfigurationOptions, _o._unrecognizedExtensionsList);
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
    const _unrecognizedExtensionsList: _Element[] = [];
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
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPSBearerContextCreated(
        ePSBearerID,
        cause,
        gTPTunnelInfo,
        bearerQOS,
        protocolConfigurationOptions,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPSBearerID, $.BER)(value.ePSBearerID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EPSBearerCreationCauseValue, $.BER)(value.cause, $.BER);
    if (value.gTPTunnelInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_GTPTunnelInfo, $.BER)(value.gTPTunnelInfo, $.BER);
    }
    if (value.bearerQOS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_EPSBearerQOS, $.BER)(value.bearerQOS, $.BER);
    }
    if (value.protocolConfigurationOptions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_PDNProtocolConfigurationOptions, $.BER)(value.protocolConfigurationOptions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EPSBearerContextCreated(value, elGetter);
}


/* eslint-enable */

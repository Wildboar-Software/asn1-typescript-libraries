/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FiveGSGTPTunnels, _decode_FiveGSGTPTunnels, _encode_FiveGSGTPTunnels } from "../TS33128Payloads/FiveGSGTPTunnels.ta.mjs";
// export { FiveGSGTPTunnels, _decode_FiveGSGTPTunnels, _encode_FiveGSGTPTunnels } from "../TS33128Payloads/FiveGSGTPTunnels.ta.mjs";
import { EPSGTPTunnels, _decode_EPSGTPTunnels, _encode_EPSGTPTunnels } from "../TS33128Payloads/EPSGTPTunnels.ta.mjs";
// export { EPSGTPTunnels, _decode_EPSGTPTunnels, _encode_EPSGTPTunnels } from "../TS33128Payloads/EPSGTPTunnels.ta.mjs";


/**
 * @summary GTPTunnelInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GTPTunnelInfo ::= SEQUENCE
 * {
 *     fiveGSGTPTunnels [1] FiveGSGTPTunnels OPTIONAL,
 *     ePSGTPTunnels    [2] EPSGTPTunnels OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GTPTunnelInfo {
    /**
     * @summary `fiveGSGTPTunnels`.
     * @description
     *
     * Shall include the 5GS GTP Tunnels (see table 6.2.3.2.2-4) when the xIRI
     * message is used to report PDU Session related events.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly fiveGSGTPTunnels: OPTIONAL<FiveGSGTPTunnels>;
    /**
     * @summary `ePSGTPTunnels`.
     * @description
     *
     * Shall include the information for the User Plane GTP Tunnels for the
     * bearer context if present in the Request or Response (see TS 29.274 [87]
     * clauses 7.2.2, 7.2.4 and 8.15) or known at the context at the SGW or PGW
     * (see TS 23.401 [50] clause 5.6.4) when the xIRI message is used to report
     * PDN Connection related events. See table 6.3.3.2.2-6.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly ePSGTPTunnels: OPTIONAL<EPSGTPTunnels>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        fiveGSGTPTunnels: OPTIONAL<FiveGSGTPTunnels>,
        ePSGTPTunnels: OPTIONAL<EPSGTPTunnels>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.fiveGSGTPTunnels = fiveGSGTPTunnels;
        this.ePSGTPTunnels = ePSGTPTunnels;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a GTPTunnelInfo
     * @description
     * 
     * This takes an `object` and converts it to a `GTPTunnelInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GTPTunnelInfo`.
     * @returns {GTPTunnelInfo}
     */
    public static _from_object (_o: { [_K in keyof (GTPTunnelInfo)]: (GTPTunnelInfo)[_K] }): GTPTunnelInfo {
        return new GTPTunnelInfo(_o.fiveGSGTPTunnels, _o.ePSGTPTunnels, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GTPTunnelInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GTPTunnelInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("fiveGSGTPTunnels", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ePSGTPTunnels", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of GTPTunnelInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GTPTunnelInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GTPTunnelInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GTPTunnelInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GTPTunnelInfo: $.ASN1Decoder<GTPTunnelInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GTPTunnelInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GTPTunnelInfo (el: _Element): GTPTunnelInfo {
    if (!_cached_decoder_for_GTPTunnelInfo) { _cached_decoder_for_GTPTunnelInfo = function (el: _Element): GTPTunnelInfo {
    let fiveGSGTPTunnels: OPTIONAL<FiveGSGTPTunnels>;
    let ePSGTPTunnels: OPTIONAL<EPSGTPTunnels>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "fiveGSGTPTunnels": (_el: _Element): void => { fiveGSGTPTunnels = $._decode_implicit<FiveGSGTPTunnels>(() => _decode_FiveGSGTPTunnels)(_el); },
        "ePSGTPTunnels": (_el: _Element): void => { ePSGTPTunnels = $._decode_implicit<EPSGTPTunnels>(() => _decode_EPSGTPTunnels)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GTPTunnelInfo,
        _extension_additions_list_spec_for_GTPTunnelInfo,
        _root_component_type_list_2_spec_for_GTPTunnelInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GTPTunnelInfo(
        fiveGSGTPTunnels,
        ePSGTPTunnels,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GTPTunnelInfo(el);
}

let _cached_encoder_for_GTPTunnelInfo: $.ASN1Encoder<GTPTunnelInfo> | null = null;

/**
 * @summary Encodes a(n) GTPTunnelInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GTPTunnelInfo, encoded as an ASN.1 Element.
 */
export
function _encode_GTPTunnelInfo (value: GTPTunnelInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GTPTunnelInfo) { _cached_encoder_for_GTPTunnelInfo = function (value: GTPTunnelInfo, elGetter: $.ASN1Encoder<GTPTunnelInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.fiveGSGTPTunnels !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_FiveGSGTPTunnels, $.BER)(value.fiveGSGTPTunnels, $.BER);
    }
    if (value.ePSGTPTunnels !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_EPSGTPTunnels, $.BER)(value.ePSGTPTunnels, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_GTPTunnelInfo(value, elGetter);
}


/* eslint-enable */

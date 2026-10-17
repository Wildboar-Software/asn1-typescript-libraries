/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { QOSFlowTunnelInformation, _decode_QOSFlowTunnelInformation, _encode_QOSFlowTunnelInformation } from "../TS33128Payloads/QOSFlowTunnelInformation.ta.mjs";
// export { QOSFlowTunnelInformation, _decode_QOSFlowTunnelInformation, _encode_QOSFlowTunnelInformation } from "../TS33128Payloads/QOSFlowTunnelInformation.ta.mjs";
import { QOSFlowTunnelInformationList, _decode_QOSFlowTunnelInformationList, _encode_QOSFlowTunnelInformationList } from "../TS33128Payloads/QOSFlowTunnelInformationList.ta.mjs";
// export { QOSFlowTunnelInformationList, _decode_QOSFlowTunnelInformationList, _encode_QOSFlowTunnelInformationList } from "../TS33128Payloads/QOSFlowTunnelInformationList.ta.mjs";


/**
 * @summary DLRANTunnelInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DLRANTunnelInformation ::= SEQUENCE
 * {
 *     dLQOSFlowTunnelInformation                    [1] QOSFlowTunnelInformation OPTIONAL,
 *     additionalDLQOSFlowTunnelInformation          [2] QOSFlowTunnelInformationList OPTIONAL,
 *     redundantDLQOSFlowTunnelInformation           [3] QOSFlowTunnelInformationList OPTIONAL,
 *     additionalredundantDLQOSFlowTunnelInformation [4] QOSFlowTunnelInformationList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DLRANTunnelInformation {
    /**
     * @summary `dLQOSFlowTunnelInformation`.
     * @description
     *
     * Shall include the F-TEID NG-RAN endpoint of the NG-U transport bearer
     * together with associated QoS flows (see TS 38.413 [23] clause 9.3.4.2 and
     * TS 29.502 [16] clause 6.1.6.2.39).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly dLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformation>;
    /**
     * @summary `additionalDLQOSFlowTunnelInformation`.
     * @description
     *
     * Shall include the F-TEID NG-RAN endpoint of any additional NG-U transport
     * bearers together with associated QoS flows (see TS 38.413 [23] clause
     * 9.3.4.2 and TS 29.502 [16] clause 6.1.6.2.39).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly additionalDLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformationList>;
    /**
     * @summary `redundantDLQOSFlowTunnelInformation`.
     * @description
     *
     * Shall include the F-TEID NG-RAN endpoint of redundant NG-U transport
     * bearers together with associated QoS flows (see TS 38.413 [23] clause
     * 9.3.4.2 and TS 29.502 [16] clause 6.1.6.2.39).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly redundantDLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformationList>;
    /**
     * @summary `additionalredundantDLQOSFlowTunnelInformation`.
     * @description
     *
     * Shall include the F-TEID NG-RAN endpoint of any additional redundant NG-U
     * transport bearers together with associated QoS flows (see TS 38.413 [23]
     * clause 9.3.4.2 and TS 29.502 [16] clause 6.1.6.2.39).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly additionalredundantDLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformationList>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        dLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformation>,
        additionalDLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformationList>,
        redundantDLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformationList>,
        additionalredundantDLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformationList>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.dLQOSFlowTunnelInformation = dLQOSFlowTunnelInformation;
        this.additionalDLQOSFlowTunnelInformation = additionalDLQOSFlowTunnelInformation;
        this.redundantDLQOSFlowTunnelInformation = redundantDLQOSFlowTunnelInformation;
        this.additionalredundantDLQOSFlowTunnelInformation = additionalredundantDLQOSFlowTunnelInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a DLRANTunnelInformation
     * @description
     * 
     * This takes an `object` and converts it to a `DLRANTunnelInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DLRANTunnelInformation`.
     * @returns {DLRANTunnelInformation}
     */
    public static _from_object (_o: { [_K in keyof (DLRANTunnelInformation)]: (DLRANTunnelInformation)[_K] }): DLRANTunnelInformation {
        return new DLRANTunnelInformation(_o.dLQOSFlowTunnelInformation, _o.additionalDLQOSFlowTunnelInformation, _o.redundantDLQOSFlowTunnelInformation, _o.additionalredundantDLQOSFlowTunnelInformation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DLRANTunnelInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DLRANTunnelInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("dLQOSFlowTunnelInformation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("additionalDLQOSFlowTunnelInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("redundantDLQOSFlowTunnelInformation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("additionalredundantDLQOSFlowTunnelInformation", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of DLRANTunnelInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DLRANTunnelInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DLRANTunnelInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DLRANTunnelInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DLRANTunnelInformation: $.ASN1Decoder<DLRANTunnelInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DLRANTunnelInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DLRANTunnelInformation (el: _Element): DLRANTunnelInformation {
    if (!_cached_decoder_for_DLRANTunnelInformation) { _cached_decoder_for_DLRANTunnelInformation = function (el: _Element): DLRANTunnelInformation {
    let dLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformation>;
    let additionalDLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformationList>;
    let redundantDLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformationList>;
    let additionalredundantDLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformationList>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dLQOSFlowTunnelInformation": (_el: _Element): void => { dLQOSFlowTunnelInformation = $._decode_implicit<QOSFlowTunnelInformation>(() => _decode_QOSFlowTunnelInformation)(_el); },
        "additionalDLQOSFlowTunnelInformation": (_el: _Element): void => { additionalDLQOSFlowTunnelInformation = $._decode_implicit<QOSFlowTunnelInformationList>(() => _decode_QOSFlowTunnelInformationList)(_el); },
        "redundantDLQOSFlowTunnelInformation": (_el: _Element): void => { redundantDLQOSFlowTunnelInformation = $._decode_implicit<QOSFlowTunnelInformationList>(() => _decode_QOSFlowTunnelInformationList)(_el); },
        "additionalredundantDLQOSFlowTunnelInformation": (_el: _Element): void => { additionalredundantDLQOSFlowTunnelInformation = $._decode_implicit<QOSFlowTunnelInformationList>(() => _decode_QOSFlowTunnelInformationList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DLRANTunnelInformation,
        _extension_additions_list_spec_for_DLRANTunnelInformation,
        _root_component_type_list_2_spec_for_DLRANTunnelInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DLRANTunnelInformation(
        dLQOSFlowTunnelInformation,
        additionalDLQOSFlowTunnelInformation,
        redundantDLQOSFlowTunnelInformation,
        additionalredundantDLQOSFlowTunnelInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DLRANTunnelInformation(el);
}

let _cached_encoder_for_DLRANTunnelInformation: $.ASN1Encoder<DLRANTunnelInformation> | null = null;

/**
 * @summary Encodes a(n) DLRANTunnelInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLRANTunnelInformation, encoded as an ASN.1 Element.
 */
export
function _encode_DLRANTunnelInformation (value: DLRANTunnelInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DLRANTunnelInformation) { _cached_encoder_for_DLRANTunnelInformation = function (value: DLRANTunnelInformation, elGetter: $.ASN1Encoder<DLRANTunnelInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.dLQOSFlowTunnelInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_QOSFlowTunnelInformation, $.BER)(value.dLQOSFlowTunnelInformation, $.BER);
    }
    if (value.additionalDLQOSFlowTunnelInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_QOSFlowTunnelInformationList, $.BER)(value.additionalDLQOSFlowTunnelInformation, $.BER);
    }
    if (value.redundantDLQOSFlowTunnelInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_QOSFlowTunnelInformationList, $.BER)(value.redundantDLQOSFlowTunnelInformation, $.BER);
    }
    if (value.additionalredundantDLQOSFlowTunnelInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_QOSFlowTunnelInformationList, $.BER)(value.additionalredundantDLQOSFlowTunnelInformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DLRANTunnelInformation(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type QCI, _decode_QCI, _encode_QCI } from "../TS33128Payloads/QCI.ta.mjs";
// export { QCI, _decode_QCI, _encode_QCI } from "../TS33128Payloads/QCI.ta.mjs";
import { type BitrateBinKBPS, _decode_BitrateBinKBPS, _encode_BitrateBinKBPS } from "../TS33128Payloads/BitrateBinKBPS.ta.mjs";
// export { BitrateBinKBPS, _decode_BitrateBinKBPS, _encode_BitrateBinKBPS } from "../TS33128Payloads/BitrateBinKBPS.ta.mjs";
import { type EPSQOSPriority, _decode_EPSQOSPriority, _encode_EPSQOSPriority } from "../TS33128Payloads/EPSQOSPriority.ta.mjs";
// export { EPSQOSPriority, _decode_EPSQOSPriority, _encode_EPSQOSPriority } from "../TS33128Payloads/EPSQOSPriority.ta.mjs";


/**
 * @summary EPSBearerQOS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerQOS ::= SEQUENCE
 * {
 *     qCI                       [1] QCI OPTIONAL,
 *     maximumUplinkBitRate      [2] BitrateBinKBPS OPTIONAL,
 *     maximumDownlinkBitRate    [3] BitrateBinKBPS OPTIONAL,
 *     guaranteedUplinkBitRate   [4] BitrateBinKBPS OPTIONAL,
 *     guaranteedDownlinkBitRate [5] BitrateBinKBPS OPTIONAL,
 *     priorityLevel             [6] EPSQOSPriority OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EPSBearerQOS {
    /**
     * @summary `qCI`.
     * @description
     *
     * Shall include the QCI for the bearer if present in the Request or
     * response (see TS 29.274 [87] clauses 7.2.1, 7.2.2, 7.2.3 and 7.2.15), or
     * known in the context at the SGW or PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly qCI: OPTIONAL<QCI>;
    /**
     * @summary `maximumUplinkBitRate`.
     * @description
     *
     * Shall include the maximum uplink bitrate encoded as kilobits per second
     * in binary value (see TS 29.274 [87] clause 8.15) if present in the
     * Request or response (see TS 29.274 [87] clauses 7.2.1, 7.2.2, 7.2.3 and
     * 7.2.15), or known in the context at the SGW or PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly maximumUplinkBitRate: OPTIONAL<BitrateBinKBPS>;
    /**
     * @summary `maximumDownlinkBitRate`.
     * @description
     *
     * Shall include the maximum downlink bitrate encoded as kilobits per second
     * in binary value (see TS 29.274 [87] clause 8.15) if present in the
     * Request or response (see TS 29.274 [87] clauses 7.2.1, 7.2.2, 7.2.3 and
     * 7.2.15), or known in the context at the SGW or PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly maximumDownlinkBitRate: OPTIONAL<BitrateBinKBPS>;
    /**
     * @summary `guaranteedUplinkBitRate`.
     * @description
     *
     * Shall include the guaranteed uplink bitrate encoded as kilobits per
     * second in binary value (see TS 29.274 [87] clause 8.15) if present in the
     * Request or response (see TS 29.274 [87] clauses 7.2.1, 7.2.2, 7.2.3 and
     * 7.2.15), or known in the context at the SGW or PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly guaranteedUplinkBitRate: OPTIONAL<BitrateBinKBPS>;
    /**
     * @summary `guaranteedDownlinkBitRate`.
     * @description
     *
     * Shall include the guaranteed downlink bitrate encoded as kilobits per
     * second in binary value (see TS 29.274 [87] clause 8.15) if present in the
     * Request or response (see TS 29.274 [87] clauses 7.2.1, 7.2.2, 7.2.3 and
     * 7.2.15), or known in the context at the SGW or PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly guaranteedDownlinkBitRate: OPTIONAL<BitrateBinKBPS>;
    /**
     * @summary `priorityLevel`.
     * @description
     *
     * Shall include the priority level assigned to the bearer as an integer
     * value (see TS 29.274 [87] clause 8.15) if present in the Request or
     * response (see TS 29.274 [87] clauses 7.2.1, 7.2.2, 7.2.3 and 7.2.15), or
     * known in the context at the SGW or PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly priorityLevel: OPTIONAL<EPSQOSPriority>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        qCI?: OPTIONAL<QCI>,
        maximumUplinkBitRate?: OPTIONAL<BitrateBinKBPS>,
        maximumDownlinkBitRate?: OPTIONAL<BitrateBinKBPS>,
        guaranteedUplinkBitRate?: OPTIONAL<BitrateBinKBPS>,
        guaranteedDownlinkBitRate?: OPTIONAL<BitrateBinKBPS>,
        priorityLevel?: OPTIONAL<EPSQOSPriority>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.qCI = qCI;
        this.maximumUplinkBitRate = maximumUplinkBitRate;
        this.maximumDownlinkBitRate = maximumDownlinkBitRate;
        this.guaranteedUplinkBitRate = guaranteedUplinkBitRate;
        this.guaranteedDownlinkBitRate = guaranteedDownlinkBitRate;
        this.priorityLevel = priorityLevel;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EPSBearerQOS
     * @description
     * 
     * This takes an `object` and converts it to a `EPSBearerQOS`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSBearerQOS`.
     * @returns {EPSBearerQOS}
     */
    public static _from_object (_o: { [_K in keyof (EPSBearerQOS)]: (EPSBearerQOS)[_K] }): EPSBearerQOS {
        return new EPSBearerQOS(_o.qCI, _o.maximumUplinkBitRate, _o.maximumDownlinkBitRate, _o.guaranteedUplinkBitRate, _o.guaranteedDownlinkBitRate, _o.priorityLevel, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EPSBearerQOS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSBearerQOS: $.ComponentSpec[] = [
    new $.ComponentSpec("qCI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("maximumUplinkBitRate", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("maximumDownlinkBitRate", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("guaranteedUplinkBitRate", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("guaranteedDownlinkBitRate", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("priorityLevel", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of EPSBearerQOS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSBearerQOS: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSBearerQOS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSBearerQOS: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSBearerQOS: $.ASN1Decoder<EPSBearerQOS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearerQOS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSBearerQOS (el: _Element): EPSBearerQOS {
    if (!_cached_decoder_for_EPSBearerQOS) { _cached_decoder_for_EPSBearerQOS = function (el: _Element): EPSBearerQOS {
    let qCI: OPTIONAL<QCI>;
    let maximumUplinkBitRate: OPTIONAL<BitrateBinKBPS>;
    let maximumDownlinkBitRate: OPTIONAL<BitrateBinKBPS>;
    let guaranteedUplinkBitRate: OPTIONAL<BitrateBinKBPS>;
    let guaranteedDownlinkBitRate: OPTIONAL<BitrateBinKBPS>;
    let priorityLevel: OPTIONAL<EPSQOSPriority>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "qCI": (_el: _Element): void => { qCI = $._decode_implicit<QCI>(() => _decode_QCI)(_el); },
        "maximumUplinkBitRate": (_el: _Element): void => { maximumUplinkBitRate = $._decode_implicit<BitrateBinKBPS>(() => _decode_BitrateBinKBPS)(_el); },
        "maximumDownlinkBitRate": (_el: _Element): void => { maximumDownlinkBitRate = $._decode_implicit<BitrateBinKBPS>(() => _decode_BitrateBinKBPS)(_el); },
        "guaranteedUplinkBitRate": (_el: _Element): void => { guaranteedUplinkBitRate = $._decode_implicit<BitrateBinKBPS>(() => _decode_BitrateBinKBPS)(_el); },
        "guaranteedDownlinkBitRate": (_el: _Element): void => { guaranteedDownlinkBitRate = $._decode_implicit<BitrateBinKBPS>(() => _decode_BitrateBinKBPS)(_el); },
        "priorityLevel": (_el: _Element): void => { priorityLevel = $._decode_implicit<EPSQOSPriority>(() => _decode_EPSQOSPriority)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSBearerQOS,
        _extension_additions_list_spec_for_EPSBearerQOS,
        _root_component_type_list_2_spec_for_EPSBearerQOS,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPSBearerQOS(
        qCI,
        maximumUplinkBitRate,
        maximumDownlinkBitRate,
        guaranteedUplinkBitRate,
        guaranteedDownlinkBitRate,
        priorityLevel,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPSBearerQOS(el);
}

let _cached_encoder_for_EPSBearerQOS: $.ASN1Encoder<EPSBearerQOS> | null = null;

/**
 * @summary Encodes a(n) EPSBearerQOS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearerQOS, encoded as an ASN.1 Element.
 */
export
function _encode_EPSBearerQOS (value: EPSBearerQOS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSBearerQOS) { _cached_encoder_for_EPSBearerQOS = function (value: EPSBearerQOS, elGetter: $.ASN1Encoder<EPSBearerQOS>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.qCI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_QCI, $.BER)(value.qCI, $.BER);
    }
    if (value.maximumUplinkBitRate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_BitrateBinKBPS, $.BER)(value.maximumUplinkBitRate, $.BER);
    }
    if (value.maximumDownlinkBitRate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_BitrateBinKBPS, $.BER)(value.maximumDownlinkBitRate, $.BER);
    }
    if (value.guaranteedUplinkBitRate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_BitrateBinKBPS, $.BER)(value.guaranteedUplinkBitRate, $.BER);
    }
    if (value.guaranteedDownlinkBitRate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_BitrateBinKBPS, $.BER)(value.guaranteedDownlinkBitRate, $.BER);
    }
    if (value.priorityLevel !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_EPSQOSPriority, $.BER)(value.priorityLevel, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EPSBearerQOS(value, elGetter);
}


/* eslint-enable */

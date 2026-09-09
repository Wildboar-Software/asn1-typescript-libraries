/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { MonitorCrossRefID, _decode_MonitorCrossRefID, _encode_MonitorCrossRefID } from "../CSTA-status-reporting/MonitorCrossRefID.ta.mjs";

import { MonitorFilter, _decode_MonitorFilter, _encode_MonitorFilter } from "../CSTA-status-reporting/MonitorFilter.ta.mjs";

import {
    MonitorMediaClass,
    data /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_MonitorMediaClass,
    _encode_MonitorMediaClass
} from "../CSTA-status-reporting/MonitorMediaClass.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary MonitorStartResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorStartResult ::= SEQUENCE
 * {     crossRefIdentifier         MonitorCrossRefID,
 *     actualmonitorFilter         [0] IMPLICIT MonitorFilter     OPTIONAL,
 *     actualMonitorMediaClass     [1] IMPLICIT MonitorMediaClass     OPTIONAL,
 *     monitorExistingCalls         BOOLEAN             OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MonitorStartResult {
    constructor (
        /**
         * @summary `crossRefIdentifier`.
         * @public
         * @readonly
         */
        readonly crossRefIdentifier: MonitorCrossRefID,
        /**
         * @summary `actualmonitorFilter`.
         * @public
         * @readonly
         */
        readonly actualmonitorFilter: OPTIONAL<MonitorFilter>,
        /**
         * @summary `actualMonitorMediaClass`.
         * @public
         * @readonly
         */
        readonly actualMonitorMediaClass: OPTIONAL<MonitorMediaClass>,
        /**
         * @summary `monitorExistingCalls`.
         * @public
         * @readonly
         */
        readonly monitorExistingCalls: OPTIONAL<BOOLEAN>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a MonitorStartResult
     * @description
     * 
     * This takes an `object` and converts it to a `MonitorStartResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MonitorStartResult`.
     * @returns {MonitorStartResult}
     */
    public static _from_object (_o: { [_K in keyof (MonitorStartResult)]: (MonitorStartResult)[_K] }): MonitorStartResult {
        return new MonitorStartResult(_o.crossRefIdentifier, _o.actualmonitorFilter, _o.actualMonitorMediaClass, _o.monitorExistingCalls, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of MonitorStartResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MonitorStartResult: $.ComponentSpec[] = [
    new $.ComponentSpec("crossRefIdentifier", false, $.hasTag(_TagClass.application, 21)),
    new $.ComponentSpec("actualmonitorFilter", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("actualMonitorMediaClass", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("monitorExistingCalls", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of MonitorStartResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MonitorStartResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MonitorStartResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MonitorStartResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MonitorStartResult: $.ASN1Decoder<MonitorStartResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorStartResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorStartResult (el: _Element): MonitorStartResult {
    if (!_cached_decoder_for_MonitorStartResult) { _cached_decoder_for_MonitorStartResult = function (el: _Element): MonitorStartResult {
    let crossRefIdentifier!: MonitorCrossRefID;
    let actualmonitorFilter: OPTIONAL<MonitorFilter>;
    let actualMonitorMediaClass: OPTIONAL<MonitorMediaClass>;
    let monitorExistingCalls: OPTIONAL<BOOLEAN>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "crossRefIdentifier": (_el: _Element): void => { crossRefIdentifier = _decode_MonitorCrossRefID(_el); },
        "actualmonitorFilter": (_el: _Element): void => { actualmonitorFilter = $._decode_implicit<MonitorFilter>(() => _decode_MonitorFilter)(_el); },
        "actualMonitorMediaClass": (_el: _Element): void => { actualMonitorMediaClass = $._decode_implicit<MonitorMediaClass>(() => _decode_MonitorMediaClass)(_el); },
        "monitorExistingCalls": (_el: _Element): void => { monitorExistingCalls = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MonitorStartResult,
        _extension_additions_list_spec_for_MonitorStartResult,
        _root_component_type_list_2_spec_for_MonitorStartResult,
        undefined,
    );
    return new MonitorStartResult(
        crossRefIdentifier,
        actualmonitorFilter,
        actualMonitorMediaClass,
        monitorExistingCalls,
        extensions
    );
}; }
    return _cached_decoder_for_MonitorStartResult(el);
}

let _cached_encoder_for_MonitorStartResult: $.ASN1Encoder<MonitorStartResult> | null = null;

/**
 * @summary Encodes a(n) MonitorStartResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorStartResult, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorStartResult (value: MonitorStartResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorStartResult) { _cached_encoder_for_MonitorStartResult = function (value: MonitorStartResult, elGetter: $.ASN1Encoder<MonitorStartResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MonitorCrossRefID(value.crossRefIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.actualmonitorFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MonitorFilter, $.BER)(value.actualmonitorFilter, $.BER)),
            /* IF_ABSENT  */ ((value.actualMonitorMediaClass === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MonitorMediaClass, $.BER)(value.actualMonitorMediaClass, $.BER)),
            /* IF_ABSENT  */ ((value.monitorExistingCalls === undefined) ? undefined : $._encodeBoolean(value.monitorExistingCalls, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MonitorStartResult(value, elGetter);
}


/* eslint-enable */

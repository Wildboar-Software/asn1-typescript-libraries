/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import {
    SnapshotDeviceResult_crossRefIDorSnapshotData,
    _decode_SnapshotDeviceResult_crossRefIDorSnapshotData,
    _encode_SnapshotDeviceResult_crossRefIDorSnapshotData
} from "../CSTA-snapshot-device/SnapshotDeviceResult-crossRefIDorSnapshotData.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SnapshotDeviceResult
 * @description
 *
 * Positive ack: inline snapshot data or a cross-ref for DeviceData.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotDeviceResult ::= SEQUENCE
 * {    crossRefIDorSnapshotData CHOICE
 *     {    serviceCrossRefID     ServiceCrossRefID,
 *         snapshotData         SnapshotDeviceData },
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SnapshotDeviceResult {
    constructor (
        /**
         * @summary `crossRefIDorSnapshotData`.
         * @description
         *
         * `serviceCrossRefID` if Snapshot DeviceData will follow;
         * `snapshotData` if inline.
         * @public
         * @readonly
         */
        readonly crossRefIDorSnapshotData: SnapshotDeviceResult_crossRefIDorSnapshotData,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SnapshotDeviceResult
     * @description
     * 
     * This takes an `object` and converts it to a `SnapshotDeviceResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SnapshotDeviceResult`.
     * @returns {SnapshotDeviceResult}
     */
    public static _from_object (_o: { [_K in keyof (SnapshotDeviceResult)]: (SnapshotDeviceResult)[_K] }): SnapshotDeviceResult {
        return new SnapshotDeviceResult(_o.crossRefIDorSnapshotData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SnapshotDeviceResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SnapshotDeviceResult: $.ComponentSpec[] = [
    new $.ComponentSpec("crossRefIDorSnapshotData", false, $.hasAnyTag),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SnapshotDeviceResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SnapshotDeviceResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SnapshotDeviceResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SnapshotDeviceResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SnapshotDeviceResult: $.ASN1Decoder<SnapshotDeviceResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotDeviceResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotDeviceResult (el: _Element): SnapshotDeviceResult {
    if (!_cached_decoder_for_SnapshotDeviceResult) { _cached_decoder_for_SnapshotDeviceResult = function (el: _Element): SnapshotDeviceResult {
    let crossRefIDorSnapshotData!: SnapshotDeviceResult_crossRefIDorSnapshotData;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "crossRefIDorSnapshotData": (_el: _Element): void => { crossRefIDorSnapshotData = _decode_SnapshotDeviceResult_crossRefIDorSnapshotData(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SnapshotDeviceResult,
        _extension_additions_list_spec_for_SnapshotDeviceResult,
        _root_component_type_list_2_spec_for_SnapshotDeviceResult,
        undefined,
    );
    return new SnapshotDeviceResult(
        crossRefIDorSnapshotData,
        extensions
    );
}; }
    return _cached_decoder_for_SnapshotDeviceResult(el);
}

let _cached_encoder_for_SnapshotDeviceResult: $.ASN1Encoder<SnapshotDeviceResult> | null = null;

/**
 * @summary Encodes a(n) SnapshotDeviceResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotDeviceResult, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotDeviceResult (value: SnapshotDeviceResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotDeviceResult) { _cached_encoder_for_SnapshotDeviceResult = function (value: SnapshotDeviceResult, elGetter: $.ASN1Encoder<SnapshotDeviceResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SnapshotDeviceResult_crossRefIDorSnapshotData(value.crossRefIDorSnapshotData, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SnapshotDeviceResult(value, elGetter);
}


/* eslint-enable */

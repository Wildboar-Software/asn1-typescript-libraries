/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { MonitorCrossRefID, _decode_MonitorCrossRefID, _encode_MonitorCrossRefID } from "../CSTA-status-reporting/MonitorCrossRefID.ta.mjs";

import { MonitorFilter, _decode_MonitorFilter, _encode_MonitorFilter } from "../CSTA-status-reporting/MonitorFilter.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ChangeMonitorFilterArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeMonitorFilterArgument ::= SEQUENCE
 * {    crossRefIdentifier         MonitorCrossRefID,
 *     requestedFilterList         MonitorFilter,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ChangeMonitorFilterArgument {
    constructor (
        /**
         * @summary `crossRefIdentifier`.
         * @public
         * @readonly
         */
        readonly crossRefIdentifier: MonitorCrossRefID,
        /**
         * @summary `requestedFilterList`.
         * @public
         * @readonly
         */
        readonly requestedFilterList: MonitorFilter,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ChangeMonitorFilterArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeMonitorFilterArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeMonitorFilterArgument`.
     * @returns {ChangeMonitorFilterArgument}
     */
    public static _from_object (_o: { [_K in keyof (ChangeMonitorFilterArgument)]: (ChangeMonitorFilterArgument)[_K] }): ChangeMonitorFilterArgument {
        return new ChangeMonitorFilterArgument(_o.crossRefIdentifier, _o.requestedFilterList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ChangeMonitorFilterArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeMonitorFilterArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("crossRefIdentifier", false, $.hasTag(_TagClass.application, 21)),
    new $.ComponentSpec("requestedFilterList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ChangeMonitorFilterArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeMonitorFilterArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeMonitorFilterArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeMonitorFilterArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeMonitorFilterArgument: $.ASN1Decoder<ChangeMonitorFilterArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeMonitorFilterArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeMonitorFilterArgument (el: _Element): ChangeMonitorFilterArgument {
    if (!_cached_decoder_for_ChangeMonitorFilterArgument) { _cached_decoder_for_ChangeMonitorFilterArgument = function (el: _Element): ChangeMonitorFilterArgument {
    let crossRefIdentifier!: MonitorCrossRefID;
    let requestedFilterList!: MonitorFilter;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "crossRefIdentifier": (_el: _Element): void => { crossRefIdentifier = _decode_MonitorCrossRefID(_el); },
        "requestedFilterList": (_el: _Element): void => { requestedFilterList = _decode_MonitorFilter(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeMonitorFilterArgument,
        _extension_additions_list_spec_for_ChangeMonitorFilterArgument,
        _root_component_type_list_2_spec_for_ChangeMonitorFilterArgument,
        undefined,
    );
    return new ChangeMonitorFilterArgument(
        crossRefIdentifier,
        requestedFilterList,
        extensions
    );
}; }
    return _cached_decoder_for_ChangeMonitorFilterArgument(el);
}

let _cached_encoder_for_ChangeMonitorFilterArgument: $.ASN1Encoder<ChangeMonitorFilterArgument> | null = null;

/**
 * @summary Encodes a(n) ChangeMonitorFilterArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeMonitorFilterArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeMonitorFilterArgument (value: ChangeMonitorFilterArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeMonitorFilterArgument) { _cached_encoder_for_ChangeMonitorFilterArgument = function (value: ChangeMonitorFilterArgument, elGetter: $.ASN1Encoder<ChangeMonitorFilterArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MonitorCrossRefID(value.crossRefIdentifier, $.BER),
            /* REQUIRED   */ _encode_MonitorFilter(value.requestedFilterList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChangeMonitorFilterArgument(value, elGetter);
}


/* eslint-enable */

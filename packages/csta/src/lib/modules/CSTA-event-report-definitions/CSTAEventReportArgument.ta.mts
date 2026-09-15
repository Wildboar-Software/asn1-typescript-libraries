/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError
} from "@wildboar/asn1";
import { MonitorCrossRefID, _decode_MonitorCrossRefID, _encode_MonitorCrossRefID } from "../CSTA-status-reporting/MonitorCrossRefID.ta.mjs";

import { EventSpecificInfo, _decode_EventSpecificInfo, _encode_EventSpecificInfo } from "../CSTA-event-report-definitions/EventSpecificInfo.ta.mjs";



/**
 * @summary CSTAEventReportArgument
 * @description
 *
 * Argument of `cSTAEventReport`: monitor cross-reference plus the event body.
 * ECMA-285 §5.4, §10.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSTAEventReportArgument ::= SEQUENCE
 * {    crossRefIdentifier        MonitorCrossRefID,
 *     eventSpecificInfo        EventSpecificInfo }
 * ```
 * 
 * @class
 */
export
class CSTAEventReportArgument {
    constructor (
        /**
         * @summary `crossRefIdentifier`.
         * @description
         * MonitorCrossRefID correlating this report to a Monitor request or
         * CSTA object (ECMA-285 §5.4).
         * @public
         * @readonly
         */
        readonly crossRefIdentifier: MonitorCrossRefID,
        /**
         * @summary `eventSpecificInfo`.
         * @description CHOICE selecting the event body.
         * @public
         * @readonly
         */
        readonly eventSpecificInfo: EventSpecificInfo
    ) {}

    /**
     * @summary Restructures an object into a CSTAEventReportArgument
     * @description
     * 
     * This takes an `object` and converts it to a `CSTAEventReportArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CSTAEventReportArgument`.
     * @returns {CSTAEventReportArgument}
     */
    public static _from_object (_o: { [_K in keyof (CSTAEventReportArgument)]: (CSTAEventReportArgument)[_K] }): CSTAEventReportArgument {
        return new CSTAEventReportArgument(_o.crossRefIdentifier, _o.eventSpecificInfo);
    }


}

/**
 * @summary The Leading Root Component Types of CSTAEventReportArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CSTAEventReportArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("crossRefIdentifier", false, $.hasTag(_TagClass.application, 21)),
    new $.ComponentSpec("eventSpecificInfo", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of CSTAEventReportArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CSTAEventReportArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CSTAEventReportArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CSTAEventReportArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CSTAEventReportArgument: $.ASN1Decoder<CSTAEventReportArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSTAEventReportArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSTAEventReportArgument (el: _Element): CSTAEventReportArgument {
    if (!_cached_decoder_for_CSTAEventReportArgument) { _cached_decoder_for_CSTAEventReportArgument = function (el: _Element): CSTAEventReportArgument {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CSTAEventReportArgument contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "crossRefIdentifier";
    sequence[1].name = "eventSpecificInfo";
    let crossRefIdentifier!: MonitorCrossRefID;
    let eventSpecificInfo!: EventSpecificInfo;
    crossRefIdentifier = _decode_MonitorCrossRefID(sequence[0]);
    eventSpecificInfo = _decode_EventSpecificInfo(sequence[1]);
    return new CSTAEventReportArgument(
        crossRefIdentifier,
        eventSpecificInfo,

    );
}; }
    return _cached_decoder_for_CSTAEventReportArgument(el);
}

let _cached_encoder_for_CSTAEventReportArgument: $.ASN1Encoder<CSTAEventReportArgument> | null = null;

/**
 * @summary Encodes a(n) CSTAEventReportArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSTAEventReportArgument, encoded as an ASN.1 Element.
 */
export
function _encode_CSTAEventReportArgument (value: CSTAEventReportArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSTAEventReportArgument) { _cached_encoder_for_CSTAEventReportArgument = function (value: CSTAEventReportArgument, elGetter: $.ASN1Encoder<CSTAEventReportArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MonitorCrossRefID(value.crossRefIdentifier, $.BER),
            /* REQUIRED   */ _encode_EventSpecificInfo(value.eventSpecificInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CSTAEventReportArgument(value, elGetter);
}


/* eslint-enable */

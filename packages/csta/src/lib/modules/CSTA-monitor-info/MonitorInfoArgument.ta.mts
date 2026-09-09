/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ServiceCrossRefID, _decode_ServiceCrossRefID, _encode_ServiceCrossRefID } from "../CSTA-capability-exchange/ServiceCrossRefID.ta.mjs";

import { MonitorList, _decode_MonitorList, _encode_MonitorList } from "../CSTA-status-reporting/MonitorList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary MonitorInfoArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorInfoArgument ::= SEQUENCE
 * {     serviceCrossRefID        ServiceCrossRefID,
 *     segmentID            INTEGER                OPTIONAL,
 *     lastSegment            BOOLEAN,
 *     monitorList            MonitorList,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MonitorInfoArgument {
    constructor (
        /**
         * @summary `serviceCrossRefID`.
         * @public
         * @readonly
         */
        readonly serviceCrossRefID: ServiceCrossRefID,
        /**
         * @summary `segmentID`.
         * @public
         * @readonly
         */
        readonly segmentID: OPTIONAL<INTEGER>,
        /**
         * @summary `lastSegment`.
         * @public
         * @readonly
         */
        readonly lastSegment: BOOLEAN,
        /**
         * @summary `monitorList`.
         * @public
         * @readonly
         */
        readonly monitorList: MonitorList,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a MonitorInfoArgument
     * @description
     * 
     * This takes an `object` and converts it to a `MonitorInfoArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MonitorInfoArgument`.
     * @returns {MonitorInfoArgument}
     */
    public static _from_object (_o: { [_K in keyof (MonitorInfoArgument)]: (MonitorInfoArgument)[_K] }): MonitorInfoArgument {
        return new MonitorInfoArgument(_o.serviceCrossRefID, _o.segmentID, _o.lastSegment, _o.monitorList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of MonitorInfoArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MonitorInfoArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceCrossRefID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("segmentID", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("lastSegment", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("monitorList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of MonitorInfoArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MonitorInfoArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MonitorInfoArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MonitorInfoArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MonitorInfoArgument: $.ASN1Decoder<MonitorInfoArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorInfoArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorInfoArgument (el: _Element): MonitorInfoArgument {
    if (!_cached_decoder_for_MonitorInfoArgument) { _cached_decoder_for_MonitorInfoArgument = function (el: _Element): MonitorInfoArgument {
    let serviceCrossRefID!: ServiceCrossRefID;
    let segmentID: OPTIONAL<INTEGER>;
    let lastSegment!: BOOLEAN;
    let monitorList!: MonitorList;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "serviceCrossRefID": (_el: _Element): void => { serviceCrossRefID = _decode_ServiceCrossRefID(_el); },
        "segmentID": (_el: _Element): void => { segmentID = $._decodeInteger(_el); },
        "lastSegment": (_el: _Element): void => { lastSegment = $._decodeBoolean(_el); },
        "monitorList": (_el: _Element): void => { monitorList = _decode_MonitorList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MonitorInfoArgument,
        _extension_additions_list_spec_for_MonitorInfoArgument,
        _root_component_type_list_2_spec_for_MonitorInfoArgument,
        undefined,
    );
    return new MonitorInfoArgument(
        serviceCrossRefID,
        segmentID,
        lastSegment,
        monitorList,
        extensions
    );
}; }
    return _cached_decoder_for_MonitorInfoArgument(el);
}

let _cached_encoder_for_MonitorInfoArgument: $.ASN1Encoder<MonitorInfoArgument> | null = null;

/**
 * @summary Encodes a(n) MonitorInfoArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorInfoArgument, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorInfoArgument (value: MonitorInfoArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorInfoArgument) { _cached_encoder_for_MonitorInfoArgument = function (value: MonitorInfoArgument, elGetter: $.ASN1Encoder<MonitorInfoArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ServiceCrossRefID(value.serviceCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.segmentID === undefined) ? undefined : $._encodeInteger(value.segmentID, $.BER)),
            /* REQUIRED   */ $._encodeBoolean(value.lastSegment, $.BER),
            /* REQUIRED   */ _encode_MonitorList(value.monitorList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MonitorInfoArgument(value, elGetter);
}


/* eslint-enable */

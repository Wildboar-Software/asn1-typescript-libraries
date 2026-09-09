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

import { SnapshotDeviceData, _decode_SnapshotDeviceData, _encode_SnapshotDeviceData } from "../CSTA-status-reporting/SnapshotDeviceData.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SnapshotDeviceDataArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotDeviceDataArgument ::= SEQUENCE
 * {    serviceCrossRefID         ServiceCrossRefID,
 *     segmentID             INTEGER             OPTIONAL,
 *     lastSegment             BOOLEAN,
 *     snapshotData             SnapshotDeviceData,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SnapshotDeviceDataArgument {
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
         * @summary `snapshotData`.
         * @public
         * @readonly
         */
        readonly snapshotData: SnapshotDeviceData,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SnapshotDeviceDataArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SnapshotDeviceDataArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SnapshotDeviceDataArgument`.
     * @returns {SnapshotDeviceDataArgument}
     */
    public static _from_object (_o: { [_K in keyof (SnapshotDeviceDataArgument)]: (SnapshotDeviceDataArgument)[_K] }): SnapshotDeviceDataArgument {
        return new SnapshotDeviceDataArgument(_o.serviceCrossRefID, _o.segmentID, _o.lastSegment, _o.snapshotData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SnapshotDeviceDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SnapshotDeviceDataArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceCrossRefID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("segmentID", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("lastSegment", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("snapshotData", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SnapshotDeviceDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SnapshotDeviceDataArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SnapshotDeviceDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SnapshotDeviceDataArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SnapshotDeviceDataArgument: $.ASN1Decoder<SnapshotDeviceDataArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotDeviceDataArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotDeviceDataArgument (el: _Element): SnapshotDeviceDataArgument {
    if (!_cached_decoder_for_SnapshotDeviceDataArgument) { _cached_decoder_for_SnapshotDeviceDataArgument = function (el: _Element): SnapshotDeviceDataArgument {
    let serviceCrossRefID!: ServiceCrossRefID;
    let segmentID: OPTIONAL<INTEGER>;
    let lastSegment!: BOOLEAN;
    let snapshotData!: SnapshotDeviceData;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "serviceCrossRefID": (_el: _Element): void => { serviceCrossRefID = _decode_ServiceCrossRefID(_el); },
        "segmentID": (_el: _Element): void => { segmentID = $._decodeInteger(_el); },
        "lastSegment": (_el: _Element): void => { lastSegment = $._decodeBoolean(_el); },
        "snapshotData": (_el: _Element): void => { snapshotData = _decode_SnapshotDeviceData(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SnapshotDeviceDataArgument,
        _extension_additions_list_spec_for_SnapshotDeviceDataArgument,
        _root_component_type_list_2_spec_for_SnapshotDeviceDataArgument,
        undefined,
    );
    return new SnapshotDeviceDataArgument(
        serviceCrossRefID,
        segmentID,
        lastSegment,
        snapshotData,
        extensions
    );
}; }
    return _cached_decoder_for_SnapshotDeviceDataArgument(el);
}

let _cached_encoder_for_SnapshotDeviceDataArgument: $.ASN1Encoder<SnapshotDeviceDataArgument> | null = null;

/**
 * @summary Encodes a(n) SnapshotDeviceDataArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotDeviceDataArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotDeviceDataArgument (value: SnapshotDeviceDataArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotDeviceDataArgument) { _cached_encoder_for_SnapshotDeviceDataArgument = function (value: SnapshotDeviceDataArgument, elGetter: $.ASN1Encoder<SnapshotDeviceDataArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ServiceCrossRefID(value.serviceCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.segmentID === undefined) ? undefined : $._encodeInteger(value.segmentID, $.BER)),
            /* REQUIRED   */ $._encodeBoolean(value.lastSegment, $.BER),
            /* REQUIRED   */ _encode_SnapshotDeviceData(value.snapshotData, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SnapshotDeviceDataArgument(value, elGetter);
}


/* eslint-enable */

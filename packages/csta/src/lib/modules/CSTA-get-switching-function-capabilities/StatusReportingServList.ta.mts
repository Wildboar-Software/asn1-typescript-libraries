/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { MonitoringServList, _decode_MonitoringServList, _encode_MonitoringServList } from "../CSTA-capability-exchange/MonitoringServList.ta.mjs";

import { SnapshotServList, _decode_SnapshotServList, _encode_SnapshotServList } from "../CSTA-capability-exchange/SnapshotServList.ta.mjs";

import { SystemStatusServList, _decode_SystemStatusServList, _encode_SystemStatusServList } from "../CSTA-capability-exchange/SystemStatusServList.ta.mjs";



/**
 * @summary StatusReportingServList
 * @description
 *
 * Monitoring, snapshot, and system-status service bitmaps.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusReportingServList ::= SEQUENCE
 * {     monitoringServices             [ 0] IMPLICIT     MonitoringServList         OPTIONAL,
 *     snapshotServices             [ 1] IMPLICIT     SnapshotServList         OPTIONAL,
 *     systemServices                 [ 2] IMPLICIT     SystemStatusServList         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StatusReportingServList {
    constructor (
        /**
         * @summary `monitoringServices`.
         * @description
         *
         * Monitoring services.
         * @public
         * @readonly
         */
        readonly monitoringServices: OPTIONAL<MonitoringServList>,
        /**
         * @summary `snapshotServices`.
         * @description
         *
         * Snapshot services.
         * @public
         * @readonly
         */
        readonly snapshotServices: OPTIONAL<SnapshotServList>,
        /**
         * @summary `systemServices`.
         * @description
         *
         * System status services.
         * @public
         * @readonly
         */
        readonly systemServices: OPTIONAL<SystemStatusServList>
    ) {}

    /**
     * @summary Restructures an object into a StatusReportingServList
     * @description
     * 
     * This takes an `object` and converts it to a `StatusReportingServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StatusReportingServList`.
     * @returns {StatusReportingServList}
     */
    public static _from_object (_o: { [_K in keyof (StatusReportingServList)]: (StatusReportingServList)[_K] }): StatusReportingServList {
        return new StatusReportingServList(_o.monitoringServices, _o.snapshotServices, _o.systemServices);
    }


}

/**
 * @summary The Leading Root Component Types of StatusReportingServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StatusReportingServList: $.ComponentSpec[] = [
    new $.ComponentSpec("monitoringServices", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("snapshotServices", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("systemServices", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of StatusReportingServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StatusReportingServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StatusReportingServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StatusReportingServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StatusReportingServList: $.ASN1Decoder<StatusReportingServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatusReportingServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatusReportingServList (el: _Element): StatusReportingServList {
    if (!_cached_decoder_for_StatusReportingServList) { _cached_decoder_for_StatusReportingServList = function (el: _Element): StatusReportingServList {
    let monitoringServices: OPTIONAL<MonitoringServList>;
    let snapshotServices: OPTIONAL<SnapshotServList>;
    let systemServices: OPTIONAL<SystemStatusServList>;
    const callbacks: $.DecodingMap = {
        "monitoringServices": (_el: _Element): void => { monitoringServices = $._decode_implicit<MonitoringServList>(() => _decode_MonitoringServList)(_el); },
        "snapshotServices": (_el: _Element): void => { snapshotServices = $._decode_implicit<SnapshotServList>(() => _decode_SnapshotServList)(_el); },
        "systemServices": (_el: _Element): void => { systemServices = $._decode_implicit<SystemStatusServList>(() => _decode_SystemStatusServList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StatusReportingServList,
        _extension_additions_list_spec_for_StatusReportingServList,
        _root_component_type_list_2_spec_for_StatusReportingServList,
        undefined,
    );
    return new StatusReportingServList(
        monitoringServices,
        snapshotServices,
        systemServices
    );
}; }
    return _cached_decoder_for_StatusReportingServList(el);
}

let _cached_encoder_for_StatusReportingServList: $.ASN1Encoder<StatusReportingServList> | null = null;

/**
 * @summary Encodes a(n) StatusReportingServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatusReportingServList, encoded as an ASN.1 Element.
 */
export
function _encode_StatusReportingServList (value: StatusReportingServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatusReportingServList) { _cached_encoder_for_StatusReportingServList = function (value: StatusReportingServList, elGetter: $.ASN1Encoder<StatusReportingServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.monitoringServices === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MonitoringServList, $.BER)(value.monitoringServices, $.BER)),
            /* IF_ABSENT  */ ((value.snapshotServices === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SnapshotServList, $.BER)(value.snapshotServices, $.BER)),
            /* IF_ABSENT  */ ((value.systemServices === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SystemStatusServList, $.BER)(value.systemServices, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StatusReportingServList(value, elGetter);
}


/* eslint-enable */

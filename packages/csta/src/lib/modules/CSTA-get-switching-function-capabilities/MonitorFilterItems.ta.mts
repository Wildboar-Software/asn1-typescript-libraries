/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { MonitorFilter, _decode_MonitorFilter, _encode_MonitorFilter } from "../CSTA-status-reporting/MonitorFilter.ta.mjs";



/**
 * @summary MonitorFilterItems
 * @description
 *
 * Complete monitorFilter values supported per monitor object/type
 * (device-on-device, device-on-connection, call-on-device,
 * call-on-connection). Table 13-9.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorFilterItems ::= SEQUENCE
 * {     deviceOnDeviceMonitorFilter         [0] IMPLICIT     MonitorFilter             OPTIONAL,
 *     deviceOnConnectionMonitorFilter     [1] IMPLICIT     MonitorFilter             OPTIONAL,
 *     callOnDeviceMonitorFilter         [2] IMPLICIT     MonitorFilter             OPTIONAL,
 *     callOnConnectionMonitorFilter         [3] IMPLICIT     MonitorFilter             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MonitorFilterItems {
    constructor (
        /**
         * @summary `deviceOnDeviceMonitorFilter`.
         * @description
         *
         * Device-type monitoring of a device.
         * @public
         * @readonly
         */
        readonly deviceOnDeviceMonitorFilter: OPTIONAL<MonitorFilter>,
        /**
         * @summary `deviceOnConnectionMonitorFilter`.
         * @description
         *
         * Device-type monitoring of a connection.
         * @public
         * @readonly
         */
        readonly deviceOnConnectionMonitorFilter: OPTIONAL<MonitorFilter>,
        /**
         * @summary `callOnDeviceMonitorFilter`.
         * @description
         *
         * Call-type monitoring of a device.
         * @public
         * @readonly
         */
        readonly callOnDeviceMonitorFilter: OPTIONAL<MonitorFilter>,
        /**
         * @summary `callOnConnectionMonitorFilter`.
         * @description
         *
         * Call-type monitoring of a connection.
         * @public
         * @readonly
         */
        readonly callOnConnectionMonitorFilter: OPTIONAL<MonitorFilter>
    ) {}

    /**
     * @summary Restructures an object into a MonitorFilterItems
     * @description
     * 
     * This takes an `object` and converts it to a `MonitorFilterItems`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MonitorFilterItems`.
     * @returns {MonitorFilterItems}
     */
    public static _from_object (_o: { [_K in keyof (MonitorFilterItems)]: (MonitorFilterItems)[_K] }): MonitorFilterItems {
        return new MonitorFilterItems(_o.deviceOnDeviceMonitorFilter, _o.deviceOnConnectionMonitorFilter, _o.callOnDeviceMonitorFilter, _o.callOnConnectionMonitorFilter);
    }


}

/**
 * @summary The Leading Root Component Types of MonitorFilterItems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MonitorFilterItems: $.ComponentSpec[] = [
    new $.ComponentSpec("deviceOnDeviceMonitorFilter", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("deviceOnConnectionMonitorFilter", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callOnDeviceMonitorFilter", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callOnConnectionMonitorFilter", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of MonitorFilterItems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MonitorFilterItems: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MonitorFilterItems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MonitorFilterItems: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MonitorFilterItems: $.ASN1Decoder<MonitorFilterItems> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorFilterItems
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorFilterItems (el: _Element): MonitorFilterItems {
    if (!_cached_decoder_for_MonitorFilterItems) { _cached_decoder_for_MonitorFilterItems = function (el: _Element): MonitorFilterItems {
    let deviceOnDeviceMonitorFilter: OPTIONAL<MonitorFilter>;
    let deviceOnConnectionMonitorFilter: OPTIONAL<MonitorFilter>;
    let callOnDeviceMonitorFilter: OPTIONAL<MonitorFilter>;
    let callOnConnectionMonitorFilter: OPTIONAL<MonitorFilter>;
    const callbacks: $.DecodingMap = {
        "deviceOnDeviceMonitorFilter": (_el: _Element): void => { deviceOnDeviceMonitorFilter = $._decode_implicit<MonitorFilter>(() => _decode_MonitorFilter)(_el); },
        "deviceOnConnectionMonitorFilter": (_el: _Element): void => { deviceOnConnectionMonitorFilter = $._decode_implicit<MonitorFilter>(() => _decode_MonitorFilter)(_el); },
        "callOnDeviceMonitorFilter": (_el: _Element): void => { callOnDeviceMonitorFilter = $._decode_implicit<MonitorFilter>(() => _decode_MonitorFilter)(_el); },
        "callOnConnectionMonitorFilter": (_el: _Element): void => { callOnConnectionMonitorFilter = $._decode_implicit<MonitorFilter>(() => _decode_MonitorFilter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MonitorFilterItems,
        _extension_additions_list_spec_for_MonitorFilterItems,
        _root_component_type_list_2_spec_for_MonitorFilterItems,
        undefined,
    );
    return new MonitorFilterItems(
        deviceOnDeviceMonitorFilter,
        deviceOnConnectionMonitorFilter,
        callOnDeviceMonitorFilter,
        callOnConnectionMonitorFilter
    );
}; }
    return _cached_decoder_for_MonitorFilterItems(el);
}

let _cached_encoder_for_MonitorFilterItems: $.ASN1Encoder<MonitorFilterItems> | null = null;

/**
 * @summary Encodes a(n) MonitorFilterItems into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorFilterItems, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorFilterItems (value: MonitorFilterItems, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorFilterItems) { _cached_encoder_for_MonitorFilterItems = function (value: MonitorFilterItems, elGetter: $.ASN1Encoder<MonitorFilterItems>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.deviceOnDeviceMonitorFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MonitorFilter, $.BER)(value.deviceOnDeviceMonitorFilter, $.BER)),
            /* IF_ABSENT  */ ((value.deviceOnConnectionMonitorFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MonitorFilter, $.BER)(value.deviceOnConnectionMonitorFilter, $.BER)),
            /* IF_ABSENT  */ ((value.callOnDeviceMonitorFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MonitorFilter, $.BER)(value.callOnDeviceMonitorFilter, $.BER)),
            /* IF_ABSENT  */ ((value.callOnConnectionMonitorFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MonitorFilter, $.BER)(value.callOnConnectionMonitorFilter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MonitorFilterItems(value, elGetter);
}


/* eslint-enable */

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

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";



/**
 * @summary MonitorListEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorListEntry ::= SEQUENCE
 * {    monitorCrossRefID        MonitorCrossRefID,
 *     monitorObject            DeviceID }
 * ```
 * 
 * @class
 */
export
class MonitorListEntry {
    constructor (
        /**
         * @summary `monitorCrossRefID`.
         * @public
         * @readonly
         */
        readonly monitorCrossRefID: MonitorCrossRefID,
        /**
         * @summary `monitorObject`.
         * @public
         * @readonly
         */
        readonly monitorObject: DeviceID
    ) {}

    /**
     * @summary Restructures an object into a MonitorListEntry
     * @description
     * 
     * This takes an `object` and converts it to a `MonitorListEntry`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MonitorListEntry`.
     * @returns {MonitorListEntry}
     */
    public static _from_object (_o: { [_K in keyof (MonitorListEntry)]: (MonitorListEntry)[_K] }): MonitorListEntry {
        return new MonitorListEntry(_o.monitorCrossRefID, _o.monitorObject);
    }


}

/**
 * @summary The Leading Root Component Types of MonitorListEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MonitorListEntry: $.ComponentSpec[] = [
    new $.ComponentSpec("monitorCrossRefID", false, $.hasTag(_TagClass.application, 21)),
    new $.ComponentSpec("monitorObject", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of MonitorListEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MonitorListEntry: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MonitorListEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MonitorListEntry: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MonitorListEntry: $.ASN1Decoder<MonitorListEntry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorListEntry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorListEntry (el: _Element): MonitorListEntry {
    if (!_cached_decoder_for_MonitorListEntry) { _cached_decoder_for_MonitorListEntry = function (el: _Element): MonitorListEntry {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MonitorListEntry contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "monitorCrossRefID";
    sequence[1].name = "monitorObject";
    let monitorCrossRefID!: MonitorCrossRefID;
    let monitorObject!: DeviceID;
    monitorCrossRefID = _decode_MonitorCrossRefID(sequence[0]);
    monitorObject = _decode_DeviceID(sequence[1]);
    return new MonitorListEntry(
        monitorCrossRefID,
        monitorObject,

    );
}; }
    return _cached_decoder_for_MonitorListEntry(el);
}

let _cached_encoder_for_MonitorListEntry: $.ASN1Encoder<MonitorListEntry> | null = null;

/**
 * @summary Encodes a(n) MonitorListEntry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorListEntry, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorListEntry (value: MonitorListEntry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorListEntry) { _cached_encoder_for_MonitorListEntry = function (value: MonitorListEntry, elGetter: $.ASN1Encoder<MonitorListEntry>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MonitorCrossRefID(value.monitorCrossRefID, $.BER),
            /* REQUIRED   */ _encode_DeviceID(value.monitorObject, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MonitorListEntry(value, elGetter);
}


/* eslint-enable */

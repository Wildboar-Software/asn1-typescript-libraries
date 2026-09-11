/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError
} from "@wildboar/asn1";
import { SnapshotCall, _decode_SnapshotCall, _encode_SnapshotCall } from "../CSTA-capability-exchange/SnapshotCall.ta.mjs";

import { SnapshotDevice, _decode_SnapshotDevice, _encode_SnapshotDevice } from "../CSTA-capability-exchange/SnapshotDevice.ta.mjs";

import { SnapshotCallData, _decode_SnapshotCallData, _encode_SnapshotCallData } from "../CSTA-capability-exchange/SnapshotCallData.ta.mjs";

import { SnapshotDeviceData, _decode_SnapshotDeviceData, _encode_SnapshotDeviceData } from "../CSTA-capability-exchange/SnapshotDeviceData.ta.mjs";



/**
 * @summary SnapshotServList
 * @description
 * Snapshot services the SF supports (ECMA-269 Annex C.4, ECMA-285 §9.10). Omit
 * unsupported services.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotServList ::= SEQUENCE
 * {     snapshotCall             [0] IMPLICIT SnapshotCall,
 *     snapshotDevice             [1] IMPLICIT SnapshotDevice,
 *     snapshotCallData         [2] IMPLICIT SnapshotCallData,
 *     snapshotDeviceData         [3] IMPLICIT SnapshotDeviceData }
 * ```
 * 
 * @class
 */
export
class SnapshotServList {
    constructor (
        /**
         * @summary `snapshotCall`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly snapshotCall: SnapshotCall,
        /**
         * @summary `snapshotDevice`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly snapshotDevice: SnapshotDevice,
        /**
         * @summary `snapshotCallData`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly snapshotCallData: SnapshotCallData,
        /**
         * @summary `snapshotDeviceData`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly snapshotDeviceData: SnapshotDeviceData
    ) {}

    /**
     * @summary Restructures an object into a SnapshotServList
     * @description
     * 
     * This takes an `object` and converts it to a `SnapshotServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SnapshotServList`.
     * @returns {SnapshotServList}
     */
    public static _from_object (_o: { [_K in keyof (SnapshotServList)]: (SnapshotServList)[_K] }): SnapshotServList {
        return new SnapshotServList(_o.snapshotCall, _o.snapshotDevice, _o.snapshotCallData, _o.snapshotDeviceData);
    }


}

/**
 * @summary The Leading Root Component Types of SnapshotServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SnapshotServList: $.ComponentSpec[] = [
    new $.ComponentSpec("snapshotCall", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("snapshotDevice", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("snapshotCallData", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("snapshotDeviceData", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of SnapshotServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SnapshotServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SnapshotServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SnapshotServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SnapshotServList: $.ASN1Decoder<SnapshotServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotServList (el: _Element): SnapshotServList {
    if (!_cached_decoder_for_SnapshotServList) { _cached_decoder_for_SnapshotServList = function (el: _Element): SnapshotServList {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("SnapshotServList contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "snapshotCall";
    sequence[1].name = "snapshotDevice";
    sequence[2].name = "snapshotCallData";
    sequence[3].name = "snapshotDeviceData";
    let snapshotCall!: SnapshotCall;
    let snapshotDevice!: SnapshotDevice;
    let snapshotCallData!: SnapshotCallData;
    let snapshotDeviceData!: SnapshotDeviceData;
    snapshotCall = $._decode_implicit<SnapshotCall>(() => _decode_SnapshotCall)(sequence[0]);
    snapshotDevice = $._decode_implicit<SnapshotDevice>(() => _decode_SnapshotDevice)(sequence[1]);
    snapshotCallData = $._decode_implicit<SnapshotCallData>(() => _decode_SnapshotCallData)(sequence[2]);
    snapshotDeviceData = $._decode_implicit<SnapshotDeviceData>(() => _decode_SnapshotDeviceData)(sequence[3]);
    return new SnapshotServList(
        snapshotCall,
        snapshotDevice,
        snapshotCallData,
        snapshotDeviceData,

    );
}; }
    return _cached_decoder_for_SnapshotServList(el);
}

let _cached_encoder_for_SnapshotServList: $.ASN1Encoder<SnapshotServList> | null = null;

/**
 * @summary Encodes a(n) SnapshotServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotServList, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotServList (value: SnapshotServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotServList) { _cached_encoder_for_SnapshotServList = function (value: SnapshotServList, elGetter: $.ASN1Encoder<SnapshotServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SnapshotCall, $.BER)(value.snapshotCall, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SnapshotDevice, $.BER)(value.snapshotDevice, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SnapshotCallData, $.BER)(value.snapshotCallData, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SnapshotDeviceData, $.BER)(value.snapshotDeviceData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SnapshotServList(value, elGetter);
}


/* eslint-enable */

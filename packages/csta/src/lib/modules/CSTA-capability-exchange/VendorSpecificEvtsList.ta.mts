/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { PrivateEvent, _decode_PrivateEvent, _encode_PrivateEvent } from "../CSTA-capability-exchange/PrivateEvent.ta.mjs";



/**
 * @summary VendorSpecificEvtsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VendorSpecificEvtsList ::= SEQUENCE
 * {     privateEvent                 [0] IMPLICIT     PrivateEvent             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class VendorSpecificEvtsList {
    constructor (
        /**
         * @summary `privateEvent`.
         * @public
         * @readonly
         */
        readonly privateEvent: OPTIONAL<PrivateEvent>
    ) {}

    /**
     * @summary Restructures an object into a VendorSpecificEvtsList
     * @description
     * 
     * This takes an `object` and converts it to a `VendorSpecificEvtsList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VendorSpecificEvtsList`.
     * @returns {VendorSpecificEvtsList}
     */
    public static _from_object (_o: { [_K in keyof (VendorSpecificEvtsList)]: (VendorSpecificEvtsList)[_K] }): VendorSpecificEvtsList {
        return new VendorSpecificEvtsList(_o.privateEvent);
    }


}

/**
 * @summary The Leading Root Component Types of VendorSpecificEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VendorSpecificEvtsList: $.ComponentSpec[] = [
    new $.ComponentSpec("privateEvent", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of VendorSpecificEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VendorSpecificEvtsList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VendorSpecificEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VendorSpecificEvtsList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_VendorSpecificEvtsList: $.ASN1Decoder<VendorSpecificEvtsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VendorSpecificEvtsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VendorSpecificEvtsList (el: _Element): VendorSpecificEvtsList {
    if (!_cached_decoder_for_VendorSpecificEvtsList) { _cached_decoder_for_VendorSpecificEvtsList = function (el: _Element): VendorSpecificEvtsList {
    let privateEvent: OPTIONAL<PrivateEvent>;
    const callbacks: $.DecodingMap = {
        "privateEvent": (_el: _Element): void => { privateEvent = $._decode_implicit<PrivateEvent>(() => _decode_PrivateEvent)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_VendorSpecificEvtsList,
        _extension_additions_list_spec_for_VendorSpecificEvtsList,
        _root_component_type_list_2_spec_for_VendorSpecificEvtsList,
        undefined,
    );
    return new VendorSpecificEvtsList(
        privateEvent
    );
}; }
    return _cached_decoder_for_VendorSpecificEvtsList(el);
}

let _cached_encoder_for_VendorSpecificEvtsList: $.ASN1Encoder<VendorSpecificEvtsList> | null = null;

/**
 * @summary Encodes a(n) VendorSpecificEvtsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VendorSpecificEvtsList, encoded as an ASN.1 Element.
 */
export
function _encode_VendorSpecificEvtsList (value: VendorSpecificEvtsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VendorSpecificEvtsList) { _cached_encoder_for_VendorSpecificEvtsList = function (value: VendorSpecificEvtsList, elGetter: $.ASN1Encoder<VendorSpecificEvtsList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.privateEvent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_PrivateEvent, $.BER)(value.privateEvent, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VendorSpecificEvtsList(value, elGetter);
}


/* eslint-enable */

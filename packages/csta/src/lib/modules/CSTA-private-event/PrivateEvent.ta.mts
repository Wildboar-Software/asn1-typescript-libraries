/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CSTASecurityData, _decode_CSTASecurityData, _encode_CSTASecurityData } from "../CSTA-security/CSTASecurityData.ta.mjs";

import { CSTAPrivateData, _decode_CSTAPrivateData, _encode_CSTAPrivateData } from "../CSTA-extension-types/CSTAPrivateData.ta.mjs";



/**
 * @summary PrivateEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateEvent ::= SEQUENCE
 * {    security            CSTASecurityData            OPTIONAL,
 *     privateData            CSTAPrivateData}
 * ```
 * 
 * @class
 */
export
class PrivateEvent {
    constructor (
        /**
         * @summary `security`.
         * @public
         * @readonly
         */
        readonly security: OPTIONAL<CSTASecurityData>,
        /**
         * @summary `privateData`.
         * @public
         * @readonly
         */
        readonly privateData: CSTAPrivateData
    ) {}

    /**
     * @summary Restructures an object into a PrivateEvent
     * @description
     * 
     * This takes an `object` and converts it to a `PrivateEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivateEvent`.
     * @returns {PrivateEvent}
     */
    public static _from_object (_o: { [_K in keyof (PrivateEvent)]: (PrivateEvent)[_K] }): PrivateEvent {
        return new PrivateEvent(_o.security, _o.privateData);
    }


}

/**
 * @summary The Leading Root Component Types of PrivateEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrivateEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("security", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("privateData", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of PrivateEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrivateEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrivateEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrivateEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PrivateEvent: $.ASN1Decoder<PrivateEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateEvent (el: _Element): PrivateEvent {
    if (!_cached_decoder_for_PrivateEvent) { _cached_decoder_for_PrivateEvent = function (el: _Element): PrivateEvent {
    let security: OPTIONAL<CSTASecurityData>;
    let privateData!: CSTAPrivateData;
    const callbacks: $.DecodingMap = {
        "security": (_el: _Element): void => { security = _decode_CSTASecurityData(_el); },
        "privateData": (_el: _Element): void => { privateData = _decode_CSTAPrivateData(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrivateEvent,
        _extension_additions_list_spec_for_PrivateEvent,
        _root_component_type_list_2_spec_for_PrivateEvent,
        undefined,
    );
    return new PrivateEvent(
        security,
        privateData
    );
}; }
    return _cached_decoder_for_PrivateEvent(el);
}

let _cached_encoder_for_PrivateEvent: $.ASN1Encoder<PrivateEvent> | null = null;

/**
 * @summary Encodes a(n) PrivateEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateEvent, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateEvent (value: PrivateEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateEvent) { _cached_encoder_for_PrivateEvent = function (value: PrivateEvent, elGetter: $.ASN1Encoder<PrivateEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.security === undefined) ? undefined : _encode_CSTASecurityData(value.security, $.BER)),
            /* REQUIRED   */ _encode_CSTAPrivateData(value.privateData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PrivateEvent(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { AuditoryApparatusID, _decode_AuditoryApparatusID, _encode_AuditoryApparatusID } from "../CSTA-physical-device-feature/AuditoryApparatusID.ta.mjs";

import { MicGainAbs, _decode_MicGainAbs, _encode_MicGainAbs } from "../CSTA-physical-device-feature/MicGainAbs.ta.mjs";



/**
 * @summary MicrophoneGainList_Item
 * @description
 *
 * Gain for one apparatus (ECMA-269 §21.1.9.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MicrophoneGainList-Item ::= SEQUENCE {
 *     auditoryApparatus [UNIVERSAL 4] AuditoryApparatusID,
 *     micGainAbs [UNIVERSAL 2] MicGainAbs OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MicrophoneGainList_Item {
    constructor (
        /**
         * @summary `auditoryApparatus`.
         * @description
         *
         * Apparatus that owns the microphone.
         * @public
         * @readonly
         */
        readonly auditoryApparatus: AuditoryApparatusID,
        /**
         * @summary `micGainAbs`.
         * @description
         *
         * Absolute gain. 0 silence, 100 maximum; 1–99 device-specific. Absent:
         * unknown.
         * @public
         * @readonly
         */
        readonly micGainAbs: OPTIONAL<MicGainAbs>
    ) {}

    /**
     * @summary Restructures an object into a MicrophoneGainList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `MicrophoneGainList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MicrophoneGainList_Item`.
     * @returns {MicrophoneGainList_Item}
     */
    public static _from_object (_o: { [_K in keyof (MicrophoneGainList_Item)]: (MicrophoneGainList_Item)[_K] }): MicrophoneGainList_Item {
        return new MicrophoneGainList_Item(_o.auditoryApparatus, _o.micGainAbs);
    }


}

/**
 * @summary The Leading Root Component Types of MicrophoneGainList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MicrophoneGainList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("auditoryApparatus", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("micGainAbs", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of MicrophoneGainList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MicrophoneGainList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MicrophoneGainList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MicrophoneGainList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MicrophoneGainList_Item: $.ASN1Decoder<MicrophoneGainList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MicrophoneGainList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MicrophoneGainList_Item (el: _Element): MicrophoneGainList_Item {
    if (!_cached_decoder_for_MicrophoneGainList_Item) { _cached_decoder_for_MicrophoneGainList_Item = function (el: _Element): MicrophoneGainList_Item {
    let auditoryApparatus!: AuditoryApparatusID;
    let micGainAbs: OPTIONAL<MicGainAbs>;
    const callbacks: $.DecodingMap = {
        "auditoryApparatus": (_el: _Element): void => { auditoryApparatus = _decode_AuditoryApparatusID(_el); },
        "micGainAbs": (_el: _Element): void => { micGainAbs = _decode_MicGainAbs(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MicrophoneGainList_Item,
        _extension_additions_list_spec_for_MicrophoneGainList_Item,
        _root_component_type_list_2_spec_for_MicrophoneGainList_Item,
        undefined,
    );
    return new MicrophoneGainList_Item(
        auditoryApparatus,
        micGainAbs
    );
}; }
    return _cached_decoder_for_MicrophoneGainList_Item(el);
}

let _cached_encoder_for_MicrophoneGainList_Item: $.ASN1Encoder<MicrophoneGainList_Item> | null = null;

/**
 * @summary Encodes a(n) MicrophoneGainList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MicrophoneGainList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_MicrophoneGainList_Item (value: MicrophoneGainList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MicrophoneGainList_Item) { _cached_encoder_for_MicrophoneGainList_Item = function (value: MicrophoneGainList_Item, elGetter: $.ASN1Encoder<MicrophoneGainList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AuditoryApparatusID(value.auditoryApparatus, $.BER),
            /* IF_ABSENT  */ ((value.micGainAbs === undefined) ? undefined : _encode_MicGainAbs(value.micGainAbs, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MicrophoneGainList_Item(value, elGetter);
}


/* eslint-enable */

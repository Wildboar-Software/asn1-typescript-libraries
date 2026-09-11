/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    BOOLEAN,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError
} from "@wildboar/asn1";
import { AuditoryApparatusID, _decode_AuditoryApparatusID, _encode_AuditoryApparatusID } from "../CSTA-physical-device-feature/AuditoryApparatusID.ta.mjs";



/**
 * @summary SpeakerMuteList_Item
 * @description
 *
 * Mute status for one speaker (ECMA-269 §21.1.12.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpeakerMuteList-Item ::= SEQUENCE {
 *     auditoryApparatus [UNIVERSAL 4] AuditoryApparatusID,
 *     speakerMuteOn [UNIVERSAL 1] BOOLEAN
 * }
 * ```
 * 
 * @class
 */
export
class SpeakerMuteList_Item {
    constructor (
        /**
         * @summary `auditoryApparatus`.
         * @description
         *
         * Apparatus that owns the speaker.
         * @public
         * @readonly
         */
        readonly auditoryApparatus: AuditoryApparatusID,
        /**
         * @summary `speakerMuteOn`.
         * @description
         *
         * FALSE = speaker activated; TRUE = muted.
         * @public
         * @readonly
         */
        readonly speakerMuteOn: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a SpeakerMuteList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `SpeakerMuteList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SpeakerMuteList_Item`.
     * @returns {SpeakerMuteList_Item}
     */
    public static _from_object (_o: { [_K in keyof (SpeakerMuteList_Item)]: (SpeakerMuteList_Item)[_K] }): SpeakerMuteList_Item {
        return new SpeakerMuteList_Item(_o.auditoryApparatus, _o.speakerMuteOn);
    }


}

/**
 * @summary The Leading Root Component Types of SpeakerMuteList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SpeakerMuteList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("auditoryApparatus", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("speakerMuteOn", false, $.hasTag(_TagClass.universal, 1))
];

/**
 * @summary The Trailing Root Component Types of SpeakerMuteList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SpeakerMuteList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SpeakerMuteList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SpeakerMuteList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SpeakerMuteList_Item: $.ASN1Decoder<SpeakerMuteList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpeakerMuteList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpeakerMuteList_Item (el: _Element): SpeakerMuteList_Item {
    if (!_cached_decoder_for_SpeakerMuteList_Item) { _cached_decoder_for_SpeakerMuteList_Item = function (el: _Element): SpeakerMuteList_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SpeakerMuteList-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "auditoryApparatus";
    sequence[1].name = "speakerMuteOn";
    let auditoryApparatus!: AuditoryApparatusID;
    let speakerMuteOn!: BOOLEAN;
    auditoryApparatus = _decode_AuditoryApparatusID(sequence[0]);
    speakerMuteOn = $._decodeBoolean(sequence[1]);
    return new SpeakerMuteList_Item(
        auditoryApparatus,
        speakerMuteOn,

    );
}; }
    return _cached_decoder_for_SpeakerMuteList_Item(el);
}

let _cached_encoder_for_SpeakerMuteList_Item: $.ASN1Encoder<SpeakerMuteList_Item> | null = null;

/**
 * @summary Encodes a(n) SpeakerMuteList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpeakerMuteList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_SpeakerMuteList_Item (value: SpeakerMuteList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpeakerMuteList_Item) { _cached_encoder_for_SpeakerMuteList_Item = function (value: SpeakerMuteList_Item, elGetter: $.ASN1Encoder<SpeakerMuteList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AuditoryApparatusID(value.auditoryApparatus, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.speakerMuteOn, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SpeakerMuteList_Item(value, elGetter);
}


/* eslint-enable */

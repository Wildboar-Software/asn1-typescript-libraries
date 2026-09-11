/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError
} from "@wildboar/asn1";
import { AuditoryApparatusID, _decode_AuditoryApparatusID, _encode_AuditoryApparatusID } from "../CSTA-physical-device-feature/AuditoryApparatusID.ta.mjs";

import {
    AuditoryApparatusList_Item_auditoryApparatusType,
    _enum_for_AuditoryApparatusList_Item_auditoryApparatusType,
    _decode_AuditoryApparatusList_Item_auditoryApparatusType,
    _encode_AuditoryApparatusList_Item_auditoryApparatusType
} from "../CSTA-physical-device-feature/AuditoryApparatusList-Item-auditoryApparatusType.ta.mjs";

import {
    AuditoryApparatusList_Item_speaker,
    _decode_AuditoryApparatusList_Item_speaker,
    _encode_AuditoryApparatusList_Item_speaker
} from "../CSTA-physical-device-feature/AuditoryApparatusList-Item-speaker.ta.mjs";

import {
    AuditoryApparatusList_Item_microphone,
    _decode_AuditoryApparatusList_Item_microphone,
    _encode_AuditoryApparatusList_Item_microphone
} from "../CSTA-physical-device-feature/AuditoryApparatusList-Item-microphone.ta.mjs";

import {
    AuditoryApparatusList_Item_hookswitch,
    _decode_AuditoryApparatusList_Item_hookswitch,
    _encode_AuditoryApparatusList_Item_hookswitch
} from "../CSTA-physical-device-feature/AuditoryApparatusList-Item-hookswitch.ta.mjs";

import { HookswitchID, _decode_HookswitchID, _encode_HookswitchID } from "../CSTA-physical-device-feature/HookswitchID.ta.mjs";



/**
 * @summary AuditoryApparatusList_Item
 * @description
 *
 * One auditory apparatus and its speaker, microphone, and hookswitch
 * capabilities. ECMA-285 §9.16.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditoryApparatusList-Item ::= SEQUENCE {
 *     auditoryApparatus [UNIVERSAL 4] AuditoryApparatusID,
 *     auditoryApparatusType [UNIVERSAL 10] AuditoryApparatusList_Item_auditoryApparatusType,
 *     speaker [UNIVERSAL 3] AuditoryApparatusList_Item_speaker,
 *     microphone [UNIVERSAL 3] AuditoryApparatusList_Item_microphone,
 *     hookswitch [UNIVERSAL 3] AuditoryApparatusList_Item_hookswitch,
 *     hookswitchID [UNIVERSAL 4] HookswitchID
 * }
 * ```
 * 
 * @class
 */
export
class AuditoryApparatusList_Item {
    constructor (
        /**
         * @summary `auditoryApparatus`.
         * @description
         *
         * Identifier of this apparatus. ECMA-269 §12.3.4.
         *
         * @public
         * @readonly
         */
        readonly auditoryApparatus: AuditoryApparatusID,
        /**
         * @summary `auditoryApparatusType`.
         * @description
         *
         * Speakerphone, handset, headset, speaker-only, or other. ECMA-285
         * §9.16.
         *
         * @public
         * @readonly
         */
        readonly auditoryApparatusType: AuditoryApparatusList_Item_auditoryApparatusType,
        /**
         * @summary `speaker`.
         * @description
         *
         * Whether a speaker is present and volume/mute can be set or read.
         * ECMA-285 §9.16.
         *
         * @public
         * @readonly
         */
        readonly speaker: AuditoryApparatusList_Item_speaker,
        /**
         * @summary `microphone`.
         * @description
         *
         * Whether a microphone is present and gain/mute can be set or read.
         * ECMA-285 §9.16.
         *
         * @public
         * @readonly
         */
        readonly microphone: AuditoryApparatusList_Item_microphone,
        /**
         * @summary `hookswitch`.
         * @description
         *
         * Whether hookswitch can be set and whether it is on-hook. ECMA-285
         * §9.16.
         *
         * @public
         * @readonly
         */
        readonly hookswitch: AuditoryApparatusList_Item_hookswitch,
        /**
         * @summary `hookswitchID`.
         * @description
         *
         * Hookswitch of this apparatus. ECMA-269 §12.3.14.
         *
         * @public
         * @readonly
         */
        readonly hookswitchID: HookswitchID
    ) {}

    /**
     * @summary Restructures an object into a AuditoryApparatusList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `AuditoryApparatusList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuditoryApparatusList_Item`.
     * @returns {AuditoryApparatusList_Item}
     */
    public static _from_object (_o: { [_K in keyof (AuditoryApparatusList_Item)]: (AuditoryApparatusList_Item)[_K] }): AuditoryApparatusList_Item {
        return new AuditoryApparatusList_Item(_o.auditoryApparatus, _o.auditoryApparatusType, _o.speaker, _o.microphone, _o.hookswitch, _o.hookswitchID);
    }

        /**
         * @summary The enum used as the type of the component `auditoryApparatusType`
         * @public
         * @static
         */

    public static _enum_for_auditoryApparatusType = _enum_for_AuditoryApparatusList_Item_auditoryApparatusType;
}

/**
 * @summary The Leading Root Component Types of AuditoryApparatusList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuditoryApparatusList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("auditoryApparatus", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("auditoryApparatusType", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("speaker", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("microphone", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("hookswitch", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("hookswitchID", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of AuditoryApparatusList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuditoryApparatusList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuditoryApparatusList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuditoryApparatusList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuditoryApparatusList_Item: $.ASN1Decoder<AuditoryApparatusList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditoryApparatusList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditoryApparatusList_Item (el: _Element): AuditoryApparatusList_Item {
    if (!_cached_decoder_for_AuditoryApparatusList_Item) { _cached_decoder_for_AuditoryApparatusList_Item = function (el: _Element): AuditoryApparatusList_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("AuditoryApparatusList-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "auditoryApparatus";
    sequence[1].name = "auditoryApparatusType";
    sequence[2].name = "speaker";
    sequence[3].name = "microphone";
    sequence[4].name = "hookswitch";
    sequence[5].name = "hookswitchID";
    let auditoryApparatus!: AuditoryApparatusID;
    let auditoryApparatusType!: AuditoryApparatusList_Item_auditoryApparatusType;
    let speaker!: AuditoryApparatusList_Item_speaker;
    let microphone!: AuditoryApparatusList_Item_microphone;
    let hookswitch!: AuditoryApparatusList_Item_hookswitch;
    let hookswitchID!: HookswitchID;
    auditoryApparatus = _decode_AuditoryApparatusID(sequence[0]);
    auditoryApparatusType = _decode_AuditoryApparatusList_Item_auditoryApparatusType(sequence[1]);
    speaker = _decode_AuditoryApparatusList_Item_speaker(sequence[2]);
    microphone = _decode_AuditoryApparatusList_Item_microphone(sequence[3]);
    hookswitch = _decode_AuditoryApparatusList_Item_hookswitch(sequence[4]);
    hookswitchID = _decode_HookswitchID(sequence[5]);
    return new AuditoryApparatusList_Item(
        auditoryApparatus,
        auditoryApparatusType,
        speaker,
        microphone,
        hookswitch,
        hookswitchID,

    );
}; }
    return _cached_decoder_for_AuditoryApparatusList_Item(el);
}

let _cached_encoder_for_AuditoryApparatusList_Item: $.ASN1Encoder<AuditoryApparatusList_Item> | null = null;

/**
 * @summary Encodes a(n) AuditoryApparatusList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditoryApparatusList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_AuditoryApparatusList_Item (value: AuditoryApparatusList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditoryApparatusList_Item) { _cached_encoder_for_AuditoryApparatusList_Item = function (value: AuditoryApparatusList_Item, elGetter: $.ASN1Encoder<AuditoryApparatusList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AuditoryApparatusID(value.auditoryApparatus, $.BER),
            /* REQUIRED   */ _encode_AuditoryApparatusList_Item_auditoryApparatusType(value.auditoryApparatusType, $.BER),
            /* REQUIRED   */ _encode_AuditoryApparatusList_Item_speaker(value.speaker, $.BER),
            /* REQUIRED   */ _encode_AuditoryApparatusList_Item_microphone(value.microphone, $.BER),
            /* REQUIRED   */ _encode_AuditoryApparatusList_Item_hookswitch(value.hookswitch, $.BER),
            /* REQUIRED   */ _encode_HookswitchID(value.hookswitchID, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuditoryApparatusList_Item(value, elGetter);
}


/* eslint-enable */

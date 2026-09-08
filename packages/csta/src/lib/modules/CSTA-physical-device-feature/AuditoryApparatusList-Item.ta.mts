/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { AuditoryApparatusID, _decode_AuditoryApparatusID, _encode_AuditoryApparatusID } from "../CSTA-physical-device-feature/AuditoryApparatusID.ta.mjs";
// export { AuditoryApparatusID, _decode_AuditoryApparatusID, _encode_AuditoryApparatusID } from "../CSTA-physical-device-feature/AuditoryApparatusID.ta.mjs";
import { AuditoryApparatusList_Item_auditoryApparatusType, _enum_for_AuditoryApparatusList_Item_auditoryApparatusType, AuditoryApparatusList_Item_auditoryApparatusType_speakerphone /* IMPORTED_LONG_ENUMERATION_ITEM */, speakerphone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuditoryApparatusList_Item_auditoryApparatusType_handset /* IMPORTED_LONG_ENUMERATION_ITEM */, handset /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuditoryApparatusList_Item_auditoryApparatusType_headset /* IMPORTED_LONG_ENUMERATION_ITEM */, headset /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuditoryApparatusList_Item_auditoryApparatusType_speakerOnlyPhone /* IMPORTED_LONG_ENUMERATION_ITEM */, speakerOnlyPhone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuditoryApparatusList_Item_auditoryApparatusType_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AuditoryApparatusList_Item_auditoryApparatusType, _encode_AuditoryApparatusList_Item_auditoryApparatusType } from "../CSTA-physical-device-feature/AuditoryApparatusList-Item-auditoryApparatusType.ta.mjs";
// export { AuditoryApparatusList_Item_auditoryApparatusType, _enum_for_AuditoryApparatusList_Item_auditoryApparatusType, AuditoryApparatusList_Item_auditoryApparatusType_speakerphone /* IMPORTED_LONG_ENUMERATION_ITEM */, speakerphone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuditoryApparatusList_Item_auditoryApparatusType_handset /* IMPORTED_LONG_ENUMERATION_ITEM */, handset /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuditoryApparatusList_Item_auditoryApparatusType_headset /* IMPORTED_LONG_ENUMERATION_ITEM */, headset /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuditoryApparatusList_Item_auditoryApparatusType_speakerOnlyPhone /* IMPORTED_LONG_ENUMERATION_ITEM */, speakerOnlyPhone /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuditoryApparatusList_Item_auditoryApparatusType_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AuditoryApparatusList_Item_auditoryApparatusType, _encode_AuditoryApparatusList_Item_auditoryApparatusType } from "../CSTA-physical-device-feature/AuditoryApparatusList-Item-auditoryApparatusType.ta.mjs";
import { AuditoryApparatusList_Item_speaker, AuditoryApparatusList_Item_speaker_present /* IMPORTED_LONG_NAMED_BIT */, AuditoryApparatusList_Item_speaker_volumeSettable /* IMPORTED_LONG_NAMED_BIT */, volumeSettable /* IMPORTED_SHORT_NAMED_BIT */, AuditoryApparatusList_Item_speaker_volumeReadable /* IMPORTED_LONG_NAMED_BIT */, volumeReadable /* IMPORTED_SHORT_NAMED_BIT */, AuditoryApparatusList_Item_speaker_muteSettable /* IMPORTED_LONG_NAMED_BIT */, AuditoryApparatusList_Item_speaker_muteReadable /* IMPORTED_LONG_NAMED_BIT */, _decode_AuditoryApparatusList_Item_speaker, _encode_AuditoryApparatusList_Item_speaker } from "../CSTA-physical-device-feature/AuditoryApparatusList-Item-speaker.ta.mjs";
// export { AuditoryApparatusList_Item_speaker, AuditoryApparatusList_Item_speaker_present /* IMPORTED_LONG_NAMED_BIT */, AuditoryApparatusList_Item_speaker_volumeSettable /* IMPORTED_LONG_NAMED_BIT */, volumeSettable /* IMPORTED_SHORT_NAMED_BIT */, AuditoryApparatusList_Item_speaker_volumeReadable /* IMPORTED_LONG_NAMED_BIT */, volumeReadable /* IMPORTED_SHORT_NAMED_BIT */, AuditoryApparatusList_Item_speaker_muteSettable /* IMPORTED_LONG_NAMED_BIT */, AuditoryApparatusList_Item_speaker_muteReadable /* IMPORTED_LONG_NAMED_BIT */, _decode_AuditoryApparatusList_Item_speaker, _encode_AuditoryApparatusList_Item_speaker } from "../CSTA-physical-device-feature/AuditoryApparatusList-Item-speaker.ta.mjs";
import { AuditoryApparatusList_Item_microphone, AuditoryApparatusList_Item_microphone_present /* IMPORTED_LONG_NAMED_BIT */, AuditoryApparatusList_Item_microphone_gainSettable /* IMPORTED_LONG_NAMED_BIT */, gainSettable /* IMPORTED_SHORT_NAMED_BIT */, AuditoryApparatusList_Item_microphone_gainReadable /* IMPORTED_LONG_NAMED_BIT */, gainReadable /* IMPORTED_SHORT_NAMED_BIT */, AuditoryApparatusList_Item_microphone_muteSettable /* IMPORTED_LONG_NAMED_BIT */, AuditoryApparatusList_Item_microphone_muteReadable /* IMPORTED_LONG_NAMED_BIT */, _decode_AuditoryApparatusList_Item_microphone, _encode_AuditoryApparatusList_Item_microphone } from "../CSTA-physical-device-feature/AuditoryApparatusList-Item-microphone.ta.mjs";
// export { AuditoryApparatusList_Item_microphone, AuditoryApparatusList_Item_microphone_present /* IMPORTED_LONG_NAMED_BIT */, AuditoryApparatusList_Item_microphone_gainSettable /* IMPORTED_LONG_NAMED_BIT */, gainSettable /* IMPORTED_SHORT_NAMED_BIT */, AuditoryApparatusList_Item_microphone_gainReadable /* IMPORTED_LONG_NAMED_BIT */, gainReadable /* IMPORTED_SHORT_NAMED_BIT */, AuditoryApparatusList_Item_microphone_muteSettable /* IMPORTED_LONG_NAMED_BIT */, AuditoryApparatusList_Item_microphone_muteReadable /* IMPORTED_LONG_NAMED_BIT */, _decode_AuditoryApparatusList_Item_microphone, _encode_AuditoryApparatusList_Item_microphone } from "../CSTA-physical-device-feature/AuditoryApparatusList-Item-microphone.ta.mjs";
import { AuditoryApparatusList_Item_hookswitch, AuditoryApparatusList_Item_hookswitch_hookswitchSettable /* IMPORTED_LONG_NAMED_BIT */, hookswitchSettable /* IMPORTED_SHORT_NAMED_BIT */, AuditoryApparatusList_Item_hookswitch_hookswitchOnHook /* IMPORTED_LONG_NAMED_BIT */, hookswitchOnHook /* IMPORTED_SHORT_NAMED_BIT */, _decode_AuditoryApparatusList_Item_hookswitch, _encode_AuditoryApparatusList_Item_hookswitch } from "../CSTA-physical-device-feature/AuditoryApparatusList-Item-hookswitch.ta.mjs";
// export { AuditoryApparatusList_Item_hookswitch, AuditoryApparatusList_Item_hookswitch_hookswitchSettable /* IMPORTED_LONG_NAMED_BIT */, hookswitchSettable /* IMPORTED_SHORT_NAMED_BIT */, AuditoryApparatusList_Item_hookswitch_hookswitchOnHook /* IMPORTED_LONG_NAMED_BIT */, hookswitchOnHook /* IMPORTED_SHORT_NAMED_BIT */, _decode_AuditoryApparatusList_Item_hookswitch, _encode_AuditoryApparatusList_Item_hookswitch } from "../CSTA-physical-device-feature/AuditoryApparatusList-Item-hookswitch.ta.mjs";
import { HookswitchID, _decode_HookswitchID, _encode_HookswitchID } from "../CSTA-physical-device-feature/HookswitchID.ta.mjs";
// export { HookswitchID, _decode_HookswitchID, _encode_HookswitchID } from "../CSTA-physical-device-feature/HookswitchID.ta.mjs";


/**
 * @summary AuditoryApparatusList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditoryApparatusList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class AuditoryApparatusList_Item {
    constructor (
        /**
         * @summary `auditoryApparatus`.
         * @public
         * @readonly
         */
        readonly auditoryApparatus: AuditoryApparatusID,
        /**
         * @summary `auditoryApparatusType`.
         * @public
         * @readonly
         */
        readonly auditoryApparatusType: AuditoryApparatusList_Item_auditoryApparatusType,
        /**
         * @summary `speaker`.
         * @public
         * @readonly
         */
        readonly speaker: AuditoryApparatusList_Item_speaker,
        /**
         * @summary `microphone`.
         * @public
         * @readonly
         */
        readonly microphone: AuditoryApparatusList_Item_microphone,
        /**
         * @summary `hookswitch`.
         * @public
         * @readonly
         */
        readonly hookswitch: AuditoryApparatusList_Item_hookswitch,
        /**
         * @summary `hookswitchID`.
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
    new $.ComponentSpec("auditoryApparatus", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("auditoryApparatusType", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("speaker", false, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("microphone", false, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("hookswitch", false, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("hookswitchID", false, $.hasTag(_TagClass.universal, 4), undefined, undefined)
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

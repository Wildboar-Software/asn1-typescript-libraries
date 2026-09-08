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
import { VolAbs, _decode_VolAbs, _encode_VolAbs } from "../CSTA-physical-device-feature/VolAbs.ta.mjs";
// export { VolAbs, _decode_VolAbs, _encode_VolAbs } from "../CSTA-physical-device-feature/VolAbs.ta.mjs";


/**
 * @summary SpeakerVolumeList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpeakerVolumeList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class SpeakerVolumeList_Item {
    constructor (
        /**
         * @summary `auditoryApparatus`.
         * @public
         * @readonly
         */
        readonly auditoryApparatus: AuditoryApparatusID,
        /**
         * @summary `speakerVolAbs`.
         * @public
         * @readonly
         */
        readonly speakerVolAbs: OPTIONAL<VolAbs>
    ) {}

    /**
     * @summary Restructures an object into a SpeakerVolumeList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `SpeakerVolumeList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SpeakerVolumeList_Item`.
     * @returns {SpeakerVolumeList_Item}
     */
    public static _from_object (_o: { [_K in keyof (SpeakerVolumeList_Item)]: (SpeakerVolumeList_Item)[_K] }): SpeakerVolumeList_Item {
        return new SpeakerVolumeList_Item(_o.auditoryApparatus, _o.speakerVolAbs);
    }


}

/**
 * @summary The Leading Root Component Types of SpeakerVolumeList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SpeakerVolumeList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("auditoryApparatus", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("speakerVolAbs", true, $.hasTag(_TagClass.universal, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SpeakerVolumeList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SpeakerVolumeList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SpeakerVolumeList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SpeakerVolumeList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SpeakerVolumeList_Item: $.ASN1Decoder<SpeakerVolumeList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpeakerVolumeList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpeakerVolumeList_Item (el: _Element): SpeakerVolumeList_Item {
    if (!_cached_decoder_for_SpeakerVolumeList_Item) { _cached_decoder_for_SpeakerVolumeList_Item = function (el: _Element): SpeakerVolumeList_Item {
    let auditoryApparatus!: AuditoryApparatusID;
    let speakerVolAbs: OPTIONAL<VolAbs>;
    const callbacks: $.DecodingMap = {
        "auditoryApparatus": (_el: _Element): void => { auditoryApparatus = _decode_AuditoryApparatusID(_el); },
        "speakerVolAbs": (_el: _Element): void => { speakerVolAbs = _decode_VolAbs(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SpeakerVolumeList_Item,
        _extension_additions_list_spec_for_SpeakerVolumeList_Item,
        _root_component_type_list_2_spec_for_SpeakerVolumeList_Item,
        undefined,
    );
    return new SpeakerVolumeList_Item(
        auditoryApparatus,
        speakerVolAbs
    );
}; }
    return _cached_decoder_for_SpeakerVolumeList_Item(el);
}

let _cached_encoder_for_SpeakerVolumeList_Item: $.ASN1Encoder<SpeakerVolumeList_Item> | null = null;

/**
 * @summary Encodes a(n) SpeakerVolumeList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpeakerVolumeList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_SpeakerVolumeList_Item (value: SpeakerVolumeList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpeakerVolumeList_Item) { _cached_encoder_for_SpeakerVolumeList_Item = function (value: SpeakerVolumeList_Item, elGetter: $.ASN1Encoder<SpeakerVolumeList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AuditoryApparatusID(value.auditoryApparatus, $.BER),
            /* IF_ABSENT  */ ((value.speakerVolAbs === undefined) ? undefined : _encode_VolAbs(value.speakerVolAbs, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SpeakerVolumeList_Item(value, elGetter);
}


/* eslint-enable */

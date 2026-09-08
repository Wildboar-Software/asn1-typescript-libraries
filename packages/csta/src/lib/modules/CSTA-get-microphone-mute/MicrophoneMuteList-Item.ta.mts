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


/**
 * @summary MicrophoneMuteList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MicrophoneMuteList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class MicrophoneMuteList_Item {
    constructor (
        /**
         * @summary `auditoryApparatus`.
         * @public
         * @readonly
         */
        readonly auditoryApparatus: AuditoryApparatusID,
        /**
         * @summary `microphoneMuteOn`.
         * @public
         * @readonly
         */
        readonly microphoneMuteOn: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a MicrophoneMuteList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `MicrophoneMuteList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MicrophoneMuteList_Item`.
     * @returns {MicrophoneMuteList_Item}
     */
    public static _from_object (_o: { [_K in keyof (MicrophoneMuteList_Item)]: (MicrophoneMuteList_Item)[_K] }): MicrophoneMuteList_Item {
        return new MicrophoneMuteList_Item(_o.auditoryApparatus, _o.microphoneMuteOn);
    }


}

/**
 * @summary The Leading Root Component Types of MicrophoneMuteList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MicrophoneMuteList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("auditoryApparatus", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("microphoneMuteOn", false, $.hasTag(_TagClass.universal, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MicrophoneMuteList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MicrophoneMuteList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MicrophoneMuteList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MicrophoneMuteList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MicrophoneMuteList_Item: $.ASN1Decoder<MicrophoneMuteList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MicrophoneMuteList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MicrophoneMuteList_Item (el: _Element): MicrophoneMuteList_Item {
    if (!_cached_decoder_for_MicrophoneMuteList_Item) { _cached_decoder_for_MicrophoneMuteList_Item = function (el: _Element): MicrophoneMuteList_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MicrophoneMuteList-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "auditoryApparatus";
    sequence[1].name = "microphoneMuteOn";
    let auditoryApparatus!: AuditoryApparatusID;
    let microphoneMuteOn!: BOOLEAN;
    auditoryApparatus = _decode_AuditoryApparatusID(sequence[0]);
    microphoneMuteOn = $._decodeBoolean(sequence[1]);
    return new MicrophoneMuteList_Item(
        auditoryApparatus,
        microphoneMuteOn,

    );
}; }
    return _cached_decoder_for_MicrophoneMuteList_Item(el);
}

let _cached_encoder_for_MicrophoneMuteList_Item: $.ASN1Encoder<MicrophoneMuteList_Item> | null = null;

/**
 * @summary Encodes a(n) MicrophoneMuteList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MicrophoneMuteList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_MicrophoneMuteList_Item (value: MicrophoneMuteList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MicrophoneMuteList_Item) { _cached_encoder_for_MicrophoneMuteList_Item = function (value: MicrophoneMuteList_Item, elGetter: $.ASN1Encoder<MicrophoneMuteList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AuditoryApparatusID(value.auditoryApparatus, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.microphoneMuteOn, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MicrophoneMuteList_Item(value, elGetter);
}


/* eslint-enable */

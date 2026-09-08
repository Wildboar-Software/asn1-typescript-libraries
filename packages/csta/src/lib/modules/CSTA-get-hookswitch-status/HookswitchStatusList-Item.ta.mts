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
import { HookswitchID, _decode_HookswitchID, _encode_HookswitchID } from "../CSTA-physical-device-feature/HookswitchID.ta.mjs";
// export { HookswitchID, _decode_HookswitchID, _encode_HookswitchID } from "../CSTA-physical-device-feature/HookswitchID.ta.mjs";


/**
 * @summary HookswitchStatusList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HookswitchStatusList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class HookswitchStatusList_Item {
    constructor (
        /**
         * @summary `hookswitch`.
         * @public
         * @readonly
         */
        readonly hookswitch: HookswitchID,
        /**
         * @summary `hookswitchOnHook`.
         * @public
         * @readonly
         */
        readonly hookswitchOnHook: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a HookswitchStatusList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `HookswitchStatusList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HookswitchStatusList_Item`.
     * @returns {HookswitchStatusList_Item}
     */
    public static _from_object (_o: { [_K in keyof (HookswitchStatusList_Item)]: (HookswitchStatusList_Item)[_K] }): HookswitchStatusList_Item {
        return new HookswitchStatusList_Item(_o.hookswitch, _o.hookswitchOnHook);
    }


}

/**
 * @summary The Leading Root Component Types of HookswitchStatusList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HookswitchStatusList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("hookswitch", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("hookswitchOnHook", false, $.hasTag(_TagClass.universal, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of HookswitchStatusList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HookswitchStatusList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HookswitchStatusList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HookswitchStatusList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HookswitchStatusList_Item: $.ASN1Decoder<HookswitchStatusList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HookswitchStatusList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HookswitchStatusList_Item (el: _Element): HookswitchStatusList_Item {
    if (!_cached_decoder_for_HookswitchStatusList_Item) { _cached_decoder_for_HookswitchStatusList_Item = function (el: _Element): HookswitchStatusList_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("HookswitchStatusList-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hookswitch";
    sequence[1].name = "hookswitchOnHook";
    let hookswitch!: HookswitchID;
    let hookswitchOnHook!: BOOLEAN;
    hookswitch = _decode_HookswitchID(sequence[0]);
    hookswitchOnHook = $._decodeBoolean(sequence[1]);
    return new HookswitchStatusList_Item(
        hookswitch,
        hookswitchOnHook,

    );
}; }
    return _cached_decoder_for_HookswitchStatusList_Item(el);
}

let _cached_encoder_for_HookswitchStatusList_Item: $.ASN1Encoder<HookswitchStatusList_Item> | null = null;

/**
 * @summary Encodes a(n) HookswitchStatusList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HookswitchStatusList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_HookswitchStatusList_Item (value: HookswitchStatusList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HookswitchStatusList_Item) { _cached_encoder_for_HookswitchStatusList_Item = function (value: HookswitchStatusList_Item, elGetter: $.ASN1Encoder<HookswitchStatusList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_HookswitchID(value.hookswitch, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.hookswitchOnHook, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_HookswitchStatusList_Item(value, elGetter);
}


/* eslint-enable */

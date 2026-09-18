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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Pointer, _decode_Pointer, _encode_Pointer } from "../ISO9041-VTP/Pointer.ta.mjs";
// export { Pointer, _decode_Pointer, _encode_Pointer } from "../ISO9041-VTP/Pointer.ta.mjs";


/**
 * @summary AttrExtent_address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttrExtent-address ::= SEQUENCE {
 *     beginning Pointer,
 *     ending Pointer
 * }
 * ```
 * 
 * @class
 */
export
class AttrExtent_address {
    constructor (
        /**
         * @summary `beginning`.
         * @public
         * @readonly
         */
        readonly beginning: Pointer,
        /**
         * @summary `ending`.
         * @public
         * @readonly
         */
        readonly ending: Pointer
    ) {}

    /**
     * @summary Restructures an object into a AttrExtent_address
     * @description
     * 
     * This takes an `object` and converts it to a `AttrExtent_address`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttrExtent_address`.
     * @returns {AttrExtent_address}
     */
    public static _from_object (_o: { [_K in keyof (AttrExtent_address)]: (AttrExtent_address)[_K] }): AttrExtent_address {
        return new AttrExtent_address(_o.beginning, _o.ending);
    }


}

/**
 * @summary The Leading Root Component Types of AttrExtent_address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttrExtent_address: $.ComponentSpec[] = [
    new $.ComponentSpec("beginning", false, $.hasAnyTag),
    new $.ComponentSpec("ending", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of AttrExtent_address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttrExtent_address: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttrExtent_address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttrExtent_address: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttrExtent_address: $.ASN1Decoder<AttrExtent_address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttrExtent_address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttrExtent_address (el: _Element): AttrExtent_address {
    if (!_cached_decoder_for_AttrExtent_address) { _cached_decoder_for_AttrExtent_address = function (el: _Element): AttrExtent_address {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AttrExtent-address contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "beginning";
    sequence[1].name = "ending";
    let beginning!: Pointer;
    let ending!: Pointer;
    beginning = _decode_Pointer(sequence[0]);
    ending = _decode_Pointer(sequence[1]);
    return new AttrExtent_address(
        beginning,
        ending,

    );
}; }
    return _cached_decoder_for_AttrExtent_address(el);
}

let _cached_encoder_for_AttrExtent_address: $.ASN1Encoder<AttrExtent_address> | null = null;

/**
 * @summary Encodes a(n) AttrExtent_address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttrExtent_address, encoded as an ASN.1 Element.
 */
export
function _encode_AttrExtent_address (value: AttrExtent_address, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttrExtent_address) { _cached_encoder_for_AttrExtent_address = function (value: AttrExtent_address, elGetter: $.ASN1Encoder<AttrExtent_address>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Pointer(value.beginning, $.BER),
            /* REQUIRED   */ _encode_Pointer(value.ending, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttrExtent_address(value, elGetter);
}


/* eslint-enable */

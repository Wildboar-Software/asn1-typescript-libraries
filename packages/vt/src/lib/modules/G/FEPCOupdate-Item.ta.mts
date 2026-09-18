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
import { FEE, _decode_FEE, _encode_FEE } from "../G/FEE.ta.mjs";
// export { FEE, _decode_FEE, _encode_FEE } from "../G/FEE.ta.mjs";
import { FEC, _decode_FEC, _encode_FEC } from "../G/FEC.ta.mjs";
// export { FEC, _decode_FEC, _encode_FEC } from "../G/FEC.ta.mjs";
import { FER, _decode_FER, _encode_FER } from "../G/FER.ta.mjs";
// export { FER, _decode_FER, _encode_FER } from "../G/FER.ta.mjs";


/**
 * @summary FEPCOupdate_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FEPCOupdate-Item ::= SEQUENCE {
 *     index     [0] IMPLICIT INTEGER,
 *     event     [1] FEE,
 *     condition [2] IMPLICIT SET OF FEC,
 *     reactions [3] IMPLICIT SEQUENCE OF FER
 * }
 * ```
 * 
 * @class
 */
export
class FEPCOupdate_Item {
    constructor (
        /**
         * @summary `index`.
         * @public
         * @readonly
         */
        readonly index: INTEGER,
        /**
         * @summary `event`.
         * @public
         * @readonly
         */
        readonly event: FEE,
        /**
         * @summary `condition`.
         * @public
         * @readonly
         */
        readonly condition: FEC[],
        /**
         * @summary `reactions`.
         * @public
         * @readonly
         */
        readonly reactions: FER[]
    ) {}

    /**
     * @summary Restructures an object into a FEPCOupdate_Item
     * @description
     * 
     * This takes an `object` and converts it to a `FEPCOupdate_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FEPCOupdate_Item`.
     * @returns {FEPCOupdate_Item}
     */
    public static _from_object (_o: { [_K in keyof (FEPCOupdate_Item)]: (FEPCOupdate_Item)[_K] }): FEPCOupdate_Item {
        return new FEPCOupdate_Item(_o.index, _o.event, _o.condition, _o.reactions);
    }


}

/**
 * @summary The Leading Root Component Types of FEPCOupdate_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FEPCOupdate_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("index", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("event", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("condition", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("reactions", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FEPCOupdate_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FEPCOupdate_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FEPCOupdate_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FEPCOupdate_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FEPCOupdate_Item: $.ASN1Decoder<FEPCOupdate_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FEPCOupdate_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FEPCOupdate_Item (el: _Element): FEPCOupdate_Item {
    if (!_cached_decoder_for_FEPCOupdate_Item) { _cached_decoder_for_FEPCOupdate_Item = function (el: _Element): FEPCOupdate_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("FEPCOupdate-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "index";
    sequence[1].name = "event";
    sequence[2].name = "condition";
    sequence[3].name = "reactions";
    let index!: INTEGER;
    let event!: FEE;
    let condition!: FEC[];
    let reactions!: FER[];
    index = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    event = $._decode_explicit<FEE>(() => _decode_FEE)(sequence[1]);
    condition = $._decode_implicit<FEC[]>(() => $._decodeSetOf<FEC>(() => _decode_FEC))(sequence[2]);
    reactions = $._decode_implicit<FER[]>(() => $._decodeSequenceOf<FER>(() => _decode_FER))(sequence[3]);
    return new FEPCOupdate_Item(
        index,
        event,
        condition,
        reactions,

    );
}; }
    return _cached_decoder_for_FEPCOupdate_Item(el);
}

let _cached_encoder_for_FEPCOupdate_Item: $.ASN1Encoder<FEPCOupdate_Item> | null = null;

/**
 * @summary Encodes a(n) FEPCOupdate_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FEPCOupdate_Item, encoded as an ASN.1 Element.
 */
export
function _encode_FEPCOupdate_Item (value: FEPCOupdate_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FEPCOupdate_Item) { _cached_encoder_for_FEPCOupdate_Item = function (value: FEPCOupdate_Item, elGetter: $.ASN1Encoder<FEPCOupdate_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.index, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_FEE, $.BER)(value.event, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSetOf<FEC>(() => _encode_FEC, $.BER), $.BER)(value.condition, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<FER>(() => _encode_FER, $.BER), $.BER)(value.reactions, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FEPCOupdate_Item(value, elGetter);
}


/* eslint-enable */

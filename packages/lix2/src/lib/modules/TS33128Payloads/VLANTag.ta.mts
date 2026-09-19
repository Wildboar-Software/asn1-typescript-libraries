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



/**
 * @summary VLANTag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VLANTag ::= SEQUENCE
 * {
 *     priority [1] BIT STRING (SIZE(3)),
 *     cFI      [2] BIT STRING (SIZE(1)),
 *     vLANID   [3] BIT STRING (SIZE(12))
 * }
 * ```
 * 
 * @class
 */
export
class VLANTag {
    constructor (
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: BIT_STRING,
        /**
         * @summary `cFI`.
         * @public
         * @readonly
         */
        readonly cFI: BIT_STRING,
        /**
         * @summary `vLANID`.
         * @public
         * @readonly
         */
        readonly vLANID: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a VLANTag
     * @description
     * 
     * This takes an `object` and converts it to a `VLANTag`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VLANTag`.
     * @returns {VLANTag}
     */
    public static _from_object (_o: { [_K in keyof (VLANTag)]: (VLANTag)[_K] }): VLANTag {
        return new VLANTag(_o.priority, _o.cFI, _o.vLANID);
    }


}

/**
 * @summary The Leading Root Component Types of VLANTag
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VLANTag: $.ComponentSpec[] = [
    new $.ComponentSpec("priority", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cFI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("vLANID", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of VLANTag
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VLANTag: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VLANTag
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VLANTag: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_VLANTag: $.ASN1Decoder<VLANTag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VLANTag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VLANTag (el: _Element): VLANTag {
    if (!_cached_decoder_for_VLANTag) { _cached_decoder_for_VLANTag = function (el: _Element): VLANTag {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("VLANTag contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "priority";
    sequence[1].name = "cFI";
    sequence[2].name = "vLANID";
    let priority!: BIT_STRING;
    let cFI!: BIT_STRING;
    let vLANID!: BIT_STRING;
    priority = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(sequence[0]);
    cFI = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(sequence[1]);
    vLANID = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(sequence[2]);
    return new VLANTag(
        priority,
        cFI,
        vLANID,

    );
}; }
    return _cached_decoder_for_VLANTag(el);
}

let _cached_encoder_for_VLANTag: $.ASN1Encoder<VLANTag> | null = null;

/**
 * @summary Encodes a(n) VLANTag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VLANTag, encoded as an ASN.1 Element.
 */
export
function _encode_VLANTag (value: VLANTag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VLANTag) { _cached_encoder_for_VLANTag = function (value: VLANTag, elGetter: $.ASN1Encoder<VLANTag>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBitString, $.BER)(value.priority, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBitString, $.BER)(value.cFI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBitString, $.BER)(value.vLANID, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VLANTag(value, elGetter);
}


/* eslint-enable */

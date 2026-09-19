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
import { PayloadModification, _decode_PayloadModification, _encode_PayloadModification } from "../TS33128Payloads/PayloadModification.ta.mjs";
// export { PayloadModification, _decode_PayloadModification, _encode_PayloadModification } from "../TS33128Payloads/PayloadModification.ta.mjs";


/**
 * @summary PayloadModifications
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PayloadModifications ::= SEQUENCE
 * {
 *     modificationList [1] SEQUENCE OF PayloadModification
 * }
 * ```
 * 
 * @class
 */
export
class PayloadModifications {
    constructor (
        /**
         * @summary `modificationList`.
         * @public
         * @readonly
         */
        readonly modificationList: PayloadModification[]
    ) {}

    /**
     * @summary Restructures an object into a PayloadModifications
     * @description
     * 
     * This takes an `object` and converts it to a `PayloadModifications`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PayloadModifications`.
     * @returns {PayloadModifications}
     */
    public static _from_object (_o: { [_K in keyof (PayloadModifications)]: (PayloadModifications)[_K] }): PayloadModifications {
        return new PayloadModifications(_o.modificationList);
    }


}

/**
 * @summary The Leading Root Component Types of PayloadModifications
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PayloadModifications: $.ComponentSpec[] = [
    new $.ComponentSpec("modificationList", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of PayloadModifications
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PayloadModifications: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PayloadModifications
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PayloadModifications: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PayloadModifications: $.ASN1Decoder<PayloadModifications> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PayloadModifications
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PayloadModifications (el: _Element): PayloadModifications {
    if (!_cached_decoder_for_PayloadModifications) { _cached_decoder_for_PayloadModifications = function (el: _Element): PayloadModifications {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("PayloadModifications contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "modificationList";
    let modificationList!: PayloadModification[];
    modificationList = $._decode_implicit<PayloadModification[]>(() => $._decodeSequenceOf<PayloadModification>(() => _decode_PayloadModification))(sequence[0]);
    return new PayloadModifications(
        modificationList,

    );
}; }
    return _cached_decoder_for_PayloadModifications(el);
}

let _cached_encoder_for_PayloadModifications: $.ASN1Encoder<PayloadModifications> | null = null;

/**
 * @summary Encodes a(n) PayloadModifications into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PayloadModifications, encoded as an ASN.1 Element.
 */
export
function _encode_PayloadModifications (value: PayloadModifications, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PayloadModifications) { _cached_encoder_for_PayloadModifications = function (value: PayloadModifications, elGetter: $.ASN1Encoder<PayloadModifications>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<PayloadModification>(() => _encode_PayloadModification, $.BER), $.BER)(value.modificationList, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PayloadModifications(value, elGetter);
}


/* eslint-enable */

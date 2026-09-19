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
 * @summary DpProprietaryData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DpProprietaryData ::= SEQUENCE { -- maximum size including tag and length field: 128 bytes
 *     dpOid OBJECT IDENTIFIER -- OID in the tree of the SM-DP+ that created the Profile
 *     -- additional data objects defined by the SM-DP+ MAY follow
 * }
 * ```
 * 
 * @class
 */
export
class DpProprietaryData {
    constructor (
        /**
         * @summary `dpOid`.
         * @public
         * @readonly
         */
        readonly dpOid: OBJECT_IDENTIFIER
    ) {}

    /**
     * @summary Restructures an object into a DpProprietaryData
     * @description
     * 
     * This takes an `object` and converts it to a `DpProprietaryData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DpProprietaryData`.
     * @returns {DpProprietaryData}
     */
    public static _from_object (_o: { [_K in keyof (DpProprietaryData)]: (DpProprietaryData)[_K] }): DpProprietaryData {
        return new DpProprietaryData(_o.dpOid);
    }


}

/**
 * @summary The Leading Root Component Types of DpProprietaryData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DpProprietaryData: $.ComponentSpec[] = [
    new $.ComponentSpec("dpOid", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of DpProprietaryData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DpProprietaryData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DpProprietaryData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DpProprietaryData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DpProprietaryData: $.ASN1Decoder<DpProprietaryData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DpProprietaryData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DpProprietaryData (el: _Element): DpProprietaryData {
    if (!_cached_decoder_for_DpProprietaryData) { _cached_decoder_for_DpProprietaryData = function (el: _Element): DpProprietaryData {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("DpProprietaryData contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "dpOid";
    let dpOid!: OBJECT_IDENTIFIER;
    dpOid = $._decodeObjectIdentifier(sequence[0]);
    return new DpProprietaryData(
        dpOid,

    );
}; }
    return _cached_decoder_for_DpProprietaryData(el);
}

let _cached_encoder_for_DpProprietaryData: $.ASN1Encoder<DpProprietaryData> | null = null;

/**
 * @summary Encodes a(n) DpProprietaryData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DpProprietaryData, encoded as an ASN.1 Element.
 */
export
function _encode_DpProprietaryData (value: DpProprietaryData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DpProprietaryData) { _cached_encoder_for_DpProprietaryData = function (value: DpProprietaryData, elGetter: $.ASN1Encoder<DpProprietaryData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.dpOid, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DpProprietaryData(value, elGetter);
}


/* eslint-enable */

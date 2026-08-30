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
import { AreaList, _decode_AreaList, _encode_AreaList } from "../MAP-LCS-DataTypes/AreaList.ta.mjs";


/**
 * @summary AreaDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AreaDefinition ::= SEQUENCE {
 *     areaList    [0]    AreaList,
 *     ...}
 * ```
 * 
 * @class
 */
export
class AreaDefinition {
    constructor (
        /**
         * @summary `areaList`.
         * @public
         * @readonly
         */
        readonly areaList: AreaList,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AreaDefinition
     * @description
     * 
     * This takes an `object` and converts it to a `AreaDefinition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AreaDefinition`.
     * @returns {AreaDefinition}
     */
    public static _from_object (_o: { [_K in keyof (AreaDefinition)]: (AreaDefinition)[_K] }): AreaDefinition {
        return new AreaDefinition(_o.areaList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AreaDefinition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AreaDefinition: $.ComponentSpec[] = [
    new $.ComponentSpec("areaList", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of AreaDefinition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AreaDefinition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AreaDefinition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AreaDefinition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AreaDefinition: $.ASN1Decoder<AreaDefinition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AreaDefinition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AreaDefinition (el: _Element): AreaDefinition {
    if (!_cached_decoder_for_AreaDefinition) { _cached_decoder_for_AreaDefinition = function (el: _Element): AreaDefinition {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("AreaDefinition contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "areaList";
    let areaList!: AreaList;
    areaList = $._decode_implicit<AreaList>(() => _decode_AreaList)(sequence[0]);
    return new AreaDefinition(
        areaList,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_AreaDefinition(el);
}

let _cached_encoder_for_AreaDefinition: $.ASN1Encoder<AreaDefinition> | null = null;

/**
 * @summary Encodes a(n) AreaDefinition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AreaDefinition, encoded as an ASN.1 Element.
 */
export
function _encode_AreaDefinition (value: AreaDefinition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AreaDefinition) { _cached_encoder_for_AreaDefinition = function (value: AreaDefinition, elGetter: $.ASN1Encoder<AreaDefinition>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AreaList, $.BER)(value.areaList, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AreaDefinition(value, elGetter);
}


/* eslint-enable */

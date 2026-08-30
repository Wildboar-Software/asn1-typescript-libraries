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
import { RadioResourceInformation, _decode_RadioResourceInformation, _encode_RadioResourceInformation } from "../MAP-MS-DataTypes/RadioResourceInformation.ta.mjs";
// export { RadioResourceInformation, _decode_RadioResourceInformation, _encode_RadioResourceInformation } from "../MAP-MS-DataTypes/RadioResourceInformation.ta.mjs";
import { RAB_Id, _decode_RAB_Id, _encode_RAB_Id } from "../MAP-MS-DataTypes/RAB-Id.ta.mjs";
// export { RAB_Id, _decode_RAB_Id, _encode_RAB_Id } from "../MAP-MS-DataTypes/RAB-Id.ta.mjs";


/**
 * @summary RadioResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RadioResource ::= SEQUENCE {
 *     radioResourceInformation    RadioResourceInformation,
 *     rab-Id    RAB-Id,
 *     -- RAB Identity is needed to relate the radio resources with the radio access bearers. 
 *     ...}
 * ```
 * 
 * @class
 */
export
class RadioResource {
    constructor (
        /**
         * @summary `radioResourceInformation`.
         * @public
         * @readonly
         */
        readonly radioResourceInformation: RadioResourceInformation,
        /**
         * @summary `rab_Id`.
         * @public
         * @readonly
         */
        readonly rab_Id: RAB_Id,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RadioResource
     * @description
     * 
     * This takes an `object` and converts it to a `RadioResource`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RadioResource`.
     * @returns {RadioResource}
     */
    public static _from_object (_o: { [_K in keyof (RadioResource)]: (RadioResource)[_K] }): RadioResource {
        return new RadioResource(_o.radioResourceInformation, _o.rab_Id, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RadioResource
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RadioResource: $.ComponentSpec[] = [
    new $.ComponentSpec("radioResourceInformation", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("rab-Id", false, $.hasTag(_TagClass.universal, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RadioResource
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RadioResource: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RadioResource
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RadioResource: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RadioResource: $.ASN1Decoder<RadioResource> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RadioResource
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RadioResource (el: _Element): RadioResource {
    if (!_cached_decoder_for_RadioResource) { _cached_decoder_for_RadioResource = function (el: _Element): RadioResource {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RadioResource contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "radioResourceInformation";
    sequence[1].name = "rab-Id";
    let radioResourceInformation!: RadioResourceInformation;
    let rab_Id!: RAB_Id;
    radioResourceInformation = _decode_RadioResourceInformation(sequence[0]);
    rab_Id = _decode_RAB_Id(sequence[1]);
    return new RadioResource(
        radioResourceInformation,
        rab_Id,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_RadioResource(el);
}

let _cached_encoder_for_RadioResource: $.ASN1Encoder<RadioResource> | null = null;

/**
 * @summary Encodes a(n) RadioResource into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RadioResource, encoded as an ASN.1 Element.
 */
export
function _encode_RadioResource (value: RadioResource, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RadioResource) { _cached_encoder_for_RadioResource = function (value: RadioResource, elGetter: $.ASN1Encoder<RadioResource>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RadioResourceInformation(value.radioResourceInformation, $.BER),
            /* REQUIRED   */ _encode_RAB_Id(value.rab_Id, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RadioResource(value, elGetter);
}


/* eslint-enable */

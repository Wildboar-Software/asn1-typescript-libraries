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
import { PkgdName, _decode_PkgdName, _encode_PkgdName } from "../MEDIA-GATEWAY-CONTROL/PkgdName.ta.mjs";
// export { PkgdName, _decode_PkgdName, _encode_PkgdName } from "../MEDIA-GATEWAY-CONTROL/PkgdName.ta.mjs";


/**
 * @summary IndAudStatisticsDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAudStatisticsDescriptor ::= SEQUENCE
 *     {
 *         statName                    [0] PkgdName
 *     }
 * ```
 * 
 * @class
 */
export
class IndAudStatisticsDescriptor {
    constructor (
        /**
         * @summary `statName`.
         * @public
         * @readonly
         */
        readonly statName: PkgdName
    ) {}

    /**
     * @summary Restructures an object into a IndAudStatisticsDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `IndAudStatisticsDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndAudStatisticsDescriptor`.
     * @returns {IndAudStatisticsDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (IndAudStatisticsDescriptor)]: (IndAudStatisticsDescriptor)[_K] }): IndAudStatisticsDescriptor {
        return new IndAudStatisticsDescriptor(_o.statName);
    }


}

/**
 * @summary The Leading Root Component Types of IndAudStatisticsDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IndAudStatisticsDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("statName", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of IndAudStatisticsDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IndAudStatisticsDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IndAudStatisticsDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IndAudStatisticsDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IndAudStatisticsDescriptor: $.ASN1Decoder<IndAudStatisticsDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAudStatisticsDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAudStatisticsDescriptor (el: _Element): IndAudStatisticsDescriptor {
    if (!_cached_decoder_for_IndAudStatisticsDescriptor) { _cached_decoder_for_IndAudStatisticsDescriptor = function (el: _Element): IndAudStatisticsDescriptor {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("IndAudStatisticsDescriptor contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "statName";
    let statName!: PkgdName;
    statName = $._decode_implicit<PkgdName>(() => _decode_PkgdName)(sequence[0]);
    return new IndAudStatisticsDescriptor(
        statName,

    );
}; }
    return _cached_decoder_for_IndAudStatisticsDescriptor(el);
}

let _cached_encoder_for_IndAudStatisticsDescriptor: $.ASN1Encoder<IndAudStatisticsDescriptor> | null = null;

/**
 * @summary Encodes a(n) IndAudStatisticsDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAudStatisticsDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_IndAudStatisticsDescriptor (value: IndAudStatisticsDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAudStatisticsDescriptor) { _cached_encoder_for_IndAudStatisticsDescriptor = function (value: IndAudStatisticsDescriptor, elGetter: $.ASN1Encoder<IndAudStatisticsDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PkgdName, $.BER)(value.statName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IndAudStatisticsDescriptor(value, elGetter);
}


/* eslint-enable */

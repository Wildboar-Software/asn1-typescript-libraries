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
import { IndAudSignal, _decode_IndAudSignal, _encode_IndAudSignal } from "../MEDIA-GATEWAY-CONTROL/IndAudSignal.ta.mjs";
// export { IndAudSignal, _decode_IndAudSignal, _encode_IndAudSignal } from "../MEDIA-GATEWAY-CONTROL/IndAudSignal.ta.mjs";


/**
 * @summary IndAudSeqSigList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAudSeqSigList ::= SEQUENCE
 *     {
 *         id                            [0] INTEGER(0..65535),
 *         signalList                    [1] IndAudSignal OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class IndAudSeqSigList {
    constructor (
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: INTEGER,
        /**
         * @summary `signalList`.
         * @public
         * @readonly
         */
        readonly signalList: OPTIONAL<IndAudSignal>
    ) {}

    /**
     * @summary Restructures an object into a IndAudSeqSigList
     * @description
     * 
     * This takes an `object` and converts it to a `IndAudSeqSigList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndAudSeqSigList`.
     * @returns {IndAudSeqSigList}
     */
    public static _from_object (_o: { [_K in keyof (IndAudSeqSigList)]: (IndAudSeqSigList)[_K] }): IndAudSeqSigList {
        return new IndAudSeqSigList(_o.id, _o.signalList);
    }


}

/**
 * @summary The Leading Root Component Types of IndAudSeqSigList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IndAudSeqSigList: $.ComponentSpec[] = [
    new $.ComponentSpec("id", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("signalList", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IndAudSeqSigList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IndAudSeqSigList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IndAudSeqSigList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IndAudSeqSigList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IndAudSeqSigList: $.ASN1Decoder<IndAudSeqSigList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAudSeqSigList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAudSeqSigList (el: _Element): IndAudSeqSigList {
    if (!_cached_decoder_for_IndAudSeqSigList) { _cached_decoder_for_IndAudSeqSigList = function (el: _Element): IndAudSeqSigList {
    let id!: INTEGER;
    let signalList: OPTIONAL<IndAudSignal>;
    const callbacks: $.DecodingMap = {
        "id": (_el: _Element): void => { id = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "signalList": (_el: _Element): void => { signalList = $._decode_implicit<IndAudSignal>(() => _decode_IndAudSignal)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IndAudSeqSigList,
        _extension_additions_list_spec_for_IndAudSeqSigList,
        _root_component_type_list_2_spec_for_IndAudSeqSigList,
        undefined,
    );
    return new IndAudSeqSigList(
        id,
        signalList
    );
}; }
    return _cached_decoder_for_IndAudSeqSigList(el);
}

let _cached_encoder_for_IndAudSeqSigList: $.ASN1Encoder<IndAudSeqSigList> | null = null;

/**
 * @summary Encodes a(n) IndAudSeqSigList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAudSeqSigList, encoded as an ASN.1 Element.
 */
export
function _encode_IndAudSeqSigList (value: IndAudSeqSigList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAudSeqSigList) { _cached_encoder_for_IndAudSeqSigList = function (value: IndAudSeqSigList, elGetter: $.ASN1Encoder<IndAudSeqSigList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.id, $.BER),
            /* IF_ABSENT  */ ((value.signalList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IndAudSignal, $.BER)(value.signalList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IndAudSeqSigList(value, elGetter);
}


/* eslint-enable */

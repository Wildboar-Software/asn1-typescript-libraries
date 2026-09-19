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
import { Kmid, _decode_Kmid, _encode_Kmid } from "../ACP133CommonContent/Kmid.ta.mjs";
// export { Kmid, _decode_Kmid, _encode_Kmid } from "../ACP133CommonContent/Kmid.ta.mjs";


/**
 * @summary PairwiseTag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PairwiseTag ::= SEQUENCE  {
 *     kmid        Kmid,
 *     edition        INTEGER --(1..ub-edition-size)--,
 *     date        UTCTime OPTIONAL }
 * ```
 * 
 * @class
 */
export
class PairwiseTag {
    constructor (
        /**
         * @summary `kmid`.
         * @public
         * @readonly
         */
        readonly kmid: Kmid,
        /**
         * @summary `edition`.
         * @public
         * @readonly
         */
        readonly edition: INTEGER,
        /**
         * @summary `date`.
         * @public
         * @readonly
         */
        readonly date: OPTIONAL<UTCTime>
    ) {}

    /**
     * @summary Restructures an object into a PairwiseTag
     * @description
     * 
     * This takes an `object` and converts it to a `PairwiseTag`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PairwiseTag`.
     * @returns {PairwiseTag}
     */
    public static _from_object (_o: { [_K in keyof (PairwiseTag)]: (PairwiseTag)[_K] }): PairwiseTag {
        return new PairwiseTag(_o.kmid, _o.edition, _o.date);
    }


}

/**
 * @summary The Leading Root Component Types of PairwiseTag
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PairwiseTag: $.ComponentSpec[] = [
    new $.ComponentSpec("kmid", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("edition", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("date", true, $.hasTag(_TagClass.universal, 23))
];

/**
 * @summary The Trailing Root Component Types of PairwiseTag
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PairwiseTag: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PairwiseTag
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PairwiseTag: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PairwiseTag: $.ASN1Decoder<PairwiseTag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PairwiseTag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PairwiseTag (el: _Element): PairwiseTag {
    if (!_cached_decoder_for_PairwiseTag) { _cached_decoder_for_PairwiseTag = function (el: _Element): PairwiseTag {
    let kmid!: Kmid;
    let edition!: INTEGER;
    let date: OPTIONAL<UTCTime>;
    const callbacks: $.DecodingMap = {
        "kmid": (_el: _Element): void => { kmid = _decode_Kmid(_el); },
        "edition": (_el: _Element): void => { edition = $._decodeInteger(_el); },
        "date": (_el: _Element): void => { date = $._decodeUTCTime(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PairwiseTag,
        _extension_additions_list_spec_for_PairwiseTag,
        _root_component_type_list_2_spec_for_PairwiseTag,
        undefined,
    );
    return new PairwiseTag(
        kmid,
        edition,
        date
    );
}; }
    return _cached_decoder_for_PairwiseTag(el);
}

let _cached_encoder_for_PairwiseTag: $.ASN1Encoder<PairwiseTag> | null = null;

/**
 * @summary Encodes a(n) PairwiseTag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PairwiseTag, encoded as an ASN.1 Element.
 */
export
function _encode_PairwiseTag (value: PairwiseTag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PairwiseTag) { _cached_encoder_for_PairwiseTag = function (value: PairwiseTag, elGetter: $.ASN1Encoder<PairwiseTag>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Kmid(value.kmid, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.edition, $.BER),
            /* IF_ABSENT  */ ((value.date === undefined) ? undefined : $._encodeUTCTime(value.date, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PairwiseTag(value, elGetter);
}


/* eslint-enable */

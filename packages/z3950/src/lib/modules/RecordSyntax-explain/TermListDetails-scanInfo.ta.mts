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
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary TermListDetails_scanInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermListDetails-scanInfo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class TermListDetails_scanInfo {
    constructor (
        /**
         * @summary `maxStepSize`.
         * @public
         * @readonly
         */
        readonly maxStepSize: OPTIONAL<INTEGER>,
        /**
         * @summary `collatingSequence`.
         * @public
         * @readonly
         */
        readonly collatingSequence: OPTIONAL<HumanString>,
        /**
         * @summary `increasing`.
         * @public
         * @readonly
         */
        readonly increasing: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a TermListDetails_scanInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TermListDetails_scanInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TermListDetails_scanInfo`.
     * @returns {TermListDetails_scanInfo}
     */
    public static _from_object (_o: { [_K in keyof (TermListDetails_scanInfo)]: (TermListDetails_scanInfo)[_K] }): TermListDetails_scanInfo {
        return new TermListDetails_scanInfo(_o.maxStepSize, _o.collatingSequence, _o.increasing);
    }


}

/**
 * @summary The Leading Root Component Types of TermListDetails_scanInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TermListDetails_scanInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("maxStepSize", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("collatingSequence", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("increasing", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TermListDetails_scanInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TermListDetails_scanInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TermListDetails_scanInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TermListDetails_scanInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TermListDetails_scanInfo: $.ASN1Decoder<TermListDetails_scanInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TermListDetails_scanInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TermListDetails_scanInfo (el: _Element): TermListDetails_scanInfo {
    if (!_cached_decoder_for_TermListDetails_scanInfo) { _cached_decoder_for_TermListDetails_scanInfo = function (el: _Element): TermListDetails_scanInfo {
    let maxStepSize: OPTIONAL<INTEGER>;
    let collatingSequence: OPTIONAL<HumanString>;
    let increasing: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "maxStepSize": (_el: _Element): void => { maxStepSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "collatingSequence": (_el: _Element): void => { collatingSequence = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "increasing": (_el: _Element): void => { increasing = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TermListDetails_scanInfo,
        _extension_additions_list_spec_for_TermListDetails_scanInfo,
        _root_component_type_list_2_spec_for_TermListDetails_scanInfo,
        undefined,
    );
    return new TermListDetails_scanInfo(
        maxStepSize,
        collatingSequence,
        increasing
    );
}; }
    return _cached_decoder_for_TermListDetails_scanInfo(el);
}

let _cached_encoder_for_TermListDetails_scanInfo: $.ASN1Encoder<TermListDetails_scanInfo> | null = null;

/**
 * @summary Encodes a(n) TermListDetails_scanInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TermListDetails_scanInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TermListDetails_scanInfo (value: TermListDetails_scanInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TermListDetails_scanInfo) { _cached_encoder_for_TermListDetails_scanInfo = function (value: TermListDetails_scanInfo, elGetter: $.ASN1Encoder<TermListDetails_scanInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.maxStepSize === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.maxStepSize, $.BER)),
            /* IF_ABSENT  */ ((value.collatingSequence === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_HumanString, $.BER)(value.collatingSequence, $.BER)),
            /* IF_ABSENT  */ ((value.increasing === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.increasing, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TermListDetails_scanInfo(value, elGetter);
}


/* eslint-enable */

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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";


/**
 * @summary SplitLegArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SplitLegArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     legToBeSplit            [0]    LegID,
 *     newCallSegment            [1]    CallSegmentID {bound}            OPTIONAL,
 *     extensions                [2]    Extensions {bound}            OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class SplitLegArg {
    constructor (
        /**
         * @summary `legToBeSplit`.
         * @public
         * @readonly
         */
        readonly legToBeSplit: LegID,
        /**
         * @summary `newCallSegment`.
         * @public
         * @readonly
         */
        readonly newCallSegment: OPTIONAL<CallSegmentID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SplitLegArg
     * @description
     * 
     * This takes an `object` and converts it to a `SplitLegArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SplitLegArg`.
     * @returns {SplitLegArg}
     */
    public static _from_object (_o: { [_K in keyof (SplitLegArg)]: (SplitLegArg)[_K] }): SplitLegArg {
        return new SplitLegArg(_o.legToBeSplit, _o.newCallSegment, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SplitLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SplitLegArg: $.ComponentSpec[] = [
    new $.ComponentSpec("legToBeSplit", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    /* FIXME: newCallSegment COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: extensions COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of SplitLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SplitLegArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SplitLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SplitLegArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SplitLegArg: $.ASN1Decoder<SplitLegArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SplitLegArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SplitLegArg (el: _Element): SplitLegArg {
    if (!_cached_decoder_for_SplitLegArg) { _cached_decoder_for_SplitLegArg = function (el: _Element): SplitLegArg {
    let legToBeSplit!: LegID;
    let newCallSegment: OPTIONAL<CallSegmentID>;
    let extensions: OPTIONAL<Extensions>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "legToBeSplit": (_el: _Element): void => { legToBeSplit = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "newCallSegment": (_el: _Element): void => { newCallSegment = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SplitLegArg,
        _extension_additions_list_spec_for_SplitLegArg,
        _root_component_type_list_2_spec_for_SplitLegArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SplitLegArg(
        legToBeSplit,
        newCallSegment,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SplitLegArg(el);
}

let _cached_encoder_for_SplitLegArg: $.ASN1Encoder<SplitLegArg> | null = null;

/**
 * @summary Encodes a(n) SplitLegArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SplitLegArg, encoded as an ASN.1 Element.
 */
export
function _encode_SplitLegArg (value: SplitLegArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SplitLegArg) { _cached_encoder_for_SplitLegArg = function (value: SplitLegArg, elGetter: $.ASN1Encoder<SplitLegArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_LegID, $.BER)(value.legToBeSplit, $.BER),
            /* IF_ABSENT  */ ((value.newCallSegment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallSegmentID, $.BER)(value.newCallSegment, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SplitLegArg(value, elGetter);
}


/* eslint-enable */

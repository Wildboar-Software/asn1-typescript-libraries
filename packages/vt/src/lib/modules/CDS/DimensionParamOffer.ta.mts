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
import { DimensionParamOffer_bound, _decode_DimensionParamOffer_bound, _encode_DimensionParamOffer_bound } from "../CDS/DimensionParamOffer-bound.ta.mjs";
// export { DimensionParamOffer_bound, _decode_DimensionParamOffer_bound, _encode_DimensionParamOffer_bound } from "../CDS/DimensionParamOffer-bound.ta.mjs";
import { DimensionParamOffer_addressing, DimensionParamOffer_addressing_noConstraint /* IMPORTED_LONG_NAMED_BIT */, noConstraint /* IMPORTED_SHORT_NAMED_BIT */, DimensionParamOffer_addressing_higherOnly /* IMPORTED_LONG_NAMED_BIT */, higherOnly /* IMPORTED_SHORT_NAMED_BIT */, DimensionParamOffer_addressing_notPermitted /* IMPORTED_LONG_NAMED_BIT */, notPermitted /* IMPORTED_SHORT_NAMED_BIT */, _decode_DimensionParamOffer_addressing, _encode_DimensionParamOffer_addressing } from "../CDS/DimensionParamOffer-addressing.ta.mjs";
// export { DimensionParamOffer_addressing, DimensionParamOffer_addressing_noConstraint /* IMPORTED_LONG_NAMED_BIT */, noConstraint /* IMPORTED_SHORT_NAMED_BIT */, DimensionParamOffer_addressing_higherOnly /* IMPORTED_LONG_NAMED_BIT */, higherOnly /* IMPORTED_SHORT_NAMED_BIT */, DimensionParamOffer_addressing_notPermitted /* IMPORTED_LONG_NAMED_BIT */, notPermitted /* IMPORTED_SHORT_NAMED_BIT */, _decode_DimensionParamOffer_addressing, _encode_DimensionParamOffer_addressing } from "../CDS/DimensionParamOffer-addressing.ta.mjs";
import { DimensionParamOffer_absolute, DimensionParamOffer_absolute_yes /* IMPORTED_LONG_NAMED_BIT */, yes /* IMPORTED_SHORT_NAMED_BIT */, DimensionParamOffer_absolute_no /* IMPORTED_LONG_NAMED_BIT */, no /* IMPORTED_SHORT_NAMED_BIT */, _decode_DimensionParamOffer_absolute, _encode_DimensionParamOffer_absolute } from "../CDS/DimensionParamOffer-absolute.ta.mjs";
// export { DimensionParamOffer_absolute, DimensionParamOffer_absolute_yes /* IMPORTED_LONG_NAMED_BIT */, yes /* IMPORTED_SHORT_NAMED_BIT */, DimensionParamOffer_absolute_no /* IMPORTED_LONG_NAMED_BIT */, no /* IMPORTED_SHORT_NAMED_BIT */, _decode_DimensionParamOffer_absolute, _encode_DimensionParamOffer_absolute } from "../CDS/DimensionParamOffer-absolute.ta.mjs";
import { DimensionParamOffer_window, _decode_DimensionParamOffer_window, _encode_DimensionParamOffer_window } from "../CDS/DimensionParamOffer-window.ta.mjs";
// export { DimensionParamOffer_window, _decode_DimensionParamOffer_window, _encode_DimensionParamOffer_window } from "../CDS/DimensionParamOffer-window.ta.mjs";


/**
 * @summary DimensionParamOffer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DimensionParamOffer ::= SEQUENCE {
 *     bound       [0] IMPLICIT SEQUENCE {
 *         unbounded NULL OPTIONAL,
 *         limit G.IntegerOffer OPTIONAL
 *     } OPTIONAL,
 *     addressing  [1] IMPLICIT BIT STRING {
 *         noConstraint (0),
 *         higherOnly   (1),
 *         notPermitted (2)
 *     } OPTIONAL,
 *     absolute    [2] IMPLICIT BIT STRING { yes (0), no (1) } OPTIONAL,
 *     window      [3] IMPLICIT SEQUENCE {
 *         unbounded NULL OPTIONAL,
 *         limit G.IntegerOffer OPTIONAL
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DimensionParamOffer {
    constructor (
        /**
         * @summary `bound`.
         * @public
         * @readonly
         */
        readonly bound: OPTIONAL<DimensionParamOffer_bound>,
        /**
         * @summary `addressing`.
         * @public
         * @readonly
         */
        readonly addressing: OPTIONAL<DimensionParamOffer_addressing>,
        /**
         * @summary `absolute`.
         * @public
         * @readonly
         */
        readonly absolute: OPTIONAL<DimensionParamOffer_absolute>,
        /**
         * @summary `window`.
         * @public
         * @readonly
         */
        readonly window: OPTIONAL<DimensionParamOffer_window>
    ) {}

    /**
     * @summary Restructures an object into a DimensionParamOffer
     * @description
     * 
     * This takes an `object` and converts it to a `DimensionParamOffer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DimensionParamOffer`.
     * @returns {DimensionParamOffer}
     */
    public static _from_object (_o: { [_K in keyof (DimensionParamOffer)]: (DimensionParamOffer)[_K] }): DimensionParamOffer {
        return new DimensionParamOffer(_o.bound, _o.addressing, _o.absolute, _o.window);
    }


}

/**
 * @summary The Leading Root Component Types of DimensionParamOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DimensionParamOffer: $.ComponentSpec[] = [
    new $.ComponentSpec("bound", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("addressing", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("absolute", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("window", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of DimensionParamOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DimensionParamOffer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DimensionParamOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DimensionParamOffer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DimensionParamOffer: $.ASN1Decoder<DimensionParamOffer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DimensionParamOffer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DimensionParamOffer (el: _Element): DimensionParamOffer {
    if (!_cached_decoder_for_DimensionParamOffer) { _cached_decoder_for_DimensionParamOffer = function (el: _Element): DimensionParamOffer {
    let bound: OPTIONAL<DimensionParamOffer_bound>;
    let addressing: OPTIONAL<DimensionParamOffer_addressing>;
    let absolute: OPTIONAL<DimensionParamOffer_absolute>;
    let window: OPTIONAL<DimensionParamOffer_window>;
    const callbacks: $.DecodingMap = {
        "bound": (_el: _Element): void => { bound = $._decode_implicit<DimensionParamOffer_bound>(() => _decode_DimensionParamOffer_bound)(_el); },
        "addressing": (_el: _Element): void => { addressing = $._decode_implicit<DimensionParamOffer_addressing>(() => _decode_DimensionParamOffer_addressing)(_el); },
        "absolute": (_el: _Element): void => { absolute = $._decode_implicit<DimensionParamOffer_absolute>(() => _decode_DimensionParamOffer_absolute)(_el); },
        "window": (_el: _Element): void => { window = $._decode_implicit<DimensionParamOffer_window>(() => _decode_DimensionParamOffer_window)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DimensionParamOffer,
        _extension_additions_list_spec_for_DimensionParamOffer,
        _root_component_type_list_2_spec_for_DimensionParamOffer,
        undefined,
    );
    return new DimensionParamOffer(
        bound,
        addressing,
        absolute,
        window
    );
}; }
    return _cached_decoder_for_DimensionParamOffer(el);
}

let _cached_encoder_for_DimensionParamOffer: $.ASN1Encoder<DimensionParamOffer> | null = null;

/**
 * @summary Encodes a(n) DimensionParamOffer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DimensionParamOffer, encoded as an ASN.1 Element.
 */
export
function _encode_DimensionParamOffer (value: DimensionParamOffer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DimensionParamOffer) { _cached_encoder_for_DimensionParamOffer = function (value: DimensionParamOffer, elGetter: $.ASN1Encoder<DimensionParamOffer>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.bound === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_DimensionParamOffer_bound, $.BER)(value.bound, $.BER)),
            /* IF_ABSENT  */ ((value.addressing === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DimensionParamOffer_addressing, $.BER)(value.addressing, $.BER)),
            /* IF_ABSENT  */ ((value.absolute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_DimensionParamOffer_absolute, $.BER)(value.absolute, $.BER)),
            /* IF_ABSENT  */ ((value.window === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_DimensionParamOffer_window, $.BER)(value.window, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DimensionParamOffer(value, elGetter);
}


/* eslint-enable */

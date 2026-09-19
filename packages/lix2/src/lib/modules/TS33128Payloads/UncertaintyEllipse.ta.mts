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
import { Uncertainty, _decode_Uncertainty, _encode_Uncertainty } from "../TS33128Payloads/Uncertainty.ta.mjs";
// export { Uncertainty, _decode_Uncertainty, _encode_Uncertainty } from "../TS33128Payloads/Uncertainty.ta.mjs";
import { Orientation, _decode_Orientation, _encode_Orientation } from "../TS33128Payloads/Orientation.ta.mjs";
// export { Orientation, _decode_Orientation, _encode_Orientation } from "../TS33128Payloads/Orientation.ta.mjs";
import { UncertaintySBI, _decode_UncertaintySBI, _encode_UncertaintySBI } from "../TS33128Payloads/UncertaintySBI.ta.mjs";
// export { UncertaintySBI, _decode_UncertaintySBI, _encode_UncertaintySBI } from "../TS33128Payloads/UncertaintySBI.ta.mjs";


/**
 * @summary UncertaintyEllipse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UncertaintyEllipse ::= SEQUENCE
 * {
 *     -- deprecatedSemiMajor was deprecated in r18(18) version3(3)
 *     -- and shall be set to 0. The semiMajorSBI parameter shall be used instead.
 *     deprecatedSemiMajor                 [1] Uncertainty,
 *     -- deprecatedSemiMinor was deprecated in r18(18) version3(3)
 *     -- and shall be set to 0. The semiMinorSBI parameter shall be used instead.
 *     deprecatedSemiMinor                 [2] Uncertainty,
 *     orientationMajor                    [3] Orientation,
 *     semiMajorSBI                        [4] UncertaintySBI OPTIONAL,
 *     semiMinorSBI                        [5] UncertaintySBI OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UncertaintyEllipse {
    constructor (
        /**
         * @summary `deprecatedSemiMajor`.
         * @public
         * @readonly
         */
        readonly deprecatedSemiMajor: Uncertainty,
        /**
         * @summary `deprecatedSemiMinor`.
         * @public
         * @readonly
         */
        readonly deprecatedSemiMinor: Uncertainty,
        /**
         * @summary `orientationMajor`.
         * @public
         * @readonly
         */
        readonly orientationMajor: Orientation,
        /**
         * @summary `semiMajorSBI`.
         * @public
         * @readonly
         */
        readonly semiMajorSBI: OPTIONAL<UncertaintySBI>,
        /**
         * @summary `semiMinorSBI`.
         * @public
         * @readonly
         */
        readonly semiMinorSBI: OPTIONAL<UncertaintySBI>
    ) {}

    /**
     * @summary Restructures an object into a UncertaintyEllipse
     * @description
     * 
     * This takes an `object` and converts it to a `UncertaintyEllipse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UncertaintyEllipse`.
     * @returns {UncertaintyEllipse}
     */
    public static _from_object (_o: { [_K in keyof (UncertaintyEllipse)]: (UncertaintyEllipse)[_K] }): UncertaintyEllipse {
        return new UncertaintyEllipse(_o.deprecatedSemiMajor, _o.deprecatedSemiMinor, _o.orientationMajor, _o.semiMajorSBI, _o.semiMinorSBI);
    }


}

/**
 * @summary The Leading Root Component Types of UncertaintyEllipse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UncertaintyEllipse: $.ComponentSpec[] = [
    new $.ComponentSpec("deprecatedSemiMajor", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("deprecatedSemiMinor", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("orientationMajor", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("semiMajorSBI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("semiMinorSBI", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of UncertaintyEllipse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UncertaintyEllipse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UncertaintyEllipse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UncertaintyEllipse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UncertaintyEllipse: $.ASN1Decoder<UncertaintyEllipse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UncertaintyEllipse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UncertaintyEllipse (el: _Element): UncertaintyEllipse {
    if (!_cached_decoder_for_UncertaintyEllipse) { _cached_decoder_for_UncertaintyEllipse = function (el: _Element): UncertaintyEllipse {
    let deprecatedSemiMajor!: Uncertainty;
    let deprecatedSemiMinor!: Uncertainty;
    let orientationMajor!: Orientation;
    let semiMajorSBI: OPTIONAL<UncertaintySBI>;
    let semiMinorSBI: OPTIONAL<UncertaintySBI>;
    const callbacks: $.DecodingMap = {
        "deprecatedSemiMajor": (_el: _Element): void => { deprecatedSemiMajor = $._decode_implicit<Uncertainty>(() => _decode_Uncertainty)(_el); },
        "deprecatedSemiMinor": (_el: _Element): void => { deprecatedSemiMinor = $._decode_implicit<Uncertainty>(() => _decode_Uncertainty)(_el); },
        "orientationMajor": (_el: _Element): void => { orientationMajor = $._decode_implicit<Orientation>(() => _decode_Orientation)(_el); },
        "semiMajorSBI": (_el: _Element): void => { semiMajorSBI = $._decode_implicit<UncertaintySBI>(() => _decode_UncertaintySBI)(_el); },
        "semiMinorSBI": (_el: _Element): void => { semiMinorSBI = $._decode_implicit<UncertaintySBI>(() => _decode_UncertaintySBI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UncertaintyEllipse,
        _extension_additions_list_spec_for_UncertaintyEllipse,
        _root_component_type_list_2_spec_for_UncertaintyEllipse,
        undefined,
    );
    return new UncertaintyEllipse(
        deprecatedSemiMajor,
        deprecatedSemiMinor,
        orientationMajor,
        semiMajorSBI,
        semiMinorSBI
    );
}; }
    return _cached_decoder_for_UncertaintyEllipse(el);
}

let _cached_encoder_for_UncertaintyEllipse: $.ASN1Encoder<UncertaintyEllipse> | null = null;

/**
 * @summary Encodes a(n) UncertaintyEllipse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UncertaintyEllipse, encoded as an ASN.1 Element.
 */
export
function _encode_UncertaintyEllipse (value: UncertaintyEllipse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UncertaintyEllipse) { _cached_encoder_for_UncertaintyEllipse = function (value: UncertaintyEllipse, elGetter: $.ASN1Encoder<UncertaintyEllipse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Uncertainty, $.BER)(value.deprecatedSemiMajor, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Uncertainty, $.BER)(value.deprecatedSemiMinor, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Orientation, $.BER)(value.orientationMajor, $.BER),
            /* IF_ABSENT  */ ((value.semiMajorSBI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_UncertaintySBI, $.BER)(value.semiMajorSBI, $.BER)),
            /* IF_ABSENT  */ ((value.semiMinorSBI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_UncertaintySBI, $.BER)(value.semiMinorSBI, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UncertaintyEllipse(value, elGetter);
}


/* eslint-enable */

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
import { AMATimeDuration, _decode_AMATimeDuration, _encode_AMATimeDuration } from "../AIN-Parameters/AMATimeDuration.ta.mjs";
// export { AMATimeDuration, _decode_AMATimeDuration, _encode_AMATimeDuration } from "../AIN-Parameters/AMATimeDuration.ta.mjs";
import { AMATimeGuard, _enum_for_AMATimeGuard, AMATimeGuard_noTimingGuard /* IMPORTED_LONG_ENUMERATION_ITEM */, noTimingGuard /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMATimeGuard_timingGuardExists /* IMPORTED_LONG_ENUMERATION_ITEM */, timingGuardExists /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AMATimeGuard, _encode_AMATimeGuard } from "../AIN-Parameters/AMATimeGuard.ta.mjs";
// export { AMATimeGuard, _enum_for_AMATimeGuard, AMATimeGuard_noTimingGuard /* IMPORTED_LONG_ENUMERATION_ITEM */, noTimingGuard /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMATimeGuard_timingGuardExists /* IMPORTED_LONG_ENUMERATION_ITEM */, timingGuardExists /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AMATimeGuard, _encode_AMATimeGuard } from "../AIN-Parameters/AMATimeGuard.ta.mjs";


/**
 * @summary AMAMeasurement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMAMeasurement ::= [73] IMPLICIT SEQUENCE{
 *         aMATimeDuration     [0] IMPLICIT AMATimeDuration,
 *         aMATimeGuard        [1] IMPLICIT AMATimeGuard
 *     }
 * ```
 * 
 * @class
 */
export
class AMAMeasurement {
    constructor (
        /**
         * @summary `aMATimeDuration`.
         * @public
         * @readonly
         */
        readonly aMATimeDuration: AMATimeDuration,
        /**
         * @summary `aMATimeGuard`.
         * @public
         * @readonly
         */
        readonly aMATimeGuard: AMATimeGuard
    ) {}

    /**
     * @summary Restructures an object into a AMAMeasurement
     * @description
     * 
     * This takes an `object` and converts it to a `AMAMeasurement`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMAMeasurement`.
     * @returns {AMAMeasurement}
     */
    public static _from_object (_o: { [_K in keyof (AMAMeasurement)]: (AMAMeasurement)[_K] }): AMAMeasurement {
        return new AMAMeasurement(_o.aMATimeDuration, _o.aMATimeGuard);
    }

        /**
         * @summary The enum used as the type of the component `aMATimeGuard`
         * @public
         * @static
         */

    public static _enum_for_aMATimeGuard = _enum_for_AMATimeGuard;
}

/**
 * @summary The Leading Root Component Types of AMAMeasurement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMAMeasurement: $.ComponentSpec[] = [
    new $.ComponentSpec("aMATimeDuration", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("aMATimeGuard", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AMAMeasurement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMAMeasurement: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMAMeasurement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMAMeasurement: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMAMeasurement: $.ASN1Decoder<AMAMeasurement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMAMeasurement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMAMeasurement (el: _Element): AMAMeasurement {
    if (!_cached_decoder_for_AMAMeasurement) { _cached_decoder_for_AMAMeasurement = $._decode_implicit<AMAMeasurement>(() => function (el: _Element): AMAMeasurement {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AMAMeasurement contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aMATimeDuration";
    sequence[1].name = "aMATimeGuard";
    let aMATimeDuration!: AMATimeDuration;
    let aMATimeGuard!: AMATimeGuard;
    aMATimeDuration = $._decode_implicit<AMATimeDuration>(() => _decode_AMATimeDuration)(sequence[0]);
    aMATimeGuard = $._decode_implicit<AMATimeGuard>(() => _decode_AMATimeGuard)(sequence[1]);
    return new AMAMeasurement(
        aMATimeDuration,
        aMATimeGuard,

    );
}); }
    return _cached_decoder_for_AMAMeasurement(el);
}

let _cached_encoder_for_AMAMeasurement: $.ASN1Encoder<AMAMeasurement> | null = null;

/**
 * @summary Encodes a(n) AMAMeasurement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMAMeasurement, encoded as an ASN.1 Element.
 */
export
function _encode_AMAMeasurement (value: AMAMeasurement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMAMeasurement) { _cached_encoder_for_AMAMeasurement = $._encode_implicit(_TagClass.context, 73, () => function (value: AMAMeasurement, elGetter: $.ASN1Encoder<AMAMeasurement>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AMATimeDuration, $.BER)(value.aMATimeDuration, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AMATimeGuard, $.BER)(value.aMATimeGuard, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_AMAMeasurement(value, elGetter);
}


/* eslint-enable */

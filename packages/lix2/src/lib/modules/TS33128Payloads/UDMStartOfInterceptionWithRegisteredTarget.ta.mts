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
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary UDMStartOfInterceptionWithRegisteredTarget
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMStartOfInterceptionWithRegisteredTarget ::= SEQUENCE
 * {
 *     sUPI                        [1] SUPI,
 *     gPSI                        [2] GPSI OPTIONAL,
 *     uDMSubscriptionDataSets     [3] SBIType
 * }
 * ```
 * 
 * @class
 */
export
class UDMStartOfInterceptionWithRegisteredTarget {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `uDMSubscriptionDataSets`.
         * @public
         * @readonly
         */
        readonly uDMSubscriptionDataSets: SBIType
    ) {}

    /**
     * @summary Restructures an object into a UDMStartOfInterceptionWithRegisteredTarget
     * @description
     * 
     * This takes an `object` and converts it to a `UDMStartOfInterceptionWithRegisteredTarget`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMStartOfInterceptionWithRegisteredTarget`.
     * @returns {UDMStartOfInterceptionWithRegisteredTarget}
     */
    public static _from_object (_o: { [_K in keyof (UDMStartOfInterceptionWithRegisteredTarget)]: (UDMStartOfInterceptionWithRegisteredTarget)[_K] }): UDMStartOfInterceptionWithRegisteredTarget {
        return new UDMStartOfInterceptionWithRegisteredTarget(_o.sUPI, _o.gPSI, _o.uDMSubscriptionDataSets);
    }


}

/**
 * @summary The Leading Root Component Types of UDMStartOfInterceptionWithRegisteredTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMStartOfInterceptionWithRegisteredTarget: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("uDMSubscriptionDataSets", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of UDMStartOfInterceptionWithRegisteredTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMStartOfInterceptionWithRegisteredTarget: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMStartOfInterceptionWithRegisteredTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMStartOfInterceptionWithRegisteredTarget: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMStartOfInterceptionWithRegisteredTarget: $.ASN1Decoder<UDMStartOfInterceptionWithRegisteredTarget> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMStartOfInterceptionWithRegisteredTarget
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMStartOfInterceptionWithRegisteredTarget (el: _Element): UDMStartOfInterceptionWithRegisteredTarget {
    if (!_cached_decoder_for_UDMStartOfInterceptionWithRegisteredTarget) { _cached_decoder_for_UDMStartOfInterceptionWithRegisteredTarget = function (el: _Element): UDMStartOfInterceptionWithRegisteredTarget {
    let sUPI!: SUPI;
    let gPSI: OPTIONAL<GPSI>;
    let uDMSubscriptionDataSets!: SBIType;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "uDMSubscriptionDataSets": (_el: _Element): void => { uDMSubscriptionDataSets = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UDMStartOfInterceptionWithRegisteredTarget,
        _extension_additions_list_spec_for_UDMStartOfInterceptionWithRegisteredTarget,
        _root_component_type_list_2_spec_for_UDMStartOfInterceptionWithRegisteredTarget,
        undefined,
    );
    return new UDMStartOfInterceptionWithRegisteredTarget(
        sUPI,
        gPSI,
        uDMSubscriptionDataSets
    );
}; }
    return _cached_decoder_for_UDMStartOfInterceptionWithRegisteredTarget(el);
}

let _cached_encoder_for_UDMStartOfInterceptionWithRegisteredTarget: $.ASN1Encoder<UDMStartOfInterceptionWithRegisteredTarget> | null = null;

/**
 * @summary Encodes a(n) UDMStartOfInterceptionWithRegisteredTarget into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMStartOfInterceptionWithRegisteredTarget, encoded as an ASN.1 Element.
 */
export
function _encode_UDMStartOfInterceptionWithRegisteredTarget (value: UDMStartOfInterceptionWithRegisteredTarget, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMStartOfInterceptionWithRegisteredTarget) { _cached_encoder_for_UDMStartOfInterceptionWithRegisteredTarget = function (value: UDMStartOfInterceptionWithRegisteredTarget, elGetter: $.ASN1Encoder<UDMStartOfInterceptionWithRegisteredTarget>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SBIType, $.BER)(value.uDMSubscriptionDataSets, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UDMStartOfInterceptionWithRegisteredTarget(value, elGetter);
}


/* eslint-enable */

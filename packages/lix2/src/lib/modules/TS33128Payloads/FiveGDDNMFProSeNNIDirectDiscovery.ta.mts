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
 * @summary FiveGDDNMFProSeNNIDirectDiscovery
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGDDNMFProSeNNIDirectDiscovery ::= SEQUENCE
 * {
 *     sUPI                                  [1] SUPI OPTIONAL,
 *     gPSI                                  [2] GPSI OPTIONAL,
 *     fiveGDDNMFProSeDirectDiscoveryMessage [3] SBIType
 * }
 * ```
 * 
 * @class
 */
export
class FiveGDDNMFProSeNNIDirectDiscovery {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: OPTIONAL<SUPI>,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `fiveGDDNMFProSeDirectDiscoveryMessage`.
         * @public
         * @readonly
         */
        readonly fiveGDDNMFProSeDirectDiscoveryMessage: SBIType
    ) {}

    /**
     * @summary Restructures an object into a FiveGDDNMFProSeNNIDirectDiscovery
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGDDNMFProSeNNIDirectDiscovery`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGDDNMFProSeNNIDirectDiscovery`.
     * @returns {FiveGDDNMFProSeNNIDirectDiscovery}
     */
    public static _from_object (_o: { [_K in keyof (FiveGDDNMFProSeNNIDirectDiscovery)]: (FiveGDDNMFProSeNNIDirectDiscovery)[_K] }): FiveGDDNMFProSeNNIDirectDiscovery {
        return new FiveGDDNMFProSeNNIDirectDiscovery(_o.sUPI, _o.gPSI, _o.fiveGDDNMFProSeDirectDiscoveryMessage);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGDDNMFProSeNNIDirectDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGDDNMFProSeNNIDirectDiscovery: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fiveGDDNMFProSeDirectDiscoveryMessage", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FiveGDDNMFProSeNNIDirectDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGDDNMFProSeNNIDirectDiscovery: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGDDNMFProSeNNIDirectDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGDDNMFProSeNNIDirectDiscovery: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGDDNMFProSeNNIDirectDiscovery: $.ASN1Decoder<FiveGDDNMFProSeNNIDirectDiscovery> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGDDNMFProSeNNIDirectDiscovery
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGDDNMFProSeNNIDirectDiscovery (el: _Element): FiveGDDNMFProSeNNIDirectDiscovery {
    if (!_cached_decoder_for_FiveGDDNMFProSeNNIDirectDiscovery) { _cached_decoder_for_FiveGDDNMFProSeNNIDirectDiscovery = function (el: _Element): FiveGDDNMFProSeNNIDirectDiscovery {
    let sUPI: OPTIONAL<SUPI>;
    let gPSI: OPTIONAL<GPSI>;
    let fiveGDDNMFProSeDirectDiscoveryMessage!: SBIType;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "fiveGDDNMFProSeDirectDiscoveryMessage": (_el: _Element): void => { fiveGDDNMFProSeDirectDiscoveryMessage = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FiveGDDNMFProSeNNIDirectDiscovery,
        _extension_additions_list_spec_for_FiveGDDNMFProSeNNIDirectDiscovery,
        _root_component_type_list_2_spec_for_FiveGDDNMFProSeNNIDirectDiscovery,
        undefined,
    );
    return new FiveGDDNMFProSeNNIDirectDiscovery(
        sUPI,
        gPSI,
        fiveGDDNMFProSeDirectDiscoveryMessage
    );
}; }
    return _cached_decoder_for_FiveGDDNMFProSeNNIDirectDiscovery(el);
}

let _cached_encoder_for_FiveGDDNMFProSeNNIDirectDiscovery: $.ASN1Encoder<FiveGDDNMFProSeNNIDirectDiscovery> | null = null;

/**
 * @summary Encodes a(n) FiveGDDNMFProSeNNIDirectDiscovery into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGDDNMFProSeNNIDirectDiscovery, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGDDNMFProSeNNIDirectDiscovery (value: FiveGDDNMFProSeNNIDirectDiscovery, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGDDNMFProSeNNIDirectDiscovery) { _cached_encoder_for_FiveGDDNMFProSeNNIDirectDiscovery = function (value: FiveGDDNMFProSeNNIDirectDiscovery, elGetter: $.ASN1Encoder<FiveGDDNMFProSeNNIDirectDiscovery>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sUPI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SBIType, $.BER)(value.fiveGDDNMFProSeDirectDiscoveryMessage, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FiveGDDNMFProSeNNIDirectDiscovery(value, elGetter);
}


/* eslint-enable */

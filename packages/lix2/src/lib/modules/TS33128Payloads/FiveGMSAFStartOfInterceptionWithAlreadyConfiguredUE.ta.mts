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
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE ::= SEQUENCE
 * {
 *     gPSI                                [1] GPSI,
 *     serviceAccessInformationResource    [2] SBIType
 * }
 * ```
 * 
 * @class
 */
export
class FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE {
    constructor (
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: GPSI,
        /**
         * @summary `serviceAccessInformationResource`.
         * @public
         * @readonly
         */
        readonly serviceAccessInformationResource: SBIType
    ) {}

    /**
     * @summary Restructures an object into a FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE`.
     * @returns {FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE}
     */
    public static _from_object (_o: { [_K in keyof (FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE)]: (FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE)[_K] }): FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE {
        return new FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE(_o.gPSI, _o.serviceAccessInformationResource);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE: $.ComponentSpec[] = [
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceAccessInformationResource", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE: $.ASN1Decoder<FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE (el: _Element): FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE {
    if (!_cached_decoder_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE) { _cached_decoder_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE = function (el: _Element): FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "gPSI";
    sequence[1].name = "serviceAccessInformationResource";
    let gPSI!: GPSI;
    let serviceAccessInformationResource!: SBIType;
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[0]);
    serviceAccessInformationResource = $._decode_implicit<SBIType>(() => _decode_SBIType)(sequence[1]);
    return new FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE(
        gPSI,
        serviceAccessInformationResource,

    );
}; }
    return _cached_decoder_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE(el);
}

let _cached_encoder_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE: $.ASN1Encoder<FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE> | null = null;

/**
 * @summary Encodes a(n) FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE (value: FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE) { _cached_encoder_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE = function (value: FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE, elGetter: $.ASN1Encoder<FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SBIType, $.BER)(value.serviceAccessInformationResource, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE(value, elGetter);
}


/* eslint-enable */

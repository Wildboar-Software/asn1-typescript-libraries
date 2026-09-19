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
import { NAOperationType, _enum_for_NAOperationType, NAOperationType_createNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, createNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_retrieveNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieveNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_updateNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, updateNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_patchNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, patchNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_destroyNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, destroyNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_requestBitRateRecommendation /* IMPORTED_LONG_ENUMERATION_ITEM */, requestBitRateRecommendation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_requestDeliveryBoost /* IMPORTED_LONG_ENUMERATION_ITEM */, requestDeliveryBoost /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NAOperationType, _encode_NAOperationType } from "../TS33128Payloads/NAOperationType.ta.mjs";
// export { NAOperationType, _enum_for_NAOperationType, NAOperationType_createNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, createNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_retrieveNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieveNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_updateNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, updateNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_patchNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, patchNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_destroyNetworkAssistanceSession /* IMPORTED_LONG_ENUMERATION_ITEM */, destroyNetworkAssistanceSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_requestBitRateRecommendation /* IMPORTED_LONG_ENUMERATION_ITEM */, requestBitRateRecommendation /* IMPORTED_SHORT_ENUMERATION_ITEM */, NAOperationType_requestDeliveryBoost /* IMPORTED_LONG_ENUMERATION_ITEM */, requestDeliveryBoost /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NAOperationType, _encode_NAOperationType } from "../TS33128Payloads/NAOperationType.ta.mjs";


/**
 * @summary FiveGMSAFNetworkAssistance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFNetworkAssistance ::= SEQUENCE
 * {
 *     gPSI                                [1] GPSI,
 *     networkAssistanceSessionResource    [2] SBIType,
 *     nAOperationType                     [3] NAOperationType
 * }
 * ```
 * 
 * @class
 */
export
class FiveGMSAFNetworkAssistance {
    constructor (
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: GPSI,
        /**
         * @summary `networkAssistanceSessionResource`.
         * @public
         * @readonly
         */
        readonly networkAssistanceSessionResource: SBIType,
        /**
         * @summary `nAOperationType`.
         * @public
         * @readonly
         */
        readonly nAOperationType: NAOperationType
    ) {}

    /**
     * @summary Restructures an object into a FiveGMSAFNetworkAssistance
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGMSAFNetworkAssistance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGMSAFNetworkAssistance`.
     * @returns {FiveGMSAFNetworkAssistance}
     */
    public static _from_object (_o: { [_K in keyof (FiveGMSAFNetworkAssistance)]: (FiveGMSAFNetworkAssistance)[_K] }): FiveGMSAFNetworkAssistance {
        return new FiveGMSAFNetworkAssistance(_o.gPSI, _o.networkAssistanceSessionResource, _o.nAOperationType);
    }

        /**
         * @summary The enum used as the type of the component `nAOperationType`
         * @public
         * @static
         */

    public static _enum_for_nAOperationType = _enum_for_NAOperationType;
}

/**
 * @summary The Leading Root Component Types of FiveGMSAFNetworkAssistance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGMSAFNetworkAssistance: $.ComponentSpec[] = [
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("networkAssistanceSessionResource", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nAOperationType", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FiveGMSAFNetworkAssistance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGMSAFNetworkAssistance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGMSAFNetworkAssistance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGMSAFNetworkAssistance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGMSAFNetworkAssistance: $.ASN1Decoder<FiveGMSAFNetworkAssistance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGMSAFNetworkAssistance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGMSAFNetworkAssistance (el: _Element): FiveGMSAFNetworkAssistance {
    if (!_cached_decoder_for_FiveGMSAFNetworkAssistance) { _cached_decoder_for_FiveGMSAFNetworkAssistance = function (el: _Element): FiveGMSAFNetworkAssistance {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("FiveGMSAFNetworkAssistance contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "gPSI";
    sequence[1].name = "networkAssistanceSessionResource";
    sequence[2].name = "nAOperationType";
    let gPSI!: GPSI;
    let networkAssistanceSessionResource!: SBIType;
    let nAOperationType!: NAOperationType;
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[0]);
    networkAssistanceSessionResource = $._decode_implicit<SBIType>(() => _decode_SBIType)(sequence[1]);
    nAOperationType = $._decode_implicit<NAOperationType>(() => _decode_NAOperationType)(sequence[2]);
    return new FiveGMSAFNetworkAssistance(
        gPSI,
        networkAssistanceSessionResource,
        nAOperationType,

    );
}; }
    return _cached_decoder_for_FiveGMSAFNetworkAssistance(el);
}

let _cached_encoder_for_FiveGMSAFNetworkAssistance: $.ASN1Encoder<FiveGMSAFNetworkAssistance> | null = null;

/**
 * @summary Encodes a(n) FiveGMSAFNetworkAssistance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGMSAFNetworkAssistance, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGMSAFNetworkAssistance (value: FiveGMSAFNetworkAssistance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGMSAFNetworkAssistance) { _cached_encoder_for_FiveGMSAFNetworkAssistance = function (value: FiveGMSAFNetworkAssistance, elGetter: $.ASN1Encoder<FiveGMSAFNetworkAssistance>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SBIType, $.BER)(value.networkAssistanceSessionResource, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_NAOperationType, $.BER)(value.nAOperationType, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FiveGMSAFNetworkAssistance(value, elGetter);
}


/* eslint-enable */

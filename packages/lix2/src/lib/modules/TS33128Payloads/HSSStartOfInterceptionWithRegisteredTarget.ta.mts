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
import { HSSIdentities, _decode_HSSIdentities, _encode_HSSIdentities } from "../TS33128Payloads/HSSIdentities.ta.mjs";
// export { HSSIdentities, _decode_HSSIdentities, _encode_HSSIdentities } from "../TS33128Payloads/HSSIdentities.ta.mjs";
import { SubscriptionDataSets, _decode_SubscriptionDataSets, _encode_SubscriptionDataSets } from "../TS33128Payloads/SubscriptionDataSets.ta.mjs";
// export { SubscriptionDataSets, _decode_SubscriptionDataSets, _encode_SubscriptionDataSets } from "../TS33128Payloads/SubscriptionDataSets.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary HSSStartOfInterceptionWithRegisteredTarget
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HSSStartOfInterceptionWithRegisteredTarget ::= SEQUENCE
 * {
 *     hSSIdentities              [1] HSSIdentities,
 *     subscriptionDataSets       [2] SubscriptionDataSets,
 *     pSUserState                [3] SBIType
 * }
 * ```
 * 
 * @class
 */
export
class HSSStartOfInterceptionWithRegisteredTarget {
    constructor (
        /**
         * @summary `hSSIdentities`.
         * @public
         * @readonly
         */
        readonly hSSIdentities: HSSIdentities,
        /**
         * @summary `subscriptionDataSets`.
         * @public
         * @readonly
         */
        readonly subscriptionDataSets: SubscriptionDataSets,
        /**
         * @summary `pSUserState`.
         * @public
         * @readonly
         */
        readonly pSUserState: SBIType
    ) {}

    /**
     * @summary Restructures an object into a HSSStartOfInterceptionWithRegisteredTarget
     * @description
     * 
     * This takes an `object` and converts it to a `HSSStartOfInterceptionWithRegisteredTarget`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HSSStartOfInterceptionWithRegisteredTarget`.
     * @returns {HSSStartOfInterceptionWithRegisteredTarget}
     */
    public static _from_object (_o: { [_K in keyof (HSSStartOfInterceptionWithRegisteredTarget)]: (HSSStartOfInterceptionWithRegisteredTarget)[_K] }): HSSStartOfInterceptionWithRegisteredTarget {
        return new HSSStartOfInterceptionWithRegisteredTarget(_o.hSSIdentities, _o.subscriptionDataSets, _o.pSUserState);
    }


}

/**
 * @summary The Leading Root Component Types of HSSStartOfInterceptionWithRegisteredTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HSSStartOfInterceptionWithRegisteredTarget: $.ComponentSpec[] = [
    new $.ComponentSpec("hSSIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("subscriptionDataSets", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pSUserState", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of HSSStartOfInterceptionWithRegisteredTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HSSStartOfInterceptionWithRegisteredTarget: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HSSStartOfInterceptionWithRegisteredTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HSSStartOfInterceptionWithRegisteredTarget: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HSSStartOfInterceptionWithRegisteredTarget: $.ASN1Decoder<HSSStartOfInterceptionWithRegisteredTarget> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HSSStartOfInterceptionWithRegisteredTarget
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HSSStartOfInterceptionWithRegisteredTarget (el: _Element): HSSStartOfInterceptionWithRegisteredTarget {
    if (!_cached_decoder_for_HSSStartOfInterceptionWithRegisteredTarget) { _cached_decoder_for_HSSStartOfInterceptionWithRegisteredTarget = function (el: _Element): HSSStartOfInterceptionWithRegisteredTarget {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("HSSStartOfInterceptionWithRegisteredTarget contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hSSIdentities";
    sequence[1].name = "subscriptionDataSets";
    sequence[2].name = "pSUserState";
    let hSSIdentities!: HSSIdentities;
    let subscriptionDataSets!: SubscriptionDataSets;
    let pSUserState!: SBIType;
    hSSIdentities = $._decode_implicit<HSSIdentities>(() => _decode_HSSIdentities)(sequence[0]);
    subscriptionDataSets = $._decode_explicit<SubscriptionDataSets>(() => _decode_SubscriptionDataSets)(sequence[1]);
    pSUserState = $._decode_implicit<SBIType>(() => _decode_SBIType)(sequence[2]);
    return new HSSStartOfInterceptionWithRegisteredTarget(
        hSSIdentities,
        subscriptionDataSets,
        pSUserState,

    );
}; }
    return _cached_decoder_for_HSSStartOfInterceptionWithRegisteredTarget(el);
}

let _cached_encoder_for_HSSStartOfInterceptionWithRegisteredTarget: $.ASN1Encoder<HSSStartOfInterceptionWithRegisteredTarget> | null = null;

/**
 * @summary Encodes a(n) HSSStartOfInterceptionWithRegisteredTarget into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HSSStartOfInterceptionWithRegisteredTarget, encoded as an ASN.1 Element.
 */
export
function _encode_HSSStartOfInterceptionWithRegisteredTarget (value: HSSStartOfInterceptionWithRegisteredTarget, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HSSStartOfInterceptionWithRegisteredTarget) { _cached_encoder_for_HSSStartOfInterceptionWithRegisteredTarget = function (value: HSSStartOfInterceptionWithRegisteredTarget, elGetter: $.ASN1Encoder<HSSStartOfInterceptionWithRegisteredTarget>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_HSSIdentities, $.BER)(value.hSSIdentities, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_SubscriptionDataSets, $.BER)(value.subscriptionDataSets, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SBIType, $.BER)(value.pSUserState, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_HSSStartOfInterceptionWithRegisteredTarget(value, elGetter);
}


/* eslint-enable */

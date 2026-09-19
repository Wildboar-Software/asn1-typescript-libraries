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
import { FiveGSUserState, _enum_for_FiveGSUserState, FiveGSUserState_deregistered /* IMPORTED_LONG_ENUMERATION_ITEM */, deregistered /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSUserState_registeredNotReachableForPaging /* IMPORTED_LONG_ENUMERATION_ITEM */, registeredNotReachableForPaging /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSUserState_registeredReachableForPaging /* IMPORTED_LONG_ENUMERATION_ITEM */, registeredReachableForPaging /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSUserState_connectedNotReachableForPaging /* IMPORTED_LONG_ENUMERATION_ITEM */, connectedNotReachableForPaging /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSUserState_connectedReachableForPaging /* IMPORTED_LONG_ENUMERATION_ITEM */, connectedReachableForPaging /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSUserState_notProvidedFromAMF /* IMPORTED_LONG_ENUMERATION_ITEM */, notProvidedFromAMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGSUserState, _encode_FiveGSUserState } from "../TS33128Payloads/FiveGSUserState.ta.mjs";
// export { FiveGSUserState, _enum_for_FiveGSUserState, FiveGSUserState_deregistered /* IMPORTED_LONG_ENUMERATION_ITEM */, deregistered /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSUserState_registeredNotReachableForPaging /* IMPORTED_LONG_ENUMERATION_ITEM */, registeredNotReachableForPaging /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSUserState_registeredReachableForPaging /* IMPORTED_LONG_ENUMERATION_ITEM */, registeredReachableForPaging /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSUserState_connectedNotReachableForPaging /* IMPORTED_LONG_ENUMERATION_ITEM */, connectedNotReachableForPaging /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSUserState_connectedReachableForPaging /* IMPORTED_LONG_ENUMERATION_ITEM */, connectedReachableForPaging /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSUserState_notProvidedFromAMF /* IMPORTED_LONG_ENUMERATION_ITEM */, notProvidedFromAMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGSUserState, _encode_FiveGSUserState } from "../TS33128Payloads/FiveGSUserState.ta.mjs";
import { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";


/**
 * @summary FiveGSUserStateInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSUserStateInfo ::= SEQUENCE
 * {
 *     fiveGSUserState [1] FiveGSUserState,
 *     accessType      [2] AccessType
 * }
 * ```
 * 
 * @class
 */
export
class FiveGSUserStateInfo {
    constructor (
        /**
         * @summary `fiveGSUserState`.
         * @public
         * @readonly
         */
        readonly fiveGSUserState: FiveGSUserState,
        /**
         * @summary `accessType`.
         * @public
         * @readonly
         */
        readonly accessType: AccessType
    ) {}

    /**
     * @summary Restructures an object into a FiveGSUserStateInfo
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGSUserStateInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGSUserStateInfo`.
     * @returns {FiveGSUserStateInfo}
     */
    public static _from_object (_o: { [_K in keyof (FiveGSUserStateInfo)]: (FiveGSUserStateInfo)[_K] }): FiveGSUserStateInfo {
        return new FiveGSUserStateInfo(_o.fiveGSUserState, _o.accessType);
    }

        /**
         * @summary The enum used as the type of the component `fiveGSUserState`
         * @public
         * @static
         */

    public static _enum_for_fiveGSUserState = _enum_for_FiveGSUserState;        /**
         * @summary The enum used as the type of the component `accessType`
         * @public
         * @static
         */

    public static _enum_for_accessType = _enum_for_AccessType;
}

/**
 * @summary The Leading Root Component Types of FiveGSUserStateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGSUserStateInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("fiveGSUserState", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accessType", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of FiveGSUserStateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGSUserStateInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGSUserStateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGSUserStateInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGSUserStateInfo: $.ASN1Decoder<FiveGSUserStateInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGSUserStateInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGSUserStateInfo (el: _Element): FiveGSUserStateInfo {
    if (!_cached_decoder_for_FiveGSUserStateInfo) { _cached_decoder_for_FiveGSUserStateInfo = function (el: _Element): FiveGSUserStateInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FiveGSUserStateInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "fiveGSUserState";
    sequence[1].name = "accessType";
    let fiveGSUserState!: FiveGSUserState;
    let accessType!: AccessType;
    fiveGSUserState = $._decode_implicit<FiveGSUserState>(() => _decode_FiveGSUserState)(sequence[0]);
    accessType = $._decode_implicit<AccessType>(() => _decode_AccessType)(sequence[1]);
    return new FiveGSUserStateInfo(
        fiveGSUserState,
        accessType,

    );
}; }
    return _cached_decoder_for_FiveGSUserStateInfo(el);
}

let _cached_encoder_for_FiveGSUserStateInfo: $.ASN1Encoder<FiveGSUserStateInfo> | null = null;

/**
 * @summary Encodes a(n) FiveGSUserStateInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGSUserStateInfo, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGSUserStateInfo (value: FiveGSUserStateInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGSUserStateInfo) { _cached_encoder_for_FiveGSUserStateInfo = function (value: FiveGSUserStateInfo, elGetter: $.ASN1Encoder<FiveGSUserStateInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_FiveGSUserState, $.BER)(value.fiveGSUserState, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AccessType, $.BER)(value.accessType, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FiveGSUserStateInfo(value, elGetter);
}


/* eslint-enable */

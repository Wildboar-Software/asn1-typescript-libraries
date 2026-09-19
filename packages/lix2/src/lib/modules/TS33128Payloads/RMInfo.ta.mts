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
import { RMState, _enum_for_RMState, RMState_registered /* IMPORTED_LONG_ENUMERATION_ITEM */, registered /* IMPORTED_SHORT_ENUMERATION_ITEM */, RMState_deregistered /* IMPORTED_LONG_ENUMERATION_ITEM */, deregistered /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RMState, _encode_RMState } from "../TS33128Payloads/RMState.ta.mjs";
// export { RMState, _enum_for_RMState, RMState_registered /* IMPORTED_LONG_ENUMERATION_ITEM */, registered /* IMPORTED_SHORT_ENUMERATION_ITEM */, RMState_deregistered /* IMPORTED_LONG_ENUMERATION_ITEM */, deregistered /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RMState, _encode_RMState } from "../TS33128Payloads/RMState.ta.mjs";
import { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";


/**
 * @summary RMInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RMInfo ::= SEQUENCE
 * {
 *     rMState                     [1] RMState,
 *     accessType                  [2] AccessType
 * }
 * ```
 * 
 * @class
 */
export
class RMInfo {
    constructor (
        /**
         * @summary `rMState`.
         * @public
         * @readonly
         */
        readonly rMState: RMState,
        /**
         * @summary `accessType`.
         * @public
         * @readonly
         */
        readonly accessType: AccessType
    ) {}

    /**
     * @summary Restructures an object into a RMInfo
     * @description
     * 
     * This takes an `object` and converts it to a `RMInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RMInfo`.
     * @returns {RMInfo}
     */
    public static _from_object (_o: { [_K in keyof (RMInfo)]: (RMInfo)[_K] }): RMInfo {
        return new RMInfo(_o.rMState, _o.accessType);
    }

        /**
         * @summary The enum used as the type of the component `rMState`
         * @public
         * @static
         */

    public static _enum_for_rMState = _enum_for_RMState;        /**
         * @summary The enum used as the type of the component `accessType`
         * @public
         * @static
         */

    public static _enum_for_accessType = _enum_for_AccessType;
}

/**
 * @summary The Leading Root Component Types of RMInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RMInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("rMState", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accessType", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RMInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RMInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RMInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RMInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RMInfo: $.ASN1Decoder<RMInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RMInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RMInfo (el: _Element): RMInfo {
    if (!_cached_decoder_for_RMInfo) { _cached_decoder_for_RMInfo = function (el: _Element): RMInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RMInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "rMState";
    sequence[1].name = "accessType";
    let rMState!: RMState;
    let accessType!: AccessType;
    rMState = $._decode_implicit<RMState>(() => _decode_RMState)(sequence[0]);
    accessType = $._decode_implicit<AccessType>(() => _decode_AccessType)(sequence[1]);
    return new RMInfo(
        rMState,
        accessType,

    );
}; }
    return _cached_decoder_for_RMInfo(el);
}

let _cached_encoder_for_RMInfo: $.ASN1Encoder<RMInfo> | null = null;

/**
 * @summary Encodes a(n) RMInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RMInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RMInfo (value: RMInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RMInfo) { _cached_encoder_for_RMInfo = function (value: RMInfo, elGetter: $.ASN1Encoder<RMInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RMState, $.BER)(value.rMState, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AccessType, $.BER)(value.accessType, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RMInfo(value, elGetter);
}


/* eslint-enable */

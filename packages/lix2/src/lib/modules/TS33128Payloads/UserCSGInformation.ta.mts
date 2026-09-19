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
import { CSGID, _decode_CSGID, _encode_CSGID } from "../TS33128Payloads/CSGID.ta.mjs";
// export { CSGID, _decode_CSGID, _encode_CSGID } from "../TS33128Payloads/CSGID.ta.mjs";
import { CSGAccessMode, _enum_for_CSGAccessMode, CSGAccessMode_closedMode /* IMPORTED_LONG_ENUMERATION_ITEM */, closedMode /* IMPORTED_SHORT_ENUMERATION_ITEM */, CSGAccessMode_hybridMode /* IMPORTED_LONG_ENUMERATION_ITEM */, hybridMode /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CSGAccessMode, _encode_CSGAccessMode } from "../TS33128Payloads/CSGAccessMode.ta.mjs";
// export { CSGAccessMode, _enum_for_CSGAccessMode, CSGAccessMode_closedMode /* IMPORTED_LONG_ENUMERATION_ITEM */, closedMode /* IMPORTED_SHORT_ENUMERATION_ITEM */, CSGAccessMode_hybridMode /* IMPORTED_LONG_ENUMERATION_ITEM */, hybridMode /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CSGAccessMode, _encode_CSGAccessMode } from "../TS33128Payloads/CSGAccessMode.ta.mjs";
import { CSGMembershipIndication, _enum_for_CSGMembershipIndication, CSGMembershipIndication_notCSGMember /* IMPORTED_LONG_ENUMERATION_ITEM */, notCSGMember /* IMPORTED_SHORT_ENUMERATION_ITEM */, CSGMembershipIndication_cSGMember /* IMPORTED_LONG_ENUMERATION_ITEM */, cSGMember /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CSGMembershipIndication, _encode_CSGMembershipIndication } from "../TS33128Payloads/CSGMembershipIndication.ta.mjs";
// export { CSGMembershipIndication, _enum_for_CSGMembershipIndication, CSGMembershipIndication_notCSGMember /* IMPORTED_LONG_ENUMERATION_ITEM */, notCSGMember /* IMPORTED_SHORT_ENUMERATION_ITEM */, CSGMembershipIndication_cSGMember /* IMPORTED_LONG_ENUMERATION_ITEM */, cSGMember /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CSGMembershipIndication, _encode_CSGMembershipIndication } from "../TS33128Payloads/CSGMembershipIndication.ta.mjs";


/**
 * @summary UserCSGInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserCSGInformation ::= SEQUENCE
 * {
 *     cSGID                   [1] CSGID,
 *     cSGAccessMode           [2] CSGAccessMode,
 *     cSGMembershipIndication [3] CSGMembershipIndication
 * }
 * ```
 * 
 * @class
 */
export
class UserCSGInformation {
    constructor (
        /**
         * @summary `cSGID`.
         * @public
         * @readonly
         */
        readonly cSGID: CSGID,
        /**
         * @summary `cSGAccessMode`.
         * @public
         * @readonly
         */
        readonly cSGAccessMode: CSGAccessMode,
        /**
         * @summary `cSGMembershipIndication`.
         * @public
         * @readonly
         */
        readonly cSGMembershipIndication: CSGMembershipIndication
    ) {}

    /**
     * @summary Restructures an object into a UserCSGInformation
     * @description
     * 
     * This takes an `object` and converts it to a `UserCSGInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserCSGInformation`.
     * @returns {UserCSGInformation}
     */
    public static _from_object (_o: { [_K in keyof (UserCSGInformation)]: (UserCSGInformation)[_K] }): UserCSGInformation {
        return new UserCSGInformation(_o.cSGID, _o.cSGAccessMode, _o.cSGMembershipIndication);
    }

        /**
         * @summary The enum used as the type of the component `cSGAccessMode`
         * @public
         * @static
         */

    public static _enum_for_cSGAccessMode = _enum_for_CSGAccessMode;        /**
         * @summary The enum used as the type of the component `cSGMembershipIndication`
         * @public
         * @static
         */

    public static _enum_for_cSGMembershipIndication = _enum_for_CSGMembershipIndication;
}

/**
 * @summary The Leading Root Component Types of UserCSGInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UserCSGInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("cSGID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cSGAccessMode", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cSGMembershipIndication", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of UserCSGInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UserCSGInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UserCSGInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UserCSGInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UserCSGInformation: $.ASN1Decoder<UserCSGInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserCSGInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserCSGInformation (el: _Element): UserCSGInformation {
    if (!_cached_decoder_for_UserCSGInformation) { _cached_decoder_for_UserCSGInformation = function (el: _Element): UserCSGInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("UserCSGInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "cSGID";
    sequence[1].name = "cSGAccessMode";
    sequence[2].name = "cSGMembershipIndication";
    let cSGID!: CSGID;
    let cSGAccessMode!: CSGAccessMode;
    let cSGMembershipIndication!: CSGMembershipIndication;
    cSGID = $._decode_implicit<CSGID>(() => _decode_CSGID)(sequence[0]);
    cSGAccessMode = $._decode_implicit<CSGAccessMode>(() => _decode_CSGAccessMode)(sequence[1]);
    cSGMembershipIndication = $._decode_implicit<CSGMembershipIndication>(() => _decode_CSGMembershipIndication)(sequence[2]);
    return new UserCSGInformation(
        cSGID,
        cSGAccessMode,
        cSGMembershipIndication,

    );
}; }
    return _cached_decoder_for_UserCSGInformation(el);
}

let _cached_encoder_for_UserCSGInformation: $.ASN1Encoder<UserCSGInformation> | null = null;

/**
 * @summary Encodes a(n) UserCSGInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserCSGInformation, encoded as an ASN.1 Element.
 */
export
function _encode_UserCSGInformation (value: UserCSGInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserCSGInformation) { _cached_encoder_for_UserCSGInformation = function (value: UserCSGInformation, elGetter: $.ASN1Encoder<UserCSGInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CSGID, $.BER)(value.cSGID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_CSGAccessMode, $.BER)(value.cSGAccessMode, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_CSGMembershipIndication, $.BER)(value.cSGMembershipIndication, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UserCSGInformation(value, elGetter);
}


/* eslint-enable */

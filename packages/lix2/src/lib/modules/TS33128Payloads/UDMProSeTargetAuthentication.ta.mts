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
import { PrimaryAuthenticationType, _enum_for_PrimaryAuthenticationType, PrimaryAuthenticationType_eAPAKAPrime /* IMPORTED_LONG_ENUMERATION_ITEM */, eAPAKAPrime /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_fiveGAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, fiveGAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_eAPTLS /* IMPORTED_LONG_ENUMERATION_ITEM */, eAPTLS /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_ePSAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, ePSAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_eAPAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, eAPAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_iMSAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, iMSAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_gBAAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, gBAAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_uMTSAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, uMTSAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PrimaryAuthenticationType, _encode_PrimaryAuthenticationType } from "../TS33128Payloads/PrimaryAuthenticationType.ta.mjs";
// export { PrimaryAuthenticationType, _enum_for_PrimaryAuthenticationType, PrimaryAuthenticationType_eAPAKAPrime /* IMPORTED_LONG_ENUMERATION_ITEM */, eAPAKAPrime /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_fiveGAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, fiveGAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_eAPTLS /* IMPORTED_LONG_ENUMERATION_ITEM */, eAPTLS /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_ePSAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, ePSAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_eAPAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, eAPAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_iMSAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, iMSAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_gBAAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, gBAAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrimaryAuthenticationType_uMTSAKA /* IMPORTED_LONG_ENUMERATION_ITEM */, uMTSAKA /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PrimaryAuthenticationType, _encode_PrimaryAuthenticationType } from "../TS33128Payloads/PrimaryAuthenticationType.ta.mjs";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";


/**
 * @summary UDMProSeTargetAuthentication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMProSeTargetAuthentication ::= SEQUENCE
 * {
 *     servingNetworkName           [1] UTF8String,
 *     relayServiceCode             [2] INTEGER,
 *     authenticationType           [3] PrimaryAuthenticationType,
 *     sUPI                         [4] SUPI
 * }
 * ```
 * 
 * @class
 */
export
class UDMProSeTargetAuthentication {
    constructor (
        /**
         * @summary `servingNetworkName`.
         * @public
         * @readonly
         */
        readonly servingNetworkName: UTF8String,
        /**
         * @summary `relayServiceCode`.
         * @public
         * @readonly
         */
        readonly relayServiceCode: INTEGER,
        /**
         * @summary `authenticationType`.
         * @public
         * @readonly
         */
        readonly authenticationType: PrimaryAuthenticationType,
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI
    ) {}

    /**
     * @summary Restructures an object into a UDMProSeTargetAuthentication
     * @description
     * 
     * This takes an `object` and converts it to a `UDMProSeTargetAuthentication`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMProSeTargetAuthentication`.
     * @returns {UDMProSeTargetAuthentication}
     */
    public static _from_object (_o: { [_K in keyof (UDMProSeTargetAuthentication)]: (UDMProSeTargetAuthentication)[_K] }): UDMProSeTargetAuthentication {
        return new UDMProSeTargetAuthentication(_o.servingNetworkName, _o.relayServiceCode, _o.authenticationType, _o.sUPI);
    }

        /**
         * @summary The enum used as the type of the component `authenticationType`
         * @public
         * @static
         */

    public static _enum_for_authenticationType = _enum_for_PrimaryAuthenticationType;
}

/**
 * @summary The Leading Root Component Types of UDMProSeTargetAuthentication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMProSeTargetAuthentication: $.ComponentSpec[] = [
    new $.ComponentSpec("servingNetworkName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("relayServiceCode", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("authenticationType", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of UDMProSeTargetAuthentication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMProSeTargetAuthentication: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMProSeTargetAuthentication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMProSeTargetAuthentication: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMProSeTargetAuthentication: $.ASN1Decoder<UDMProSeTargetAuthentication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMProSeTargetAuthentication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMProSeTargetAuthentication (el: _Element): UDMProSeTargetAuthentication {
    if (!_cached_decoder_for_UDMProSeTargetAuthentication) { _cached_decoder_for_UDMProSeTargetAuthentication = function (el: _Element): UDMProSeTargetAuthentication {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("UDMProSeTargetAuthentication contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "servingNetworkName";
    sequence[1].name = "relayServiceCode";
    sequence[2].name = "authenticationType";
    sequence[3].name = "sUPI";
    let servingNetworkName!: UTF8String;
    let relayServiceCode!: INTEGER;
    let authenticationType!: PrimaryAuthenticationType;
    let sUPI!: SUPI;
    servingNetworkName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[0]);
    relayServiceCode = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    authenticationType = $._decode_implicit<PrimaryAuthenticationType>(() => _decode_PrimaryAuthenticationType)(sequence[2]);
    sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(sequence[3]);
    return new UDMProSeTargetAuthentication(
        servingNetworkName,
        relayServiceCode,
        authenticationType,
        sUPI,

    );
}; }
    return _cached_decoder_for_UDMProSeTargetAuthentication(el);
}

let _cached_encoder_for_UDMProSeTargetAuthentication: $.ASN1Encoder<UDMProSeTargetAuthentication> | null = null;

/**
 * @summary Encodes a(n) UDMProSeTargetAuthentication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMProSeTargetAuthentication, encoded as an ASN.1 Element.
 */
export
function _encode_UDMProSeTargetAuthentication (value: UDMProSeTargetAuthentication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMProSeTargetAuthentication) { _cached_encoder_for_UDMProSeTargetAuthentication = function (value: UDMProSeTargetAuthentication, elGetter: $.ASN1Encoder<UDMProSeTargetAuthentication>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.servingNetworkName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.relayServiceCode, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PrimaryAuthenticationType, $.BER)(value.authenticationType, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_SUPI, $.BER)(value.sUPI, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UDMProSeTargetAuthentication(value, elGetter);
}


/* eslint-enable */

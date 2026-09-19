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
import { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
// export { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
import { PTCRegistrationRequest, _enum_for_PTCRegistrationRequest, PTCRegistrationRequest_register /* IMPORTED_LONG_ENUMERATION_ITEM */, register /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCRegistrationRequest_reRegister /* IMPORTED_LONG_ENUMERATION_ITEM */, reRegister /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCRegistrationRequest_deRegister /* IMPORTED_LONG_ENUMERATION_ITEM */, deRegister /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCRegistrationRequest, _encode_PTCRegistrationRequest } from "../TS33128Payloads/PTCRegistrationRequest.ta.mjs";
// export { PTCRegistrationRequest, _enum_for_PTCRegistrationRequest, PTCRegistrationRequest_register /* IMPORTED_LONG_ENUMERATION_ITEM */, register /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCRegistrationRequest_reRegister /* IMPORTED_LONG_ENUMERATION_ITEM */, reRegister /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCRegistrationRequest_deRegister /* IMPORTED_LONG_ENUMERATION_ITEM */, deRegister /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCRegistrationRequest, _encode_PTCRegistrationRequest } from "../TS33128Payloads/PTCRegistrationRequest.ta.mjs";
import { PTCRegistrationOutcome, _enum_for_PTCRegistrationOutcome, PTCRegistrationOutcome_success /* IMPORTED_LONG_ENUMERATION_ITEM */, success /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCRegistrationOutcome_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCRegistrationOutcome, _encode_PTCRegistrationOutcome } from "../TS33128Payloads/PTCRegistrationOutcome.ta.mjs";
// export { PTCRegistrationOutcome, _enum_for_PTCRegistrationOutcome, PTCRegistrationOutcome_success /* IMPORTED_LONG_ENUMERATION_ITEM */, success /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCRegistrationOutcome_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCRegistrationOutcome, _encode_PTCRegistrationOutcome } from "../TS33128Payloads/PTCRegistrationOutcome.ta.mjs";


/**
 * @summary PTCRegistration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCRegistration ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCServerURI                  [2] UTF8String,
 *     pTCRegistrationRequest        [3] PTCRegistrationRequest,
 *     pTCRegistrationOutcome        [4] PTCRegistrationOutcome
 * }
 * ```
 * 
 * @class
 */
export
class PTCRegistration {
    constructor (
        /**
         * @summary `pTCTargetInformation`.
         * @public
         * @readonly
         */
        readonly pTCTargetInformation: PTCTargetInformation,
        /**
         * @summary `pTCServerURI`.
         * @public
         * @readonly
         */
        readonly pTCServerURI: UTF8String,
        /**
         * @summary `pTCRegistrationRequest`.
         * @public
         * @readonly
         */
        readonly pTCRegistrationRequest: PTCRegistrationRequest,
        /**
         * @summary `pTCRegistrationOutcome`.
         * @public
         * @readonly
         */
        readonly pTCRegistrationOutcome: PTCRegistrationOutcome
    ) {}

    /**
     * @summary Restructures an object into a PTCRegistration
     * @description
     * 
     * This takes an `object` and converts it to a `PTCRegistration`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCRegistration`.
     * @returns {PTCRegistration}
     */
    public static _from_object (_o: { [_K in keyof (PTCRegistration)]: (PTCRegistration)[_K] }): PTCRegistration {
        return new PTCRegistration(_o.pTCTargetInformation, _o.pTCServerURI, _o.pTCRegistrationRequest, _o.pTCRegistrationOutcome);
    }

        /**
         * @summary The enum used as the type of the component `pTCRegistrationRequest`
         * @public
         * @static
         */

    public static _enum_for_pTCRegistrationRequest = _enum_for_PTCRegistrationRequest;        /**
         * @summary The enum used as the type of the component `pTCRegistrationOutcome`
         * @public
         * @static
         */

    public static _enum_for_pTCRegistrationOutcome = _enum_for_PTCRegistrationOutcome;
}

/**
 * @summary The Leading Root Component Types of PTCRegistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCRegistration: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCServerURI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCRegistrationRequest", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pTCRegistrationOutcome", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of PTCRegistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCRegistration: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCRegistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCRegistration: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCRegistration: $.ASN1Decoder<PTCRegistration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCRegistration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCRegistration (el: _Element): PTCRegistration {
    if (!_cached_decoder_for_PTCRegistration) { _cached_decoder_for_PTCRegistration = function (el: _Element): PTCRegistration {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("PTCRegistration contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pTCTargetInformation";
    sequence[1].name = "pTCServerURI";
    sequence[2].name = "pTCRegistrationRequest";
    sequence[3].name = "pTCRegistrationOutcome";
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCServerURI!: UTF8String;
    let pTCRegistrationRequest!: PTCRegistrationRequest;
    let pTCRegistrationOutcome!: PTCRegistrationOutcome;
    pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(sequence[0]);
    pTCServerURI = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[1]);
    pTCRegistrationRequest = $._decode_implicit<PTCRegistrationRequest>(() => _decode_PTCRegistrationRequest)(sequence[2]);
    pTCRegistrationOutcome = $._decode_implicit<PTCRegistrationOutcome>(() => _decode_PTCRegistrationOutcome)(sequence[3]);
    return new PTCRegistration(
        pTCTargetInformation,
        pTCServerURI,
        pTCRegistrationRequest,
        pTCRegistrationOutcome,

    );
}; }
    return _cached_decoder_for_PTCRegistration(el);
}

let _cached_encoder_for_PTCRegistration: $.ASN1Encoder<PTCRegistration> | null = null;

/**
 * @summary Encodes a(n) PTCRegistration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCRegistration, encoded as an ASN.1 Element.
 */
export
function _encode_PTCRegistration (value: PTCRegistration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCRegistration) { _cached_encoder_for_PTCRegistration = function (value: PTCRegistration, elGetter: $.ASN1Encoder<PTCRegistration>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.pTCServerURI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PTCRegistrationRequest, $.BER)(value.pTCRegistrationRequest, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PTCRegistrationOutcome, $.BER)(value.pTCRegistrationOutcome, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCRegistration(value, elGetter);
}


/* eslint-enable */

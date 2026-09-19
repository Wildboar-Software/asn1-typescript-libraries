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
import { STIRSHAKENOriginator, _decode_STIRSHAKENOriginator, _encode_STIRSHAKENOriginator } from "../TS33128Payloads/STIRSHAKENOriginator.ta.mjs";
// export { STIRSHAKENOriginator, _decode_STIRSHAKENOriginator, _encode_STIRSHAKENOriginator } from "../TS33128Payloads/STIRSHAKENOriginator.ta.mjs";
import { STIRSHAKENDestinations, _decode_STIRSHAKENDestinations, _encode_STIRSHAKENDestinations } from "../TS33128Payloads/STIRSHAKENDestinations.ta.mjs";
// export { STIRSHAKENDestinations, _decode_STIRSHAKENDestinations, _encode_STIRSHAKENDestinations } from "../TS33128Payloads/STIRSHAKENDestinations.ta.mjs";
import { Attestation, _enum_for_Attestation, Attestation_attestationA /* IMPORTED_LONG_ENUMERATION_ITEM */, attestationA /* IMPORTED_SHORT_ENUMERATION_ITEM */, Attestation_attestationB /* IMPORTED_LONG_ENUMERATION_ITEM */, attestationB /* IMPORTED_SHORT_ENUMERATION_ITEM */, Attestation_attestationC /* IMPORTED_LONG_ENUMERATION_ITEM */, attestationC /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Attestation, _encode_Attestation } from "../TS33128Payloads/Attestation.ta.mjs";
// export { Attestation, _enum_for_Attestation, Attestation_attestationA /* IMPORTED_LONG_ENUMERATION_ITEM */, attestationA /* IMPORTED_SHORT_ENUMERATION_ITEM */, Attestation_attestationB /* IMPORTED_LONG_ENUMERATION_ITEM */, attestationB /* IMPORTED_SHORT_ENUMERATION_ITEM */, Attestation_attestationC /* IMPORTED_LONG_ENUMERATION_ITEM */, attestationC /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Attestation, _encode_Attestation } from "../TS33128Payloads/Attestation.ta.mjs";
import { STIRSHAKENDestination, _decode_STIRSHAKENDestination, _encode_STIRSHAKENDestination } from "../TS33128Payloads/STIRSHAKENDestination.ta.mjs";
// export { STIRSHAKENDestination, _decode_STIRSHAKENDestination, _encode_STIRSHAKENDestination } from "../TS33128Payloads/STIRSHAKENDestination.ta.mjs";


/**
 * @summary PASSporTPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PASSporTPayload ::= SEQUENCE
 * {
 *     issuedAtTime    [1] GeneralizedTime,
 *     originator      [2] STIRSHAKENOriginator,
 *     destination     [3] STIRSHAKENDestinations,
 *     attestation     [4] Attestation,
 *     origId          [5] UTF8String,
 *     diversion       [6] STIRSHAKENDestination
 * }
 * ```
 * 
 * @class
 */
export
class PASSporTPayload {
    constructor (
        /**
         * @summary `issuedAtTime`.
         * @public
         * @readonly
         */
        readonly issuedAtTime: GeneralizedTime,
        /**
         * @summary `originator`.
         * @public
         * @readonly
         */
        readonly originator: STIRSHAKENOriginator,
        /**
         * @summary `destination`.
         * @public
         * @readonly
         */
        readonly destination: STIRSHAKENDestinations,
        /**
         * @summary `attestation`.
         * @public
         * @readonly
         */
        readonly attestation: Attestation,
        /**
         * @summary `origId`.
         * @public
         * @readonly
         */
        readonly origId: UTF8String,
        /**
         * @summary `diversion`.
         * @public
         * @readonly
         */
        readonly diversion: STIRSHAKENDestination
    ) {}

    /**
     * @summary Restructures an object into a PASSporTPayload
     * @description
     * 
     * This takes an `object` and converts it to a `PASSporTPayload`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PASSporTPayload`.
     * @returns {PASSporTPayload}
     */
    public static _from_object (_o: { [_K in keyof (PASSporTPayload)]: (PASSporTPayload)[_K] }): PASSporTPayload {
        return new PASSporTPayload(_o.issuedAtTime, _o.originator, _o.destination, _o.attestation, _o.origId, _o.diversion);
    }

        /**
         * @summary The enum used as the type of the component `attestation`
         * @public
         * @static
         */

    public static _enum_for_attestation = _enum_for_Attestation;
}

/**
 * @summary The Leading Root Component Types of PASSporTPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PASSporTPayload: $.ComponentSpec[] = [
    new $.ComponentSpec("issuedAtTime", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("originator", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("destination", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("attestation", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("origId", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("diversion", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of PASSporTPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PASSporTPayload: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PASSporTPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PASSporTPayload: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PASSporTPayload: $.ASN1Decoder<PASSporTPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PASSporTPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PASSporTPayload (el: _Element): PASSporTPayload {
    if (!_cached_decoder_for_PASSporTPayload) { _cached_decoder_for_PASSporTPayload = function (el: _Element): PASSporTPayload {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("PASSporTPayload contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "issuedAtTime";
    sequence[1].name = "originator";
    sequence[2].name = "destination";
    sequence[3].name = "attestation";
    sequence[4].name = "origId";
    sequence[5].name = "diversion";
    let issuedAtTime!: GeneralizedTime;
    let originator!: STIRSHAKENOriginator;
    let destination!: STIRSHAKENDestinations;
    let attestation!: Attestation;
    let origId!: UTF8String;
    let diversion!: STIRSHAKENDestination;
    issuedAtTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(sequence[0]);
    originator = $._decode_explicit<STIRSHAKENOriginator>(() => _decode_STIRSHAKENOriginator)(sequence[1]);
    destination = $._decode_implicit<STIRSHAKENDestinations>(() => _decode_STIRSHAKENDestinations)(sequence[2]);
    attestation = $._decode_implicit<Attestation>(() => _decode_Attestation)(sequence[3]);
    origId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[4]);
    diversion = $._decode_explicit<STIRSHAKENDestination>(() => _decode_STIRSHAKENDestination)(sequence[5]);
    return new PASSporTPayload(
        issuedAtTime,
        originator,
        destination,
        attestation,
        origId,
        diversion,

    );
}; }
    return _cached_decoder_for_PASSporTPayload(el);
}

let _cached_encoder_for_PASSporTPayload: $.ASN1Encoder<PASSporTPayload> | null = null;

/**
 * @summary Encodes a(n) PASSporTPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PASSporTPayload, encoded as an ASN.1 Element.
 */
export
function _encode_PASSporTPayload (value: PASSporTPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PASSporTPayload) { _cached_encoder_for_PASSporTPayload = function (value: PASSporTPayload, elGetter: $.ASN1Encoder<PASSporTPayload>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeGeneralizedTime, $.BER)(value.issuedAtTime, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_STIRSHAKENOriginator, $.BER)(value.originator, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_STIRSHAKENDestinations, $.BER)(value.destination, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Attestation, $.BER)(value.attestation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.origId, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 6, () => _encode_STIRSHAKENDestination, $.BER)(value.diversion, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PASSporTPayload(value, elGetter);
}


/* eslint-enable */

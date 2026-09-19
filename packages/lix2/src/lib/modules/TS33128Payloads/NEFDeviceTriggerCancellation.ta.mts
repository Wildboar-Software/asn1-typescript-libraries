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
import { TriggerID, _decode_TriggerID, _encode_TriggerID } from "../TS33128Payloads/TriggerID.ta.mjs";
// export { TriggerID, _decode_TriggerID, _encode_TriggerID } from "../TS33128Payloads/TriggerID.ta.mjs";


/**
 * @summary NEFDeviceTriggerCancellation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFDeviceTriggerCancellation ::= SEQUENCE
 * {
 *     sUPI                  [1] SUPI,
 *     gPSI                  [2] GPSI,
 *     triggerId             [3] TriggerID
 * }
 * ```
 * 
 * @class
 */
export
class NEFDeviceTriggerCancellation {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: GPSI,
        /**
         * @summary `triggerId`.
         * @public
         * @readonly
         */
        readonly triggerId: TriggerID
    ) {}

    /**
     * @summary Restructures an object into a NEFDeviceTriggerCancellation
     * @description
     * 
     * This takes an `object` and converts it to a `NEFDeviceTriggerCancellation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEFDeviceTriggerCancellation`.
     * @returns {NEFDeviceTriggerCancellation}
     */
    public static _from_object (_o: { [_K in keyof (NEFDeviceTriggerCancellation)]: (NEFDeviceTriggerCancellation)[_K] }): NEFDeviceTriggerCancellation {
        return new NEFDeviceTriggerCancellation(_o.sUPI, _o.gPSI, _o.triggerId);
    }


}

/**
 * @summary The Leading Root Component Types of NEFDeviceTriggerCancellation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEFDeviceTriggerCancellation: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("triggerId", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of NEFDeviceTriggerCancellation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEFDeviceTriggerCancellation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEFDeviceTriggerCancellation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEFDeviceTriggerCancellation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEFDeviceTriggerCancellation: $.ASN1Decoder<NEFDeviceTriggerCancellation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEFDeviceTriggerCancellation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEFDeviceTriggerCancellation (el: _Element): NEFDeviceTriggerCancellation {
    if (!_cached_decoder_for_NEFDeviceTriggerCancellation) { _cached_decoder_for_NEFDeviceTriggerCancellation = function (el: _Element): NEFDeviceTriggerCancellation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("NEFDeviceTriggerCancellation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sUPI";
    sequence[1].name = "gPSI";
    sequence[2].name = "triggerId";
    let sUPI!: SUPI;
    let gPSI!: GPSI;
    let triggerId!: TriggerID;
    sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(sequence[0]);
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[1]);
    triggerId = $._decode_implicit<TriggerID>(() => _decode_TriggerID)(sequence[2]);
    return new NEFDeviceTriggerCancellation(
        sUPI,
        gPSI,
        triggerId,

    );
}; }
    return _cached_decoder_for_NEFDeviceTriggerCancellation(el);
}

let _cached_encoder_for_NEFDeviceTriggerCancellation: $.ASN1Encoder<NEFDeviceTriggerCancellation> | null = null;

/**
 * @summary Encodes a(n) NEFDeviceTriggerCancellation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFDeviceTriggerCancellation, encoded as an ASN.1 Element.
 */
export
function _encode_NEFDeviceTriggerCancellation (value: NEFDeviceTriggerCancellation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEFDeviceTriggerCancellation) { _cached_encoder_for_NEFDeviceTriggerCancellation = function (value: NEFDeviceTriggerCancellation, elGetter: $.ASN1Encoder<NEFDeviceTriggerCancellation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_TriggerID, $.BER)(value.triggerId, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NEFDeviceTriggerCancellation(value, elGetter);
}


/* eslint-enable */

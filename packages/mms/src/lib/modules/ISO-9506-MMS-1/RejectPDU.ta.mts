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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
import { RejectPDU_rejectReason, _decode_RejectPDU_rejectReason, _encode_RejectPDU_rejectReason } from "../ISO-9506-MMS-1/RejectPDU-rejectReason.ta.mjs";
// export { RejectPDU_rejectReason, _decode_RejectPDU_rejectReason, _encode_RejectPDU_rejectReason } from "../ISO-9506-MMS-1/RejectPDU-rejectReason.ta.mjs";


/**
 * @summary RejectPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU ::= SEQUENCE {
 *    originalInvokeID       [0] IMPLICIT Unsigned32 OPTIONAL,
 *    -- Deviation from ISO 9506: This was made optional so that
 *    -- if implicitly encoded in a tag shared with a NULL value,
 *    -- the empty sequence {} could produce the same encoding
 *    -- when using BER / CER / DER.
 *    rejectReason           CHOICE {
 *         confirmed-requestPDU   [1] IMPLICIT INTEGER {
 *             other                         (0),
 *             unrecognized-service          (1),
 *             unrecognized-modifier         (2),
 *             invalid-invokeID              (3),
 *             invalid-argument              (4),
 *             invalid-modifier              (5),
 *             max-serv-outstanding-exceeded (6),
 *                                     -- Value 7 reserved for further definition
 *             max-recursion-exceeded        (8),
 *             value-out-of-range            (9)
 *             } (0..9),
 *         confirmed-responsePDU  [2] IMPLICIT INTEGER {
 *             other                         (0),
 *             unrecognized-service          (1),
 *             invalid-invokeID              (2),
 *             invalid-result                (3),
 *                                     -- Value 4 reserved for further definition
 *             max-recursion-exceeded        (5),
 *             value-out-of-range            (6)
 *             } (0..6),
 *         confirmed-errorPDU     [3] IMPLICIT INTEGER {
 *             other                         (0),
 *             unrecognized-service          (1),
 *             invalid-invokeID              (2),
 *             invalid-serviceError          (3),
 *             value-out-of-range            (4)
 *             } (0..4),
 *         unconfirmedPDU         [4] IMPLICIT INTEGER {
 *             other                         (0),
 *             unrecognized-service          (1),
 *             invalid-argument              (2),
 *             max-recursion-exceeded        (3),
 *             value-out-of-range            (4)
 *             } (0..4),
 *         pdu-error              [5] IMPLICIT INTEGER {
 *             unknown-pdu-type              (0),
 *             invalid-pdu                   (1),
 *             illegal-acse-mapping          (2)
 *             },
 *         cancel-requestPDU      [6] IMPLICIT INTEGER {
 *             other                         (0),
 *             invalid-invokeID              (1)
 *             } (0..1),
 *         cancel-responsePDU     [7] IMPLICIT INTEGER {
 *             other                         (0),
 *             invalid-invokeID              (1)
 *             } (0..1),
 *         cancel-errorPDU        [8] IMPLICIT INTEGER {
 *             other                         (0),
 *             invalid-invokeID              (1),
 *             invalid-serviceError          (2),
 *             value-out-of-range            (3)
 *             } (0..3),
 *         cancel-requestPDU      [6] IMPLICIT NULL,
 *         cancel-responsePDU     [7] IMPLICIT NULL,
 *         cancel-errorPDU        [8] IMPLICIT NULL,
 *         conclude-requestPDU    [9] IMPLICIT INTEGER {
 *             other                         (0),
 *             invalid-argument              (1)
 *             } (0..1),
 *         conclude-responsePDU   [10] IMPLICIT INTEGER {
 *             other                         (0),
 *             invalid-result                (1)
 *             } (0..1),
 *         conclude-errorPDU      [11] IMPLICIT INTEGER {
 *             other                         (0),
 *             invalid-serviceError          (1),
 *             value-out-of-range            (2)
 *             } (0..2)
 *         }
 * }
 * ```
 * 
 * @class
 */
export
class RejectPDU {
    constructor (
        /**
         * @summary `originalInvokeID`.
         * @public
         * @readonly
         */
        readonly originalInvokeID: OPTIONAL<Unsigned32>,
        /**
         * @summary `rejectReason`.
         * @public
         * @readonly
         */
        readonly rejectReason: RejectPDU_rejectReason
    ) {}

    /**
     * @summary Restructures an object into a RejectPDU
     * @description
     * 
     * This takes an `object` and converts it to a `RejectPDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RejectPDU`.
     * @returns {RejectPDU}
     */
    public static _from_object (_o: { [_K in keyof (RejectPDU)]: (RejectPDU)[_K] }): RejectPDU {
        return new RejectPDU(_o.originalInvokeID, _o.rejectReason);
    }


}

/**
 * @summary The Leading Root Component Types of RejectPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RejectPDU: $.ComponentSpec[] = [
    new $.ComponentSpec("originalInvokeID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("rejectReason", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RejectPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RejectPDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RejectPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RejectPDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RejectPDU: $.ASN1Decoder<RejectPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RejectPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RejectPDU (el: _Element): RejectPDU {
    if (!_cached_decoder_for_RejectPDU) { _cached_decoder_for_RejectPDU = function (el: _Element): RejectPDU {
    let originalInvokeID: OPTIONAL<Unsigned32>;
    let rejectReason!: RejectPDU_rejectReason;
    const callbacks: $.DecodingMap = {
        "originalInvokeID": (_el: _Element): void => { originalInvokeID = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); },
        "rejectReason": (_el: _Element): void => { rejectReason = _decode_RejectPDU_rejectReason(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RejectPDU,
        _extension_additions_list_spec_for_RejectPDU,
        _root_component_type_list_2_spec_for_RejectPDU,
        undefined,
    );
    return new RejectPDU(
        originalInvokeID,
        rejectReason
    );
}; }
    return _cached_decoder_for_RejectPDU(el);
}

let _cached_encoder_for_RejectPDU: $.ASN1Encoder<RejectPDU> | null = null;

/**
 * @summary Encodes a(n) RejectPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RejectPDU, encoded as an ASN.1 Element.
 */
export
function _encode_RejectPDU (value: RejectPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RejectPDU) { _cached_encoder_for_RejectPDU = function (value: RejectPDU, elGetter: $.ASN1Encoder<RejectPDU>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.originalInvokeID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Unsigned32, $.BER)(value.originalInvokeID, $.BER)),
            /* REQUIRED   */ _encode_RejectPDU_rejectReason(value.rejectReason, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RejectPDU(value, elGetter);
}


/* eslint-enable */

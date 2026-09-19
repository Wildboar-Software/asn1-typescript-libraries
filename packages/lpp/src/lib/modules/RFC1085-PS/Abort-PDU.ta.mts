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
import { SessionConnectionIdentifier, _decode_SessionConnectionIdentifier, _encode_SessionConnectionIdentifier } from "../RFC1085-PS/SessionConnectionIdentifier.ta.mjs";
// export { SessionConnectionIdentifier, _decode_SessionConnectionIdentifier, _encode_SessionConnectionIdentifier } from "../RFC1085-PS/SessionConnectionIdentifier.ta.mjs";
import { UserData_PDU, _decode_UserData_PDU, _encode_UserData_PDU } from "../RFC1085-PS/UserData-PDU.ta.mjs";
// export { UserData_PDU, _decode_UserData_PDU, _encode_UserData_PDU } from "../RFC1085-PS/UserData-PDU.ta.mjs";
import { Abort_reason, Abort_reason_unspecified /* IMPORTED_LONG_NAMED_INTEGER */, unspecified /* IMPORTED_SHORT_NAMED_INTEGER */, Abort_reason_unrecognized_ppdu /* IMPORTED_LONG_NAMED_INTEGER */, unrecognized_ppdu /* IMPORTED_SHORT_NAMED_INTEGER */, Abort_reason_unexpected_ppdu /* IMPORTED_LONG_NAMED_INTEGER */, unexpected_ppdu /* IMPORTED_SHORT_NAMED_INTEGER */, Abort_reason_unrecognized_ppdu_parameter /* IMPORTED_LONG_NAMED_INTEGER */, unrecognized_ppdu_parameter /* IMPORTED_SHORT_NAMED_INTEGER */, Abort_reason_invalid_ppdu_parameter /* IMPORTED_LONG_NAMED_INTEGER */, invalid_ppdu_parameter /* IMPORTED_SHORT_NAMED_INTEGER */, Abort_reason_reference_mismatch /* IMPORTED_LONG_NAMED_INTEGER */, reference_mismatch /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Abort_reason, _encode_Abort_reason } from "../RFC1085-PS/Abort-reason.ta.mjs";
// export { Abort_reason, Abort_reason_unspecified /* IMPORTED_LONG_NAMED_INTEGER */, unspecified /* IMPORTED_SHORT_NAMED_INTEGER */, Abort_reason_unrecognized_ppdu /* IMPORTED_LONG_NAMED_INTEGER */, unrecognized_ppdu /* IMPORTED_SHORT_NAMED_INTEGER */, Abort_reason_unexpected_ppdu /* IMPORTED_LONG_NAMED_INTEGER */, unexpected_ppdu /* IMPORTED_SHORT_NAMED_INTEGER */, Abort_reason_unrecognized_ppdu_parameter /* IMPORTED_LONG_NAMED_INTEGER */, unrecognized_ppdu_parameter /* IMPORTED_SHORT_NAMED_INTEGER */, Abort_reason_invalid_ppdu_parameter /* IMPORTED_LONG_NAMED_INTEGER */, invalid_ppdu_parameter /* IMPORTED_SHORT_NAMED_INTEGER */, Abort_reason_reference_mismatch /* IMPORTED_LONG_NAMED_INTEGER */, reference_mismatch /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Abort_reason, _encode_Abort_reason } from "../RFC1085-PS/Abort-reason.ta.mjs";


/**
 * @summary Abort_PDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Abort-PDU ::= [4] SEQUENCE {
 *     -- present only in the udp-based service
 *     reference   SessionConnectionIdentifier OPTIONAL,
 *     -- MAY BE present on user-initiated abort
 *     user-data   UserData-PDU OPTIONAL,
 *     -- ALWAYS present on provider-initiated abort
 *     reason      [1] IMPLICIT Abort-reason OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Abort_PDU {
    constructor (
        /**
         * @summary `reference`.
         * @public
         * @readonly
         */
        readonly reference: OPTIONAL<SessionConnectionIdentifier>,
        /**
         * @summary `user_data`.
         * @public
         * @readonly
         */
        readonly user_data: OPTIONAL<UserData_PDU>,
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: OPTIONAL<Abort_reason>
    ) {}

    /**
     * @summary Restructures an object into a Abort_PDU
     * @description
     * 
     * This takes an `object` and converts it to a `Abort_PDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Abort_PDU`.
     * @returns {Abort_PDU}
     */
    public static _from_object (_o: { [_K in keyof (Abort_PDU)]: (Abort_PDU)[_K] }): Abort_PDU {
        return new Abort_PDU(_o.reference, _o.user_data, _o.reason);
    }


}

/**
 * @summary The Leading Root Component Types of Abort_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Abort_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("reference", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("user-data", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("reason", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Abort_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Abort_PDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Abort_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Abort_PDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Abort_PDU: $.ASN1Decoder<Abort_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Abort_PDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Abort_PDU (el: _Element): Abort_PDU {
    if (!_cached_decoder_for_Abort_PDU) { _cached_decoder_for_Abort_PDU = $._decode_implicit<Abort_PDU>(() => function (el: _Element): Abort_PDU {
    let reference: OPTIONAL<SessionConnectionIdentifier>;
    let user_data: OPTIONAL<UserData_PDU>;
    let reason: OPTIONAL<Abort_reason>;
    const callbacks: $.DecodingMap = {
        "reference": (_el: _Element): void => { reference = _decode_SessionConnectionIdentifier(_el); },
        "user-data": (_el: _Element): void => { user_data = _decode_UserData_PDU(_el); },
        "reason": (_el: _Element): void => { reason = $._decode_implicit<Abort_reason>(() => _decode_Abort_reason)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Abort_PDU,
        _extension_additions_list_spec_for_Abort_PDU,
        _root_component_type_list_2_spec_for_Abort_PDU,
        undefined,
    );
    return new Abort_PDU(
        reference,
        user_data,
        reason
    );
}); }
    return _cached_decoder_for_Abort_PDU(el);
}

let _cached_encoder_for_Abort_PDU: $.ASN1Encoder<Abort_PDU> | null = null;

/**
 * @summary Encodes a(n) Abort_PDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Abort_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_Abort_PDU (value: Abort_PDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Abort_PDU) { _cached_encoder_for_Abort_PDU = $._encode_implicit(_TagClass.context, 4, () => function (value: Abort_PDU, elGetter: $.ASN1Encoder<Abort_PDU>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.reference === undefined) ? undefined : _encode_SessionConnectionIdentifier(value.reference, $.BER)),
            /* IF_ABSENT  */ ((value.user_data === undefined) ? undefined : _encode_UserData_PDU(value.user_data, $.BER)),
            /* IF_ABSENT  */ ((value.reason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Abort_reason, $.BER)(value.reason, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_Abort_PDU(value, elGetter);
}


/* eslint-enable */

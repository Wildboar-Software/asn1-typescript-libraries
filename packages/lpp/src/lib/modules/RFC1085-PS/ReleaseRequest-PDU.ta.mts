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


/**
 * @summary ReleaseRequest_PDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReleaseRequest-PDU ::= [2] IMPLICIT SEQUENCE {
 *     -- present only in the udp-based service
 *     reference   SessionConnectionIdentifier OPTIONAL,
 *     user-data   UserData-PDU
 * }
 * ```
 * 
 * @class
 */
export
class ReleaseRequest_PDU {
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
        readonly user_data: UserData_PDU
    ) {}

    /**
     * @summary Restructures an object into a ReleaseRequest_PDU
     * @description
     * 
     * This takes an `object` and converts it to a `ReleaseRequest_PDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReleaseRequest_PDU`.
     * @returns {ReleaseRequest_PDU}
     */
    public static _from_object (_o: { [_K in keyof (ReleaseRequest_PDU)]: (ReleaseRequest_PDU)[_K] }): ReleaseRequest_PDU {
        return new ReleaseRequest_PDU(_o.reference, _o.user_data);
    }


}

/**
 * @summary The Leading Root Component Types of ReleaseRequest_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReleaseRequest_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("reference", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("user-data", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ReleaseRequest_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReleaseRequest_PDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReleaseRequest_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReleaseRequest_PDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReleaseRequest_PDU: $.ASN1Decoder<ReleaseRequest_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseRequest_PDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReleaseRequest_PDU (el: _Element): ReleaseRequest_PDU {
    if (!_cached_decoder_for_ReleaseRequest_PDU) { _cached_decoder_for_ReleaseRequest_PDU = $._decode_implicit<ReleaseRequest_PDU>(() => function (el: _Element): ReleaseRequest_PDU {
    let reference: OPTIONAL<SessionConnectionIdentifier>;
    let user_data!: UserData_PDU;
    const callbacks: $.DecodingMap = {
        "reference": (_el: _Element): void => { reference = _decode_SessionConnectionIdentifier(_el); },
        "user-data": (_el: _Element): void => { user_data = _decode_UserData_PDU(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReleaseRequest_PDU,
        _extension_additions_list_spec_for_ReleaseRequest_PDU,
        _root_component_type_list_2_spec_for_ReleaseRequest_PDU,
        undefined,
    );
    return new ReleaseRequest_PDU(
        reference,
        user_data
    );
}); }
    return _cached_decoder_for_ReleaseRequest_PDU(el);
}

let _cached_encoder_for_ReleaseRequest_PDU: $.ASN1Encoder<ReleaseRequest_PDU> | null = null;

/**
 * @summary Encodes a(n) ReleaseRequest_PDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseRequest_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_ReleaseRequest_PDU (value: ReleaseRequest_PDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReleaseRequest_PDU) { _cached_encoder_for_ReleaseRequest_PDU = $._encode_implicit(_TagClass.context, 2, () => function (value: ReleaseRequest_PDU, elGetter: $.ASN1Encoder<ReleaseRequest_PDU>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.reference === undefined) ? undefined : _encode_SessionConnectionIdentifier(value.reference, $.BER)),
            /* REQUIRED   */ _encode_UserData_PDU(value.user_data, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ReleaseRequest_PDU(value, elGetter);
}


/* eslint-enable */

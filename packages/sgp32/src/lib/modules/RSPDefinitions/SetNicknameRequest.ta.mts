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
import { Iccid, _decode_Iccid, _encode_Iccid } from "../RSPDefinitions/Iccid.ta.mjs";
// export { Iccid, _decode_Iccid, _encode_Iccid } from "../RSPDefinitions/Iccid.ta.mjs";


/**
 * @summary SetNicknameRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetNicknameRequest ::= [41] SEQUENCE { -- Tag 'BF29'
 *     iccid Iccid,
 *     profileNickname [16] UTF8String (SIZE(0..64))
 * }
 * ```
 * 
 * @class
 */
export
class SetNicknameRequest {
    constructor (
        /**
         * @summary `iccid`.
         * @public
         * @readonly
         */
        readonly iccid: Iccid,
        /**
         * @summary `profileNickname`.
         * @public
         * @readonly
         */
        readonly profileNickname: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a SetNicknameRequest
     * @description
     * 
     * This takes an `object` and converts it to a `SetNicknameRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetNicknameRequest`.
     * @returns {SetNicknameRequest}
     */
    public static _from_object (_o: { [_K in keyof (SetNicknameRequest)]: (SetNicknameRequest)[_K] }): SetNicknameRequest {
        return new SetNicknameRequest(_o.iccid, _o.profileNickname);
    }


}

/**
 * @summary The Leading Root Component Types of SetNicknameRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetNicknameRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("iccid", false, $.hasTag(_TagClass.application, 26)),
    new $.ComponentSpec("profileNickname", false, $.hasTag(_TagClass.context, 16))
];

/**
 * @summary The Trailing Root Component Types of SetNicknameRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetNicknameRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetNicknameRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetNicknameRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetNicknameRequest: $.ASN1Decoder<SetNicknameRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetNicknameRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetNicknameRequest (el: _Element): SetNicknameRequest {
    if (!_cached_decoder_for_SetNicknameRequest) { _cached_decoder_for_SetNicknameRequest = $._decode_implicit<SetNicknameRequest>(() => function (el: _Element): SetNicknameRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SetNicknameRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iccid";
    sequence[1].name = "profileNickname";
    let iccid!: Iccid;
    let profileNickname!: UTF8String;
    iccid = _decode_Iccid(sequence[0]);
    profileNickname = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[1]);
    return new SetNicknameRequest(
        iccid,
        profileNickname,

    );
}); }
    return _cached_decoder_for_SetNicknameRequest(el);
}

let _cached_encoder_for_SetNicknameRequest: $.ASN1Encoder<SetNicknameRequest> | null = null;

/**
 * @summary Encodes a(n) SetNicknameRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetNicknameRequest, encoded as an ASN.1 Element.
 */
export
function _encode_SetNicknameRequest (value: SetNicknameRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetNicknameRequest) { _cached_encoder_for_SetNicknameRequest = $._encode_implicit(_TagClass.context, 41, () => function (value: SetNicknameRequest, elGetter: $.ASN1Encoder<SetNicknameRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Iccid(value.iccid, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => $._encodeUTF8String, $.BER)(value.profileNickname, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_SetNicknameRequest(value, elGetter);
}


/* eslint-enable */

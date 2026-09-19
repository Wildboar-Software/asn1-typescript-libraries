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
import { FailureCause, _decode_FailureCause, _encode_FailureCause } from "../AIN-Parameters/FailureCause.ta.mjs";
// export { FailureCause, _decode_FailureCause, _encode_FailureCause } from "../AIN-Parameters/FailureCause.ta.mjs";


/**
 * @summary CreateCallRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreateCallRes ::= SEQUENCE {
 *             failureCause FailureCause OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class CreateCallRes {
    constructor (
        /**
         * @summary `failureCause`.
         * @public
         * @readonly
         */
        readonly failureCause: OPTIONAL<FailureCause>
    ) {}

    /**
     * @summary Restructures an object into a CreateCallRes
     * @description
     * 
     * This takes an `object` and converts it to a `CreateCallRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CreateCallRes`.
     * @returns {CreateCallRes}
     */
    public static _from_object (_o: { [_K in keyof (CreateCallRes)]: (CreateCallRes)[_K] }): CreateCallRes {
        return new CreateCallRes(_o.failureCause);
    }


}

/**
 * @summary The Leading Root Component Types of CreateCallRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CreateCallRes: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", true, $.hasTag(_TagClass.context, 32))
];

/**
 * @summary The Trailing Root Component Types of CreateCallRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CreateCallRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CreateCallRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CreateCallRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CreateCallRes: $.ASN1Decoder<CreateCallRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CreateCallRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CreateCallRes (el: _Element): CreateCallRes {
    if (!_cached_decoder_for_CreateCallRes) { _cached_decoder_for_CreateCallRes = function (el: _Element): CreateCallRes {
    let failureCause: OPTIONAL<FailureCause>;
    const callbacks: $.DecodingMap = {
        "failureCause": (_el: _Element): void => { failureCause = _decode_FailureCause(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CreateCallRes,
        _extension_additions_list_spec_for_CreateCallRes,
        _root_component_type_list_2_spec_for_CreateCallRes,
        undefined,
    );
    return new CreateCallRes(
        failureCause
    );
}; }
    return _cached_decoder_for_CreateCallRes(el);
}

let _cached_encoder_for_CreateCallRes: $.ASN1Encoder<CreateCallRes> | null = null;

/**
 * @summary Encodes a(n) CreateCallRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateCallRes, encoded as an ASN.1 Element.
 */
export
function _encode_CreateCallRes (value: CreateCallRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CreateCallRes) { _cached_encoder_for_CreateCallRes = function (value: CreateCallRes, elGetter: $.ASN1Encoder<CreateCallRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.failureCause === undefined) ? undefined : _encode_FailureCause(value.failureCause, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CreateCallRes(value, elGetter);
}


/* eslint-enable */

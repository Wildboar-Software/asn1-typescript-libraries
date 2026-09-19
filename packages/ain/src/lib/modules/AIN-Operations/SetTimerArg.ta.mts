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
import { SSPResponseMessageTimerT1, _decode_SSPResponseMessageTimerT1, _encode_SSPResponseMessageTimerT1 } from "../AIN-Parameters/SSPResponseMessageTimerT1.ta.mjs";
// export { SSPResponseMessageTimerT1, _decode_SSPResponseMessageTimerT1, _encode_SSPResponseMessageTimerT1 } from "../AIN-Parameters/SSPResponseMessageTimerT1.ta.mjs";


/**
 * @summary SetTimerArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetTimerArg ::= SEQUENCE{
 *             sSPResponseMessageTimerT1 SSPResponseMessageTimerT1 OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class SetTimerArg {
    constructor (
        /**
         * @summary `sSPResponseMessageTimerT1`.
         * @public
         * @readonly
         */
        readonly sSPResponseMessageTimerT1: OPTIONAL<SSPResponseMessageTimerT1>
    ) {}

    /**
     * @summary Restructures an object into a SetTimerArg
     * @description
     * 
     * This takes an `object` and converts it to a `SetTimerArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetTimerArg`.
     * @returns {SetTimerArg}
     */
    public static _from_object (_o: { [_K in keyof (SetTimerArg)]: (SetTimerArg)[_K] }): SetTimerArg {
        return new SetTimerArg(_o.sSPResponseMessageTimerT1);
    }


}

/**
 * @summary The Leading Root Component Types of SetTimerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetTimerArg: $.ComponentSpec[] = [
    new $.ComponentSpec("sSPResponseMessageTimerT1", true, $.hasTag(_TagClass.context, 166))
];

/**
 * @summary The Trailing Root Component Types of SetTimerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetTimerArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetTimerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetTimerArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetTimerArg: $.ASN1Decoder<SetTimerArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetTimerArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetTimerArg (el: _Element): SetTimerArg {
    if (!_cached_decoder_for_SetTimerArg) { _cached_decoder_for_SetTimerArg = function (el: _Element): SetTimerArg {
    let sSPResponseMessageTimerT1: OPTIONAL<SSPResponseMessageTimerT1>;
    const callbacks: $.DecodingMap = {
        "sSPResponseMessageTimerT1": (_el: _Element): void => { sSPResponseMessageTimerT1 = _decode_SSPResponseMessageTimerT1(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetTimerArg,
        _extension_additions_list_spec_for_SetTimerArg,
        _root_component_type_list_2_spec_for_SetTimerArg,
        undefined,
    );
    return new SetTimerArg(
        sSPResponseMessageTimerT1
    );
}; }
    return _cached_decoder_for_SetTimerArg(el);
}

let _cached_encoder_for_SetTimerArg: $.ASN1Encoder<SetTimerArg> | null = null;

/**
 * @summary Encodes a(n) SetTimerArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetTimerArg, encoded as an ASN.1 Element.
 */
export
function _encode_SetTimerArg (value: SetTimerArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetTimerArg) { _cached_encoder_for_SetTimerArg = function (value: SetTimerArg, elGetter: $.ASN1Encoder<SetTimerArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sSPResponseMessageTimerT1 === undefined) ? undefined : _encode_SSPResponseMessageTimerT1(value.sSPResponseMessageTimerT1, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SetTimerArg(value, elGetter);
}


/* eslint-enable */
